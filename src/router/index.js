import {createRouter,createWebHashHistory} from 'vue-router'
import loginmenu from '../views/loginmenu/loginmenu.vue'
import dashboard from '../views/dashboard/dashboard.vue'
import createAccount from '../views/loginmenu/createAccount.vue'
// child dashboard
import info from '../views/dashboard/children/info.vue'
import account from '../views/dashboard/children/account.vue'
import laporan from '../views/dashboard/children/laporan.vue'

import viewlist from '../views/dashboard/children/viewlist.vue'
import addtransaksi from '../views/dashboard/children/addtransaksi.vue'

import myAccount from '../views/dashboard/children/myAccount.vue'
import myDompet from '../views/dashboard/children/myDompet.vue'

import saldoDompetku from '../views/dashboard/children/accountMenu/saldo.vue'
import isiDompetKu from '../views/dashboard/children/accountMenu/isiSaldo.vue'
import riwayatSaldoKu from '../views/dashboard/children/accountMenu/riwayatSaldo.vue'
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'loginmenu',
            component:loginmenu
        },
        {
            path:'/dashboard',
            name:'dashboard',
            meta:{requiresAuth:true},
            children:[
                {
                    path:'/info',
                    name:'info',
                    meta:{requiresAuth:true},
                    component:info
                },        
                {
                    path:'/account',
                    name:'account',
                    children:[
                       {
                        path:'/myAccount',
                        name:'myAccount',
                        component:myAccount
                       },
                       {
                        path:'/myDompet',
                        name:'myDompet',
                        children:[
                            {
                                path:'/saldo',
                                name:'saldo',
                                component:saldoDompetku
                            },
                            {
                                path:'/isiSaldo',
                                name:'isiSaldo',
                                component:isiDompetKu
                            },
                            {
                                path:'/riwayatSaldo',
                                name:'riwayatSaldo',
                                component:riwayatSaldoKu
                            },
                        ],
                        component:myDompet
                       },
                    ],
                    component:account
                },                
                {
                    path:'/laporan',
                    name:'laporan',
                    component:laporan
                },
                {
                    path:'/viewlist/:id',
                    name:'viewlist',
                    component:viewlist
                },
                {
                    path:'/add',
                    name:'addTransaksi',
                    component:addtransaksi
                }
            ],
            component:dashboard
        },
        {
            path:'/createAccount',
            name:'createAccount',
            component:createAccount
        }
    ]
})

export default router