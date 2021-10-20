<template>
  <h1>{{ product.name }}</h1>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Product} from "@/store/products/types";

@Component({
  name: "Product",
})
export default class Product extends Vue {
  @Prop({type: [Object]})
  public product!: Product;
}
</script>
