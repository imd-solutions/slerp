<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-centered">
        <div class="column is-8 has-text-centered">
          <h2 v-if="data" class="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">{{ data.name }}</h2>
          <p class="subtitle has-text-grey mb-5">Hello and welcome. Please browse through our products.</p>

        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import Merchant from "@/store/merchant/types.ts";

@Component({
  name: "MerchantInfo",
})
export default class MerchantInfo extends Vue {
  @Prop({type: [Object]})
  public data!: typeof Merchant;
}
</script>
