import { defineStore } from "pinia";

export const useLoanStore = defineStore('loanStore',{
    state: ()=>{
        return {
            lists: [{
                "id": 1,
                "borrower": "张三",
                "lender": "李四",
                "begintime": "2023-6-15",
                "closetime": "2023-7-15",
                "amount": 30000,
                "state": "已还款"
            },
            {
                "id": 2,
                "borrower": "张三",
                "lender": "李四",
                "begintime": "2023-6-15",
                "closetime": "2023-7-15",
                "amount": 30000,
                "state": "未还款"
            },
            {
                "id": 3,
                "borrower": "张三",
                "lender": "李四",
                "begintime": "2023-6-15",
                "closetime": "2023-7-15",
                "amount": 30000,
                "state": "待还款"
            },
            {
                "id": 4,
                "borrower": "张三",
                "lender": "李四",
                "begintime": "2023-6-15",
                "closetime": "2023-7-15",
                "amount": 30000,
                "state": "待审核"
            }
        ],
        id: 5
        }
    },
    getters: {
        getAll(state) {
            return state.lists;
        }
    },
    actions: {
        setStateById(id : number,state : string) {
            let it = this.lists.findIndex((item)=>{
                return item.id == id;
            });
            this.lists[it].state = state;
        }
    }
})