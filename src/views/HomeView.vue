<template>
  <div class="home">
    <EasyCheckbox />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EasyCheckbox from "@/components/EasyCheckbox.vue";

@Component({ components: { EasyCheckbox } })
export default class HomeView extends Vue {}
</script>
