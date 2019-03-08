<template>
  <div class="pr-login">
    <!-- <NavBar/> -->
    <v-layout justify-center>
      <v-flex lg5 md6 sm7>
        <v-card>
          <v-card-title>登录</v-card-title>
          
          <v-card-actions>
            <v-form v-model="valid" style="width:100%">
              <v-text-field
                v-model="username"
                :rules="[rules.required, rules.max]"
                name="input-10-1"
                label="用户名"
              />
              <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                name="input-10-1"
                label="密码"
                hint="最少6个字符"
                @click:append="show = !show"
              />
              <center style="padding:1rem">
                <v-btn :disabled="!valid" @click="submit"><v-icon>mdi-login</v-icon>登录</v-btn>
                <v-btn to="signUp"><v-icon>mdi-account-plus</v-icon>注册</v-btn>
              </center>
            </v-form>
            
          </v-card-actions>
          <!-- <v-alert
          v-if="error"
          :value="true"
          color="warning"
          transition="scale-transition"
        >{{error}}</v-alert> -->
        <div class="error text-lg-center text-md-center text-sm-center text-xs-center">{{error}}</div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
import NavBar from "@/navBar.vue";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      show: false,
      username: "",
      password: "",
      error: "",
      valid: false,
      rules: {
        required: value => !!value || "Required.",
        max: v => v.length <= 20 || "最多20个字符",
        min: v => v.length >= 6 || "最少6个字符"
      }
    };
  },
  methods: {
    submit() {
      let self = this;
      this.$axios
        .post("/user/users/signin", {
          username: self.username,
          password: CryptoJS.MD5(self.password).toString()
        })
        .then(({ status, data }) => {
          if (status === 200) {
            if (data && data.code === 0) {
              location.href = "/";
            } else {
              self.error = data.msg;
            }
          } else {
            self.error = "服务器出错";
          }
        });
    }
  }
};
</script>
<style lang="css" scoped>
</style>
