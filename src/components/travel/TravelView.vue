<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-12">
        <travel-view-item :detail="detail"></travel-view-item>
      </div>
    </div>
  </div>
</template>
<script>
import TravelViewItem from "@/components/travel/item/TravelViewItem";

import { getTravel } from "@/api/travel";

export default {
  name: "TravelView",
  components: {
    TravelViewItem,
  },
  data() {
    return {
      detail: null
    }
  },
  async created() {
    await getTravel(
      this.$route.params.travelid,
      ({ data }) => {
        this.detail = data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>
