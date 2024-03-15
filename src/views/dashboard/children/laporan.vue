<script>
import {dataDashboard} from '../../../store/dashboard'
import {useRouter} from 'vue-router'
export default{
    setup(){
        const dashboardStore=dataDashboard()
        const router=useRouter()
        return {dashboardStore,router}
    },
    methods:{
        deleteTransaksi(index){
            this.dashboardStore.deleteTransaksiData(index)
        },
        deleteAllTransaksi(){
            this.dashboardStore.deleteAllTransaksi()
        },
        replaceAll(){
            this.dashboardStore.replaceAllData()
        },
        addTransaksi(){
            this.router.push('/add')
        }
    }
}
</script>
<template>
    <div class="container">
        <h4 class="heading">laporan keuangan bulanan</h4>
        <h4>menu list</h4>
        <div class="listmenu">
            <button @click="deleteAllTransaksi">deleteAll</button>
            <button @click="replaceAll">replaceAll</button>
            <button @click="addTransaksi">addTransaksi</button>
        </div>
        <div class="content">
            <div class="list">
                <b>no</b>
                <h3>nama transaksi</h3>
                <h3>tanggal</h3>
                <p>total transaksi</p>
                <h3>menu</h3>
            </div>
            <div class="col"
            v-for="(data,index) in dashboardStore.listTransaksi" :key="index">
            <b>{{ index }}</b>
            <h3>{{ data.namaTransaksi }}</h3>
            <h6>{{ data.tanggalTransaksi }}</h6>
            <p>Rp. {{ data.totalTransaksi }}</p>
            <button @click="deleteTransaksi(index)">delete</button>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
}
.heading{
    position: absolute;
    top: 25px;
    left: auto;
    font-size: 1.5em;
    text-transform: capitalize;
    font-weight: 500;
}
.content{
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    padding: 20px;
}
.list{
    margin-bottom: 20px;
}
.listmenu{
    display: flex;
    gap: 25px;
}
.listmenu button{
    padding: 3px 7px;
    border-radius: 5px;
    background-color: blue;
    color: white;
    cursor: pointer;
    border: none;
    text-transform: capitalize;
}
.col,.list{
    width: 100%;
    display: grid;
    grid-template-columns: 5% auto 20% 20% 10%; 
   
}
.red{
    color: red;
}
@media only screen and (max-width: 850px) {
    .container{
        margin-top: 0;
        height: 100%;
    }
    .heading{
        position: relative;
        margin-bottom: 35px;
    }
    .list{
        display: none;
    }
    .col{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>