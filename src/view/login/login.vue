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
								<div stylel="text-align: right;" v-show="login==='no'">
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
									<a href="" target="_parent" >我的个人中心</a>
								</span>
									<span class="tt">|</span>
									<span class="out">
									<span @click="removeLogin">退出</span>
								</span>
									<span class="order">
									<a href="" target="_parent">查看我的订单</a>
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
											<router-link to="/news">新闻资讯</router-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="about">
			<div class="container">
				<div class="row about-detail">
					<ul class="col-xs-12 about-ul">
						<li class="home">
							<router-link to="/" ></router-link>
						</li>
						<li>></li>
						<li>会员登录</li>
					</ul>
					<div class="col-xs-12 login">
						<div class="row">
							<div class="col-xs-8 login-img">
								<img src="../../../static/img/about/login_web_03.jpg" width="100%" height="350px" />
							</div>
							<div class="col-xs-4 login-from">
								<ul>
									<li class="login-ul-li">会员登录</li>
									<li>还没有账号？</li>
									<li class="li-res">
										<router-link to="/res" target="_parent">立即注册</router-link>
									</li>
								</ul>
								<form method="post">
									<div >
										<span>登录名</span><input type="text" placeholder="会员手机号/邮箱" autocomplete="new-Tel" v-model="LoginTel" />
										<i class="error">{{error}}</i>
									</div>
									<div  class="login-input">
										<span>密码</span><input type="password" placeholder="请输入密码" autocomplete="new-password" v-model="LoginPass" />
										<i class="error">{{error}}</i>
									</div>
									<input type="checkbox" name="" id="checkbox" value="" /><label for="checkbox">自动登录</label>
									<router-link to="/findPass" target="_parent" class="so">忘记密码?</router-link>
								</form>
								<input type="submit" name=""
									value="登录" class="sub" @click="sub" />

								<p class="login-foot">
									<span class="login-foot-text">使用第三方找账号登录</span>
									<span class="weibo"></span>
									<span class="qq" @click="qqLogin"></span>
								<p/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
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
	import { fetch } from '../../utils/fetch'
	import { localStor } from '../../utils/util'
	export default {
		data() {
			return {
				LoginTel: '',
				LoginPass: '',
				error: '',
				login: "no",
				Url:""
			}
		},
		methods: {
			sub() {
				if(this.LoginTel == "" || this.LoginPass == "") {
					this.error = '输入不正确';
				} else {
					let loginData = {
						mobile: this.LoginTel,
						password: this.LoginPass
					}
					fetch('post', 'user/login', loginData, (res) => {
						localStor('set', 'login', loginData.mobile);
						this.$router.push({
							path: '/'
						})
					})
				};
				var url="";
				url+= window.location.href;
			   this.Url = url;

			},
			// onCopy:function(e){
			// 	console.log(e)
			// },
			// onError:function(e){
			// 	console.log(e)
			// },
			removeLogin(){
				localStor('remove','login');
				this.login="no";
			},
			qqLogin(){
				window.location.href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101488974&redirect_uri=http%3a%2f%2f104.zrpic.com%2fyangcun&state=qq";
			}
		},
		beforeMount() {
		    this.login = localStorage.login || 'no';

		}
	}
</script>

<style>

</style>
