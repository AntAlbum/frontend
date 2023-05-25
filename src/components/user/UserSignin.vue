<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <argon-input type="email" placeholder="Email" name="email" size="lg" v-model="user.useremail" />
                    </div>
                    <div class="mb-3">
                      <argon-input type="password" placeholder="Password" name="password" size="lg"  v-model="user.userpwd" />
                    </div>
                    <argon-switch id="rememberMe">Remember me</argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                      >Sign in</argon-button>
                    </div>

                  </form>

                  <div class="mb-2" style="margin-top: 10px;">
                    <a href="http://localhost:9999/oauth2/authorization/google">
                      <img style="width: 350px; height: 60px;" src="@/assets/img/google.png" >
                    </a>
                  </div>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <a
                      href="javascript:;"
                      class="text-success text-gradient font-weight-bold"
                    >Sign up</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
          background-size: cover;"
              >
                <span class="mask bg-gradient-success opacity-6"></span>
                <h3
                  class="mt-5 text-white font-weight-bolder position-relative"
                >"AntAlbum"</h3>
                <p
                  class="text-white position-relative"
                >The place where you realize what's precious is <br> Not in front of the computer <br> It was under the blue sky</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

import ArgonInput from "@/items/ArgonInput.vue";
import ArgonSwitch from "@/items/ArgonSwitch.vue";
import ArgonButton from "@/items/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];


export default {
  name: "UserSignin",
  data() {
    return {
      // isLoginError: false,
      user: {
        useremail: null,
        userpwd: null,
      },
      accessToken: "",
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),

  },
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      // console.log("1. confirm() token >> " + token);
      if (this.isLogin) {
        await this.getUserInfo(token);
        // console.log("4. confirm() userInfo :: ", this.userInfo);
        this.$router.push({ name: "main" });
      }
    },
    movePage() {
      this.$router.push({ name: "join" });
    },
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
