<template>
  <section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-justify-content-center">
          <ProductSingle
              v-for="(product, i) in products"
              :key="i"
              :product="product"
          />

        </div>
      </div>
    </section>


  </section>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import ProductSingle from "@/components/ProductSingle.vue";
import Product from "@/store/products/types.ts";

@Component({
  name: "ProductList",
  components: {
    ProductSingle
  }
})
export default class ProductList extends Vue {
  @Prop({type: [Array]})
  public products!: [typeof Product];
}
</script>
