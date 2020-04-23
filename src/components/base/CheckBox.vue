<template>
  <label class="checkbox">
    <input class="checkbox__input" type="checkbox" :disabled="disabled" v-model="isChecked" />

    <div class="checkbox__text">
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecked: false
    };
  },
  mounted() {
    if (this.$attrs.value) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  },
  watch: {
    "$attrs.value"(val) {
      this.isChecked = val;
    },
    isChecked(val) {
      this.valueChange(val);
    }
  },
  methods: {
    valueChange(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  height: 25px;
  cursor: pointer;

  &__input {
    width: 13px;
    height: 13px;
    margin: 0;
    cursor: pointer;
  }
  &__icon {
    margin-left: 5px;
  }
  &__text {
    display: flex;
    align-items: center;
    margin-left: 6px;
  }
}
</style>
