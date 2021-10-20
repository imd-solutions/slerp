<template>
  <div class="pageloader is-active">
      <span class="title" v-text="title"></span>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
@Component({
  name: "PageLoader"
})
export default class PageLoader extends Vue {
    @Prop({type: String})
    public title!: String;
  }
</script>
