<template>
<div>
    <Comment :id='goodId'></Comment>
</div>
    
</template>
<script>
    // 引入轮播图公共组件
    import Comment from '../tools/comment.vue'
    export default {
        components : {
           Comment
        },
        data () {
            return {
                goodId : 0
            };
        },
        created(){
            this.goodId = this.$route.params.goodid
        }
    }
</script>
<style lang="css" scoped>
</style>