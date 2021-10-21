<template>
  <PageLoader
    v-if="loading"
    title="Page is Loading..."
  />
  <div v-else>
    <MerchantInfo :data="merchant"/>
    <ProductList :products="products"/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PageLoader from "@/components/PageLoader.vue";
import MerchantInfo from "@/components/MerchantInfo.vue";
import ProductList from "@/components/ProductList.vue";
import Merchant from "@/store/merchant/types.ts";
import Product from "@/store/products/types.ts";
import {
  merchantStore,
  productStore,
} from "@/utils/store-accessor";

@Component({
  name: "HomePage",
  layout: "product",
  components: {
    MerchantInfo,
    PageLoader
  },
  head() {
    return {
      // I would get this information dynamically: Query the page information and store in Vuex.
      title: "Slerp Product Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Hello and welcome to Slerp",
        },
      ],
    };
  },
})
export default class HomePage extends Vue {
  public loading: boolean = true;
  public slug: string = "boccadilupo";
  public merchant: typeof Merchant = [];
  public products: typeof Product = [];

  async beforeMount() {
    await merchantStore.queryMerchant(this.slug).then((merchant) => {
      this.merchant = merchant;
    });
    await productStore.queryProducts(this.slug).then((product) => {
      this.loading = !this.loading;
      this.products = product;
    });
  }
}
</script>
