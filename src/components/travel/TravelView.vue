<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-12">
        <travel-view-item></travel-view-item>
      </div>
    </div>
  </div>
</template>
<script>
import TravelViewItem from "@/components/travel/item/TravelViewItem";

export default {
  name: "TravelView",
  components: {
    TravelViewItem,
  },
};
</script>
