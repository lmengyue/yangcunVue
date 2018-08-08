<template>
	<div>
		<div class="personal-ly">
			<h5>以下是您的留言，点击‘查看’可以查看阳村网对您的回复！希望我们的解答对您有所帮助！</h5>
			<ul class="ul-nav">
				<li class="type">类型</li>
				<li class="text"> <span>留言内容</span></li>
				<li class="status">状态</li>
				<li class="time">留言时间</th>
				<li class="cz">操作</li>
			</ul>
			<table class="table">
				<tr>
					<td class="type-name">民宿</td>
					<td class="td text-mins">
						<h4>无锡美庐美境文化民宿</h4>
						<p>取消订单 什么时候到账</p>
					</td>
					<td class="status-hf">已回复</td>
					<td class="time-sj">2017-8-20</td>
					<td class="cz-ck">
						<a href="#">查看</a>
					</td>
				</tr>
				<tr class="huifu">
					<td></td>
					<td colspan="4" class="td hf">
						<p>尊敬的客官非常抱歉，此次预订给您带来不便，对于的民宿预付订单取消，支付的款项 3~15个工作日到账！ 如您遇到问题，您可拨打客服热线反馈。上帝的问题我们肯定会努力解决，期待您的下次出游！
						</p>
					</td>
				</tr>
			</table>
			<table class="table">
				<tr>
					<td class="type-name">民宿</td>
					<td class="td text-mins">
						<h4>无锡美庐美境文化民宿</h4>
						<p>我有一个2岁的孩子入住，是否有婴儿床？</p>
					</td>
					<td class="status-hf">未回复</td>
					<td class="time-sj">2017-8-20</td>
					<td class="cz-ck">
						<a href="#">查看</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				
			}
		},
		created(){
			axios.get('/user/userInfo')
			.then(response=>{
				console.log(response)
			})
		}
	}
</script>

<style>
.name{
	color: ;
}
</style>