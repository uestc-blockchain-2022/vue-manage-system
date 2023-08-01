<template>
    <div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" @click="exportXlsx">导出</el-button>
                 <el-button type="primary" >新增</el-button>
            </div>
            <el-table :data="tableData" border class="table" header-cell-class-name="table-header">
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="订单号"></el-table-column>
                <el-table-column prop="sno" label="商品号"></el-table-column>
                <el-table-column prop="code" label="商品编码"></el-table-column>
                <el-table-column prop="class" label="购买数量"></el-table-column>
                <el-table-column prop="age" label="下单金额"></el-table-column>
                <el-table-column prop="sex" label="买家id"></el-table-column>
                <el-table-column prop="status" label="交易状态"></el-table-column>
                <el-table-column label="操作" width="220" align="center">
					<template #default="scope">
						<el-button text :icon="Edit" @click="handleEdit(scope.$index, scope.row)" v-permiss="15">
							加工
						</el-button>
					</template>
				</el-table-column>
            </el-table>
        </div>

        
		<!-- 编辑弹出框 -->
		<el-dialog title="编辑" v-model="editVisible" width="30%">
			<el-form label-width="70px">
				<el-form-item label="加工单号">
					<el-input v-model="form.processingId"></el-input>
				</el-form-item>
				<el-form-item label="订单编号">
					<el-input v-model="form.orderId"></el-input>
				</el-form-item>
				<el-form-item label="商家编号">
					<el-input v-model="form.sellerId"></el-input>
				</el-form-item>
				<el-form-item label="申请时间">
					<el-input v-model="form.submitTime"></el-input>
				</el-form-item>
				<el-form-item label="加工数目">
					<el-input v-model="form.quantity"></el-input>
				</el-form-item>
				<el-form-item label="承接方">
					<el-input v-model="form.secondParty"></el-input>
				</el-form-item>
				<el-form-item label="加工需求">
					<el-input v-model="form.demand"></el-input>
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

<script setup lang="ts" name="export">
import { ref, reactive } from 'vue';
import * as XLSX from 'xlsx';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Delete, Edit, Search, Plus } from '@element-plus/icons-vue';
import { useProcessingStore } from '../store/processingInfo';

let processingData = useProcessingStore();

interface TableItem {
    id: number;
    name: string;
    sno: string;
    code: string;
    class: string;
    age: string;
    sex: string;
    status: string;
}

const tableData = ref<TableItem[]>([]);
// 获取表格数据
const getData = () => {
    tableData.value = [
        {
            id: 1,
            name: 'JWCD2023062301',
            sno: 'S001',
            code: 'TE20230134554',
            class: '12',
            age: '￥123',
            sex: '100010',
            status: '已付款',
        },
        {
            id: 2,
            name: 'JWCD2023062302',
            sno: 'S002',
            code: 'TE20230134554',
            class: '13',
            age: '￥224',
            sex: '100011',
            status: '已发货',
        },
    ];
};
getData();

const list = [['序号', '姓名', '学号', '班级', '年龄', '性别']];
const exportXlsx = () => {
    tableData.value.map((item: any, i: number) => {
        const arr: any[] = [i + 1];
        arr.push(...[item.name, item.sno, item.class, item.age, item.sex]);
        list.push(arr);
    });
    let WorkSheet = XLSX.utils.aoa_to_sheet(list);
    let new_workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(new_workbook, WorkSheet, '第一页');
    XLSX.writeFile(new_workbook, `表格.xlsx`);
};

// 表格编辑时弹窗和保存
const editVisible = ref(false);
let form = reactive({
	processingId: '',
	orderId: '',
	sellerId: '',
	submitTime: '',
	quantity: 0,
	secondParty: '',
	demand: '',
});
let idx: number = -1;
const handleEdit = (index: number, row: any) => {
	idx = index;
	form.orderId = row.name;
	editVisible.value = true;
};
const saveEdit = () => {
	editVisible.value = false;
    processingData.addOne(form.processingId,
	form.orderId,
	form.sellerId,
	form.submitTime,
	form.quantity,
	form.secondParty,
	form.demand);
	ElMessage.success(`新增加工单成功`);
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
    color: #f56c6c;
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
