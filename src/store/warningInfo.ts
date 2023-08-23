import { defineStore } from "pinia";

export const useWarningStore = defineStore('warningStore',{
    state: ()=>{
        return {
            lists: [{
                "ip": '22.211.34.8',
                "address": "四川乐山",
                "name": "网络攻击",
                "type": "恶意流量",
                "time": "2023-7-15 22:52:31",
                "level": '极高风险',
            },
            {
                "ip": '22.211.34.8',
                "address": "四川乐山",
                "name": "网络攻击",
                "type": "恶意流量",
                "time": "2023-7-15 22:52:31",
                "level": '极高风险',
            },
            {
                "ip": '22.211.34.8',
                "address": "四川乐山",
                "name": "网络攻击",
                "type": "恶意流量",
                "time": "2023-7-15 22:52:31",
                "level": '极高风险',
            },
            {
                "ip": '22.211.34.8',
                "address": "四川乐山",
                "name": "网络攻击",
                "type": "恶意流量",
                "time": "2023-7-15 22:52:31",
                "level": '极高风险',
            },
        ],
        }
    },
    getters: {
        getAll(state) {
            return state.lists;
        }
    },
    actions: {
    }
})