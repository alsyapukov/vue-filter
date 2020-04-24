<template>
  <div class="product-list">
    <div class="product-list__wrap">
      <div class="product-list__search">
        <TextBox placeholder="Найти" v-model="searchValue" />
      </div>
      <div class="product-list__variants">
        <div class="variants__item" v-for="variant in filterVariants" :key="variant.unique_id">
          <CheckBox @input="$emit('send', $event)" :title="variant.display_name" :icon="variant.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Filter } from "@/api";
import TextBox from "@/components/base/TextBox";
import CheckBox from "@/components/base/CheckBox";

export default {
  name: "ProductList",
  props: {
    listVariants: {
      type: Array,
      default: []
    }
  },
  components: {
    TextBox,
    CheckBox
  },
  data() {
    return {
      searchValue: "",
      filterVariants: []
    };
  },
  mounted() {
    this.filterVariants = this.listVariants.map((variant) => {
      let star = '⭐';
      let boots = '👟';

      if(variant.unique_id === 1) {
        return {
          ...variant,
          icon: star
        }
      }
      if(variant.unique_id === 2) {
        return {
          ...variant,
          icon: boots
        }
      }
      return variant;
    });
  },
  watch: {
    searchValue(val) {
      this.searchFilter(val);
    }
  },
  methods: {
    searchFilter(val) {
      this.filterVariants = this.listVariants.filter(
        item => item.display_name.toLowerCase().indexOf(val.toLowerCase()) == 0
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  &__variants {
    margin-top: 10px;
  }
}
</style>
