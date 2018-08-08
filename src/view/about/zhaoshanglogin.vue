<template>
	<div class="about">
			<div class="container">
				<div class="row about-detail">
					<ul class="col-xs-12 about-ul">
						<li class="home">
							<router-link to="/"></router-link>
						</li>
						<li>></li>
						<li>提交表单</li>

					</ul>
					<div class="col-xs-12 zs-login-img">
						<img src="../../../static/img/index/zs_web_03.jpg" />
					</div>
					<div class="col-xs-12 zs-login-form">
						<div>
							<form action="">
								<label class="label-one"><span>联系人</span><b>*</b>
	    			 			<input type="text" value=""/>
	    			 			<i>请输入您的中文姓名</i>
	    			 			</label>
								<label class="label-two"><span>联络电话</span><b>*</b>
	    			 			<input type="text" value=""/>
	    			 			<i>请输入您的手机或其他联络电话</i>
	    			 			</label>
								<label class="label-three"><span>E-mail</span><b>*</b>
	    			 			<input type="text" value=""/>
	    			 			<i>请输入您常用邮箱地址</i>
	    			 			</label>
								<label class="label-four"><span>职业</span><b>*</b>
	    			 			<input type="text" value=""/>
	    			 			<i>请输入您的职业</i>
	    			 			</label>
								<label class="label-five"><span>是否开过民宿</span><b>*</b>
	    			 			<input type="text" value=""/>
	    			 			<i>请输入您的旅游标准</i>
	    			 			</label>
								<label class="label-six"><span>房间数</span><b>*</b>
	    			 			<input type="text" value=""/>
	    			 			<i>请输入房间数</i>
	    			 			</label>
								<label class="label-seven"><span>投资额度</span><b>*</b>
	    			 			<input type="text" value=""/>
	    			 			<i>请输入额度</i>
	    			 			</label>
								<label class="label-eight"><span>对投资什么业态感兴趣</span><b>*</b>
	    			 			
	    			 		         <select name="">
	    			 			  <option value="">民宿</option>
	    			 			   <option value="">咖啡馆</option>
	    			 			    <option value="">书吧</option>
	    			 			     <option value="">酒吧</option>
	    			 			      <option value="">特色餐饮</option>
	    			 	              	</select>
	    			 			</label>
								<input type="submit" name="" class="submit" id="" value="确认提交" />

							</form>
						</div>
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
  padding: 34px 85px 60px 85px;
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
.about .about-detail .zhaoshang {
  margin-left: 2px;
  background: #fff;
  padding: 14px 14px 0 46px;
  margin-top: 50px;
  border: 1px solid #eeeeee;
}
.about .about-detail .zhaoshang .col-xs-12 {
  padding: 0;
}
.about .about-detail .zhaoshang .zs-one {
  height: 174px;
  border-bottom: 1px solid #cccccc;
}
.about .about-detail .zhaoshang .zs-one .col-xs-2 {
  background: url(../../../static/img/index/zs-icon_02.png) no-repeat;
  background-position: 21px 36px;
  height: 135px;
}
.about .about-detail .zhaoshang .zs-one .col-xs-2 h3 {
  font-size: 18px;
  color: #bf986b;
  text-align: center;
}
.about .about-detail .zhaoshang .zs-one .col-xs-10 p {
  margin-top: 19px;
  font-size: 15px;
}
.about .about-detail .zhaoshang .zs-two {
  height: 152px;
  border-bottom: 1px solid #cccccc;
  margin-top: 71px;
}
.about .about-detail .zhaoshang .zs-two .col-xs-2 {
  background: url(../../../static/img/index/zs-icon_02.png) no-repeat;
  background-position: 21px -84px;
  height: 110px;
}
.about .about-detail .zhaoshang .zs-two .col-xs-2 h3 {
  font-size: 18px;
  margin: 0;
  color: #bf986b;
  margin-top: -14px;
  text-align: center;
}
.about .about-detail .zhaoshang .zs-two .col-xs-10 {
  margin-top: -15px;
}
.about .about-detail .zhaoshang .zs-two .col-xs-10 ul {
  display: inline-block;
  font-size: 14px;
}
.about .about-detail .zhaoshang .zs-two .col-xs-10 ul li {
  width: 299px;
  height: 30px;
  list-style: disc;
}
.about .about-detail .zhaoshang .zs-two .col-xs-10 .zs-two-ul {
  margin: 0 114px 0 20px;
}
.about .about-detail .zhaoshang .zs-three {
  height: 230px;
  border-bottom: 1px solid #cccccc;
  margin-top: 76px;
}
.about .about-detail .zhaoshang .zs-three .col-xs-2 {
  background: url(../../../static/img/index/zs-icon_02.png) no-repeat;
  background-position: 21px -182px;
  height: 110px;
}
.about .about-detail .zhaoshang .zs-three .col-xs-2 h3 {
  font-size: 18px;
  margin: 0;
  color: #bf986b;
  margin-top: -14px;
  text-align: center;
}
.about .about-detail .zhaoshang .zs-three .col-xs-10 {
  margin-top: -15px;
}
.about .about-detail .zhaoshang .zs-three .col-xs-10 ul {
  float: left;
  font-size: 14px;
}
.about .about-detail .zhaoshang .zs-three .col-xs-10 ul li {
  width: 299px;
  padding-bottom: 20px;
  list-style: disc;
}
.about .about-detail .zhaoshang .zs-three .col-xs-10 .zs-two-ul {
  margin: 0 114px 0 20px;
}
.about .about-detail .zhaoshang .zs-four {
  height: 300px;
}
.about .about-detail .zhaoshang .zs-four .col-xs-2 {
  background: url(../../../static/img/index/zs-icon_02.png) no-repeat;
  background-position: 21px -291px;
}
.about .about-detail .zhaoshang .zs-four .col-xs-10 ul li {
  line-height: 22px;
}
.about .about-detail .zhaoshang .zs-five {
  height: 184px;
}
.about .about-detail .zhaoshang .zs-five .col-xs-2 {
  background: url(../../../static/img/index/zs-icon_02.png) no-repeat;
  background-position: 21px -412px;
}
.about .about-detail .zhaoshang .zs-six {
  border: none;
}
.about .about-detail .zhaoshang .zs-six .col-xs-2 {
  background: url(../../../static/img/index/zs-icon_02.png) no-repeat;
  background-position: 21px -520px;
}
.about .about-detail .zs-a a {
  margin: 0 auto;
  margin-top: 50px;
  display: block;
  width: 200px;
  height: 40px;
  background: #c0996f;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 17px;
  text-decoration: none;
}
.about .about-detail .zs-a a:hover {
  background: #4b3b34;
}
.about .about-detail .zs-login-img {
  padding: 0;
  margin-top: 40px;
  height: 300px;
}
.about .about-detail .zs-login-img img {
  width: 1204px;
}
.about .about-detail .zs-login-form {
  background: #fff;
  margin-top: 88px;
  padding-top: 30px;
  border: 1px solid #eee;
}
.about .about-detail .zs-login-form form {
  width: 650px;
  margin: 0 auto;
  padding-left: 10px;
}
.about .about-detail .zs-login-form label {
  display: block;
  font-size: 15px;
  margin: 10px 0;
  font-weight: 100;
}
.about .about-detail .zs-login-form label b {
  color: red;
}
.about .about-detail .zs-login-form label input {
  width: 300px;
  height: 30px;
  margin: 0 10px;
}
.about .about-detail .zs-login-form label select {
  width: 300px;
  height: 30px;
  margin: 0 10px;
}
.about .about-detail .zs-login-form label i {
  font-style: normal;
  font-size: 13px;
  color: #9D9D9D;
}
.about .about-detail .zs-login-form .label-one {
  margin-left: 45px;
}
.about .about-detail .zs-login-form .label-two {
  margin-left: 30px;
}
.about .about-detail .zs-login-form .label-three {
  margin-left: 45px ;
}
.about .about-detail .zs-login-form .label-four {
  margin-left: 60px ;
}
.about .about-detail .zs-login-form .label-six {
  margin-left: 45px ;
}
.about .about-detail .zs-login-form .label-seven {
  margin-left: 30px ;
}
.about .about-detail .zs-login-form .label-eight {
  margin-left: -59px;
}
.about .about-detail .zs-login-form .submit {
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: #c0996f;
  color: #fff;
  font-size: 16px;
  margin: 30px 0 40px 200px ;
}
.about .about-detail .zs-login-form .submit:hover {
  background: #4b3b34;
}
@media all and (max-width: 1200px) {
  .about {
    width: 1230px;
    margin: 0 auto;
  }
}

</style>