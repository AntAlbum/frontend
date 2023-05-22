<!--
=========================================================
* Vue Argon Dashboard 2 - v3.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-argon-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<template>
  <div
    v-show="this.$store.state.layout === 'landing'"
    class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
  ></div>
  <layout-sidenav
    :custom_class="this.$store.state.mcolor"
    
    v-if="this.$store.state.showSidenav"
  ></layout-sidenav>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- nav -->
    <layout-navbar
      :class="[navClasses]"
      :textWhite="this.$store.state.isAbsolute ? 'text-white opacity-8' : 'text-white'"
      v-if="this.$store.state.showNavbar"
    ></layout-navbar>
    <router-view />
    <layout-footer v-show="this.$store.state.showFooter"></layout-footer>
  </main>
</template>
<script>
import LayoutSidenav from "@/components/layout/LayoutSidenav.vue";
import LayoutNavbar from "@/components/layout/LayoutNavbar.vue";
import LayoutFooter from "@/components/layout/LayoutFooter.vue";

import jwtDecode from "jwt-decode";
import axios from "axios";

import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    LayoutSidenav,
    LayoutNavbar,
    LayoutFooter
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('token');

    console.log(urlParams, accessToken);
    
    // 추출한 액세스 토큰을 세션 스토리지에 저장합니다
    sessionStorage.setItem('access_token', accessToken);
    
    // 데이터를 컴포넌트에 설정합니다
    this.accessToken = accessToken;

    if(this.accessToken) {
      let decodeToken = jwtDecode(this.accessToken);
      console.log(decodeToken);
      let userid = decodeToken.id;
      console.log(userid);

      this.getUser(userid);

    }
  },

  methods: {
    ...mapMutations["UPDATE_USERINFO"],





    async getUser (userid) {
          let username;
          const response = await axios.get(`http://localhost:9999/user/${userid}`);
          username = response.data.nickname;
          console.log(username);

          // this.$store.state.userInfo = username;
          this.$store.commit("UPDATE_USERINFO", username);
          console.log("g하이",this.$store.state.userInfo);
      }
  },

  computed: {
    navClasses() {
      return {
        "position-sticky bg-white left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && !this.$store.state.darkMode,
        "position-sticky bg-default left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && this.$store.state.darkMode,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state.isAbsolute,
        "px-0 mx-4": !this.$store.state.isAbsolute,
      };
    },
  },
};
</script>
