<template>
  <div class="shadow-lg border-radius-lg mb-4">
    <div class="p-3 card-body">
      <div class="d-flex user-wrap" style="margin-bottom: 12px">
        <div class="border-radius-lg">
          <img :src="thumbnail" alt="profile_image" class="shadow-sm w-100" />
          <div class="col-md-4 user-text custom-private" v-if="isPrivate">
            <img src="@/assets/svg/computing-cloud-svgrepo-com.svg" alt="Image placeholder" />
          </div>
        </div>
      </div>
      <div>
        <div class="numbers">
          <p class="mb-1 text-sm">{{ travel.duration }}</p>
          <h5 class="font-weight-bolder">{{ travel.title }}</h5>
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
  data() {
    return {
      thumbnail: "",
    };
  },
  created() {
    if (this.travel.thumbnail === null || this.travel.thumbnail == undefined) {
      this.thumbnail = require("@/assets/img/noimg.png");
    } else {
      this.thumbnail = this.travel.thumbnail;
    }
  },
  computed: {
    isPrivate() {
      return this.travel.travelStatus === "PRIVATE";
    }
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

.user-wrap {
  width: 100%;
  margin: 10px auto;
  position: relative;
}
.user-wrap img {
  width: 100%;
  vertical-align: middle;
}
.user-text {
  position: absolute;
  text-align: right;
  right: 0;
  bottom: 0;
  margin-right: 10px;
}

.custom-private {
  position: absolute;
  margin: 1rem;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: inherit;
}
</style>
