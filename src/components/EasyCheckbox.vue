<template>
  <label
    class="easy-checkbox"
    :class="{
      'is-checked': checked,
      'is-disabled': disabled,
      indeterminate,
    }"
    :style="{ width: fineSize, height: fineSize }"
    @click="onClick"
  >
    <span class="easy-checkbox__inner">
      <template v-if="indeterminate">
        <svg
          class="icon-dash"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M866.461538 551.384615H157.538462a39.384615 39.384615 0 0 1 0-78.76923h708.923076a39.384615 39.384615 0 0 1 0 78.76923z"
          ></path>
        </svg>
      </template>
      <template v-else-if="checked">
        <svg
          class="icon-tick"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M980.96 299.904l-528.864 528.864c-24.384 24.384-61.536 28.192-89.952 11.392-5.216-3.104-10.208-6.912-14.72-11.392 0-0.032 0-0.032 0-0.032l-304.448-304.416c-28.896-28.896-28.896-75.808 0-104.704s75.744-28.896 104.672 0l252.192 252.192 476.48-476.576c28.896-28.896 75.744-28.896 104.64 0 28.928 28.896 28.928 75.808 0 104.672l0 0z"
          ></path>
        </svg>
      </template>
      <template v-else>
        <span class="empty"></span>
      </template>
      <input
        class="easy-checkbox__original"
        type="checkbox"
        v-model="checked"
        :name="name"
        :value="label"
      />
    </span>
  </label>
</template>
<script lang="ts">
import { Vue, Component, Prop, VModel, Emit } from "vue-property-decorator";

@Component
export default class EasyCheckbox extends Vue {
  @VModel({ type: Boolean, default: false })
  private checked!: boolean;
  @Prop({ type: Boolean, default: false })
  private indeterminate!: boolean;
  @Prop({ type: [String, Number], default: "14px" })
  private size!: string | number;
  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;
  @Prop({ type: String })
  private name: string | undefined;
  @Prop({ type: String })
  private label: string | undefined;

  private get fineSize() {
    if (typeof this.size === "number") return `${this.size}px`;
    else return this.size;
  }

  private onClick() {
    if (!this.disabled) {
      // this.toChange(!this.checked);
    }
  }

  @Emit("change")
  private toChange(newVal: boolean) {
    // this.checked = newVal;
  }
}
</script>
<style lang="scss" scoped>
$primary-clr: #409eff;
$border-clr: #dcdfe6;
$disabled-bg-clr: #f2f6fc;
$disabled-icon-clr: #c0c4cc;
$icon-size: 80%;

.easy-checkbox {
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  user-select: none;

  &.is-checked,
  &.indeterminate {
    .easy-checkbox__inner {
      background-color: $primary-clr;
      border-color: $primary-clr;

      .icon-tick,
      .icon-dash {
        fill: white;
      }
    }
  }

  &.is-disabled {
    cursor: not-allowed;

    .easy-checkbox__inner {
      background-color: $disabled-bg-clr;
      border-color: $border-clr;

      .icon-tick,
      .icon-dash {
        fill: $disabled-icon-clr;
      }
    }
  }

  .easy-checkbox__inner {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $border-clr;
    border-radius: 2px;

    &:hover {
      border-color: $primary-clr;
    }

    .easy-checkbox__original {
      position: absolute;
      outline: none;
      margin: 0;
      bottom: -20px;
    }

    .icon-tick,
    .icon-dash {
      width: $icon-size;
      height: $icon-size;
    }

    .empty {
      width: $icon-size;
      height: $icon-size;
    }
  }
}
</style>