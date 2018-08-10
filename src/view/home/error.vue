<template>
  <div class="error contain">
    <p>{{msg}}</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      msg: '对不起，您访问的页面飞走了！'
    }
  }
}
</script>

<style scoped>
	.error{
		text-align: center;
	}
</style>
