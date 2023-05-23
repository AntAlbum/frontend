<template>
  <div class="shadow-lg border-radius-lg mb-4">
    <div class="p-3 card-body">
      <div class="d-flex" style="margin-bottom: 12px">
        <div class="cropping border-radius-lg">
          <img src="@/assets/img/team-1.jpg" alt="profile_image" class="shadow-sm w-100" />
        </div>
      </div>
      <div :class="contentClass">
        <div class="numbers">
          <p class="mb-1 text-sm">Feb. 2023 ~ Mar. 2023</p>
          <h5 class="font-weight-bolder" :class="valueColor">제주도 여행</h5>
          동기들과 떠나는 즐거운 제주도 여행~dfa sdafds af daf asdfadfasdfa dsfa sdfasdfasdfadsfa sdfa dsfa s
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TravelListItem",
  // 패딩을 줄이고 scope로 주고
  // container 중복으로 안먹힐 수 있으니
  // import 적용
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
