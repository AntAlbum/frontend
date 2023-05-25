<template>
  <div class="row" v-if="this.$store.state.userInfo">
    <div class="col-md-4" style="margin-left: 50px; margin-right: 50;">
      <div class="card card-profile">
        <img :src="backgroundpicture" alt="Image placeholder" class="card-img-top">
        <div class="row justify-content-center">
          <div class="col-4 col-lg-4 order-lg-2">
            <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
              <a href="javascript:;"><img style="width: 200px; /* 이미지의 원하는 너비 */  
                                                height: 200px; /* 이미지의 원하는 높이 */
                                                display: block; /* 이미지를 블록 요소로 설정하여 가운데 정렬을 적용 */
                                                margin-left: auto; /* 좌우 마진을 auto로 설정하여 가운데 정렬을 적용 */
                                                margin-right: auto;" 
                                      :src="`${this.$store.state.userInfo.profile}`" class="rounded-circle img-fluid border border-2 border-white">
              </a>
            </div>
          </div>
        </div>
        <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
        </div>
        <div class="card-body pt-0">
          <div class="row">
            <div class="col">
              <div class="d-flex justify-content-center">
                <div class="d-grid text-center">
                  <span class="text-lg font-weight-bolder">22</span>
                  <span class="text-sm opacity-8">Friends</span>
                </div>
                <div class="d-grid text-center mx-4">
                  <span class="text-lg font-weight-bolder">10</span>
                  <span class="text-sm opacity-8">Photos</span>
                </div>
                <div class="d-grid text-center">
                  <span class="text-lg font-weight-bolder">89</span>
                  <span class="text-sm opacity-8">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <h5> {{this.$store.state.userInfo.nickname}} <span class="font-weight-light">, 28</span></h5>
            <div>
              <i class="ni education_hat mr-2"></i>{{this.$store.state.userInfo.comment}}
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-6">
      <div class="card">
        <div class="card-header pb-0">
          <h6>Neighbors</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
            <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                name
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                Today's word
              </th>
              <th class="text-secondary opacity-7">
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img src="/vue-argon-dashboard/img/team-2.de26a134.jpg" class="avatar avatar-sm me-3" alt="user1">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">John Michael</h6>
                    <p class="text-xs text-secondary mb-0">
                      john@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs text-secondary mb-0">
                  A severe slump is a precursor to success
                </p>
              </td>
              <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">following</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img src="/vue-argon-dashboard/img/team-3.08ced048.jpg" class="avatar avatar-sm me-3" alt="user2">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Alexa Liras</h6>
                    <p class="text-xs text-secondary mb-0">
                      alexa@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs text-secondary mb-0">
                  Life goes by before you know it. therefore bearable
                </p>
              </td>
              <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">following</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img src="/vue-argon-dashboard/img/team-4.53033970.jpg" class="avatar avatar-sm me-3" alt="user3">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                    <p class="text-xs text-secondary mb-0">
                      laurent@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs text-secondary mb-0">
                  It always seems impossible until you finish.
                </p>
              </td>
              <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">following</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img src="/vue-argon-dashboard/img/team-3.08ced048.jpg" class="avatar avatar-sm me-3" alt="user4">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Michael Levi</h6>
                    <p class="text-xs text-secondary mb-0">
                      michael@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs text-secondary mb-0">
                  Good fences make good eighbors.
                </p>
              </td>
              <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">following</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img src="/vue-argon-dashboard/img/team-2.de26a134.jpg" class="avatar avatar-sm me-3" alt="user5">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Richard Gran</h6>
                    <p class="text-xs text-secondary mb-0">
                      richard@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs text-secondary mb-0">
                  Accept challenges.
                </p>
              </td>
              <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">following</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img src="/vue-argon-dashboard/img/team-4.53033970.jpg" class="avatar avatar-sm me-3" alt="user6">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Miriam Eric</h6>
                    <p class="text-xs text-secondary mb-0">
                      miriam@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs text-secondary mb-0">
                  Sometimes 'Later' become 'never'
                </p>
              </td>
              <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">following</a>
              </td>
            </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style="height:30px"></div>

      <div class="col-12">
        <div class="card">

          <div class="card-body">
            <p class="text-uppercase text-sm" style="font-size: 25px; font-weight: bold;" >Today's word</p>
            <div class="row">
              <div class="col-md-12">
                <p>Every day should be intense, Life goes just as it goes. Keep it simple</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import backgroundpicture from "@/assets/img/background.jpg";
export default {
  name: "UserProfile",

  components:{
  },

  data() {
    return {
      backgroundpicture
    }
  },
};
</script>
