<template>
	<div>
		<el-row :gutter="20">
			<el-col  >
				<el-card shadow="hover" class="mgb20"  >
					<template #header>
						<div class="clearfix">
							<span>基本信息</span>
						</div>
					</template>
					<div class="user-info">
						<el-avatar :size="120" :src="'https://lin-xin.gitee.io/images/post/parcel.png'" />
						<div class="user-info-cont">
							<div class="user-info-name">沙宣洗发水</div>
							<div>沙宣洗发水露去屑柔顺女/去油蓬松男旗舰店官网正品</div>
						</div>
					</div>
					<el-row :gutter="20">
						<el-col :span="12">
							<div class="user-info-list">
								商品编码
								<span>GR2023043221034</span>
							</div>
							<div class="user-info-list">
								商品类型
								<span>XFS</span>
							</div>
						</el-col>
						<el-col :span="12">
							<div class="user-info-list">
								库存编码
								<span>201702121</span>
							</div>
							<div class="user-info-list">
								商品货位
								<span>0518</span>
							</div>
						</el-col>
					</el-row>
				</el-card>
				<el-card shadow="hover" style=" ">
					<template #header>
						<div class="clearfix">
							<span>货权生命周期</span>
						</div>
					</template>
					<ul>
						<li class="icon-li center" v-for="(item, index) in statusList" :key="index">
							<div >
								<div class="circle center mgt10" :style=" {'background-color' :  item.color  }">{{ item.text }}</div>
								<div class="mgt10">{{item.date}}</div>
								<div  >详情</div>
							</div>
						</li>
							
					</ul>
				</el-card>

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
			</el-col>
		 
		</el-row>
		<el-row :gutter="20">
			<el-col :span="12">
				<el-card shadow="hover">
					<schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover">
					<schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts" name="dashboard">
// import Schart from 'vue-schart';
import { reactive } from 'vue';
import imgurl from '../assets/img/img.jpg';

const name = localStorage.getItem('ms_username');
const role: string = name === 'admin' ? '超级管理员' : '普通用户';

const options = {
	type: 'bar',
	title: {
		text: '最近一周各品类销售图'
	},
	xRorate: 25,
	labels: ['周一', '周二', '周三', '周四', '周五'],
	datasets: [
		{
			label: '家电',
			data: [234, 278, 270, 190, 230]
		},
		{
			label: '百货',
			data: [164, 178, 190, 135, 160]
		},
		{
			label: '食品',
			data: [144, 198, 150, 235, 120]
		}
	]
};
const options2 = {
	type: 'line',
	title: {
		text: '最近几个月各品类销售趋势图'
	},
	labels: ['6月', '7月', '8月', '9月', '10月'],
	datasets: [
		{
			label: '家电',
			data: [234, 278, 270, 190, 230]
		},
		{
			label: '百货',
			data: [164, 178, 150, 135, 160]
		},
		{
			label: '食品',
			data: [74, 118, 200, 235, 90]
		}
	]
};
const statusList =  [
	{
		text: '创建订单',
		date: '2017-07-01 18:02:22',
		color: "rgb(43,194,159)",
	},
	{
		text: '贷款',
		date: '2017-07-01 18:02:22',
		color: "#FF8774",
	},
	{
		text: '货物加工',
		date: '2017-07-01 18:02:22',
		color: "rgb(253,182,54)",
	},
	{
		text: '仓储',
		date: '2017-07-01 18:02:22',
		color: "rgb(140, 196, 51)",
	},
	{
		text: '物流',
		date: '2017-07-01 18:02:22',
		color: "rgb(96,91,217)",
	},
	{
		text: '保险',
		date: '2017-07-01 18:02:22',
		color: "rgb(56,157,239)",
	},
];
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
	margin-left: 30px;
	width: 150px;
	display: inline-block;
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
</style>
