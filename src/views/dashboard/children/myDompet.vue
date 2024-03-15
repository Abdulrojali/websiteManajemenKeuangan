<script>
import {account} from '../../../store/account.js'
import {useRouter,RouterView} from 'vue-router'
export default{
    setup(){
        const accountStore=account()
        const router=useRouter()
        return{accountStore,router}
    },
    methods:{
        handlerNavigasi(path){
            this.router.push(path)
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="grid">
            <div class="dompet">
                <h3 class="heading">my dompet</h3>
                <ul>
                    <p
                    v-for="(data,index) in accountStore.navigasiDompetKu"
                    :key="index"
                    @click="handlerNavigasi(data.path)"
                    >
                    {{ data.name }}
                    </p>
                </ul>
            </div>
      <div class="paymentMethod">
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
    height: 100%;
}
.grid{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% auto;
    gap: 0;
}
.dompet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
}
.paymentMethod{
    display: flex;
    flex-direction: column;
}
.heading{
    position: absolute;
    top:60px;
    font-weight: 500;
}
ul{
    display: flex;
    flex-direction: column;
    gap:25px;
}
p{
    padding: 10px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    text-transform: capitalize;
    cursor: pointer;
}
p:hover{
    opacity: .8;
    border-radius: 0;
}
@media only screen and (max-width: 900px){
 .heading{
    position: absolute;
    top: 110px;
 }   
 b{
    font-size: .8em;
 }
}
@media only screen and (max-width: 600px){
 .heading{
    position: relative;
    margin-bottom: 80px;
    top: 0;
 }  
 .grid{
    width: 100%;
    display: grid;
    grid-template-columns: 30% auto;
 } 
 .dompet,.paymentMethod{
    width: 100%;
 }
}
</style>