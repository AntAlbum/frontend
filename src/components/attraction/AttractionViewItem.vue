<template>
  <div class="card-profile">
    <img :src="`${this.attraction.firstImage}`" alt="no image available" onerror="this.src = 'https://komisiinformasi.bantenprov.go.id/frontend/29/assets/img/no_image.png?v=1474558838'" />
    
    <div class="back">
      <div class="py-4 container-fluid">
        <div class="row">
          <div class="col-md-11">
            <div class="mt-4">
              <h5 class="font-weight-bolder" style="margin-top: 5px">{{this.attraction.title}}</h5>
              address: {{this.attraction.addr1}}
            </div>

            <div class="mt-4">
              contact : {{this.attraction.tel}}
            </div>
          </div>
          
        </div>
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col">
            <div class="d-flex justify-content-center">
              <div class="d-grid text-center">
                <span class="text-lg font-weight-bolder">{{this.attraction.readCount}}</span>
                <span class="text-sm opacity-8">조회수</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "AttractionViewItem",
  props: {
    attraction:{}
  },

  components: {
  },
};
</script>
<style scoped>
.cropping {
  max-height: 300px;
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
.back {
  margin-top: -30px;
  background-color: white;
}
</style>
