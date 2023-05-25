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
            <h5> {{this.$store.state.userInfo.nickname}} <span class="font-weight-light"></span></h5>
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
                    <img src="data:image/jpeg;base64,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" class="avatar avatar-sm me-3" alt="user1">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">googoo</h6>
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
                    <img src="data:image/jpeg;base64,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" class="avatar avatar-sm me-3" alt="user2">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Yejining</h6>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKeg5fQm_HzPASIi74uyr95Pjwr1TmlqJ8w&usqp=CAU" class="avatar avatar-sm me-3" alt="user3">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Jaylee1004</h6>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt5y_OtJJuX2qiLJkDqJt6zOh3GfMP91N6A&usqp=CAU" class="avatar avatar-sm me-3" alt="user4">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">donotwastetime</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs text-secondary mb-0">
                  Good fences make good neighbors.
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQJSF9huOwG1N05EeEIHxFGn30rNXsgTGSg&usqp=CAU" class="avatar avatar-sm me-3" alt="user5">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">BongBong</h6>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtFZJ9LmpW5_bzdafqNyVrVub9N2DrjGBYA&usqp=CAU" class="avatar avatar-sm me-3" alt="user6">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">ssafy0916</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs text-secondary mb-0">
                  여러분은 완전 짱입니다.
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
