<template>
  <div class="col-lg-3 col-md-6 col-12">
    <!-- <card
      :title="stats.money.title"
      :value="stats.money.value"
      :percentage="stats.money.percentage"
      :iconClass="stats.money.iconClass"
      :iconBackground="stats.money.iconBackground"
      :detail="stats.money.detail"
      directionReverse
    ></card> -->
    <travel-card></travel-card>
  </div>
</template>
<script>
// import Card from "@/components/travel/Cards/Card.vue";
import TravelCard from "@/components/travel/item/TravelCard.vue";

export default {
  name: "TravelListItem",
  data() {
    return {
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
    };
  },
  components: {
    // Card,
    TravelCard,
  },
};
</script>
