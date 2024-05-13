<template>
  <div class="example">
    <EasyCheckbox
      v-model="isChecked"
      :size="20"
      :label="'I am EasyCheckbox'"
      @change="onChange"
    />
  </div>
</template>
<script>
import EasyCheckbox from "@/components/EasyCheckbox.vue";
export default {
  components: { EasyCheckbox },
  data() {
    return { isChecked: true };
  },
  methods: {
    onChange(checked) {},
  },
};
</script>