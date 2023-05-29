<template>
  <div class="card-profile">
    <div class="user-wrap">
      <div class="cropping border-radius-lg user-image">
        <img :src="thumbnail" alt="Image placeholder" />
        <div class="col-md-4 user-text custom-private" v-if="isPrivate">
          <img src="@/assets/svg/computing-cloud-svgrepo-com.svg" alt="Image placeholder" />
        </div>
        <div class="col-md-4 user-text">
          <div class="avatar-group mt-2">
            <a v-for="(friend, index) in detail.friends" :key="index"
                class="avatar avatar-l rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title
                :data-bs-original-title="friend.nickname"
                @click="moveToFriend(friend.id)"
              >
              <img :src="friend.profile" alt="friend" />
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
                <span class="text-lg font-weight-bolder">{{detail.numAdventures}}</span>
                <span class="text-sm opacity-8">Adventures</span>
              </div>
              <div class="d-grid text-center mx-4">
                <span class="text-lg font-weight-bolder">{{detail.numPhotos}}</span>
                <span class="text-sm opacity-8">Photos</span>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div class="row justify-content-center">
          <div class="images-container justify-content-center">
            <div class="image" v-for="(image, index) in detail.adventures" :key="index">
              <img class="adventure" :src="image.thumbnail" :alt="image.thumbnail" title="thumbnail" />
              <div class="col-md-4 user-text custom-multi">
                <img class="adventure" src="@/assets/svg/multi-window-svgrepo-com.svg" alt="Image placeholder" />
              </div>
            </div>
          </div>
        </div>
        <br/>
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
  props: {
    detail: Object
  },
  computed: {
    ...mapState(travelStore, ["travel"]),
    ...mapGetters(travelStore, ["thumbnail"]),
    isPrivate() {
      return this.travel.travelStatus === "PRIVATE";
    }
  },
  methods: {
    moveToFriend(userId) {
      alert(userId);
    }
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

.custom-private {
  position: absolute;
  margin: 1.2rem;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: inherit;
}

.custom-multi {
  position: absolute;
  margin: 0.5rem;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: inherit;
}

.images-container {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  box-sizing: border-box;
}
.image {
  width: 20rem;
  height: 20rem;
  position: relative;
  border-radius: 0.5rem;
  transition: all 0.3s;
  animation: fade-in 0.5s ease forwards;
  align-content: center;
  align-items: center;
}
.adventure {
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-radius: inherit;
}
</style>
