<template>
  <div class="container-fluid">
    <div
      class="page-header min-height-300"
      style="
        background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
        margin-right: -24px;
        margin-left: -34%;
      "
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="card shadow-lg mt-n6">
      <div class="card-body p-3">
        <div class="row gx-4">
          <div class="col-auto">
            <div class="avatar avatar-xl position-relative">
              <img
                src="@/assets/img/team-1.jpg"
                alt="profile_image"
                class="shadow-sm w-100 border-radius-lg"
              />
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">Sayo Kravits</h5>
              <p class="mb-0 font-weight-bold text-sm">Public Relations</p>
            </div>
          </div>
          <div class="mx-auto mt-3 col-lg-1 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
            <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
              <div class="d-flex justify-content-end mb-3">
                <a
                  @click="cancelCreation"
                  class="btn btn-sm btn-fail mb-0 d-none d-lg-block"
                  style="margin-right: 10px"
                  >Cancel</a
                >
                <a
                  @click="createTravel"
                  class="btn btn-sm btn-success float-right mb-0 d-none d-lg-block"
                  >Create</a
                >
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
  name: "TravelCreateInfo",
  methods: {
    cancelCreation() {
      this.$emit("cancel-creation");
    },
    createTravel() {
      this.$emit("create-tavel");
    },
  },
};
</script>
