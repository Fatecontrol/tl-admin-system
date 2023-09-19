<template>
  <div class="phone__code__form">
    <el-form
      ref="ruleFormRef"
      :model="loginForm"
      :rules="phoneCodeFormRules"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item prop="phone">
        <el-input prefix-icon="UserFilled" v-model="loginForm.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item prop="smscode">
        <div class="flex login-line">
          <div class="flex-item">
            <el-input
              size="large"
              prefix-icon="Picture"
              v-model="loginForm.smscode"
              placeholder="请输入短信验证码"
            />
          </div>
          <div class="code-btn">
            <el-button :disabled="disabled" type="primary" size="large" @click="getSmsCode">{{
              smsCodeBtnText
            }}</el-button>
          </div>
        </div>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="flex login-line">
          <div class="flex-item">
            <el-input
              size="large"
              prefix-icon="PictureRounded"
              v-model="loginForm.imgcode"
              placeholder="请输入图片验证码"
            />
          </div>
          <div class="code-btn">
            <img @click="getImgCode" :src="imgCodeSrc" alt="" />
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <div>
          <el-checkbox v-model="loginForm.savePhone">记住用户名</el-checkbox>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" round type="danger" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import type { PhoneCodeForm } from '../types/login-type'
import type { FormInstance } from 'element-plus'
import { phoneCodeFormRules } from '../rules'
import { useGetPhoneCode, useHandleSaveUser } from '../composable/phone-code'
import { useGetImgCode } from '../composable'
// 图形验证码
const { imgCodeSrc, getImgCode } = useGetImgCode()

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const loginForm = reactive<PhoneCodeForm>({
  phone: '',
  smscode: '',
  imgcode: '',
  savePhone: false
})
const { disabled, getSmsCode, smsCodeBtnText } = useGetPhoneCode(loginForm)
const { saveLocalUser, getLocalUser } = useHandleSaveUser(loginForm)
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 1. 点击登录按钮,判断是否保存用户名,如果保存用户名,则将用户名和保存的状态存储到本地
      console.log(loginForm.savePhone)
      saveLocalUser()
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

onMounted(() => {
  getLocalUser()
})
</script>

<style lang="scss" scoped>
.login-line {
  width: 100%;
  justify-content: space-between;
  .flex-item {
    flex: 1;
  }
  .code-btn {
    width: 100px;
    margin-left: 10px;

    :deep(.el-button),
    :deep(img) {
      width: 100px;
      height: 38px;
    }

    &:deep(.el-button) {
      font-size: 12px;
    }

    img {
      height: 40px;
      cursor: pointer;
    }
  }
}
.login-btn {
  width: 100%;
}
</style>
