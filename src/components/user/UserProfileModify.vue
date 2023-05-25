<template>
  <div class="py-4 container-fluid">
    <div class="row"> 
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <div class="d-flex align-items-center">
              <p class="mb-0">Edit Profile</p>
              <argon-button @click="updateUser" color="success" size="sm" class="ms-auto"
                >Settings</argon-button
              >
            </div>
          </div>
          <div class="card-body">
            <p class="text-uppercase text-sm">User Information</p>
            <div class="row">
              <div class="col-md-6">
                <label for="example-text-input" class="form-control-label"
                  >name</label
                >
                <span class="input-group-text" id="basic-addon3">{{this.userInfo.username}}</span>
              </div>
            </div>

            <div class="row">
              <label for="example-text-input" class="form-control-label"
                  >email</label
                >
              <div class="col-md-6">
                <span class="input-group-text" id="basic-addon3">{{this.userInfo.email}}</span>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <label for="example-text-input" class="form-control-label"
                  >nickname</label
                >
                <argon-input v-model="this.userInfo.nickname" type="text" />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <label for="example-text-input" class="form-control-label"
                  >profile picture</label
                >
                <argon-input placeholder="Please paste or drag the url of the picture to use as your profile picture" v-model="this.tmpprofile" type="text" />
              </div>
            </div>

            <hr class="horizontal dark" />
            <p class="text-uppercase text-sm">Today's word</p>
            <div class="row">
              <div class="col-md-12">
                <label for="example-text-input" class="form-control-label"
                  >Express yourself in your own language</label
                >
                <argon-input v-model="this.userInfo.comment"
                  type="text"
                  value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ArgonInput from "@/items/ArgonInput.vue";
import ArgonButton from "@/items/ArgonButton.vue";
import axios from "axios";

export default {
  name: "UserProfileModify",

  data() {
    return {
      tmpprofile:"",
      userInfo:null,
    }
  },
  components: {  ArgonInput, ArgonButton },

  created() {
    this.userInfo = this.$store.state.userInfo;
    console.log(this.userInfo);
  },

  methods: {
    updateUser() {

      this.$store.state.userInfo.nickname = this.userInfo.nickname;
      this.$store.state.userInfo.comment = this.userInfo.comment;
      if(this.tmpprofile){
        this.$store.state.userInfo.profile = this.tmpprofile;
        console.log('input is not empty string >>>', )
      }
      console.log('input is empty string >>>', this.$store.state.userInfo.id)

      let data= {
        nickname:  this.$store.state.userInfo.nickname,
        profile: this.$store.state.userInfo.profile,
        comment: this.$store.state.userInfo.comment
      }

      axios.put(`http://localhost:9999/user/${this.$store.state.userInfo.id}`, data).then((response) => {
        console.log('update result >>> ', response.data);
        this.$store.state.userInfo = response.data;
      });

      this.$router.push({ name: "home"});
    },


  },

};
</script>
<style scoped>
.custom-mouse:hover {
  cursor: pointer;
}
.vertical-align-content {
  display:flex;
  align-items:center;
  align-content: center;
}
</style>