import {defineStore} from 'pinia'

import imgKenaikanSukuBunga from '../assets/kenaikanSukuBunga.jpg'
import turunhargabitcon from '../assets/turunhargabitcoin.jpg'
import bank from '../assets/bank.jpg'
import perang from '../assets/perang.jpg'
import china from '../assets/china.jpg'
export const dataDashboard= defineStore('dataDashboard',{
    state:()=>({
        listInfo:[
            {img:imgKenaikanSukuBunga,date:'12-10-2023',heading:'kenaikan suku bunga',deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veritatis sapiente error omnis accusantium architecto non iste! Distinctio cupiditate iure fugiat, cumque eius atque labore qui eligendi, a, corrupti corporis!'},
            {img:turunhargabitcon,date:'02-11-2022',heading:'turunnya harga bitcoin',deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veritatis sapiente error omnis accusantium architecto non iste! Distinctio cupiditate iure fugiat, cumque eius atque labore qui eligendi, a, corrupti corporis!'},
            {img:bank,date:'10-25-2023',heading:'kembalinya bank sentral india',deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veritatis sapiente error omnis accusantium architecto non iste! Distinctio cupiditate iure fugiat, cumque eius atque labore qui eligendi, a, corrupti corporis!'},
            {img:perang,date:'08-01-2023',heading:'perang rusia ukraina merajalela',deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veritatis sapiente error omnis accusantium architecto non iste! Distinctio cupiditate iure fugiat, cumque eius atque labore qui eligendi, a, corrupti corporis!'},
            {img:china,date:'02-02-2023',heading:'perang dagang cina dengan taiwan',deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veritatis sapiente error omnis accusantium architecto non iste! Distinctio cupiditate iure fugiat, cumque eius atque labore qui eligendi, a, corrupti corporis!'},
        ],
        listTransaksi:[
            {
                namaTransaksi:'transfer biaya pendidikan',
                tanggalTransaksi:'10-01-2023',
                totalTransaksi:'3.000.000,00'
            },
            {
                namaTransaksi:'transfer ovo',
                tanggalTransaksi:'20-01-2023',
                totalTransaksi:'1.000.000,00'
            },
            {
                namaTransaksi:'transfer biaya pajak',
                tanggalTransaksi:'15-02-2023',
                totalTransaksi:'3.500.000,00'
            },
            {
                namaTransaksi:'transfer biaya pajak rumah',
                tanggalTransaksi:'11-03-2023',
                totalTransaksi:'5.000.000,00'
            },
            {
                namaTransaksi:'transfer biaya shoppefood',
                tanggalTransaksi:'22-04-2023',
                totalTransaksi:'300.000'
            },
        ],
        localstoreTransaksi:null,
        statusAddNewTransaksi:false
    }),
    getters:{

    },
    actions:{
        deleteTransaksiData(index){
            this.listTransaksi.splice(index,1)
        },
        deleteAllTransaksi(){
            this.localstoreTransaksi=this.listTransaksi
            this.listTransaksi=[]
        },
        replaceAllData(){
            this.listTransaksi=this.localstoreTransaksi
        },
        addNewTransaksi(nama,tanggal,total){
            if(nama || tanggal || total){
                const newDataTransaksi={
                    namaTransaksi:nama,
                    tanggalTransaksi:tanggal,
                    totalTransaksi:total
                }
                this.listTransaksi.push(newDataTransaksi)
                setTimeout(() => {
                this.statusAddNewTransaksi=true
                }, 300);
            }
            else{
                alert('tolong masukkan input !')
                return this.statusAddNewTransaksi=false
            }               
        }  
 
    }
})