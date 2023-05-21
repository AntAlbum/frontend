<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item
          url="/home"
          :class="getRoute() === 'home' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Home'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Travel
        </h6>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavItem from "@/components/layout/side/SidenavItem.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Argon Dashboard 2",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavItem,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
