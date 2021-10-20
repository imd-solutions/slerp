<template>
  <h1 v-if="data">{{ data.name }}</h1>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Merchant} from "@/store/merchant/types";

@Component({
  name: "MerchantInfo",
})
export default class MerchantInfo extends Vue {
  @Prop({type: [Object]})
  public data!: Merchant;
}
</script>
