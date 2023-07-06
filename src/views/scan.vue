<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="12" style="margin: auto;">
				<el-row :gutter="20" class="mgb20">
					<el-col :span="12">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-1">
								<div class="grid-cont-right">
									<div class="grid-num">1234</div>
									<div>当前快高</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="12">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-2">
								<div class="grid-cont-right">
									<div class="grid-num">321</div>
									<div>交易总量</div>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
				
				<el-row :gutter="20" class="mgb20">
					<el-col :span="12">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-3">
								<div class="grid-cont-right">
									<div class="grid-num">12</div>
									<div>正在处理交易数</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="12">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-4">
								<div class="grid-cont-right">
									<div class="grid-num">21</div>
									<div>节点数量</div>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover" style="height: 313px">
					<div  >
						<el-image :size="120" :src="imgurl" />
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="10">
			<el-card shadow="hover" style="width: 100%;">
				<div class="clearfix">
					<span>区块</span>
					<el-button style="float: right; padding: 3px 0" text>添加</el-button>
				</div>
				<el-table :show-header="false" :data="todoList" style="width: 100%">
					<el-table-column>
						<template #default="scope">
							<div class="todo-item" >
								{{ scope.row.height }}
							</div>
						</template>
					</el-table-column>
					<el-table-column>
						<template #default="scope">
							<div class="todo-item" >
								{{ scope.row.time }}
							</div>
						</template>
					</el-table-column>
					<el-table-column>
						<template #default="scope">
							<div class="todo-item" >
								{{ scope.row.txns }}
							</div>
						</template>
					</el-table-column>
					<el-table-column>
						<template #default="scope">
							<div class="todo-item" >
								{{ scope.row.node }}
							</div>
						</template>
					</el-table-column>
				</el-table>
			</el-card>
		</el-row>
		<el-row :gutter="10">
			<el-card shadow="hover" style="height: 403px;width: 100%;">
				<template #header>
					<div class="clearfix">
						<span>交易</span>
						<el-button style="float: right; padding: 3px 0" text>添加</el-button>
					</div>
				</template>
				<el-table :show-header="false" :data="transfer" style="width: 100%">
					<el-table-column>
						<template #default="scope">
							<div class="todo-item" >
								{{ scope.row.hash }}
							</div>
						</template>
					</el-table-column>
					<el-table-column>
						<template #default="scope">
							<div class="todo-item" >
								{{ scope.row.time }}
							</div>
						</template>
					</el-table-column>
					<el-table-column>
						<template #default="scope">
							<div class="todo-item" >
								{{ scope.row.from }}     -->
							</div>
						</template>
					</el-table-column>
					<el-table-column>
						<template #default="scope">
							<div class="todo-item" >
								{{ scope.row.to }}
							</div>
						</template>
					</el-table-column>
				</el-table>
			</el-card>
		</el-row>
	</div>
</template>

<script setup lang="ts" name="dashboard">
// import Schart from 'vue-schart';
import { reactive } from 'vue';
import imgurl from '../assets/img/20230704012455.png';
import imgurl2 from '../assets/img/20230704013344.png';

const name = localStorage.getItem('ms_username');
const role: string = name === 'admin' ? '超级管理员' : '普通用户';

const todoList = reactive([
	{
		height: '#52595198',
		time: '2023-06-01 18:54:22',
		txns: '80',
		node: 'TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH',
	},
	{
		height: '#52595197',
		time: '2023-06-01 18:54:22',
		txns: '123',
		node: 'TJAWMHQohgKfhm9TXJ2V8A5UG1WYTiFMgS',
	},
	{
		height: '#52595196',
		time: '2023-06-01 18:54:22',
		txns: '43',
		node: 'TVBVNa2Sp2WWNfDHLtumqnAAVRan1hAC3R',
	},
	{
		height: '#52595195',
		time: '2023-06-01 18:54:22',
		txns: '11',
		node: 'TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH',
	},
]);


const transfer = reactive([
	{
		hash: '40e61f5da988539bafba8a886ce3b17051444370098e74e29c4b5f0450d8a980',
		time: '2023-06-01 18:54:22',
		from: 'TV7dEBorpsFPwrDKfyM1RKrdtwYTSRXScv',
		to: 'TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH',
	},
	{
		hash: 'ddbb4c749951815e8509833936b442507f1e42bf4aeef71e5759b7031d7b974b',
		time: '2023-06-02 13:34:51',
		from: 'TWEKv5AWJftED3NiZK5EpKJjdL6RACZCUv',
		to: 'TKKtZUk9Lyjf83zdqdqk28ccMHDvPBXL7m',
	},
	{
		hash: '320ca599359c6d044e24102bcfcedb5a0addcc5872806a7e76a44749587b1a03',
		time: '2023-06-03 12:45:36',
		from: 'TFTXZp4sLu9Bd1dR2hLfmFDPTyUR717pHD',
		to: 'TAx3jwKJLhpPL6VQK131LZTm9GPsNLkJ6M',
	},
	{
		hash: 'de4456c221ce44fcd8a4d9e2cf5097be2f2d195b445d5fd22cab8ba72d339894',
		time: '2023-06-04 12:14:32',
		from: 'TX45bqLVzoMgrdGwWHgK9JpjndbSsDuGe3',
		to: 'TVBVNa2Sp2WWNfDHLtumqnAAVRan1hAC3R',
	},
]);
</script>

<style scoped>
.el-row {
	margin-bottom: 20px;
}

.grid-content {
	display: flex;
	align-items: center;
	height: 100px;
}

.grid-cont-right {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #999;
}

.grid-num {
	font-size: 30px;
	font-weight: bold;
}

.grid-con-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	color: #fff;
}

.grid-con-1 .grid-con-icon {
	background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
	color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
	background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
	color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
	background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
	color: rgb(242, 94, 67);
}
.grid-con-4 .grid-con-icon {
	background: rgb(242, 67, 219);
}

.grid-con-4 .grid-num {
	color: rgb(242, 67, 219);
}

.user-info {
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 2px solid #ccc;
	margin-bottom: 20px;
}

.user-info-cont {
	padding-left: 50px;
	flex: 1;
	font-size: 14px;
	color: #999;
}

.user-info-cont div:first-child {
	font-size: 30px;
	color: #222;
}

.user-info-list {
	font-size: 14px;
	color: #999;
	line-height: 25px;
}

.user-info-list span {
	margin-left: 70px;
}

.mgb20 {
	margin-bottom: 20px;
}

.todo-item {
	font-size: 14px;
}

.todo-item-del {
	text-decoration: line-through;
	color: #999;
}

.schart {
	width: 100%;
	height: 300px;
}
</style>
