<script>
import {loginmenu} from '../../store/login'
import {useRouter} from 'vue-router'
export default{
    data(){
        return{
            username:null,
            password:null
        }
    },
    setup(){
        const loginStore = loginmenu()
        const router=useRouter()
        return{loginStore,router}
    },
    methods:{
        handlerLogin(){
            this.loginStore.getDataLogin(this.username,this.password)
            const status=this.loginStore.statusLogin
            if(status==true){
                this.router.push('/info')
            }
        },
        handlerCancelLogin(){
            this.username='',
            this.password=''
        },
        toCreateAccount(e){
            e.preventDefault()
            this.router.push('/createAccount')
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="page">
            <img src="../../assets/finance.svg" alt="">
        <div class="content">
            <h3>sign Up</h3>
            <input type="text" v-model="username" placeholder="username">
            <input type="password" v-model="password" placeholder="password">
            <div class="btn">
                <button @click="handlerLogin">login</button>
                <button @click="handlerCancelLogin">cancel</button>
            </div>
            <i>belum punya account ? <a href="" @click="toCreateAccount">create Account</a></i>
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
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}
i{
    color: white;
    margin-top: 30px;
}
a{
    color: orange;
}
h3{
    margin-bottom: 50px;
    left: 20px;
    font-size: 1.25em;
    text-transform: capitalize;
    text-align: start;
    color: white;
}
.page{
    position: relative;
    width: 80%;
    display: flex;
    background-color: rgb(37, 37, 235);
    border-radius: 5px;
}
img{
    width: 50%;
    height: 50%;
    display: inline-block;
    object-fit: contain;
}
.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
input{
    width: 50%;
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
}
.btn{
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
button{
    padding: 6px 6px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
@media only screen and (max-width: 600px) {
    .container,.content{
        width:100%;
        height: 100%;
        background-color:rgb(37, 37, 235);
    }
    img{
        width: 100%;
        display: inline-block;
    object-fit: contain;
    }
    .page{
        padding: 20px 0;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .btn{
        margin-bottom: 30px;
    }
    i{
        position: absolute;
        bottom: 10px;
    }
}
</style>