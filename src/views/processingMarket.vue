<template>
	<div>
		<div class="container">
			<div class="handle-box">
				<el-date-picker
					v-model="startDateValue"
					type="date"
					placeholder="申请时间"
					size='default'
      			/>
				<el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
				<el-table-column prop="processingId" label="加工单号"></el-table-column>
				<el-table-column prop="orderId" label="订单编号"></el-table-column>
				<el-table-column prop="sellerId" label="商家编号"></el-table-column>
                <el-table-column prop="submitTime" label="申请时间"></el-table-column>
				<el-table-column prop="quantity" label="加工数目"></el-table-column>
                <el-table-column prop="demand" label="加工需求"></el-table-column>
				<el-table-column label="操作" width="320" align="center">
					<template #default="scope">
						<el-button @click="handleEdit(scope.$index, scope.row)" v-permiss="15">
							承接
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
import { Delete, Edit, Search, Plus, View } from '@element-plus/icons-vue';
import { fetchData , putData } from '../api/index';
import { useProcessingStore } from '../store/processingInfo';
import router from '../router/index'
import { StrokeStyle } from 'vue3-baidu-map-gl';
interface TableItem {
	id: number;
	processingId: string;
    orderId: string;
    sellerId: string;
    submitTime: string;
	quantity: number;
    secondParty: string;
    demand: string;
	state: string;
}

const query = reactive({
	reqDate: '',
	secondParty: '',
	state: '',
	pageIndex: 1,
	pageSize: 10
});
// const tableData = ref<TableItem[]>([]);
let username = localStorage.getItem('ms_username');
const processingData = useProcessingStore();
let tableData = ref<TableItem[]>([]);
tableData.value = processingData.getWaiting;
const pageTotal = ref(0);
//日期查询
const startDateValue = ref('');
const closeDateValue = ref('');
// 获取表格数据

// 查询操作
const handleSearch = () => {
	query.pageIndex = 1;
};
// 分页导航
const handlePageChange = (val: number) => {
	query.pageIndex = val;
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
    processingData.setStateById(row.id,'加工中',username as string);
	tableData.value = processingData.getWaiting;
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
