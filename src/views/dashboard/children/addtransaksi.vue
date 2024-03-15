<script>
import {dataDashboard} from '../../../store/dashboard.js'
import {useRouter} from 'vue-router'
export default{
    data(){
        return{
            namaTransaksi:null,
            tanggalTransaksi:null,
            totalTransaksi:null
        }
    },
    setup(){
        const dashboardStore=dataDashboard()
        const router=useRouter()
        return{dashboardStore,router}
    },
    methods:{
        backToRiwayatTransaksi(e){
            e.preventDefault()
            this.router.push('/dashboard')
        },
        addNewDataTransaksi(nama,tanggal,total){
            this.dashboardStore.addNewTransaksi(nama,tanggal,total)
            if(this.dashboardStore.statusAddNewTransaksi=true){
                this.router.push('/status')
            }
            else if(this.dashboardStore.statusAddNewTransaksi=false){
                this.router.push('/add')
            }

        }
    }
}
</script>
<template>
    <div class="container">
        <b class="heading">menambah transaksi baru</b>
        <div class="input">
            <div class="col">
                <label for="">namaTransaksi</label>
                <input type="text" placeholder="namaTransaksi" v-model="namaTransaksi">
            </div>
            <div class="col">
                <label for="">tanggalTransaksi</label>
                <input type="text" placeholder="tanggalTransaksi" v-model="tanggalTransaksi">
            </div>
            <div class="col">
                <label for="">totalTransaksi</label>
                <input type="text" placeholder="totalTransaksi" v-model="totalTransaksi">
            </div>
            <div class="btn">
                <button @click="addNewDataTransaksi(this.namaTransaksi,this.tanggalTransaksi,this.totalTransaksi)">addData</button>
                <button>cancel</button>
            </div>
            <p>back to <a href="" @click="backToRiwayatTransaksi(e)">riwayat transaksi</a></p>
        </div>
    </div>
   
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.heading{
    text-align: start;
    font-size: 1.5em;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 30px;
}
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.input{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border: 1px solid gray;
    padding: 40px;
}
.col{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.col label{
    font-size: 1em;
    margin-bottom: 5px;
}
.col input{
    width: 80%;
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
    border:none;
    border-bottom: 1px solid gray;
}
.btn{
    margin-top: 20px;
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.btn button{
    padding: 3px 5px;
    border: none;
    background-color: blue;
    border-radius:5px;
    cursor: pointer;
    color: white;
}
p{
    color: black;
    text-align: center;
    margin-top: 30px;
}
a{
    text-decoration: none;
}
@media only screen and (max-width: 600px) {
    .container{
        height: 100%;
    }
    .heading{
        position: relative;
        margin-bottom: 30px;
    }
    .input{
        width:70%;
    }
}

</style>