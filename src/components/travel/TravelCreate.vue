<template>
  <travel-create-head @cancel-creation="cancelCreation" @create-tavel="create"></travel-create-head>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-12">
        <travel-create-info ref="info"></travel-create-info>
      </div>
    </div>
    <div class="row" style="margin-top: 10px">
      <div class="col-md-12">
        <travel-create-friend ref="friend"></travel-create-friend>
      </div>
    </div>
    <div class="row" style="margin-top: 10px">
      <div class="col-md-12">
        <travel-create-photo ref="photo"></travel-create-photo>
      </div>
    </div>
  </div>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import TravelCreateHead from "@/components/travel/item/TravelCreateHead";
import TravelCreateInfo from "@/components/travel/item/TravelCreateInfo";
import TravelCreateFriend from "@/components/travel/item/TravelCreateFriend";
import TravelCreatePhoto from "@/components/travel/item/TravelCreatePhoto.vue";

import { createTravelInfo, addTravelPhoto } from "@/api/travel";
import { mapActions } from "vuex";

const body = document.getElementsByTagName("body")[0];
const travelStore = "travelStore";

export default {
  name: "TravelCreate",
  data() {
    return {
      showMenu: false,
      id: "",
      travel: {
        title: "",
        description: "",
        travelStatus: "",
      },
      friends: [],
      images: [],
    };
  },
  components: {
    TravelCreateHead,
    TravelCreateInfo,
    TravelCreateFriend,
    TravelCreatePhoto,
  },
  methods: {
    ...mapActions(travelStore, ["setSingleTravel", "getTravelDetail"]),
    cancelCreation() {
      this.$router.push({ name: "My Travels" });
    },
    create() {
      const travel = this.$refs.info.travel;
      const friends = this.$refs.friend.friends;
      const images = this.$refs.photo.files;

      const param = {
        travel: travel,
        members: friends,
      };

      createTravelInfo(
        param,
        ({ data }) => {
          if (images === null || images === undefined || images.length == 0) {
            this.moveToTravelView(data);
            return;
          }

          images.set("id", data.id);
          addTravelPhoto(
            images,
            ({ data }) => {
              this.moveToTravelView(data);
            },
            (error) => {
              console.log(error);
            }
          );
        },
        (error) => {
          console.log(error);
        }
      );
    },
    moveToTravelView(travel) {
      this.setSingleTravel(travel);
      this.$router.push({ name: "travelview", params: { travelid: travel.id } });
    },
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  },
};
</script>
