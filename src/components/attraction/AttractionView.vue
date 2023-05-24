<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-12">
        <attraction-view-item :attraction="this.attraction"></attraction-view-item>
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
      attraction:{}
    }
  },
  created() {
  console.log('before parsing >>>', this.$route.params.attraction);
  this.attraction = JSON.parse(this.$route.params.attraction);
  console.log('after parse >>>', this.attraction);
  }


};
</script>
