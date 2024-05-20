# vue-easy-checkbox

> Vue wrapper for multicheckboxes, providing flexible style customization, especially customizable size of multicheckboxes

![DemoSnapshot1](https://raw.githubusercontent.com/ChenChengbi/vue-easy-checkbox/master/screenshot/demo-snapshot.png)

English | [中文](./README.md)

## 🌰 Demo
https://chenchengbi.github.io/vue-easy-checkbox/#/

## 📦 Installation
``` bash
$ npm i vue-easy-checkbox
```

## 🔨 Usage
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

## 🔠 Properties
| Property Name | Type          | Default Value | Description                                                            |
|---------------|---------------|---------------|------------------------------------------------------------------------|
| value/v-model | boolean       | required      | The binding value, indicating whether or not it is currently checked   |
| size          | string/number | "14px"        | Side length of the checkbox                                            |
| label         | string        | -             | Label next to the checkbox                                             |
| disabled      | boolean       | false         | Whether it is disabled or not                                          |
| indeterminate | boolean       | false         | Whether it is in an intermediate state between selected and unselected |
| name          | string        | -             | The name attribute of the native checkbox                              |
| originalValue | string        | "on"          | The value attribute of the native checkbox                             |
| isLabelBehind | boolean       | true          | Whether the label is behind the checkbox, otherwise in front of it     |

## 🎺 Events
| Event Name | Description                                             | Return Value                     |
|------------|---------------------------------------------------------|----------------------------------|
| change     | Triggered when the user checks or unchecks the checkbox | boolean. Whether or not to check |