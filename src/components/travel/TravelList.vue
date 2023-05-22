<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h6 class="font-weight-bolder">My Travels</h6>
            <p class="text-sm">Look around where you've been through the world!</p>
            <div class="row">
              <div class="col-lg-3 col-md-6 col-12" v-for="(travel, index) in travels" :key="index">
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
import TravelListItem from "@/components/travel/item/TravelListItem.vue";

export default {
  name: "TravelList",
  data() {
    return {
      travels: [
        {
          a: "dfs0",
        },
        {
          b: "dfasd",
        },
        {
          c: "dfs0",
        },
        {
          d: "dfasd",
        },
        {
          e: "dfs0",
        },
        {
          f: "dfasd",
        },
      ],
    };
  },
  components: {
    TravelListItem,
  },
};
</script>
