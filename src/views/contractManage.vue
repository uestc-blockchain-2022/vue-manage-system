<template>
    <div class = "container">
        <el-row>
            <el-col :span="3">
                <div class="infoCard">
                    <el-icon :size="50" color="#626aef"><List /></el-icon>
                    <span class="info-item">贷款合约</span>
                    <el-button round>详情</el-button>
                </div>
            </el-col>    
            <el-col :span="3">
                <div class="infoCard">
                    <el-icon :size="50" color="#FF4081"><List /></el-icon>
                    <span class="info-item">发货合约</span>
                    <el-button round>详情</el-button>
                </div>
            </el-col>      
            <el-col :span="3">
                <div class="infoCard">
                    <el-icon :size="50" color="#FFC107"><List /></el-icon>
                    <span class="info-item">收货合约</span>
                    <el-button  round>详情</el-button>
                </div>
            </el-col> 
            <el-col :span="3">
                <div class="infoCard">
                    <el-icon :size="50" color="#39c5bb"><List /></el-icon>
                    <span class="info-item">还款合约</span>
                    <el-button round>详情</el-button>
                </div>
            </el-col> 
            <el-col :span="3">
                <div class="infoCard">
                    <el-icon :size="50" color="#00BCD4"><List /></el-icon>
                    <span class="info-item">加工合约</span>
                    <el-button round>详情</el-button>
                </div>
            </el-col> 
            <el-col :span="3">
                <div class="infoCard">
                    <el-icon :size="50" color="#4CAF50"><List /></el-icon>
                    <span class="info-item">保险合约</span>
                    <el-button round>详情</el-button>
                </div>
            </el-col> 
            <el-col :span="3">
                <div class="infoCard">
                    <el-icon :size="50" color="#03A9F4"><List /></el-icon>
                    <span class="info-item">转让合约</span>
                    <el-button round>详情</el-button>
                </div>
            </el-col> 
            <el-col :span="3">
                <div class="infoCard">
                    <el-icon :size="50" color="#FF5722"><List /></el-icon>
                    <span class="info-item">转让合约</span>
                    <el-button round>详情</el-button>
                </div>
            </el-col> 
        </el-row>
    </div>
    <div class="pagination">
        <el-pagination
            background
            layout="total, prev, pager, next"
            :current-page="pageIndex"
            :page-size="pageSize"
            :total="pageTotal"
            @current-change="handlePageChange"
        ></el-pagination>
	</div>
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>合约详情</span>
      </div>
    </template>
    <div class="cardItem">合约名称:贷款合约</div>
    <div class="cardItem">合约描述:把贷款单信息存储在区块链上</div>
    <div class="cardItem">合约内容:</div>
    <el-input
        v-model="textarea"
        :rows="20"
        type="textarea"
        placeholder="Please input"
        :readonly="true"
    />
  </el-card>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { fetchData } from '../api';
    import { List } from '@element-plus/icons-vue';
    
    let pageIndex = ref(2);
    let pageSize = ref(1);
    let pageTotal = ref(5);
    let textarea = ref('#include<stdio.h>\nint main()\n \{\n int a = 0;\n\}');
    
    function handlePageChange() {

    }

    const getData = (url : string)=> {
        fetchData(url).then((res)=>{
            textarea.value = res.data;
        })
    };

    getData("/smartContract.txt");
</script>

<style scoped>
.contractList {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.infoCard {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cardItem {
    padding: 5px;
}

.info-item {
    padding: 8px;
}

</style>