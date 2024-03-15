<script>
import {useRouter} from 'vue-router'
import { createAccount } from '../../store/createAccount'
export default{
    data(){
        return{
            nama:null,
            username:null,
            password:null,
            email:null,
            phone:null,
        }
    },
    setup(){
        const router=useRouter()
        const createaccountStore=createAccount()
        return{router,createaccountStore}
    },
    methods:{
        backLogin(){
            this.router.push('/')
        },
        handlerCreateAccount(){
            this.createaccountStore.getDataAccount(this.nama,this.username,this.password,this.email,this.phone)
            const status=this.createaccountStore.getStatus
            if(status==true){
                alert('buat akun berhasil')
                this.router.push('/')
            }
            else{
                alert('buat akun gagal')
            }
        },
        cancelHandler(){
            this.nama=''
            this.username=''
            this.password=''
            this.email=''
            this.phone=''
        }
    }
}
</script>
<template>
    <div class="content">
        <i class="fa-solid fa-arrow-left" @click="backLogin"></i>
        <div class="formCreateAccount">
            <h5 class="heading">create Account</h5>
            <input type="text" placeholder="name" v-model="nama">
            <input type="text" placeholder="username" v-model="username">
            <input type="password" placeholder="password" v-model="password">
            <input type="email" placeholder="email" v-model="email">
            <input type="text" placeholder="phone" v-model="phone">
            <div class="btn">
                <button @click="handlerCreateAccount">submit</button>
                <button @click="cancelHandler">cancel</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}
.heading{
    font-size: 2em;
    text-transform: capitalize;
    color: black;
}
.content{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;
}
.formCreateAccount{
    padding: 30px 0;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    background-color:white;
    border-radius: 5px;
}
input{
    width: 80%;
    padding: 6px 8px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    border-bottom: 1px solid gray;
}
.btn{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
button{
    padding: 6px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: blue;
    color: white;
}
i{
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 1.5em;
    cursor: pointer;
    color: white;
}
i:hover{
    opacity: .8;
}
@media only screen and (max-width: 600px) {
    .heading{
        font-size: 1.25em;
        font-weight: 500;
    }
    .formCreateAccount{
        padding: 20px 10px;
    }
}
</style>