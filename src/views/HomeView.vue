<template>
  <div class="home">
    <div class="row">
      <div class="title">不带文字</div>
      <div class="content">
        <EasyCheckbox
          class="cb"
          v-model="checked1"
          :size="size"
          :name="'test'"
        />
        <EasyCheckbox class="cb" v-model="checked2" :size="size" />
        <EasyCheckbox
          class="cb"
          :value="false"
          :size="size"
          :indeterminate="true"
        />
      </div>
    </div>

    <div class="row">
      <div class="title">带文字</div>
      <div class="content">
        <EasyCheckbox
          class="cb"
          v-model="checked3"
          :size="size"
          :label="'我是标题'"
          @change="onChange"
        />
        <EasyCheckbox
          class="cb"
          v-model="checked6"
          :size="size"
          :label="'我是标题在前'"
          :isLabelBehind="false"
        />
      </div>
    </div>

    <div class="row">
      <div class="title">禁用</div>
      <div class="content">
        <EasyCheckbox
          class="cb"
          v-model="checked3"
          :size="size"
          :disabled="true"
        />
        <EasyCheckbox
          class="cb"
          v-model="checked4"
          :size="size"
          :disabled="true"
        />
        <EasyCheckbox
          class="cb"
          v-model="checked5"
          :size="size"
          :disabled="true"
          :indeterminate="true"
        />
        <EasyCheckbox
          class="cb"
          v-model="checked3"
          :size="size"
          :disabled="true"
          :label="'我是标题但禁用'"
        />
      </div>
    </div>

    <div class="row">
      <div class="title">模拟提交表单</div>
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
              v-model="checked7"
              :size="14"
              :label="'Make Money'"
              :name="'makeMoney'"
            />
            <EasyCheckbox
              class="cb"
              v-model="checked8"
              :size="14"
              :label="'Spend Money'"
              :name="'spendMoney'"
            />
          </div>

          <div class="button">
            <button type="submit">Send your message</button>
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
  private checked1 = true;
  private checked2 = false;
  private checked3 = true;
  private checked4 = false;
  private checked5 = false;
  private checked6 = true;
  private checked7 = false;
  private checked8 = true;

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
