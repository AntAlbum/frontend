<template>
  <b-container class="bv-example-row mt-3 text-center">
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-jumbotron bg-variant="muted" text-variant="dark" border-variant="dark">
          <template #header>AntAlbum User</template>

          <template #lead> AntAlbum 임시 유저 페이지입니다. </template>
        </b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AppUser",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
}
</style>
