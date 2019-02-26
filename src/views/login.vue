<template>
  <div class="pr-login">
    <!-- <NavBar/> -->
    <v-layout justify-center>
      <v-flex lg5 md12>
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
                :append-icon="show ? 'visibility_off' : 'visibility'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                name="input-10-1"
                label="密码"
                hint="最少6个字符"
                @click:append="show = !show"
              />
              <center>
                <v-btn :disabled="!valid" @click="submit">登录</v-btn>
                <v-btn to="signUp">注册</v-btn>
              </center>
            </v-form>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
import NavBar from "@/navBar.vue";
export default {
  components:{
    NavBar
  },
  data() {
    return {
      show: false,
      username: "",
      password: "",
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
<style lang="css">
</style>
