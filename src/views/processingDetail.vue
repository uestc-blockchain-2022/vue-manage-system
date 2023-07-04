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
                        <el-col :span="6">
                            <div class="basic-info">商户名:<span>速食喵旗舰店</span></div>
                            <div class="basic-info">商户编号:<span>09668465</span></div>
                            <div class="basic-info">订单编号:<span>2023756231</span></div>
                        </el-col>
                        <el-col :span="6">
                            <div class="basic-info">提交日期:<span>2022-12-13</span></div>
                            <div class="basic-info">商品名称:<span>牛肉自热火锅</span></div>
                            <div class="basic-info">关联订单号:<span>S202213576</span></div>
                        </el-col>
                        <el-col :span="6">
                            <div class="basic-info">加工方:<span>北坡包装</span></div>
                            <div class="basic-info">预计完工时间:<span>2022-12-17</span></div>
                            <div class="basic-info">当前状态:<span>已完成</span></div>
                        </el-col>
                        <el-col :span="6">
                            <div class="basic-info">加工需求:</div>
                            <div class="basic-info">商品塑封、打包装箱</div>
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
                                <h4>加工需求提交</h4>
                                <p>创建时间:2023/12/13 20:46</p>
                                <p>交易哈希:f231ad2b53c14adf123cbe2a</p>
                                <p>区块地址:0xf231ad2b53c14adf123cbe2a1c2a3f4d</p>
                                <p>合约地址:0x2a12bf23ead53c14ff4d1231ada3cbc2</p>
                                <p>区块高度:1065</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2023/12/14" placement="top">
                            <el-card>
                                <h4>工厂承包</h4>
                                <p>创建时间:2023/12/13 20:46</p>
                                <p>交易哈希:f231ad2b53c14adf123cbe2a</p>
                                <p>区块地址:0xf231ad2b53c14adf123cbe2a1c2a3f4d</p>
                                <p>合约地址:0x2a12bf23ead53c14ff4d1231ada3cbc2</p>
                                <p>区块高度:1154</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2023/12/31" placement="top">
                            <el-card>
                                <h4>加工完成</h4>
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