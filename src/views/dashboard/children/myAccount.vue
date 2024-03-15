<script>
import {account} from '../../../store/account.js'
export default{
    setup(){
        const accountStore = account()
        return{accountStore}
    },
    methods:{

    }
}
</script>
<template>
    <div class="container">
        <div class="content">
            <img :src="`${accountStore.img}`" alt="">
            <div class="col">
                <label for="">name</label>
                <h3>{{ accountStore.profilAccount.name }}</h3>
            </div>
            <div class="col">
                <label for="">username</label>
                <h3>{{ accountStore.profilAccount.username }}</h3>
            </div>
            <div class="col">
                <label for="">password</label>
                <h3>{{ accountStore.profilAccount.password }}</h3>
            </div>
            <div class="col">
                <label for="">email</label>
                <h3>{{ accountStore.profilAccount.email }}</h3>
            </div>
            <div class="col">
                <label for="">number</label>
                <h3>{{ accountStore.profilAccount.number }}</h3>
            </div>
            <div class="col">
                <label for="">pin</label>
                <h3>{{ accountStore.profilAccount.pin }}</h3>
            </div>
            <button>edit</button>
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
    gap: 30px;
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
@media only screen and (max-width: 760px){
    .content{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .col{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    label,h3{
        width: 50%;
    }
    img{
        width: 100%;
    }
}
</style>