<template>
  <div class="product-list">
    <div class="product-list__wrap">
      <div class="product-list__search">
        <TextBox placeholder="Найти" v-model="searchValue" />
      </div>
      <div class="product-list__variants">
        <div class="variants__item" v-for="variant in filterVariants" :key="variant.unique_id">
          <CheckBox @input="$emit('send', $event)">
            <span>{{ variant.display_name }}</span>
            <span v-if="variant.unique_id === 1">⭐</span>
            <span v-else-if="variant.unique_id === 2">👟</span>
          </CheckBox>
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
    this.filterVariants = this.listVariants;
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
