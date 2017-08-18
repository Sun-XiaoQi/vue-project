<style>
.comment {
    margin-top: 10px;
}

.comment>div {
    border-top: 1px solid #ccc;
    min-height: 50px;
}

.comment p {
    min-height: 30px;
    line-height: 30px;
    margin: 0;
}

.comment .cominfo {
    display: flex;
    justify-content: space-between;
    color: #26a2ff;
    font-size: 12px;
}
</style>
<template>
    <div>
        <div>
            <h4>发表评论</h4>
            <form id="comment">
                <textarea placeholder="请输入评论内容" ref='textarea'></textarea>
                <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
            </form>
        </div>
        <!--获取评论-->
        <div class="comment">
            <div>
                <h4>提交的评论</h4>
            </div>
            <div v-for="(item,index) in commonts" :key="index">
                <p>{{ item.content }}</p>
                <div class="cominfo">
                    <span>{{ item.user_name }}</span>
                    <span>{{ item.add_time | timeFilter('YYYY-MM-DD hh:mm:ss') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import URL from '../tools/url.js'
import { Toast } from 'mint-ui';
export default {
    props: ['id'],
    data() {
        return {
            commonts: []
        }
    },
    created() {
        this.getcomment(this.id)
    },
    methods: {
        // 提交评论
        postcomment() {
            // 获取textarea里面的内容
            const content = this.$refs.textarea.value
            const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/postcomment/${this.id}`
            this.$http.post(url, { content: content }, { emulateJSON: true }).then(
                res => {
                    console.log(res)
                    // 提示
                    Toast(res.body.message);
                    this.$refs.textarea.value = ''
                    this.getcomment(this.id)
                },
                err => {
                    console.log(err)
                }
            )
            return false;
        },
        // 获取评论
        getcomment(artid) {
            const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getcomments/${artid}?pageindex=1`
            this.$http.get(url).then(
                res => {
                    this.commonts = res.body.message
                },
                err => {
                    console.log(err)
                }
            )
            return false;
        }
    }
}
</script>
