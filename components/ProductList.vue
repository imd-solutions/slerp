<template>
  <section>
    <Product
      v-for="(product, i) in products"
      :key="i"
      :product="product"
    />
  </section>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import Product from "@/components/Product.vue";
import {Product} from "@/store/products/types";

@Component({
  name: "ProductList",
  components: {
        Product
    }
})
export default class ProductList extends Vue {
  @Prop({type: [Array]})
  public products!: [Product];
}
</script>
