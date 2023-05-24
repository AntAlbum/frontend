<template>
  <div class="card">
    <div class="card-body">
      <p class="text-sm">Enter the conditions for the tourist attractions that are appropriate for you!</p>
      <div class="row">
        <p class="col-md-12">
          <select v-model="sidoCode" style="width: 100%; border: 1px solid #ddd; border-radius: 5px; background-color: #fff; padding: 10px; font-size: 16px; color: #333; ">
            <option v-for="sido in sidoCodes" :value="sido.value" :key="sido.value">{{ sido.text }}</option>
          </select>
        </p>
        <p class="col-md-12">
          <select v-model="category" style="width: 100%; border: 1px solid #ddd; border-radius: 5px; background-color: #fff; padding: 10px; font-size: 16px; color: #333; ">
            <option v-for="category in cateories" :value="category.value" :key="category.value">{{ category.text }}</option>
          </select>
        </p>

        <div class="col-md-12">
          <argon-input type="text" v-model="keyword" placeholder="please enter a keyword" />
          <argon-button color="success" size="sm" variant="outline" @click="changeCondition">search</argon-button>
        
        </div>
      </div>
    </div>
  </div>

</template>

<script> 
import ArgonInput from "@/items/ArgonInput.vue";
import ArgonButton from "@/items/ArgonButton.vue";

export default {
  name: "AttractionSearchCondition",

  components: {
    ArgonInput,
    ArgonButton,
  },

  data() {
    return {
        sidoCode:0,
        category:0,
        keyword:"",

      sidoCodes: [
        { value: 0, text: 'select city or province' },
        { value: 1, text: '서울' },
        { value: 2, text: '인천' },
        { value: 3, text: '대전' },
        { value: 4, text: '대구' },
        { value: 5, text: '광주' },
        { value: 6, text: '부산' },
        { value: 7, text: '울산' },
        { value: 8, text: '세종특별자치시' },
        { value: 31, text: '경기도' },
        { value: 32, text: '강원도' },
        { value: 33, text: '충청북도' },
        { value: 34, text: '충청남도' },
        { value: 35, text: '경상북도' },
        { value: 36, text: '경상남도' },
        { value: 37, text: '전라북도' },
        { value: 38, text: '전라남도' },
        { value: 39, text: '제주도' },
      ],

      cateories: [
        { value: 0, text: 'select content type' },
        { value: 12, text: '관광지' },
        { value: 14, text: '문화시설' },
        { value: 15, text: '축제공연행사' },
        { value: 25, text: '여행코스' },
        { value: 28, text: '레포츠' },
        { value: 32, text: '숙박' },
        { value: 38, text: '쇼핑' },
        { value: 39, text: '음식점' },
      ]
    }
  },

  created() {

  },


  methods: {

    changeCondition() {
      console.log("search condition >>> " + this.sidoCode);
      console.log("search condition >>> " + this.category);
      console.log("search condition >>> " + this.keyword);

      this.$store.state.sidoCode = this.sidoCode;
      this.$store.state.category = this.category;
      this.$store.state.keyword = this.keyword;

      this.$emit("search-condition", this.sidoCode, this.category, this.keyword);
    },
  },
};

</script>