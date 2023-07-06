<template>
    <div>
        <el-row :gutter="20">
            <el-col :span='24'>
                <el-card>
                    <template #header>
                        <div class="card-header">
                            <span>基本信息</span>
                        </div>
                    </template>
                    <el-row>
                        <el-col :span="8">
                            <div class="basic-info">贷款人:<span>zhangsan</span></div>
                            <div class="basic-info">借款人:<span>lisi</span></div>
                            <div class="basic-info">贷款额度:<span>60000</span></div>
                        </el-col>
                        <el-col :span="8">
                            <div class="basic-info">借款日期:<span>2022-12-13</span></div>
                            <div class="basic-info">还款期限:<span>2023-1-1</span></div>
                            <div class="basic-info">关联订单号:<span>S202213576</span></div>
                        </el-col>
                        <el-col :span="8">
                            <div class="basic-info">分期还款:<span>一次付清</span></div>
                            <div class="basic-info">贷款利率:<span>0%</span></div>
                            <div class="basic-info">当前状态:<span>已还款</span></div>
                        </el-col>
                    </el-row>
                    
                </el-card>
            </el-col>    
        </el-row>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card>
                    <template #header>
                        <div class="card-header">
                            <span>
                                贷款合同全生命周期
                            </span>
                        </div>
                    </template>
                    <el-timeline>
                        <el-timeline-item timestamp="2022/12/13" placement="top">
                            <el-card>
                                <h4>贷款合同提交</h4>
                                <p>创建时间:2023/12/13 20:46</p>
                                <p>交易哈希:f231ad2b53c14adf123cbe2a</p>
                                <p>区块地址:0xf231ad2b53c14adf123cbe2a1c2a3f4d</p>
                                <p>合约地址:0x2a12bf23ead53c14ff4d1231ada3cbc2</p>
                                <p>区块高度:1065</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2023/12/14" placement="top">
                            <el-card>
                                <h4>审核通过</h4>
                                <p>创建时间:2023/12/13 20:46</p>
                                <p>交易哈希:f231ad2b53c14adf123cbe2a</p>
                                <p>区块地址:0xf231ad2b53c14adf123cbe2a1c2a3f4d</p>
                                <p>合约地址:0x2a12bf23ead53c14ff4d1231ada3cbc2</p>
                                <p>区块高度:1154</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2023/12/31" placement="top">
                            <el-card>
                                <h4>贷款偿还</h4>
                                <p>创建时间:2023/12/13 20:46</p>
                                <p>交易哈希:f231ad2b53c14adf123cbe2a</p>
                                <p>区块地址:0xf231ad2b53c14adf123cbe2a1c2a3f4d</p>
                                <p>合约地址:0x2a12bf23ead53c14ff4d1231ada3cbc2</p>
                                <p>区块高度:2045</p>
                            </el-card>
                        </el-timeline-item>
                    </el-timeline>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>