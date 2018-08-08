<template>
		 <div class="about" >
	    	<div class="container">
	    		<div class="row about-detail">
	    			 <ul class="col-xs-12 about-ul">
	    			 	<li class="home">
	    			 	<router-link to="/"></router-link>
	    			 	</li>
	    			 	<li>></li>
	    			 	<li>常见问题</li>
	    			 	
	    			 </ul>
	    			 <div class="col-xs-12 about-text">
	    			 	 <h2>常见问题</h2>
	    			 	 <div class="row">
	    			 	 	<div class="col-xs-12 ">
	    			 	 		<div>1. 如何联系阳村工作人员？</div>
	    			 	 		<p>
	    			 	 			<span>请拨打阳村客服电话：4000096828，客服时间为工作日9点至18点。</span>
	    			 	 		    <a href="javascript:void (0);">收起 ></a>
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	<div class="col-xs-12 ">
	    			 	 		<div>2. 用户注册时，收不到短信怎么办？</div>
	    			 	 		<p>
	    			 	 			<span>请确保您当前手机信号畅通，信号不好时可以尝试重启手机重新获取验证码。如问题无法解决，可以拨打客服电话4000096828，我们的客服会协助您解决问题。</span>
	    			 	 		    <a href="javascript:void (0);">收起 ></a>
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	<div class="col-xs-12 ">
	    			 	 		<div>3.	登录密码忘记怎么办</div>
	    			 	 		<p>
	    			 	 			<span>在会员登录页上点击“忘记密码”按钮，填写注册时的邮件或手机号重新设置密码。</span>
	    			 	 		    <a href="javascript:void (0);">收起 ></a>
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	<div class="col-xs-12 ">
	    			 	 		<div>4.	怎样预订民宿？</div>
	    			 	 		<p>
	    			 	 			<span>先注册成为阳村会员，待注册完成后，可为自己或他人预订民宿</span>
	    			 	 		    <a href="javascript:void (0);">收起 ></a>
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	<div class="col-xs-12 ">
	    			 	 	<div>5.	如何查看我的留言</div>
	    			 	 		<p>
	    			 	 			<span>登录阳村首页，进入(个人中心)-查看(我的留言)</span>
	    			 	 		    <a href="javascript:void (0);">收起 ></a>
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	<div class="col-xs-12 ">
	    			 	 		<div>6. 下了订单如何退款？</div>
	    			 	 		<p>
	    			 	 			<span>订单取消，请至少提前4个工作日告知我们，否则不予退款；节假日期间入住的订单不予退订，尽请谅解。</span>
	    			 	 		    <a href="javascript:void (0);">收起 ></a>
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	
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
  padding: 34px 88px 60px 82px;
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
.about .about-detail .about-text {
  padding: 0;
  margin-top: 36px;
  background: #fff;
  border: 1px solid #dcdcdc;
  border-top: none ;
}
.about .about-detail .about-text h2 {
  line-height: 58px;
  margin: 0;
  padding-left: 25px;
  font-size: 25px;
  color: #636363;
  background: #efefef ;
  border: 1px solid #dcdcdc;
}
.about .about-detail .about-text .row {
  padding: 30px 40px 63px;
}
.about .about-detail .about-text .row .col-xs-12 {
  padding: 0;
  height: 63px;
  padding: 16px 0 16px;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 1px dashed #636363;
}
.about .about-detail .about-text .row .col-xs-12 div {
  height: 25px;
  color: #636363;
  font-size: 15px;
  text-indent: 2.5em;
  background: url(../../../static/img/about/QA_iocn.png) no-repeat;
  background-position: -6px -7px;
}
.about .about-detail .about-text .row .col-xs-12 p {
  background: url(../../../static/img/about/QA_iocn.png) no-repeat;
  background-position: -6px -41px;
  font-size: 15px;
  margin-top: 19px;
}
.about .about-detail .about-text .row .col-xs-12 p span {
  display: block;
  width: 93%;
  color: #636363;
  height: 45px;
  margin-left: 35px;
}
.about .about-detail .about-text .row .col-xs-12 p a {
  display: block;
  color: #000;
  float: right;
}
.about .about-detail .about-text .row .yuding-div {
  cursor: auto;
}
.about .about-detail .yuding .yuding-row {
  padding-top: 0 !important ;
}
.about .about-detail .yuding .yuding-div {
  height: auto !important;
  border-bottom: 1px dashed #b2b2b2 !important;
}
.about .about-detail .yuding .yuding-div h4 {
  font-size: 17px;
  color: #c8a063;
}
.about .about-detail .yuding .yuding-div p {
  background: #fff !important;
  font-size: 13px !important;
  padding: 0 20px;
}
@media all and (max-width: 1200px) {
  .about {
    width: 1230px;
    margin: 0 auto;
  }
}
</style>