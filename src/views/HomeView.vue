<template>
  <div class="home">
    <EasyCheckbox
      class="cb"
      v-model="checked1"
      :size="20"
      @change="onChange1"
    />
    <EasyCheckbox class="cb" v-model="checked2" :size="20" />
    <EasyCheckbox
      class="cb"
      :value="true"
      :size="20"
      :disabled="false"
      :indeterminate="true"
    />
    <EasyCheckbox class="cb" v-model="checked3" :size="20" :disabled="true" />
    <EasyCheckbox class="cb" v-model="checked4" :size="20" :disabled="true" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EasyCheckbox from "@/components/EasyCheckbox.vue";

@Component({ components: { EasyCheckbox } })
export default class HomeView extends Vue {
  private checked1 = true;
  private checked2 = false;
  private checked3 = true;
  private checked4 = false;

  private onChange1(checked: boolean) {
    console.log("checked :>> ", checked);
  }
}
</script>
<style lang="scss" scoped>
.cb {
  margin: 8px;
}
</style>
