<template>
  <b-container class="bv-example-row mt-3 text-center">
    <b-row>
      <travel-create></travel-create>
    </b-row>
  </b-container>
</template>

<script>
import TravelCreate from "@/components/travel/TravelCreate";

export default {
  name: "AppTravel",
  components: {
    TravelCreate,
  },
  props: {
    msg: String,
  },
};
</script>
