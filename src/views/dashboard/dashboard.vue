<script>
import {loginmenu} from '../../store/login'
import {useRouter} from 'vue-router'
import {navigasi} from '../../store/navigasi'
export default{
    setup(){
        const loginStore=loginmenu()
        const router=useRouter()
        const navigasiStore=navigasi()
        return{navigasiStore,router,loginStore}
    },
    methods:{
        btnLogout(){
            this.loginStore.status=false
            this.router.push('/')
        },
        navigasiDashboardHandler(path){
            this.router.push(path)
        }
    }
}
</script>
<template>
    <div class="container">
        <nav>
            <div class="list">
                <b class="links"
            v-for="(data,index) in navigasiStore.navigasiData" 
            :key="index"
            @click="navigasiDashboardHandler(data.path)"
            >{{ data.nama }}
           </b>
            </div>
        <button @click="btnLogout">logout</button>
     </nav>
    <RouterView></RouterView>
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
    display: grid;
    grid-template-columns: 15% auto;
}
nav{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(37, 37, 235);
}
.heading{
    color: white;
    position: absolute;
    top: 20px;
    left: 20px;
}
.list{
    display: flex;
    flex-direction: column;
    gap:30px;
}
.links{
    text-decoration: none;
    color:white;
    cursor: pointer;
}
button{
    position: absolute;
    bottom: 25px;
    left: 50px;
    padding: 3px 10px
}
@media only screen and (max-width: 600px) {
 .container{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
 }   
 nav{
    padding: 30px 5px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .list{
        display: block;
    }
    .links{
        margin-left: 25px;
    }
    .heading{
        position: relative;
    }
    button{
        position: absolute;
        right: 30px;
        top: 20px;
        bottom: 0;
        left: 0;
    }
}
@media only screen and (max-width: 850px){
    button{
        display: none;
    }
}
</style>