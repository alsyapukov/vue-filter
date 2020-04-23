<template>
  <div class="range">
    <div class="range__slider">
      <VueSlider
        ref="slider"
        v-model="rangeValue"
        :min="min"
        :max="max"
        tooltip="none"
        :enableCross="false"
        @error="$emit('input', [min, max])"
      ></VueSlider>
    </div>
    <div class="range__price">
      <div class="price__start">$‎{{ min }}</div>
      <div class="price__end">${{ max }}</div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";

export default {
  name: "Range",
  props: {
    value: {
      type: Array,
      default: [0, 100]
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  components: {
    VueSlider
  },
  computed: {
    rangeValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .vue-slider {
  &-rail {
    border: 1px solid #bccad7;
    background-color: #ecf0f1;
    height: 7px;
  }

  &-process {
    background-color: #bccad7;
    height: 7px;
  }
  &-dot {
    width: 12px !important;
    height: 20px !important;
    &-handle {
      width: 100%;
      height: 100%;
      background-color: #26323e;
      border-radius: 0;
      cursor: col-resize;
      box-shadow: none;
    }
  }
}
.range {
  &__slider {
    min-height: 30px;
    padding: 0 5px;
  }
  &__price {
    display: flex;
    justify-content: space-between;

    .price {
      &__start,
      &__end {
        cursor: pointer;
        color: #909598;
        font-size: 13px;
      }
    }
  }
}
</style>
