import {defineStore} from 'pinia'

export const navigasi =defineStore('navigasi',{
    state:()=>({
        navigasiData:[
            {nama:'info',path:'info'},
            {nama:'laporan',path:'laporan'},
            {nama:'account',path:'/myAccount'},
        ]
    }),
    getters:{

    },
    actions:{

    }
})