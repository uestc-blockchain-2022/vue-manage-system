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
				<el-table-column label="状态" align="center">
					<template #default="scope">
						<el-tag
							:type="scope.row.state === '已完成' ? 'success' : scope.row.state === '待承接' ? 'warning'  : ''">
							{{ scope.row.state }}
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="320" align="center">
					<template #default="scope">
						<el-button v-if="scope.row.state == '已完成'" disabled @click="handleEdit(scope.$index, scope.row)" v-permiss="15">
							完工
						</el-button>
						<el-button v-else @click="handleEdit(scope.$index, scope.row)" v-permiss="15">
							完工
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

		<el-dialog title="填写物流信息" v-model="dialogVisible" :before-close="handleClose">
			<el-form :model="expressForm" :rules="rules" ref="ruleFormRef">
				<el-form-item label="快递单号" prop="expressId">
					<el-input v-model="expressForm.expressId" placeholder="请输入快递单号"></el-input>
				</el-form-item>
				<el-form-item label="发货人姓名" prop="sender">
					<el-input v-model="expressForm.sender" placeholder="请输入发货人姓名"></el-input>
				</el-form-item>
				<el-form-item label="收货人姓名" prop="receiver">
					<el-input v-model="expressForm.receiver" placeholder="请输入收货人姓名"></el-input>
				</el-form-item>
				<el-form-item label="提交时间" required>
					<el-col :span="11">
						<el-form-item prop="submitDate">
							<el-date-picker
							v-model="expressForm.submitDate"
							value-format="YYYY-MM-DD"
							type="date"
							placeholder="选择日期"
							style="width: 100%;"
							/>
						</el-form-item>
					</el-col>
					<el-col :span="2" class="text-center">
						<span class="text-gray-500">-</span>
					</el-col>
					<el-col :span="11">
						<el-form-item prop="submitTime">
							<el-time-select
						v-model="expressForm.submitTime"
						placeholder="选择时间"
						style="width: 100%;"
						/>
						</el-form-item>
					</el-col>
				</el-form-item>
				<el-form-item label="物流公司" prop="company">
					<el-input v-model="expressForm.company" placeholder="请输入物流公司名称"></el-input>
				</el-form-item>
				<el-form-item label="货品重量" prop="weight">
					<el-input v-model="expressForm.weight" placeholder="请输入货物重量，如：10kg"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
      				<el-button>Cancel</el-button>
				</el-form-item>
			</el-form>
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
import type { FormInstance, FormRules } from 'element-plus'
import { ExpressForm } from '../store/expressInfo'
import { useExpressStore } from '../store/expressInfo'

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

const expressForm = reactive<ExpressForm>({
	expressId: '',
	sender:'',
	receiver:'',
	submitDate:'',
	submitTime:'',
	company:'',
	weight:''
});

const ruleFormRef = ref<FormInstance>();

const rules = reactive<FormRules<ExpressForm>>({
	expressId:[
		{ required: true,message: '快递单号不能为空！',trigger:'blur' }
	],
	sender:[
		{ required: true,message: '发货人不能为空！',trigger:'blur' }
	],
	receiver:[
		{ required: true,message: '快递单号不能为空！',trigger:'blur' }
	],
	submitDate:[
		{ required: true,message: '提交日期不能为空！',trigger:'change'}
	],
	submitTime:[
		{ required: true,message: '提交时间不能为空！',trigger:'change'}
	],
	company:[
		{ required: true,message: '公司名称不能为空！',trigger:'blur' }
	],
	weight:[
		{ required: true,message:'重量不能为空',trigger:'blur' }
	]
});

const expressData = useExpressStore();
// const tableData = ref<TableItem[]>([]);
let rowId = -1;
const dialogVisible = ref(false);
const username = localStorage.getItem('ms_username');
const processingData = useProcessingStore();
let tableData = ref<TableItem[]>([]);
tableData.value = processingData.getAll;
console.log(tableData.value);
tableData.value = tableData.value.filter((item)=>{
    return item.secondParty == localStorage.getItem('ms_username');
});
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
	dialogVisible.value = true;
	rowId = row.id;

};
const saveEdit = () => {
	//editVisible.value = false;
	//ElMessage.success(`修改第 ${idx + 1} 行成功`);
	//tableData.value[idx].name = form.name;
	//tableData.value[idx].address = form.address;
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
	  expressData.AddRecord(expressForm);
	  ElMessage({
		message:"物流信息添加成功",
		type:'success'
	  });
	  processingData.setStateById(rowId,'已完成',username as string);
	  tableData.value = processingData.getAll;
	  tableData.value = tableData.value.filter((item)=>{
		return item.secondParty == localStorage.getItem('ms_username');
	})
    } 
	else {
      console.log('error submit!', fields)
	  ElMessage({
		message:'请按要求正确填写表单后提交',
		type:'warning'
	  })
    }
  })
}

function handleClose() {
	dialogVisible.value = false;
}
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
.text-center {
	text-align: center;
}
</style>
