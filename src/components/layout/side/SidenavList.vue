<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-list-item
          url="/home"
          :class="getRoute() === 'home' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Home'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-list-item>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Travel
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-list-item
          url="/travel/mylist"
          :class="getRoute() === 'travelmylist' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'MyTravel'"
        >
          <template v-slot:icon>
            <i class="ni ni-world text-info text-sm opacity-10"></i>
          </template>
        </sidenav-list-item>
      </li>
      <li class="nav-item">
        <sidenav-list-item
          url="/travel/taggedlist"
          :class="getRoute() === 'traveltaggedlist' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'TaggedTravel'"
        >
          <template v-slot:icon>
            <i class="ni ni-camera-compact text-success text-sm opacity-10"></i>
          </template>
        </sidenav-list-item>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavListItem from "@/components/layout/side/SidenavListItem.vue";

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
    SidenavListItem,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
