<script>
import {useRouter} from 'vue-router'
import {dataDashboard} from '../../../store/dashboard'
export default{
    setup(){
        const dashboardStore = dataDashboard()
        const router=useRouter()
        return{dashboardStore,router}
    },
    methods:{
        viewData(index){
            this.router.push(`/viewlist/${index}`)
        }
    }
}
</script>
<template>
    <div class="container">
        <h3 class="heading">berita terkini</h3>
        <div class="listInfo">
            <div class="col"
            v-for="(data,index) in dashboardStore.listInfo"
            :key="index"
            >
            <img :src="`${data.img}`" alt="">
            <h5>{{data.heading}}</h5>
            <button @click="viewData(index)">view</button>
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
.heading{
    font-size: 1.5em;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 30px;
    margin-top: 20px;
}
.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
}
.listInfo{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    grid-gap: 20px;
}
.col{
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 0 0px 1px blue;
    padding:20px;
}
.col img{
    width: 100%;
    height: 110px;
    object-fit: cover;
}
.col h5{
    margin-top: 20px;
    text-transform: capitalize;
}
.col p{
    font-size: .8em;
}
.col button{
    margin-top: 20px;
    padding: 2px 10px;
    border: none;
    color: blue;
    cursor: pointer;
}
.col button:hover{
    opacity: .7;
}

</style>