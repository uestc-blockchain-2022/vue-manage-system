import { defineStore } from "pinia";


export const useProcessingStore = defineStore('processingInfo',{
    state: ()=> {
        
        return {
            "list": [{
                "id": 1,
                "processingId": "754792134",
                "orderId": "202301037865",
                "sellerId": "76538954",
                "submitTime": "2023-6-24",
                "quantity": 435,
                "secondParty": "~",
                "demand": "工件冲压成型",
                "state": "待承接"
            },
            {
                "id": 2,
                "processingId": "754792134",
                "orderId": "202301037865",
                "sellerId": "76538954",
                "submitTime": "2023-6-24",
                "quantity": 478,
                "secondParty": "~",
                "demand": "工件冲压成型",
                "state": "待承接"
            },
            {
                "id": 3,
                "processingId": "754792134",
                "orderId": "202301037865",
                "sellerId": "76538954",
                "submitTime": "2023-6-24",
                "quantity": 400,
                "secondParty": "李四",
                "demand": "工件冲压成型",
                "state": "加工中"
            },
            {
                "id": 4,
                "processingId": "754792134",
                "orderId": "202301037865",
                "sellerId": "76538954",
                "submitTime": "2023-6-24",
                "quantity": 400,
                "secondParty": "李四",
                "demand": "工件冲压成型",
                "state": "已完成"
            },
            {
                "id": 5,
                "processingId": "754792134",
                "orderId": "202301037865",
                "sellerId": "76538954",
                "submitTime": "2023-6-24",
                "quantity": 666,
                "secondParty": "",
                "demand": "工件冲压成型",
                "state": "待承接"
            }
        ],
        "pageTotal": 4
        }
    },
    getters: {
        getWaiting(state) {
            return state.list.filter((item)=>item.state == '待承接');
        },
        getAll(state) {
            return state.list;
        },
        getProcessing(state) {
            return state.list.filter((item)=>item.state == '加工中');
        }
    },
    actions: {
        setStateById(id : number,state : string,name : string) {
            if(!(state=='已完成' || state=='加工中')) return;
            let it = this.list.findIndex((item)=>{
                return item.id == id;
            });
            this.list[it].state = state;
            this.list[it].secondParty = name;
        }
    }
})