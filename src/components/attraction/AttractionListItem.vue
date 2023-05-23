<template>
  <div class="shadow-lg border-radius-lg mb-4">
    <div class="p-3 card-body">
      <div class="d-flex" style="margin-bottom: 12px">
        <div v-if="attraction.firstImage">
          <div class="cropping border-radius-lg">
            <img :src="`${attraction.firstImage}`" alt="profile_image" class="shadow-sm w-100" />
          </div>
        </div>
        <div v-else>
          <img :src="`${attraction.firstImage2}`" alt="profile_image" class="shadow-sm w-100" />
        </div>
      </div>
      <div :class="contentClass">
        <div class="numbers">
          <h5 class="font-weight-bolder" :class="valueColor">{{ attraction.title }}</h5>
            {{ attraction.addr1 }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AttractionListItem",

  props: {
    attraction:{}
  },

  created() {
    console.log('attraction item : ', this.attraction);
  }
};
</script>
<style scoped>
.cropping {
  max-height: 150px;
  overflow: hidden;
}

.cropping img {
  max-height: initial;
}
</style>
