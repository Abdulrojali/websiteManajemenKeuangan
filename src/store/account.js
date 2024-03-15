import {defineStore} from 'pinia'

import blankProfil from '../assets/blankPicture.png'
export const account =defineStore('account',{
    state:()=>({
        navigasiAccount:[
            {path:'/myAccount',name:'myAccount'},
            {path:'/saldo',name:'myDompet'},
        ],
        profilAccount:{
                imgProfil:blankProfil,
                name:'marsha ',
                username:'admin',
                password:'123',
                jenisKelamin:'Laki-laki',
                email:'admin@gmail.com',
                number:'089348947845',
                pin:785109
            },
        navigasiDompetKu:[
            {path:'/saldo', name:'saldoKu'},
            {path:'/isiSaldo',name:'isi Saldo'},
            {path:'/riwayatSaldo',name:'riwayat Saldo'}
        ],
        dataSaldoKu:{
            imgProfil:blankProfil,
            name:'marsha ',
            username:'admin',
            password:'123',
            jenisKelamin:'Laki-laki',
            email:'admin@gmail.com',
            number:'089348947845',
            uid:19864863,
            pin:785109,
            sisaSaldo:'100000'
        },
        riwayatIsiSaldoUser:[
        {
            username:'rifko faidar',
            password:'0nohfwo1',
            pinUser:255105,
            uidUser:'0240qhwr',
            totalSaldo:'350000'
        },
        {
            username:'ahmad rudi',
            password:'njqrw1',
            pinUser:193488,
            uidUser:'kqjwnrrqw',
            totalSaldo:'150000'
        },
        {
            username:'anisa rahma',
            password:'nwqenlz1',
            pinUser:340586,
            uidUser:'iwhiqe2',
            totalSaldo:'500000'
        },
        ]
    }),
    actions:{
        getDataIsiSaldo(user,pass,pin,uid,saldoisi){
            const convertSisaSaldo=parseInt(this.dataSaldoKu.sisaSaldo)
            const convertSaldoIsi=parseInt(saldoisi)
        this.dataSaldoKu.sisaSaldo=convertSisaSaldo+convertSaldoIsi
        console.log(this.dataSaldoKu.sisaSaldo)
            const riwayatIsiSaldo={
                username:user,
                password:pass,
                pinUser:pin,
                uidUser:uid,
                totalSaldo:saldoisi
            }
            this.riwayatIsiSaldoUser.push(riwayatIsiSaldo)
        }
    }
})