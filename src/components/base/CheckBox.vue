<template>
  <label class="checkbox">
    <input class="checkbox__input" type="checkbox" :disabled="disabled" v-model="isChecked" />

    <div class="checkbox__text" v-if="title" ref="checkboxText">
      <span>{{ title }}</span>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
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
    if(this.icon) {
      this.setIcon();
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
    },
    setIcon() {
      this.$refs.checkboxText.innerHTML = `${this.$refs.checkboxText.innerHTML} <span>${this.icon}</span>`;
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
