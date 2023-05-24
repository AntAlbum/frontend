<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h6 class="font-weight-bolder">Find hot place</h6>
            <p class="text-sm">Look around where to go later</p>
            <attraction-search-bar @search-condition="updateAttractions"></attraction-search-bar>
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
import AttractionSearchBar from './AttractionSearchBar.vue';

export default {
  name: "AttractionList",
  data() {
    return {
      condition: null,
      attractions: [],
    };
  },
  components: {
    AttractionListItem,
    AttractionSearchBar,
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
              // console.log('attractions : ', response.data);
            })
    },

    updateAttractions(sidoCode, category, keyword) {
      this.attractions = [];
      let condition = {
        sidoCode,
        category,
        keyword
      }
      this.condition = condition;
      console.log('search param >>>', condition)
      axios.post('http://localhost:9999/attraction/condition', condition)
            .then((response) => {
              this.attractions = response.data;
              // console.log('attractions : ', response.data);
              this.$store.state.attractions = response.data;
            })

      this.$store.state.attractions = this.attractions;
    },
  },
  created() {
    if(this.$store.state.attractions.length===0) {
      console.log("if null >>>", this.$store.state.attractions)
      this.getAttractions();
    }
    else {
      // this.updateAttractions(this.condition);
      this.attractions = this.$store.state.attractions;
      console.log("if not null >>>", this.condition)
    }
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
