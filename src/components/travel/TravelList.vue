<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h6 class="font-weight-bolder">My Travels</h6>
            <p class="text-sm">Look around where you've been through the world!</p>
            <div class="col-lg-12">
              <div class="row" v-for="(travel, index) in travels" :key="index">
                <travel-list-item :travel="travel"></travel-list-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TravelListItem from "./item/TravelListItem.vue";

export default {
  name: "TravelList",
  data() {
    return {
      travels: {
        stats: {
          money: {
            title: "Today's Money",
            value: "$53,000",
            percentage: "+55%",
            iconClass: "ni ni-money-coins",
            detail: "since yesterday",
            iconBackground: "bg-gradient-primary",
          },
        },
      },
    };
  },
  components: {
    TravelListItem,
  },
};
</script>
