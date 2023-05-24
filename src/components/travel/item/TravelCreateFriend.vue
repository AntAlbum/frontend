<template>
  <div class="card">
    <div class="card-body">
      <p class="text-uppercase text-sm">Friends</p>
      <argon-button color="success" variant="gradient">
        <i class="fas fa-plus me-2"></i>
        Tag New Friends
      </argon-button>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/items/ArgonButton.vue";

export default {
  name: "TravelCreateFriend",
  components: {
    ArgonButton,
  },
  data() {
    return {
      friends: [],
    };
  },
};
</script>
