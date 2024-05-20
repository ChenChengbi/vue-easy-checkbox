<template>
  <div class="home">
    <div class="row">
      <div class="title">Without Label</div>
      <div class="content">
        <EasyCheckbox
          class="cb"
          v-model="checked11"
          :size="size"
          :name="'test'"
        />
        <EasyCheckbox class="cb" v-model="checked12" :size="size" />
        <EasyCheckbox
          class="cb"
          :value="false"
          :size="size"
          :indeterminate="true"
        />
      </div>
    </div>

    <div class="row">
      <div class="title">With Label</div>
      <div class="content">
        <EasyCheckbox
          class="cb"
          v-model="checked21"
          :size="size"
          :label="'我是标题'"
          @change="onChange"
        />
        <EasyCheckbox
          class="cb"
          v-model="checked22"
          :size="size"
          :label="'我是标题在前'"
          :isLabelBehind="false"
        />
      </div>
    </div>

    <div class="row">
      <div class="title">Disabled</div>
      <div class="content">
        <EasyCheckbox
          class="cb"
          v-model="checked21"
          :size="size"
          :disabled="true"
        />
        <EasyCheckbox
          class="cb"
          v-model="checked32"
          :size="size"
          :disabled="true"
        />
        <EasyCheckbox
          class="cb"
          v-model="checked33"
          :size="size"
          :disabled="true"
          :indeterminate="true"
        />
        <EasyCheckbox
          class="cb"
          v-model="checked21"
          :size="size"
          :disabled="true"
          :label="'我是标题但禁用'"
        />
      </div>
    </div>

    <div class="row">
      <div class="title">Customized Size</div>
      <div class="content">
        <EasyCheckbox class="cb" v-model="checked41" :size="12" />
        <EasyCheckbox class="cb" v-model="checked42" :size="16" />
        <EasyCheckbox class="cb" v-model="checked43" :size="20" />
        <EasyCheckbox class="cb" v-model="checked44" :size="32" />
        <EasyCheckbox class="cb" v-model="checked45" :size="40" />
      </div>
    </div>

    <div class="row">
      <div class="title">Form Submission</div>
      <div class="content">
        <!-- https://developer.mozilla.org/zh-CN/docs/Learn/Forms/Your_first_form -->
        <form method="post">
          <div>
            <label class="label" for="name">Name:</label>
            <input type="text" id="name" name="user_name" />
          </div>

          <div>
            <label class="label">Habits:</label>
            <EasyCheckbox
              class="cb"
              v-model="checked51"
              :size="14"
              :label="'Make Money'"
              :name="'makeMoney'"
            />
            <EasyCheckbox
              class="cb"
              v-model="checked52"
              :size="14"
              :label="'Spend Money'"
              :name="'spendMoney'"
            />
          </div>

          <div class="button">
            <button type="submit">模拟提交表单</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EasyCheckbox from "@/components/EasyCheckbox.vue";

@Component({ components: { EasyCheckbox } })
export default class HomeView extends Vue {
  private checked11 = true;
  private checked12 = false;
  private checked21 = true;
  private checked22 = true;
  private checked32 = false;
  private checked33 = false;
  private checked51 = false;
  private checked52 = true;

  private checked41 = true;
  private checked42 = true;
  private checked43 = true;
  private checked44 = true;
  private checked45 = true;

  private size = 20;

  private onChange(checked: boolean) {
    console.log("@change :>> ", checked);
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  .row {
    margin-bottom: 16px;

    .title {
      font-size: 14px;
      line-height: 14px;
      color: #6c6e72;
      margin-bottom: 8px;
    }

    .content {
      .cb {
        margin-right: 16px;
      }

      @import "../scss/form.scss";
    }
  }
}
</style>
