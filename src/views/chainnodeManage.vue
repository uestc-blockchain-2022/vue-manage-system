<template>
	<div>
		<div class="container">
			<div class="handle-box">  
				<el-input v-model="query.borrower" placeholder="节点名称" class="handle-input mr10"></el-input>
				<el-button type="primary" :icon="Plus">查询</el-button>
			</div>
			<el-table :data="tableData" class="table" header-cell-class-name="table-header" stripe>
				<el-table-column prop="name" label="节点名称" width="55" align="center"></el-table-column>
				<el-table-column prop="position" label="节点位置"></el-table-column>
				<el-table-column prop="state" label="状态" width="70"></el-table-column>
				<el-table-column label="同步" align="center">
					<template #default="scope">
						<el-tag v-if="scope.row.isSync" type="success">已同步</el-tag>
						<el-tag v-else type="info">未同步</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="blockHeight" label="区块高度"></el-table-column>
                <el-table-column prop="hash" label="当前区块哈希值" width="350"></el-table-column>
                <el-table-column prop="time" label="最新区块时间"></el-table-column>
				<el-table-column label="操作" width="320" align="center">
					<template #default="scope">
						<el-button text :icon="Open" @click="handleDetail()" v-permiss="15">启动</el-button>
						<el-button text :icon="TurnOff" class="red" @click="handleEdit(scope.$index, scope.row)" v-permiss="15">
							关机
						</el-button>
						<el-button text :icon="RefreshLeft" class="yellow" @click="handleDelete(scope.$index)" v-permiss="16">
							重启
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					background
					layout="total, prev, pager, next"
					:current-page="query.pageIndex"
					:page-size="query.pageSize"
					:total="pageTotal"
					@current-change="handlePageChange"
				></el-pagination>
			</div>
		</div>

		<!-- 编辑弹出框 -->
		<el-dialog title="编辑" v-model="editVisible" width="30%">
			<el-form label-width="70px">
				<el-form-item label="用户名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="form.address"></el-input>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="editVisible = false">取 消</el-button>
					<el-button type="primary" @click="saveEdit">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts" name="basetable">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Delete, Edit, Search, Plus, View, RefreshLeft, SwitchButton, TurnOff, Open } from '@element-plus/icons-vue';
import { fetchData } from '../api/index';
import router from '../router/index'
interface TableItem {
	name: string;
	position: string;
	state: string;
	isSync: boolean;
	blockHeight: string;
	hash: string;
    time: string;
}

const query = reactive({
	beginDate: '',
	closeDate: '',
	borrower: '',
	lender: '',
	pageIndex: 1,
	pageSize: 10
});
const tableData = ref<TableItem[]>([]);
const pageTotal = ref(0);
//日期查询
const startDateValue = ref('');
const closeDateValue = ref('');
// 获取表格数据
const getData = (url : string) => {
	fetchData(url).then(res => {
		tableData.value = res.data.list;
		pageTotal.value = res.data.pageTotal || 50;
	});
	console.log(tableData.value)
};
getData('/chainnodeInfo.json');

// 查询操作
const handleSearch = () => {
	query.pageIndex = 1;
	getData('/chainnodeInfo.json');
};
// 分页导航
const handlePageChange = (val: number) => {
	query.pageIndex = val;
	getData('/chainnodeInfo.json');
};

// 删除操作
const handleDelete = (index: number) => {
	// 二次确认删除
	ElMessageBox.confirm('确定要删除吗？', '提示', {
		type: 'warning'
	})
		.then(() => {
			ElMessage.success('删除成功');
			tableData.value.splice(index, 1);
		})
		.catch(() => {});
};

function handleDetail(this : any) 
{
	router.push('expressDetail');
};
// 表格编辑时弹窗和保存
const editVisible = ref(false);
let form = reactive({
	name: '',
	address: ''
});
let idx: number = -1;
const handleEdit = (index: number, row: any) => {
	//idx = index;
	//form.name = row.name;
	//form.address = row.address;
	//editVisible.value = true;
};
const saveEdit = () => {
	//editVisible.value = false;
	//ElMessage.success(`修改第 ${idx + 1} 行成功`);
	//tableData.value[idx].name = form.name;
	//tableData.value[idx].address = form.address;
};
</script>

<style scoped>
.handle-box {
	margin-bottom: 20px;
}

.handle-select {
	width: 120px;
}

.handle-input {
	width: 300px;
}
.table {
	width: 100%;
	font-size: 14px;
}
.red {
	color: #F56C6C;
}
.yellow{
	color:goldenrod;
}
.mr10 {
	margin-right: 10px;
}
.table-td-thumb {
	display: block;
	margin: auto;
	width: 40px;
	height: 40px;
}
</style>
