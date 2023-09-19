<template>
  <div class="q__code__form">
    <div class="qcode__box">
      <img :class="{ end__img: endTime <= 0 }" :src="qcodeSrc" alt="" />
      <div class="end__box" v-if="endTime <= 0" @click="loadQcode">
        当前二维码已失效，点击重新加载
      </div>
    </div>
    <div class="tip-info">使用微信或者移动端扫码登录</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
const qcodeSrc = ref('')
let endTime = ref(0)
let timer: number
// 检测用户是否扫描二维码
const checkLogin = () => {}
// 加载二维码
const loadQcode = () => {
  qcodeSrc.value = new URL('../../../assets/qcode.png', import.meta.url).href
  endTime.value = 60
  timer = setInterval(() => {
    endTime.value--
    // 每隔一秒,检测用户是否扫码
    checkLogin()

    if (endTime.value <= 0) {
      timer && clearInterval(timer)
      timer = 0
    }
  }, 1000)
}
loadQcode()
onUnmounted(() => {
  timer && clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.q__code__form {
  .qcode__box {
    width: 65%;
    height: 65%;
    position: relative;
    margin: 0 auto;
    > img {
      width: 100%;
      height: 100%;
      display: block;
    }
    .end__box {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #00000055;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #f00;
      cursor: pointer;
    }
    .end__img {
      filter: brightness(10%);
    }
  }
  .tip-info {
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    color: var(--el-text-color-placeholder);
  }
}
</style>
