<template>
  <div class="card-profile">
    <div class="user-wrap">
      <div class="cropping border-radius-lg user-image">
        <img :src="thumbnail" alt="Image placeholder" />
        <div class="col-md-4 user-text">
          <div class="avatar-group mt-2">
            <a
              href="javascript:;"
              class="avatar avatar-l rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title
              data-bs-original-title="Ryan Tompson"
            >
              <img src="@/assets/img/team-1.jpg" alt="team1" />
            </a>
            <a
              href="javascript:;"
              class="avatar avatar-l rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title
              data-bs-original-title="Romina Hadid"
            >
              <img src="@/assets/img/team-2.jpg" alt="team2" />
            </a>
            <a
              href="javascript:;"
              class="avatar avatar-l rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title
              data-bs-original-title="Alexander Smith"
            >
              <img src="@/assets/img/team-3.jpg" alt="team3" />
            </a>
            <a
              href="javascript:;"
              class="avatar avatar-l rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title
              data-bs-original-title="Jessica Doe"
            >
              <img src="@/assets/img/team-4.jpg" alt="team4" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="back">
      <div class="py-4 container-fluid">
        <div class="row">
          <div class="col-md-11">
            <div class="mt-4">
              <p class="mb-0 text-sm">{{ travel.duration }}</p>
              <h5 class="font-weight-bolder" style="margin-top: 5px">{{ travel.title }}</h5>
              {{ travel.description }}
            </div>
          </div>
          <div class="col-md-1">
            <div class="mt-4">
              <div class="col-6 text-end">
                <argon-button color="success" size="sm" variant="outline">Edit</argon-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col">
            <div class="d-flex justify-content-center">
              <div class="d-grid text-center">
                <span class="text-lg font-weight-bolder">22</span>
                <span class="text-sm opacity-8">Adventures</span>
              </div>
              <div class="d-grid text-center mx-4">
                <span class="text-lg font-weight-bolder">200</span>
                <span class="text-sm opacity-8">Photos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/items/ArgonButton.vue";
import { mapGetters, mapState } from "vuex";

const travelStore = "travelStore";

export default {
  name: "TravelViewItem",
  components: {
    ArgonButton,
  },
  computed: {
    ...mapState(travelStore, ["travel"]),
    ...mapGetters(travelStore, ["thumbnail"]),
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
