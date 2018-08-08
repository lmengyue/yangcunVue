<template>
	<div class="about">
		<div class="container">
			<div class="row about-detail">
				<ul class="col-xs-12 about-ul">
					<li class="home">
						<router-link to="/"></router-link>
					</li>
					<li>></li>
					<li>找回密码</li>
				</ul>
				<div class="col-xs-12 find-pass">

					<el-tabs type="border-card">
						<el-tab-pane label="通过邮件找回密码">
							<div class="col-xs-12 find-form">
								<h5>邮件找回密码</h5>
								<p>请输入注册时留下的邮箱地址或手机号码，我们会将您的新密码发到注册邮箱。</p>
								<form action="">
									<input type="text" value="" class="find-tel" /><span class="find-tel-text"></span>
									<div></div>
									<input type="button" name="" value="下一步" class="button" />
								</form>
								<span>没收到邮件？稍等片刻；可电话寻求帮助&nbsp;021-62669696-8178&nbsp;王先生 </span>
							</div>
						</el-tab-pane>
						<el-tab-pane label="通过短信找回密码">
							<div class="col-xs-12 find-form">
								<h5>短信找回密码</h5>
								<p>请输入注册时留下的手机号码，我们将发送修改密码验证码到您注册的手机。</p>
								<form action="">
									<input type="text" value="" class="find-tel" /><span class="find-tel-text"></span>
									<div></div>
									<input type="button" name="" value="下一步" class="button" />
								</form>
								<span>没收到邮件？稍等片刻；可电话寻求帮助&nbsp;021-62669696-8178&nbsp;王先生 </span>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.about {
  background: #f9f9f9;
}
.about .about-detail {
  padding: 34px 80px 60px 90px;
}
.about .about-detail .about-ul {
  border-bottom: 2px solid #6e615b;
  padding: 4px;
  margin-bottom: 5px;
}
.about .about-detail .about-ul li {
  display: inline-block;
  font-size: 15px;
  padding: 0 6px;
  cursor: pointer;
}
.about .about-detail .about-ul li a {
  display: block;
  width: 22px;
  height: 22px;
  background: url(../../../static/img/about/home_icon.png) no-repeat;
  background-position: -15px -4px;
  transition: .3s;
}
.about .about-detail .about-ul li a:hover {
  background-position: -50px -4px;
}
.about .about-detail .about-ul .home {
  height: 24px;
  padding: 0;
  padding-top: 5px;
}
.about .about-detail .find-pass {
  padding-left: 200px ;
  margin-top: 68px;
}
.about .about-detail .find-pass ul {
  border-bottom: 1px solid #eee ;
  height: 35px;
  padding-left: 96px;
}
.about .about-detail .find-pass ul li {
  display: inline-block;
  margin-right: 3px;
}
.about .about-detail .find-pass ul li a {
  color: #000 ;
  display: inline-block;
  padding: 7px 20px 6px 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  border: 1px solid #eee;
  border-bottom: none;
  background: #fff;
}
.about .about-detail .find-pass ul .tel a {
  background: #e5e5e5;
}
.about .about-detail .find-form {
  padding-left: 40px;
  margin-bottom: 82px;
}
.about .about-detail .find-form h5 {
  font-size: 15px;
  font-weight: bold;
}
.about .about-detail .find-form p {
  font-size: 16px;
}
.about .about-detail .find-form form input {
  width: 240px;
  height: 30px;
}
.about .about-detail .find-form form .button {
  width: 150px;
  height: 35px;
  background: #c8a063;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.about .about-detail .find-form form .button:hover {
  background: #6e615b;
}
@media all and (max-width: 1200px) {
  .about {
    width: 1230px;
    margin: 0 auto;
  }
}


</style>