<template>
  <div class="mb-4 card">
    <div class="p-3 card-body">
      <div class="d-flex" style="margin-bottom: 12px">
        <div class="cropping border-radius-lg">
          <img src="@/assets/img/team-1.jpg" alt="profile_image" class="shadow-sm w-100" />
        </div>
      </div>
      <div :class="contentClass">
        <div class="numbers">
          <p class="mb-0 text-sm" style="margin-bottom: 5px">Feb. 2023 ~ Mar. 2023</p>
          <h5 class="font-weight-bolder" :class="valueColor">제주도 여행</h5>
          동기들과 떠나는 즐거운 제주도 여행~
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TravelCard",
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
