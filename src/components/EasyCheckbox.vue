<template>
  <!-- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/checkbox#%E4%B8%BA%E5%A4%8D%E9%80%89%E6%A1%86%E6%8F%90%E4%BE%9B%E7%A8%8D%E5%A4%A7%E7%9A%84%E7%82%B9%E5%87%BB%E5%8C%BA%E5%9F%9F -->
  <label
    class="easy-checkbox"
    :class="{
      'is-checked': checked,
      'is-disabled': disabled,
      indeterminate,
    }"
  >
    <template v-if="label && !isLabelBehind">
      <LabelText
        class="easy-checkbox__label in-front"
        :height="fineSize"
        :label="label"
      />
    </template>

    <span
      class="easy-checkbox__inner"
      :style="{ width: fineSize, height: fineSize }"
    >
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
        :disabled="disabled"
        :name="name"
        :value="originalValue"
        @change="onChange"
      />
    </span>

    <template v-if="label && isLabelBehind">
      <LabelText
        class="easy-checkbox__label"
        :height="fineSize"
        :label="label"
      />
    </template>
  </label>
</template>
<script lang="ts">
import { Vue, Component, VModel, Prop, Emit } from "vue-property-decorator";
import LabelText from "./LabelText.vue";

@Component({ components: { LabelText } })
export default class EasyCheckbox extends Vue {
  @VModel({ type: Boolean, required: true })
  /** 绑定的值，表示当前是否勾选 */
  private checked!: boolean;

  @Prop({ type: [String, Number], default: "14px" })
  /** 复选框的边长 */
  private size!: string | number;

  @Prop({ type: Boolean, default: false })
  /** 是否处于禁用状态 */
  private disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  /** 是否处于选与非选之间的中间状态(只控制样式) */
  private indeterminate!: boolean;

  @Prop({ type: String })
  /** 原生复选框的 name 属性 */
  private name: string | undefined;

  @Prop({ type: String, default: "on" })
  /** 原生复选框的 value 属性 */
  private originalValue: string | undefined;

  @Prop({ type: Boolean, default: true })
  /** 提示文字是否位于复选框的后方，否则在前方 */
  private isLabelBehind!: boolean;

  private get fineSize(): string {
    if (typeof this.size === "number") return `${this.size}px`;
    else return this.size;
  }

  private onChange(evt: Event) {
    this.change((evt.target as HTMLInputElement).checked);
  }

  @Emit("change")
  private change(checked: boolean) {}
}
</script>
<style lang="scss" scoped>
$primary-clr: #409eff;
$border-clr: #dcdfe6;
$disabled-clr: #c0c4cc;
$disabled-bg-clr: #f2f6fc;
$icon-size: 80%;

.easy-checkbox {
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  line-height: 1;

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

  &.is-checked {
    .easy-checkbox__label {
      color: $primary-clr;
    }
  }

  &.is-disabled {
    cursor: not-allowed;

    .easy-checkbox__inner {
      background-color: $disabled-bg-clr;
      border-color: $border-clr;

      .icon-tick,
      .icon-dash {
        fill: $disabled-clr;
      }
    }

    .easy-checkbox__label {
      color: $disabled-clr;
    }
  }

  .easy-checkbox__inner {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-flex;
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
      bottom: -16px;
      width: 0;
      height: 0;
      opacity: 0;
      z-index: -1;
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

  .easy-checkbox__label {
    display: inline-block;
    vertical-align: baseline;
    padding-left: 8px;

    &.in-front {
      padding-left: 0;
      padding-right: 8px;
    }
  }
}
</style>