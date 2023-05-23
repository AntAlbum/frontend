<template>
  <div class="images-container">
    <div class="image-upload">
      <h5><i class="ni ni-planet custom-color"></i></h5>
      <div>New Travel</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TravelListItem2",
};
</script>
<style scoped>
.custom-color {
  color: #777777;
}
.images-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
}
.image-upload {
  width: 100%;
  height: 15rem;
  position: relative;
  border-radius: 0.5rem;
  transition: all 0.3s;
  animation: fade-in 0.5s ease forwards;
}
.image-upload {
  color: #777777;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border: 0.2rem solid transparent;
}
.image-upload:hover {
  background: #fff;
  color: #2dce89;
  border:.2rem solid #2dce89;
  cursor: pointer;
}
.image-upload > svg {
  height: 1.5rem;
  margin: 1rem 0 0.5rem 0;
}
</style>