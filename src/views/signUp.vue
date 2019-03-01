<template>
  <div class="pr-login">
    <!-- <NavBar/> -->
    <v-layout justify-center>
      <v-flex xs10>
        <v-card>
          <v-card-title class="headline" primary-title>
            <v-spacer></v-spacer>注册
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-actions>
            <v-layout justify-center>
              <v-flex xs10>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="username"
                    :rules="[rules.required, rules.username]"
                    label="用户名"
                    counter
                  />
                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'visibility_off' : 'visibility'"
                    :rules="[rules.required, rules.password]"
                    :type="show ? 'text' : 'password'"
                    label="密码"
                    @click:append="show = !show"
                  />
                  <v-text-field
                    :append-icon="show ? 'visibility_off' : 'visibility'"
                    :rules="[rules.required, rules.password, rules.passwordMatch]"
                    :type="show ? 'text' : 'password'"
                    value
                    name="input-10-1"
                    label="密码"
                    @click:append="show = !show"
                  />
                  <!-- <v-layout justify-center>
                    <v-flex xs8>
                      <v-text-field
                        v-model="email"
                        :rules="[rules.required, rules.email]"
                        label="E-mail"
                      />
                    </v-flex>
                    
                    <v-flex xs2 align-self-center>
                      <v-btn small color="primary">发送验证码</v-btn>
                    </v-flex>
                    <v-spacer></v-spacer>
                  </v-layout>-->
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="E-mail"
                    ref="email"
                  />
                  <v-btn :disabled="!codeOnOff" @click.stop="sendMessge()">发送验证码</v-btn>
                  <div>{{statusMsg}}</div>
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="verifyCode"
                    :rules="[rules.required, rules.verifyCode]"
                    label="验证码"
                    counter
                  />
                  <center>
                    <v-btn :disabled="!valid" @click.stop="signUp()">注册</v-btn>
                    <div class="error">{{ error }}</div>
                  </center>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import NavBar from "@/navBar.vue";
import CryptoJS from "crypto-js";
export default {
  components: { NavBar },
  data() {
    return {
      show: false,
      username: "",
      password: "",
      email: "",
      verifyCode: "",
      codeOnOff: false,
      error: "",
      valid: false,
      statusMsg: "",
      timer: "",
      rules: {
        required: value => !!value || "Required.",
        username: v => v.length <= 20 || "最多20个字符",
        password: v => v.length >= 6 || "最少6个字符",
        passwordMatch: v => {
          return v === this.password || "两次输入密码不一致";
        },
        verifyCode: v => v.length <= 4 || "请输入4位验证码",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (pattern.test(value)) {
            this.codeOnOff = true;
            return true;
          } else {
            this.codeOnOff = false;
            return "Invalid e-mail.";
          }
        }
      }
    };
  },
  methods: {
    sendMessge() {
      let self = this;
      this.$axios
        .post("/user/users/verify", {
          username: this.username,
          email: this.email
        })
        .then(({ status, data }) => {
          if (status === 200 && data && data.code === 0) {
            let count = 120;
            let timer = setInterval(function() {
              self.statusMsg = `验证码已发送,剩余${count--}秒`;
              if (count === 0) {
                clearInterval(timer);
                self.statusMsg = "";
              }
            }, 1000);
          } else {
            self.statusMsg = data.msg;
          }
        });
    },
    signUp() {
      let self = this;
      this.$axios
        .post("/user/users/signup", {
          username: self.username,
          password: CryptoJS.MD5(self.password).toString(),
          verifyCode: self.verifyCode,
          email: self.email
        })
        .then(({ status, data }) => {
          if (status === 200) {
            if (data && data.code === 0) {
              this.$router.push("login");
            } else {
              self.error = data.msg;
            }
          } else {
            self.error = `服务器出错,错误码:${status}`;
          }
          setTimeout(function() {
            self.error = "";
          }, 1500);
        });
    }
  }
};
</script>
<style lang="css" scoped>
.titleMiddle {
  text-align: center;
}
</style>
