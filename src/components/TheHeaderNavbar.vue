<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link :to="{ name: 'main' }">
          <b-img
            :src="require('@/assets/ant.png')"
            id="logo"
            class="d-inline-block align-top"
            alt="logo"
          ></b-img>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link :to="{ name: 'main' }" class="link">
              <b-icon icon="house-door" animation="fade" font-scale="2"></b-icon>
              메인
            </router-link>
            <router-link :to="{ name: 'travel' }" class="link">
              <b-icon icon="globe" animation="fade" font-scale="2"></b-icon>
              여행
            </router-link>
            <router-link :to="{ name: 'user' }" class="link">
              <b-icon icon="person" animation="fade" font-scale="2"></b-icon>
              유저
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TheHeaderNavbar"
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>