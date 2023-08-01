<template>
	<div class="container">
		<div class="mgb20">
			<span class="label">角色：</span>
			<el-select v-model="role" @change="handleChange">
				<el-option label="超级管理员" value="admin"></el-option>
				<el-option label="系统管理员" value="secondAdmin"></el-option>
				<el-option label="普通用户" value="user"></el-option>
			</el-select>
		</div>
		<div class="mgb20 tree-wrapper">
			<el-tree
				ref="tree"
				:data="data"
				node-key="id"
				default-expand-all
				show-checkbox
				:default-checked-keys="checkedKeys"
			/>
		</div>
		<el-button type="primary" @click="onSubmit">保存权限</el-button>
	</div>
</template>

<script setup lang="ts" name="permission">
import { ref } from 'vue';
import { ElOption, ElTree } from 'element-plus';
import { usePermissStore } from '../store/permiss';

const role = ref<string>('admin');

interface Tree {
	id: string;
	label: string;
	children?: Tree[];
}

const data: Tree[] = [
	{
		id: '1',
		label: '交易平台',
		children: [
			{
				id:'10',
				label:'交易列表'
			},
			{
				id:'11',
				label:'交易详情'
			}
		]
	},
	{
		id: '2',
		label: '贷款平台',
		children: [
			{
				id: '12',
				label: '贷款列表'
			},
			{
				id: '13',
				label: '贷款详情'
			}
		]
	},
	{
		id: '3',
		label: '加工平台',
		children: [
			{
				id: '14',
				label: '加工列表',
			},
			{
				id:'15',
				label:'加工详情'
			}
		]
	},
	{
		id: '4',
		label: '仓储平台',
	},
	{
		id: '5',
		label: '物流信息'
	},
	{
		id: '6',
		label: '保险平台',
		children: [
			{
				id:'16',
				label:'保险单详情'
			},
			{
				id:'17',
				label:'保险单列表'
			}
		]
	},
	{
		id: '7',
		label: '平台管理',
		children: [
			{
				id:'18',
				label:'合约管理'
			},
			{
				id:'19',
				label:'节点管理'
			},
			{
				id:'20',
				label:'平台总览'
			},
			{
				id:'21',
				label:'区块查询'
			}
		]
	},
	{
		id: '8',
		label: '系统管理',
		children: [
			{
				id:'22',
				label:'账户管理',
			},
			{
				id:'23',
				label:'权限管理'
			}
		]
	},
	{
		id:'9',
		label:'运维管理',
		children: [
			{
				id:'24',
				label:'告警列表'
			},
			{
				id:'25',
				label:'威胁溯源'
			}
		]
	}
];

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
</script>

<style scoped>
.tree-wrapper {
	max-width: 500px;
}
.label {
	font-size: 14px;
}
</style>
