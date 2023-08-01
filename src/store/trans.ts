import { defineStore } from "pinia";

export const transInfoStore = defineStore('transInfoStore',{
    state: ()=> {
        
        return {
					"table" :{
						"list": [{
										"id": 1,
										"name": "大米",
										"code": "20230134554",
										"money": 123,
										"address": "佼稻香丝苗米泰国香米",
										"state": "已发布",
										"date": "2019-11-1",
										"num": "11",
										"type": "农产品",
										"unit": "吨",
										"thumb": "https://lin-xin.gitee.io/images/post/wms.png"
								},
								{
										"id": 2,
										"name": "大米",
										"code": "20230134555",
										"money": 456,
										"address": "新疆羊脂籽米胚芽米",
										"state": "上架中",
										"date": "2019-10-11",
										"num": "12",
										"type": "农产品",
										"unit": "吨",
										"thumb": "https://lin-xin.gitee.io/images/post/node3.png"
								},
								{
										"id": 3,
										"name": "铁矿石",
										"code": "20230134556",
										"money": 789,
										"address": "天然铁矿石",
										"state": "已下架",
										"date": "2019-11-11",
										"num": "17",
										"type": "金属矿",
										"unit": "吨",
										"thumb": "https://lin-xin.gitee.io/images/post/parcel.png"
								},
								{
										"id": 4,
										"name": "大米",
										"code": "20230134557",
										"money": 1011,
										"address": "五常稻花香大米",
										"state": "上架中",
										"date": "2019-10-20",
										"num": "22",
										"type": "农产品",
										"unit": "吨",
										"thumb": "https://lin-xin.gitee.io/images/post/notice.png"
								}
						],
						"pageTotal": 4
					},
					
					"goods" :{
						"list": [{
										"id": 1,
										"name": "大米",
										"code": "20230134554",
										"money": 123,
										"address": "佼稻香丝苗米泰国香米",
										"state": "已发布",
										"date": "2019-11-1",
										"num": "11",
										"type": "农产品",
										"unit": "吨",
										"thumb": "https://lin-xin.gitee.io/images/post/wms.png"
								},
								{
										"id": 2,
										"name": "大米",
										"code": "20230134554",
										"money": 456,
										"address": "新疆羊脂籽米胚芽米",
										"state": "上架中",
										"date": "2019-10-11",
										"num": "12",
										"type": "农产品",
										"unit": "吨",
										"thumb": "https://lin-xin.gitee.io/images/post/node3.png"
								},
								{
										"id": 3,
										"name": "铁矿石",
										"code": "20230134554",
										"money": 789,
										"address": "天然铁矿石",
										"state": "已下架",
										"date": "2019-11-11",
										"num": "17",
										"type": "金属矿",
										"unit": "吨",
										"thumb": "https://lin-xin.gitee.io/images/post/parcel.png"
								},
								{
										"id": 4,
										"name": "大米",
										"code": "20230134554",
										"money": 1011,
										"address": "五常稻花香大米",
										"state": "上架中",
										"date": "2019-10-20",
										"num": "22",
										"type": "农产品",
										"unit": "吨",
										"thumb": "https://lin-xin.gitee.io/images/post/notice.png"
								}
						],
						"pageTotal": 4
					},
					
        }
    },
    getters: {
        // getWaiting(state) {
        //     return state.list.filter((item)=>item.state == '待承接');
        // },
			getAllTable(state) {
				console.log("getAllTable")
					return state.table;
			},
				
			getAllGoods(state) {
					return state.goods;
			},
        // getProcessing(state) {
        //     return state.list.filter((item)=>item.state == '加工中');
        // }
    },
    actions: {
        addGoods( 
				code: string,
				name: string,
				type: string,
				num: string,
				unit: string,
				money: number,
				address: string) {
					this.table.list.push({id:this.table.list.length ,code,name,type,num,unit,money,address,date:'2023-08-01',thumb :'',"state": "上架中"})
            // if(!(state=='已完成' || state=='加工中')) return;
            // let it = this.list.findIndex((item)=>{
            //     return item.id == id;
            // });
            // this.list[it].state = state;
            // this.list[it].secondParty = name;
        }
    }
})
 
