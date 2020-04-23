<template>
  <div class="wrap">
    <div class="wrap__switch" :class="{ hide: !view }" @click="view = !view">
      <div class="wrap__title">{{ title }}</div>
      <div class="wrap__arrow" />
    </div>
    <transition name="fade">
      <div class="wrap__content" v-show="view">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Wrap",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      view: true
    };
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  &__switch {
    display: flex;
    align-items: center;

    cursor: pointer;
    height: 40px;
    padding: 10px;
    border-bottom: 1px solid #d3dbe3;

    &.hide {
      .wrap__arrow {
        transform: rotateZ(-90deg) rotateY(180deg);
      }
    }
  }
  &__title {
    flex-grow: 1;

    color: #5a728b;
    font-weight: 600;
    font-size: 14px;
  }
  &__arrow {
    width: 16px;
    height: 10px;
    background-image: url("~assets/img/svg/arrow.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    transform: rotateZ(-90deg) rotateY(0deg);
    transition: transform 0.5s ease;
  }
  &__content {
    padding: 10px;
  }

  .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
