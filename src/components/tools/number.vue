<style  scoped>
    .num{
        margin-top: 10px;
        display: inline-block;
    }
    input{
        width: 30px;
        height: 30px;
        padding: 3px;
        text-align: center;
    }
</style>
<template>
    <div class="num">
        <input type="button" value="-" @click="sub"> <input type="text" v-model="number" /> <input type="button" value="+" @click="add">
    </div>
</template>
<script>
export default {
      props:['num'],
      data () {
        return {
            number: 1
        }
      },
    created(){
     },
    methods:{
        // 点击-，数量减一
        sub(){
            if(this.number > 1){
                 this.number --;
                //  this.$emit('count' , this.number)
                this.getAllNum()
            }
        },
        add(){
            this.number ++;
             this.getAllNum()
            // this.$emit('count' , this.number)
        },
        // 后期数量
        getAllNum(){
             this.$emit('count' , this.number)
        }
    }
}
</script>
