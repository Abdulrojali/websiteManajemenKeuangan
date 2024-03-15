import {defineStore} from 'pinia'

export const createAccount= defineStore('createAccount',{
    state:()=>({
        dataUser:[],
        getStatus:false
    }),
    actions:{
        getDataAccount(name,user,pass,email,tel){
            if(name==='' || user==='' || email==="" || tel===""){
                this.getStatus=false
                console.log('input tidak di isi')
            }
            else{
                this.getStatus=true
                const userNew={nama:name,username:user,password:pass,emaill:email,no:tel}
                this.dataUser.push(userNew)
                console.log(this.dataUser)
            }

        }
    }
})