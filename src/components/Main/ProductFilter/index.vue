<template>
  <div class="filter" :key="resetKey">
    <div class="filter__item" v-for="filter in productFilters" :key="filter.unique_id">
      <Wrap :title="filter.display_name">
        <ProductList
          v-if="filter.type == 'list'"
          :listVariants="filter.list_variants"
          @send="send"
        />
        <ProductSlider v-else-if="filter.type == 'slider'" @send="send" />
      </Wrap>
    </div>
    <div class="filter__options">
      <button class="button" @click="reset">Сбросить</button>
    </div>
  </div>
</template>

<script>
import { Filter } from "@/api";
import Wrap from "./Wrap";
import ProductList from "./ProductList";
import ProductSlider from "./ProductSlider";

export default {
  name: "ProductFilter",
  components: {
    Wrap,
    ProductList,
    ProductSlider
  },
  data() {
    return {
      productFilters: [],
      resetKey: 0
    };
  },
  mounted() {
    this.getFilters();
  },
  methods: {
    getFilters() {
      Filter.getFilter()
        .then(res => {
          this.productFilters = res.data;
        })
        .catch(err => console.log(`Filters not found! Error: ${err}`));
    },
    reset() {
      this.resetKey += 1;
    },
    send(e) {}
  }
};
</script>

<style lang="scss" scoped>
.filter {
  width: 100%;
  height: 100%;
  background-color: #dce3ea;
  color: #2e3a47;

  &__options {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;

    .button {
      appearance: none;
      background-color: transparent;
      border: 0;
      outline: 0;
      cursor: pointer;
      color: #2e3a47;
    }
  }
}
</style>
