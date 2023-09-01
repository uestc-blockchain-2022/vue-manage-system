<template>
	<div class="container">
		<span>
			用户账号:
		</span>
		<span><el-input></el-input></span>
		<span class="right-button"><el-button type="primary">查询</el-button></span>
	</div>
	<div class="parent">
		<div class="permiss-panel">
			<el-card class="box-card">
				<template #header>
				<div class="card-header">
					<span>当前登录用户账号: {{username}}</span>
					<span>当前操作账号: xxxxxx</span>
					<el-button class="button" type="primary">提交</el-button>
				</div>
				</template>
				<div class="card-content">
					<div class="card-half">
						<p class="card-hint">用户拥有权限组</p>
						<div class="content-op-area">
							<el-row style="margin-top: 30px;">
								<el-button v-if="super_permiss" @click="super_permiss=!super_permiss" style="margin: auto; color:firebrick;" :icon="UserFilled">超级管理员</el-button>
							</el-row>
							<el-row style="margin-top: 30px;">
								<el-button v-if="system_permiss" @click="system_permiss=!system_permiss" style="margin: auto; color: goldenrod;" :icon="UserFilled">系统管理员</el-button>
							</el-row>
							<el-row style="margin-top: 30px;">
								<el-button v-if="normal_permiss" @click="normal_permiss=!normal_permiss" style="margin: auto; color: darkgreen;" :icon="UserFilled">普通用户</el-button>
							</el-row>
						</div>
					</div>
					<div class="card-mid">
						<el-row><el-icon :size="80"><DArrowRight /></el-icon></el-row>
						<el-row><el-icon :size="80"><DArrowLeft /></el-icon></el-row>
					</div>
					<div class="card-half">
						<p class="card-hint">全部权限组</p>
						<div class="content-op-area">
							<el-row style="margin-top: 30px;">
								<el-button @click="super_permiss=true" style="margin: auto; color:firebrick;" :icon="UserFilled">超级管理员</el-button>
							</el-row>
							<el-row style="margin-top: 30px;">
								<el-button @click="system_permiss=true" style="margin: auto; color: goldenrod;" :icon="UserFilled">系统管理员</el-button>
							</el-row>
							<el-row style="margin-top: 30px;">
								<el-button @click="normal_permiss=true" style="margin: auto; color: darkgreen;" :icon="UserFilled">普通用户</el-button>
							</el-row>
						</div>
					</div>
				</div>
			</el-card>
		</div>
		<div class="right-bar">
			<el-row style="color: red; padding-bottom: 40px;">*授权说明</el-row>
			<el-row style="padding-bottom: 30px;">超级管理员：拥有所有权限，可以管理所有模块</el-row>
			<el-row style="padding-bottom: 30px;">系统管理员：不具有平台管理和告警管理模块权限，拥有其余权限</el-row>
			<el-row style="padding-bottom: 30px;">普通用户：只具有各个数据平台的非管理权限</el-row>
		</div>
	</div>
</template>

<script setup lang="ts" name="permission">
import { ref } from 'vue';
import { ElOption, ElTree } from 'element-plus';
import { usePermissStore } from '../store/permiss';
import { UserFilled } from '@element-plus/icons-vue';

const role = ref<string>('admin');

let super_permiss = ref(true);
let system_permiss = ref(true);
let normal_permiss = ref(true);
const username = localStorage.getItem("ms_username");

interface Tree {
	id: string;
	label: string;
	children?: Tree[];
}



const permiss = usePermissStore();

// 获取当前权限
const checkedKeys = ref<string[]>([]);
const getPremission = () => {
	// 请求接口返回权限
	checkedKeys.value = permiss.defaultList[role.value];
};
getPremission();

// 保存权限
const tree = ref<InstanceType<typeof ElTree>>();
const onSubmit = () => {
	// 获取选中的权限
	console.log(tree.value!.getCheckedKeys(false));
};

const handleChange = (val: string[]) => {
	tree.value!.setCheckedKeys(permiss.defaultList[role.value]);
};

const handlePermiss = () => {
	console.log("abcnd")
}
</script>

<style scoped>
.tree-wrapper {
	max-width: 500px;
}
.label {
	font-size: 14px;
}

.el-input {
	max-width: 300px;
}
.parent {
	display: flex;
	height:fit-content;
}

.permiss-panel {
	flex: 65%;
	padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.right-bar {
	flex: 35%;
	padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}

.right-button {
}
.card-content {
	display: flex;
}

.card-half {
	flex: 44%;
}

.card-hint {
  text-align: center; /* 居中文本 */
  color: gray; /* 深灰色颜色 */
}

.content-op-area {
	padding: 60px;
    background: lightgray;
    border-radius: 5px;
}

.card-mid {
	position: relative;
	top: 80px;
}
</style>
