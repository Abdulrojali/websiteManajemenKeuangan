<script>
import {account} from '../../../../store/account.js'
import {useRouter} from 'vue-router'
export default{
    data(){
        return{
            username:null,
            password:null,
            pin:null,
            uid:null,
            totalIsiSaldo:null
        }
    },
    setup(){
        const accountStore=account()
        const router=useRouter()
        return{accountStore,router}
    },
    methods:{
        handlerIsiSaldo(){
            if(this.username && this.password && this.pin && this.uid && this.totalIsiSaldo){
                this.accountStore.getDataIsiSaldo(this.username,this.password,this.pin,this.uid,this.totalIsiSaldo)
                this.router.push('/saldo')
            }
            else{
                alert('tolong masukkan input!!!')
            }
        }
    }
}
</script>
<template>
   <div class="container">
    <h6 class="heading">isi saldo</h6>
    <div class="formIsiSaldo">
        <div class="col">
            <label for="">username</label>
            <input type="text" placeholder="username" v-model="username">
        </div>
        <div class="col">
            <label for="">password</label>
            <input type="password" placeholder="password" v-model="password">
        </div>
        <div class="col">
            <label for="">pin</label>
            <input type="text" placeholder="pin" v-model="pin">
        </div>
        <div class="col">
            <label for="">uid</label>
            <input type="text" placeholder="uid" v-model="uid">
        </div>
        <div class="col">
            <label for="">totalIsiSaldo</label>
            <input type="text" placeholder="totalIsiSaldo" v-model="totalIsiSaldo">
        </div>
        <button @click="handlerIsiSaldo">submit</button>
    </div>
   </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container{
    width: 100%;
}
.heading{
    font-size: 1.2em;
    text-align: center;
    margin-top: 6px;
    font-weight: 500;
}
.formIsiSaldo{
    margin-top: 20px;
    width: 100%;
        display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
.col{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 3px 6px;
}
input{
    width: 100%;
    padding: 5px 20px;
}
label{
    text-align: start;
    font-size: .8em;
}
button{
    margin-top:10px;
    width: 50%;
    padding: 6px;
    cursor: pointer;
    background-color: blue;
    color: white;
    text-transform: capitalize;
    border: none;

}
button:hover{
    opacity: .8;
}
@media only screen and (max-width: 600px){
    button{
        width: 40%;
        padding: 4px;
    }
    .col{
        width: 80%;
    }
}
</style>