<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-12">
        <attraction-view-item></attraction-view-item>
      </div>
    </div>
  </div>
</template>
<script>
import AttractionViewItem from "@/components/attraction/AttractionViewItem";

export default {
  name: "AttractionView",
  components: {
    AttractionViewItem,
  },
  data() {
    return {
      attraction: this.$route.params.attraction
    }
  },
  created() {
    console.log('attractionView >>>', this.attraction);
    console.log('attractionView parse >>>', JSON.parse(this.attraction));
  }
};
</script>
