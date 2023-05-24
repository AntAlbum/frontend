<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h6 class="font-weight-bolder">Find hot place</h6>
            <p class="text-sm">Look around where to go later</p>
            <div class="row">
              <div class="col-lg-3 col-md-6 col-12 custom-mouse" v-for="(attraction, index) in attractions" :key="index">
                <attraction-list-item @click="moveToView(attraction)" :attraction="attraction"></attraction-list-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AttractionListItem from "@/components/attraction/AttractionListItem.vue";
import axios from 'axios';

export default {
  name: "AttractionList",
  data() {
    return {
      attractions: [],
    };
  },
  components: {
    AttractionListItem,
  },
  methods: {
    moveToView(attraction) {
      console.log('moveToView >>>', attraction);
      console.log('moveToView target>>>', attraction.addr1);
      console.log('moveToView stringify>>>', JSON.stringify(attraction));
      this.$router.push({ name: "attractionview", params: {attraction:JSON.stringify(attraction)} });
    },
    getAttractions() {
      axios.get('http://localhost:9999/attraction')
            .then((response) => {
              this.attractions = response.data;
              console.log('attractions : ', response.data);
            })
    },
  },
  created() {
    this.getAttractions();
  },
};
</script>
<style scoped>
.custom-mouse:hover {
  cursor: pointer;
}
.vertical-align-content {
  display:flex;
  align-items:center;
  align-content: center;
}
</style>
