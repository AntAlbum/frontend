<template>
  <travel-create-head
    @cancel-creation="cancelCreation"
    @create-tavel="createTravel"
  ></travel-create-head>
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

import { createTravel, uploadPhoto } from "@/api/travel";

const body = document.getElementsByTagName("body")[0];

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
    cancelCreation() {
      this.$router.push({ name: "My Travels" });
    },
    createTravel() {
      this.travel = this.$refs.info.travel;
      this.friends = this.$refs.friend.friends;
      this.images = this.$refs.photo.images;

      createTravel(
        this.travel,
        ({ data }) => {
          this.id = data.id;

          const formData = new FormData();
          formData.append("file", this.images[0].origin);
          console.log(this.images[0].src);
          console.log(this.images[0].size);
          console.log(this.images[0].origin);
          // this.images.forEach((image) => {
          //   formData.append("files", image.origin);
          // });
          // formData.append("id", data.id);

          uploadPhoto(
            formData,
            ({ data }) => {
              console.log(data);
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
