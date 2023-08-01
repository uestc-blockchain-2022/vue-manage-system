<template>
    <div class="container">
        <div class="form-box">
            <el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
                <el-form-item label="产品编码" prop="code">
                    <el-input v-model="form.code"></el-input>
                </el-form-item>  
                <el-form-item label="名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
               
                <el-form-item>
                    <el-button type="primary" @click="onSubmit(formRef)">出库提交</el-button>
                    <el-button @click="onReset(formRef)">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts" name="baseform">
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { transInfoStore } from '../store/trans';
let transInfo = transInfoStore();

const rules: FormRules = {
    code: [{ required: true, message: '请输入产品编码', trigger: 'blur' }],
    name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
};
const formRef = ref<FormInstance>();
const form = reactive({
    code: '',
    name: '',
});
// 提交
const onSubmit = (formEl: FormInstance | undefined) => {
    // 表单校验
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            console.log(form);
            // transInfo.addGoods(form.code,form.name,form.type,form.num,form.unit,form.money,form.address);
            ElMessage.success('提交成功！');
        } else {
            return false;
        }
    });
};
// 重置
const onReset = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>
