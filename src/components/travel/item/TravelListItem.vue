<template>
  <div class="shadow-lg border-radius-lg mb-4">
    <div class="p-3 card-body">
      <div class="d-flex" style="margin-bottom: 12px">
        <div class="border-radius-lg">
          <img :src="travel.thumbnail" alt="profile_image" class="shadow-sm w-100" />
        </div>
      </div>
      <div :class="contentClass">
        <div class="numbers">
          <p class="mb-1 text-sm">{{ travel.duration }}</p>
          <h5 class="font-weight-bolder" :class="valueColor">{{ travel.title }}</h5>
          {{ travel.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelListItem",
  props: {
    travel: Object,
  },
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
