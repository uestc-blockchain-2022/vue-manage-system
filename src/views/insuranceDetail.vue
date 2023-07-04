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
                            <div class="basic-info">保险公司:<span>众泰保险</span></div>
                            <div class="basic-info">被保险人:<span>张三</span></div>
                            <div class="basic-info">合同号:<span>CA2006015</span></div>
                        </el-col>
                        <el-col :span="8">
                            <div class="basic-info">保险货物项目:<span>易碎货品及包装</span></div>
                            <div class="basic-info">包装:<span>塑封</span></div>
                            <div class="basic-info">数量:<span>200件</span></div>
                        </el-col>
                        <el-col :span="8">
                            <div class="basic-info">保险金额:<span>20000元</span></div>
                            <div class="basic-info">保费:<span>100元</span></div>

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
                                货品加工全生命周期
                            </span>
                        </div>
                    </template>
                    <el-timeline>
                        <el-timeline-item timestamp="2022/12/13" placement="top">
                            <el-card>
                                <h4>保障生效</h4>
                                <p>创建时间:2023/12/13 20:46</p>
                                <p>交易哈希:f231ad2b53c14adf123cbe2a</p>
                                <p>区块地址:0xf231ad2b53c14adf123cbe2a1c2a3f4d</p>
                                <p>合约地址:0x2a12bf23ead53c14ff4d1231ada3cbc2</p>
                                <p>区块高度:1065</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2023/12/14" placement="top">
                            <el-card>
                                <h4>进入理赔流程</h4>
                                <p>创建时间:2023/12/13 20:46</p>
                                <p>交易哈希:f231ad2b53c14adf123cbe2a</p>
                                <p>区块地址:0xf231ad2b53c14adf123cbe2a1c2a3f4d</p>
                                <p>合约地址:0x2a12bf23ead53c14ff4d1231ada3cbc2</p>
                                <p>区块高度:1154</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2023/12/31" placement="top">
                            <el-card>
                                <h4>理赔完成</h4>
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