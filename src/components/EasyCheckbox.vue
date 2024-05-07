<template>
  <label class="easy-checkbox" :class="{ 'is-checked': value }">
    <span class="easy-checkbox__input" :class="{ 'is-checked': value }">
      <span class="easy-checkbox__inner"></span>
      <input
        type="checkbox"
        aria-hidden="false"
        class="easy-checkbox__original"
        value=""
      />
    </span>
  </label>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EasyCheckbox extends Vue {
  @Prop({ type: Boolean, default: false }) private value!: boolean;
}
</script>
<style lang="scss" scoped>
</style>