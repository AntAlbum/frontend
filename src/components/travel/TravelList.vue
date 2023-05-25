<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h6 class="font-weight-bolder">My Travels</h6>
            <p class="text-sm">Look around where you've been through the world!</p>
            <div class="row">
              <div
                class="col-lg-3 col-md-6 col-12 custom-mouse"
                v-for="(travel, index) in travels"
                :key="index"
              >
                <travel-list-item @click="moveToView(travel.id)" :travel="travel">
                </travel-list-item>
              </div>
              <div class="col-lg-3 col-md-6 col-12 vertical-align-content">
                <travel-list-create @Click="moveToCreate"></travel-list-create>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TravelListItem from "@/components/travel/item/TravelListItem.vue";
import TravelListCreate from "@/components/travel/item/TravelListCreate.vue";

import { listTravel } from "@/api/travel";

export default {
  name: "TravelList",
  data() {
    return {
      travels: [],
    };
  },
  components: {
    TravelListItem,
    TravelListCreate,
  },
  created() {
    let id = 1;

    listTravel(
      id,
      ({ data }) => {
        this.travels = data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    moveToView(id) {
      this.$router.push({ name: "travelview", params: { travelid: id } });
    },
    moveToCreate() {
      this.$router.push({ name: "travelcreate" });
    },
  },
};
</script>
<style scoped>
.custom-mouse:hover {
  cursor: pointer;
}
.vertical-align-content {
  display: flex;
  align-items: center;
  align-content: center;
}
</style>
