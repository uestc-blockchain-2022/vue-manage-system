import { defineStore } from 'pinia';

export interface ExpressForm {
    expressId:string,
	sender:string,
	receiver:string,
	submitDate:string,
	submitTime:string,
	company:string,
	weight:string
}

export const useExpressStore = defineStore('expressInfo',{
    state: ()=> (
        {
            lists: [
                {
                    "id": 1,
                    "expressId": "754792134",
                    "sender": "张三",
                    "receiver": "李四",
                    "submitTime": "2023-6-24 08:53",
                    "company": "逆风速运",
                    "weight": "100kg"
                },
                {
                    "id": 2,
                    "expressId": "754792134",
                    "sender": "张三",
                    "receiver": "李四",
                    "submitTime": "2023-6-24 08:53",
                    "company": "逆风速运",
                    "weight": "100kg"
                },
                {
                    "id": 3,
                    "expressId": "754792134",
                    "sender": "张三",
                    "receiver": "李四",
                    "submitTime": "2023-6-24 08:53",
                    "company": "逆风速运",
                    "weight": "100kg"
                },
                {
                    "id": 4,
                    "expressId": "754792134",
                    "sender": "张三",
                    "receiver": "李四",
                    "submitTime": "2023-6-24 08:53",
                    "company": "逆风速运",
                    "weight": "100kg"
                }
            ],
            id: 5
        }
        ),
    getters: {
        GetAll(state) {
            return state.lists;
        }

    },
    actions: {
        AddRecord(record : ExpressForm) {
            this.$state.lists.push({
                id:this.id,
                expressId: record.expressId,
                sender: record.sender,
                receiver: record.receiver,
                submitTime: record.submitDate +' '+ record.submitTime,
                company: record.company,
                weight: record.weight
            });
            this.id++;
        }
    }
})