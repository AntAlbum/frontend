<template>
  <div class="card">
    <div class="card-body">
      <p class="text-uppercase text-sm">Travel Information</p>
      <div class="row">
        <div class="col-md-12">
          <label for="example-text-input" class="form-control-label"><h6>Title</h6></label>
          <argon-input type="text" v-model="travel.title" placeholder="Title of the travel..." />
        </div>
        <div class="col-md-12">
          <label for="example-text-input" class="form-control-label"><h6>Description</h6></label>
          <argon-input
            type="text"
            v-model="travel.description"
            placeholder="Description of the travel..."
          />
        </div>
        <div class="col-md-12">
          <div class="checklist-item checklist-item-warning d-flex">
            <div class="checklist-info">
              <h6>Public Release</h6>
              <small>By checking it, friends of yours can see your new travel.</small>
            </div>
            <div class="form-check my-auto ms-auto">
              <input
                class="form-check-input"
                type="checkbox"
                id="customCheck1"
                v-model="status"
                @click="intoBoolean(status)"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import ArgonInput from "@/items/ArgonInput.vue";

export default {
  name: "TravelCreateInfo",
  components: {
    ArgonInput,
  },
  data() {
    return {
      status: true,
      travel: {
        title: "",
        description: "",
        travelStatus: "PUBLIC",
      },
    };
  },
  methods: {
    intoBoolean: function (status) {
      if (status) {
        this.travel.travelStatus = "PRIVATE";
      } else {
        this.travel.travelStatus = "PUBLIC";
      }
    },
  },
};
</script>
