<template>
	<div class="about" >
	    	<div class="container">
	    		<div class="row about-detail">
	    			 <ul class="col-xs-12 about-ul">
	    			 	<li class="home">
	    			 		<router-link to="/"></router-link>
	    			 	</li>
	    			 	<li>></li>
	    			 	<li>预订流程</li>
	    			 	
	    			 </ul>
	    			 <div class="col-xs-12 about-text yuding">
	    			 	 <h2>预订流程</h2>
	    			 	 <div class="row yuding-row">
	    			 	 	<div class="col-xs-12 yuding-div">
	    			 	 		<h4>1. 选择民宿</h4>
	    			 	 		<p>
	    			 	 			您可以登录阳村官网，点击“民宿预订”选择想入住的民宿、房型、日期及间数，点击“预订”按钮进行预订，如果页面显示相对的房型“满房”则不能进行预订。
	    			 	 		    
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	<div class="col-xs-12 yuding-div">
	    			 	 		<h4>2. 订单填写</h4>
	    			 	 		<p>
	    			 	 			请先阅读预订须知，并同意相关条款，然后填写入住人的基本信息（姓名、手机号、邮箱、备注），点击“提交”，完成民宿订单
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	<div class="col-xs-12 yuding-div">
	    			 	 		<h4>3.	订单确认</h4>
	    			 	 		<p>
	    			 	 			查看退款政策，若确认无误后请点击“确认”，待客服确认房间后（工作日2小时内）完成最终订单。如若发现错误请点击“取消”，订单及时取消
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	<div class="col-xs-12 yuding-div">
	    			 	 		<h4>4.	订单支付</h4>
	    			 	 		<p>
	    			 	 			
	    			 	 		   我们的客服会电话通知您，进行在线付款，您可以点击“个人中心”，查看订单，待状态为“待支付”状态后点击方可进行在线支付，我们为您提供了微信支付和支付宝
                                                                                    支付两种常用支付方式。
	    			 	 		</p>
	    			 	 	</div>	
	    			 	 	<div class="col-xs-12 yuding-div">
	    			 	 	<h4>5.	订单点评</h4>
	    			 	 		<p>
	    			 	 		
	    			 	 		  待您入住完毕后，请于1周内对我们的民宿进行点评，请点击“个人中心”，在待点评一栏中点击相关订单完成对入住民宿的点评
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

<style scoped="scoped">
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