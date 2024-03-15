<script>
import {account} from '../../../../store/account.js'
import {useRouter} from 'vue-router'
export default{
    setup(){
        const accountStore = account()
        const router=useRouter()
        return{accountStore,router}
    },
    methods:{
        topUpMenu(){
            this.router.push('/isiSaldo')
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="content">
            <img :src="`${accountStore.dataSaldoKu.img}`" alt="">
            <div class="col">
                <label for="">name</label>
                <h3>{{ accountStore.dataSaldoKu.name }}</h3>
            </div>
            <div class="col">
                <label for="">email</label>
                <h3>{{ accountStore.dataSaldoKu.email }}</h3>
            </div>
            <div class="col">
                <label for="">number</label>
                <h3>{{ accountStore.dataSaldoKu.number }}</h3>
            </div>
            <div class="col">
                <label for="">uid</label>
                <h3>{{ accountStore.dataSaldoKu.uid }}</h3>
            </div>
            <div class="col">
                <label for="">pin</label>
                <h3>{{ accountStore.dataSaldoKu.pin }}</h3>
            </div>
            <div class="col">
                <label for="">sisa saldo</label> 
                <h3>Rp. {{ accountStore.dataSaldoKu.sisaSaldo }}</h3>
            </div>
            <button @click="topUpMenu">top up</button>
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    display: flex;
    width: 50%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 20px;
}
.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    align-items: start;
    gap: 8px;}
.col{
    width: 80%;
    display: grid;
    grid-template-columns: 15% auto;
}
button{
    margin-top: 10px;
    padding: 4px 20px;
    border: none;
    background-color: blue;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
}
button:hover{
    opacity: .8;
    border-radius: 5px;
}
@media only screen and (max-width: 1100px){
    .content{
        padding: 0 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 100%;
    }
    .col{
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    label{
        width: 50%;
    }
    h3{
        width:100%;
    }
    button{
        margin-top: 30px;
    }
}
@media only screen and (max-width: 600px){
.col{
    width: 100%;
    display: grid;
    grid-template-columns: 20% auto;
    gap:35px;
}
label,h3{
    font-size: 1em;
}
button{
    margin-top: 10px;
}
}
</style>