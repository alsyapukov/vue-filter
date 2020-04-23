<template>
  <div class="product-slider">
    <div class="product-slider__price">
      <div class="price__item">
        <p class="price__currency">$</p>
        <TextBox
          class="price__textbox"
          v-model="value[0]"
          :min="String(min)"
          :max="String(max)"
          type="number"
        />
      </div>
      <div class="price__item">
        <p class="price__separator">—</p>
      </div>
      <div class="price__item">
        <p class="price__currency">$</p>
        <TextBox
          class="price__textbox"
          v-model="value[1]"
          :min="String(min)"
          :max="String(max)"
          type="number"
        />
      </div>
    </div>
    <div class="product-slider__range">
      <Range :value="value" :min="min" :max="max" @input="rangeChange" />
    </div>
  </div>
</template>

<script>
import TextBox from "@/components/base/TextBox";
import Range from "@/components/base/Range";

export default {
  name: "ProductSlider",
  components: {
    TextBox,
    Range
  },
  data() {
    return {
      value: [0, 5400],
      min: 0,
      max: 5400
    };
  },
  methods: {
    rangeChange(e) {
      this.value = e;
      this.$emit("send", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-slider {
  width: 100%;
  height: 100%;
  background-color: #dce3ea;

  &__range {
    margin-top: 10px;
  }
  &__price {
    display: flex;

    .price {
      &__item {
        display: flex;
        align-items: center;

        &:nth-child(2) {
          margin-left: 5px;
          margin-right: 5px;
        }
      }
      &__currency,
      &__separator {
        color: #909598;
        font-size: 14px;
      }
      &__currency {
        margin-right: 6px;
      }
      &__textbox {
        width: 74px;
      }
    }
  }
}
</style>
