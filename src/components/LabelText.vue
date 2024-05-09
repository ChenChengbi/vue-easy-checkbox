<template>
  <span :style="{ height }">{{ label }}</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class LabelText extends Vue {
  @Prop({ type: String, required: true })
  private height!: string;
  @Prop({ type: String, required: true })
  private label!: string;
}
</script>