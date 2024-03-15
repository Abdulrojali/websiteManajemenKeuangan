<script>
import {account} from '../../../../store/account.js'
import {useRouter} from 'vue-router'
export default{
   setup(){
      const accountStore=account()
      const router=useRouter()
      return{accountStore,router}
   }
}
</script>
<template>
   <div class="container">
      <h3 class="heading">riwayat tranfer saldo</h3>
      <div class="content">
         <div class="col judul">
            <p>no</p>
            <h5>username</h5>
            <h5>uid</h5>
            <h5>total topup</h5>
         </div>
         <div class="col"
         v-for="(data,index) in accountStore.riwayatIsiSaldoUser"
         :key="index"
         >
         <p>{{ index }}</p>
         <h5>{{ data.username }}</h5>
         <h5>{{ data.uidUser }}</h5>
         <h5>{{data.totalSaldo}}</h5>
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
   display: flex;
   flex-direction: column;
    justify-content: center;
   align-items: center; 
}
.content{
   padding: 0 20px;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 5px;
}
.col{
   width: 100%;
   display: grid;
   grid-template-columns: 10% 20% 20% 20%;
   justify-content: center;
   align-items: center;
   gap: 20px;
}
.heading{
   font-size: 1.2em;
   font-weight: 500;
   text-transform: capitalize;
}
h5{
   font-size: 1em;
   font-weight: 650;
}
p{
   font-size: .85em;
}
@media only screen and (max-width: 600px){
   .container{
      margin-top: 0;
      display: flex;
      justify-content: none;
      align-items: none;
      padding: 0 20px;
   }
   .col{
      display: grid;
      gap: 23px;
   /* grid-template-columns: 10% 35% 35% auto; */
   }
}
</style>