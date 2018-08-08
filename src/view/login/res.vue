<template>
	<div>
		<div class="about">
			<div class="container">
				<div class="row about-detail">
					<ul class="col-xs-12 about-ul">
						<li class="home">
							<router-link to="/" target="_parent"></router-link>
						</li>
						<li>></li>
						<li>会员注册</li>
					</ul>
					<div class="col-xs-12 login reg">
						<div class="row">
							<div class="col-xs-8 login-img reg-img">
								<img src="../../../static/img/about/login_res_web_03.jpg" width="100%" height="620px" />
							</div>
							<div class="col-xs-4 login-from reg-from">
								<ul>
									<li class="login-ul-li">会员注册</li>
									<li>已有账号？</li>
									<li class="li-res">
										<router-link to="/login" target="_parent">登录会员</router-link>
									</li>
								</ul>
								<form method="post">
									<div >
										<span><i>*</i>邮箱</span><input type="email" placeholder="请填写您的邮箱" autocomplete="email" v-model="email" />
										<i class="error">{{error}}</i>
									</div>
									<p class="explanation">账户为您的电子邮件地址，例如mwy@examle.com</p>
									<div>
										<span><i>*</i>登录密码</span><input type="password" placeholder="设定密码" autocomplete="new-password" v-model="pass" />
										<i class="error">{{error}}</i>
									</div>
									<p class="explanation">密码由6-16个字母、数字和符号组成</p>
									<div >
										<span><i>*</i>确认密码</span><input type="password" placeholder="重复密码" autocomplete="new-password" v-model="rePassword" />
										<i class="error">{{error}}</i>
									</div>
									<p class="explanation">密码由6-16个字母、数字和符号组成</p>
									<i class="error">{{error}}</i>
									<div >
										<span>昵称</span><input type="text" placeholder="设定昵称" v-model="name" />
										<i class="error">{{error}}</i>
									</div>
									<p class="explanation">2-15个字符(包括小写字母、数字、下划线、中文)，一个汉字为两个字符。</p>
									<div >
										<span>手机号码</span><input type="tel" placeholder="请填写您的手机号" v-model="tel" />
										<i class="error">{{error}}</i>
									</div>
									<p class="explanation">请认真填写，以便我们提供更好的服务。<br><span>（手机也可以作为账户登录名）</span></p>
								</form>
								<div class="codeDiv">
									<span>验证码</span><input type="text" class="code" v-model="code" /><button class="btn-code" @click="CodeFs" :disabled="num != '获取验证码'">{{num}}</button>
								</div>

								<button class="sub sub-res" @click="Submit">注册</button>
								<p class="login-foot reg-foot-p">
									<span class="login-foot-text">使用第三方找账号登录</span>
									<span class="weibo"></span>
									<span class="qq"></span>
									<p/>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from 'axios';
	import qs from 'qs';
	import { fetch } from '../../utils/fetch';
	export default {
		data() {
			return {
				email: '',
				pass: '',
				rePassword: '',
				name: '',
				tel: '',
				num: '获取验证码',
				code: '',
				error: ''
			}
		},
		methods: {
			CodeFs() {
				let i = 60;
				let time = setInterval(() => {
					i--;
					if(i == 0) {
						i = '获取验证码'
						clearInterval(time);
					}
					this.num = i;
				}, 1000)
				let data = {
					mobile: this.tel
				};
				fetch('post', 'user/get_check_num', data, (res) => {
					console.log(res);
				})
			},
			Submit() {
				if(this.email == "" || this.pass == "") {
					this.error = '输入不正确';
				} else {
					if(this.pass == this.rePassword) {
						let data = {
							pass: this.pass,
							email: this.email,
							name: this.name,
							mobile: this.tel,
							checkNum: this.code
						}
						fetch('post', 'user/register', data, (res) => {
							console.log(res);
							if(res.code == 0) {
								this.$router.push({
									path: '/login'
								})
							}
						})
					} else {
						alert('密码不一致')

					}

				}

			}
		}
	}
</script>

<style>

</style>
