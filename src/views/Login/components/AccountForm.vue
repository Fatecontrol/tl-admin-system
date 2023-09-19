<template>
  <div class="phone__code__form">
    <el-form
      ref="ruleFormRef"
      :model="accountForm"
      :rules="accountFormRules"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item prop="username">
        <el-input
          prefix-icon="UserFilled"
          v-model="accountForm.username"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          size="large"
          prefix-icon="UserFilled"
          type="password"
          v-model="accountForm.password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="flex login-line">
          <div class="flex-item">
            <el-input
              size="large"
              prefix-icon="PictureRounded"
              v-model="accountForm.imgcode"
              placeholder="请输入图片验证码"
            />
          </div>
          <div class="code-btn">
            <img @click="getImgCode" :src="imgCodeSrc" alt="" />
          </div>
        </div>
      </el-form-item>
      <el-form-item class="login-line">
        <div class="flex-item">
          <el-checkbox v-model="accountForm.saveUserName">记住用户名</el-checkbox>
        </div>
        <div class="flex-item">
          <el-checkbox v-model="accountForm.saveUserPass">记住密码</el-checkbox>
        </div>
        <div class="flex-item">
          <router-link to="/ResetPwd">忘记密码?</router-link>
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
import type { AccountForm } from '../types/login-type'
import type { FormInstance } from 'element-plus'
import { accountFormRules } from '../rules'
import { useGetImgCode } from '../composable'
// 图形验证码
const { imgCodeSrc, getImgCode } = useGetImgCode()
import { useHandleSaveUser } from '../composable/account'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const accountForm = reactive<AccountForm>({
  username: '',
  password: '',
  imgcode: '',
  saveUserName: false,
  saveUserPass: false
})
const { saveLocalUserNameOrPas, getLocalUserNameOrPas } = useHandleSaveUser(accountForm)
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      saveLocalUserNameOrPas()
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

onMounted(() => {
  getLocalUserNameOrPas()
})
</script>

<style lang="scss" scoped>
.login-line {
  width: 100%;
  justify-content: space-between;
  .flex-item {
    flex: 1;
  }

  :deep(img) {
    width: 100px;
    height: 38px;
  }

  img {
    margin-left: 10px;
    height: 40px;
    cursor: pointer;
  }
}

.login-btn {
  width: 100%;
}
a {
  text-decoration: none;
  color: #666;
}
</style>
