# vue-easy-checkbox

> 多选框的 vue 封装，提供灵活的样式定制，尤其是多选框的尺寸可自定义

## 🌰 示例
https://chenchengbi.github.io/vue-easy-checkbox/#/

## 📦 安装
``` bash
$ npm i vue-easy-checkbox
```

## 🔨 使用
```html
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
import EasyCheckbox from "vue-easy-checkbox";
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
```

## 🔠 属性
| 属性名        | 类型          | 默认值 | 说明                                     |
|---------------|---------------|--------|------------------------------------------|
| value/v-model | boolean       | 必填   | 绑定的值，表示当前是否勾选               |
| size          | string/number | "14px" | 复选框的边长                             |
| label         | string        | -      | 复选框旁边的提示文字                     |
| disabled      | boolean       | false  | 是否处于禁用状态                         |
| indeterminate | boolean       | false  | 是否处于选与非选之间的中间状态           |
| name          | string        | -      | 原生复选框的 name 属性                   |
| originalValue | string        | "on"   | 原生复选框的 value 属性                  |
| isLabelBehind | boolean       | true   | 提示文字是否位于复选框的后方，否则在前方 |

## 🎺 事件
| 事件名 | 说明                               | 返回值                |
|--------|------------------------------------|-----------------------|
| change | 用户勾选或取消勾选 checkbox 时触发 | boolean，表示是否勾选 |