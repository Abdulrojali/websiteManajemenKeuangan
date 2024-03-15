<script>
import {useRouter,useRoute} from 'vue-router'
import {dataDashboard} from '../../../store/dashboard'
export default{
setup(){
    const route=useRoute().params.id
    const router=useRouter()
    const dashboardStore=dataDashboard()
    const listInfoData=dashboardStore.listInfo
    return {route,router,dashboardStore,listInfoData}
},
methods:{
    back(){
        this.router.push('/info')
    }
}
}

</script>

<template>
<div class="container">
    <div class="content">
        <img :src="`${listInfoData[route].img}`" alt="">
        <div class="heading">
            <h4>{{ listInfoData[route].heading }}</h4>
            <p>{{ listInfoData[route].date }}</p>
        </div>
        <p>{{ listInfoData[route].deskripsi }}</p>
        <button @click="back">back</button>
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
    justify-content: center;
    align-items: center;
}
img{
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    object-fit: cover;
}
.heading{
    display: flex;
    justify-content: space-around;
    margin-bottom: 25px;
}
.content{
    width: 50%;
    padding: 20px;
}
p{
    font-size: 1em;
}
h4{
    font-size: 2.3em;
}
button{
    margin-top: 15px;
}
</style>