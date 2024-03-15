<script>
import {account} from '../../../store/account.js'
import {RouterView,useRouter} from 'vue-router'
export default{
    data(){
        return{

        }
    },
    setup(){
        const accountStore=account()
        const router=useRouter()
        return{accountStore,router}
    },
    methods:{
        navigasiHandler(data){
        this.router.push(data)
        }
    }
}
</script>
<template>
    <div class="container">
        <h4 class="heading">my Account</h4>
        <div class="contentAccount">
            <div class="navigasiAccount">
                <b
                v-for="(data,index) in accountStore.navigasiAccount"
                :key="index"
                @click="navigasiHandler(data.path)"
                >{{data.name}}</b>
            </div>
            <div class="menuAccount">
                <RouterView></RouterView>
            </div>
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
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    overflow:hidden;
}
.heading{
    /* position: absolute;
    top: 20px;
    left: auto; */
    font-size: 1.5em;
    font-weight: 500;
    text-transform: capitalize;
}
.contentAccount{
    margin-top: 10px;
    width:100%;
    height: 100%;
    box-shadow: 0 0 2px 1px gray;
    display: grid;
    grid-template-columns: 15% auto;
}
.navigasiAccount{
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
    border-right: 1px solid gray;
}
b{
    font-weight: 400;
    cursor: pointer;
}
.menuAccount{
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
}
@media only screen and (max-width: 850px) {
    .contentAccount{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .navigasiAccount{
         width: 100%;
        border: none;
        margin-bottom: 30px;
        display: block;
        margin: auto;
        margin-top: 15px;
    }
    b{
       
        margin-left: 30px;
        text-align: center;
    }
    .menuAccount{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>