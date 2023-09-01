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
                                贷款合同全生命周期
                            </span>
                        </div>
                    </template>
                    <ul>
						<li class="icon-li center" v-for="(item, index) in statusList" :key="index">
							<div class="block-container">
                                <div class="left-half">
                                    <div class="circle center mgt10" :style=" {'background-color' :  item.color  }">{{ item.text }}</div>
								    <div class="mgt10">{{item.date}}</div>
								    <el-button round style="padding-top: 10px;">详情</el-button>
                                </div>
                                <div class="right-half" v-if="index!=statusList.length-1">
                                    <el-icon :size="80"><DArrowRight /></el-icon>
                                </div>
								
							</div>
						</li>
							
					</ul>
                    <el-row style="padding-top: 30px;">【{{ showState }} {{showTime}}】</el-row>
                    <el-card shadow="hover" style=" ">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <div class="mgb20">交易哈希值：2a73c1193bf337f8c68942a42f63c51db4f5cd06</div>
                                <div class="user-info-list">
                                    <span>业务类型：</span>
                                    <span>洗发水</span>
                                </div>
                                <div class="user-info-list">
                                    <span>交易类型：</span>
                                    <span>仓库划拨</span>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="mgb20">所在区块信息</div>
                                <div class="user-info-list">
                                    <span>区块高度：</span>
                                    <span>66454</span>
                                </div>
                                <div class="user-info-list">
                                    <span>创建时间</span>
                                    <span>2023-12-10 18:04:22</span>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="mgb20">共识信息</div>
                                <div class="user-info-list">
                                    <span>确认节点：</span>
                                    <span>仓储节点</span>
                                </div>
                                <div class="user-info-list">
                                    <span>确认时间：</span>
                                    <span>2023-12-11 21:04:22</span>
                                </div>
                                <div class="user-info-list">
                                    <span>确认状态：</span>
                                    <span>已确认</span>
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const showState = ref('合同开立');
const showTime = ref('2017-07-01 18:02:22')
const statusList =  [
	{
		text: '加工申请',
		date: '2017-07-01 18:02:22',
		color: "rgb(43,194,159)",
	},
	{
		text: '加工承接',
		date: '2017-07-01 18:02:22',
		color: "#FF8774",
	},
	{
		text: '加工开始',
		date: '2017-07-01 18:02:22',
		color: "rgb(140, 196, 51)",
	},
	{
		text: '加工完成',
		date: '2017-07-01 18:02:22',
		color: "rgb(96,91,217)",
	},
    {
        text: '成品发货',
        date: '2017-07-02 19:23:52',
        color: "#3282F6"
    }
];
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.mgt10 {
	margin-top: 10px;
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
	margin: auto;
	color: #fff;
  background-color: #000; /* 设置背景颜色 */
}
.center {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-li {
    display: inline-block;
		margin-right: 60px;
}

.block-container {
    display: flex;
}

.left-half {
    flex: 80%;
}

.right-half {
    flex: 20%;
    position: relative;
    top: 30px;
    left: 30px;
    color: darkgray;
}

.user-info-list {
	font-size: 14px;
	color: #999;
	line-height: 25px;
}

.mgb20 {
	margin-bottom: 20px;
}
</style>
