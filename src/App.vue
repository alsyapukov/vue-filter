<template>
  <div id="app" class="app">
    <div class="content">
      <div class="content__wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./assets/lib/reset.css";
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}
.content {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: #fff;

  transition: background-color .4s ease;

  &__wrap {
    width: 280px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
@media screen and (max-width: 767px) {
  .content {
    &__wrap {
      width: 100%;
      padding: 20px;
    }
  }
}
</style>
