import {defineStore} from 'pinia'

export const loginmenu = defineStore('loginmenu',{
    state:()=>({
        statusLogin:false
    }),
    getters:{

    },
    actions:{
        getDataLogin(user,pass){
            if(user==='' || pass===''){
                this.statusLogin
                alert('tolong masukkan password')
            }
            else if(user==='admin' && pass==='123'){
                this.statusLogin=true
            }
        }
    }
})