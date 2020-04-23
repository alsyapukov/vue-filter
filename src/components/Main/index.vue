<template>
  <div class="main">
    <ProductFilter />
  </div>
</template>

<script>
import ProductFilter from "@/components/Main/ProductFilter";

export default {
  components: {
    ProductFilter
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
