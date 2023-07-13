<template>
    <div class="container">
        <div class="form-box">
            <el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>  
                <el-form-item label="SKU" prop="sku">
                    <el-input v-model="form.date1"></el-input>
                </el-form-item>
                <el-form-item label="商品种类" prop="region">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option key="cnchanta" label="cnchanta" value="cnchanta"></el-option>
                        <el-option key="sporlan" label="sporlan" value="sporlan"></el-option>
                        <el-option key="transformer" label="transformer" value="transformer"></el-option>
                    </el-select>
                </el-form-item>
               
                <el-form-item label="材质" prop="name">
                    <el-input v-model="form.date2"></el-input>
                </el-form-item>
                <el-form-item label="数量" prop="name">
                    <el-input v-model="form.delivery"></el-input>
                </el-form-item>
                <el-form-item label="重量" prop="name">
                    <el-input v-model="form.resource"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="desc">
                    <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit(formRef)">入库提交</el-button>
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

const options = [
    {
        value: 'guangdong',
        label: '广东省',
        children: [
            {
                value: 'guangzhou',
                label: '广州市',
                children: [
                    {
                        value: 'tianhe',
                        label: '天河区',
                    },
                    {
                        value: 'haizhu',
                        label: '海珠区',
                    },
                ],
            },
            {
                value: 'dongguan',
                label: '东莞市',
                children: [
                    {
                        value: 'changan',
                        label: '长安镇',
                    },
                    {
                        value: 'humen',
                        label: '虎门镇',
                    },
                ],
            },
        ],
    },
    {
        value: 'hunan',
        label: '湖南省',
        children: [
            {
                value: 'changsha',
                label: '长沙市',
                children: [
                    {
                        value: 'yuelu',
                        label: '岳麓区',
                    },
                ],
            },
        ],
    },
];
const rules: FormRules = {
    name: [{ required: true, message: '请输入表单名称', trigger: 'blur' }],
};
const formRef = ref<FormInstance>();
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: '',
    type: ['小明'],
    resource: '',
    desc: '',
    options: [],
});
// 提交
const onSubmit = (formEl: FormInstance | undefined) => {
    // 表单校验
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            console.log(form);
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
