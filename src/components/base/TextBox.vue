<template>
  <div class="textbox">
    <input
      class="textbox__inner"
      :type="type"
      v-model="value"
      :value="value"
      :placeholder="placeholder"
      :min="type === 'number' && min ? min : null"
      :max="type === 'number' && max ? max : null"
    />
  </div>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "Введите текст"
    },
    min: {
      type: String,
      default: "0"
    },
    max: {
      type: String,
      default: "100"
    }
  },
  data() {
    return {
      value: null
    };
  },
  mounted() {
    this.value = this.$attrs.value;
  },
  watch: {
    "$attrs.value"(val) {
      this.value = val;
    },
    value(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.textbox {
  width: 100%;
  &__inner {
    height: 32px;
    width: 100%;
    padding: 4px 8px;
    border: 1px solid #acbdcd;
    background: #fff;
    outline: 0;
    transition: border-color 0.2s linear;
    appearance: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      border-color: #465f73;
    }
  }
}
</style>
