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
          :class="getRoute() === 'My Travels' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'My Travels'"
        >
          <template v-slot:icon>
            <i class="ni ni-world text-info text-sm opacity-10"></i>
          </template>
        </sidenav-list-item>
      </li>
      
      <li class="nav-item">
        <sidenav-list-item
          url="/travel/taggedlist"
          :class="getRoute() === 'Tagged Travel' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Tagged Travel'" 
        >
          <template v-slot:icon>
            <i class="ni ni-camera-compact text-success text-sm opacity-10"></i>
          </template>
        </sidenav-list-item>
      </li>

      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Attraction
        </h6>
      </li>

      <sidenav-list-item
        url="/attraction/attractionlist"
        :class="getRoute() === 'Attraction List' ? 'active' : ''"
        :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Attraction List'"
      >
        <template v-slot:icon>
          <i class="ni ni-collection text-success text-sm opacity-10"></i>
        </template>
      </sidenav-list-item>

      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Profile
        </h6>
      </li>

      <sidenav-list-item
        url="/user/profile"
        :class="getRoute() === 'Edit Profile' ? 'active' : ''"
        :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Edit Profile'"
      >
        <template v-slot:icon>
          <i class="ni ni-palette text-success text-sm opacity-10"></i>
        </template>
      </sidenav-list-item>
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
