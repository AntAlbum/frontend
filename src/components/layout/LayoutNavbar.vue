<template>
  <nav
    class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
    :class="this.$store.state.isRTL ? 'top-0 position-sticky z-index-sticky' : ''"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <layout-page-index :currentPage="currentRouteName" textWhite="text-white"></layout-page-index>

      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        ></div>

        <ul class="navbar-nav justify-content-end">
          <li v-if="this.$store.state.userInfo" class="nav-item d-flex align-items-center px-0 nav-link font-weight-bold text-white">
            <span style="margin-right: 10px;"  class="d-sm-inline d-none">{{this.$store.state.userInfo.nickname}}'s album</span>
            <span style="cursor: pointer" @click="logout" class="d-sm-inline d-none">logout</span>
          </li>

          <li v-else class="nav-item d-flex align-items-center">
            <router-link
              :to="{ name: 'signin' }"
              class="px-0 nav-link font-weight-bold text-white"
              
            >
              <span  class="d-sm-inline d-none">Sign In</span>
            </router-link>
          </li>

          
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import LayoutPageIndex from "@/components/layout/LayoutPageIndex.vue";


import { mapActions } from "vuex";


export default {
  name: "LayoutNavbar",
  data() {
    return {
      showMenu: false,
      userInfo: "",
    };
  },
  props: ["textWhite"],
  methods: {
    ...mapActions(["toggleNavbar", "getUserInfo"]),

    toggleSidebar() {
      this.toggleNavbar();
    },

    logout() {
      this.$store.state.userInfo = null;
      sessionStorage.setItem('access_token', null);
      this.$router.push("/");
    },

  },
  components: {
    LayoutPageIndex
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
