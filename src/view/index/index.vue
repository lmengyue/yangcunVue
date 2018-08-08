<template>
	<div>
		<div class="navbar-head" id="toTop">
			<div class="container">
				<div class="row">
					<div class="flex head-nav">
						<router-link to="/index" class="logo-img">
							<img src="../../../static/img/index/logo_1.png" />
						</router-link>
						<div class="col-xs-7 nav-head">
							<div class="row login-ok">
								<div style="text-align: right;" v-show="login==='no'">
									<span class="login">
								<router-link to="/Login">登录</router-link>
								</span>
									<span class="t">|</span>
									<span class="resgister">
									<router-link to="/Res">注册</router-link>
								</span>

								</div>
								<div class="col-xs-12" style="text-align: right;" v-show="login!='no'">
									<span class="name">
									<span class="name-mz">{{login}}</span> 您好！
									</span>
									<!--<span class="upgrade">
									<a href="" target="_parent" >升级为高级会员</a>
								</span>-->
									<span class="personal">
									<router-link to="/personalHome" >我的个人中心</router-link>
								</span>
									<span class="tt">|</span>
									<span class="out">
									<button @click="removeLogin">退出</button>
								</span>
									<span class="order">
									<router-link to="/personalOrder" >查看我的订单</router-link>

								</span>
								</div>
								<div class="nav-ul">
									<ul class="col-xs-12 nav-li">

										<li class="active offset">
											<router-link to="/">首页</router-link>
										</li>
										<li>
											<router-link to="/Activ">走进阳村</router-link>
										</li>
										<li>
											<router-link to="/Booking">民宿预订</router-link>
										</li>
										<li>
											<router-link to="/gift">伴手选礼</router-link>
										</li>
										<li>
											<router-link to="">新闻资讯</router-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<router-view />
		<div class="foot">
			<div class="footer-row flex">
				<table>
					<tr>
						<th>关于我们</th>
						<th>阳村招商</th>
						<th>常见问题</th>
						<th>合作伙伴</th>
					</tr>
					<tr>
						<td>
							<router-link to="/about" target="_parent" class="a">联系我们</router-link>
						</td>
						<td>
							<router-link to="zhaoshang" target="_parent" class="a">招商政策</router-link>
						</td>
						<td>
							<router-link to="/liucheng" target="_parent" class="a">预订流程</router-link>
						</td>
						<td>
							<router-link to="" target="_parent" class="a">旅游情报</router-link>
						</td>
					</tr>

					<tr>
						<td>
							<router-link to="/aboutContact" target="_parent" class="a">公司简介</router-link>
						</td>
						<td>
							<router-link to="zhaoshanglogin" target="_parent" class="a">在线报名</router-link>
						</td>
						<td>
							<router-link to="problem" target="_parent" class="a">Q&A</router-link>
						</td>
						<td>

						</td>
					</tr>

				</table>

				<div class="contact ">
					<span class="tel"></span>
					<span>咨询电话<br />40000-96828</span>
					<img src="../../../static/img/index/jthomt_13.jpg" width="162px" />
				</div>
			</div>
			<hr/>
			<p class="text-center" style="text-align: center;">CopyRight&nbsp;&copy;&nbsp;上海智汇乡创旅游发展有限公司 沪ICP备13045608号-1</p>
		</div>
	</div>
</template>

<script>
	import { localStor } from '../../utils/util'
	export default {
		data() {
			return {
				login: "no"
			}
		},
		beforeMount() {
		    this.login = localStorage.login || 'no';
		   console.log(localStor('get','login')) ;
		},
		methods:{
			removeLogin(){
				localStor('remove','login');
				this.login="no";
			}
		}
	}
</script>

<style>

</style>
