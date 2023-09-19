<template>
  <div class="login__page">
    <div class="login__page__panel">
      <div class="login__page__panel__logo">
        <img src="GUUCCI.jpg" alt="" />
      </div>
      <div class="login__page__panel__line"></div>
      <div class="login__page__panel__form">
        <div class="tabs">
          <div
            class="tabItem"
            v-for="(item, index) in tabList"
            :key="index"
            :class="{ selected: currentTab === index }"
            @click="changeTab(index)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="tabContent">
          <!-- <component :is="tabList[currentTab].componentName"></component> -->
          <PhoneCodeForm v-if="currentTab === 0"></PhoneCodeForm>
          <AccountForm v-if="currentTab === 1"></AccountForm>
          <QcodeForm v-if="currentTab === 2"></QcodeForm>
        </div>
      </div>
    </div>
    <div class="login__page__footer"><span>&copy;版权所有：KKK后台通用管理系统</span></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PhoneCodeForm from './components/PhoneCodeForm.vue'
import QcodeForm from './components/QcodeForm.vue'
import AccountForm from './components/AccountForm.vue'
import type { ComponentMap } from './types/login-type'

const bgColor = 'linear-gradient(0deg, #2196f3, #00bcd4, #00bcd4, #03a9f4)'
const loginPanelWidth = '800px'
const loginPanelHeight = '400px'
const currentTab = ref(0)
const tabList = ref<ComponentMap[]>([
  { name: '免密登录', componentName: PhoneCodeForm },
  { name: '账号登录', componentName: AccountForm },
  { name: '扫码登录', componentName: QcodeForm }
])
const changeTab = (i: number) => {
  currentTab.value = i
}
</script>

<style lang="scss" scoped>
.login__page {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: v-bind(bgColor);

  &__panel {
    width: v-bind(loginPanelWidth);
    height: v-bind(loginPanelHeight);
    padding: 25px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: calc((100vh - v-bind(loginPanelHeight)) / 2);
    box-shadow: 0 0 20px 2px #f1f1f1;
    display: flex;

    &__logo {
      width: 40%;
      // background-image: url('日出.jpg');
      text-align: center;

      // background-size: 100%;
      > img {
        width: 80%;
        margin-top: 50%;
        margin-top: calc((v-bind(loginPanelHeight) - 144px) / 2);
      }
    }

    &__line {
      width: 1px;
      background-color: #f1f1f1;
      margin: 0 10px;
      height: v-bind(loginPanelHeight);
    }

    &__form {
      flex: 1;

      .tabs {
        display: flex;
        height: 45px;
        line-height: 45px;
        text-align: center;

        .tabItem {
          flex: 1;
          cursor: pointer;

          &.selected,
          &:hover {
            color: #f00;
          }
        }
      }
    }
  }

  &__footer {
    position: fixed;
    left: 50%;
    bottom: 10px;
    margin-left: -100px;

    > span {
      width: 200px;
      color: #f1f1f1;
      text-align: center;
    }
  }
}
</style>
