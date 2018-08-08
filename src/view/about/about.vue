<template>
	<div class="about">
			<div class="container">
				<div class="row about-detail">
					<ul class="col-xs-12 about-ul">
						<li class="home">
							<router-link to="/"></router-link>
						</li>
						<li>></li>
						<li>关于我们</li>
						<li>></li>
						<li>公司简介</li>
					</ul>

					<div class="col-xs-12 about-com">
						<h2>公司简介</h2>
						<div class="row col-xs-12">
							<h4 class="about-com-title">智汇乡创</h4>
							<p class="about-com-text">阳村是由上海智汇乡创旅游发展有限公司管理的民宿综合体。这是一家涉及旅游、酒店、 民宿等多个领域的创新型公司，它在行业内率先提出以民宿村为载体的民宿、酒店集群，并配合民俗文化，餐饮文化； 穿插当地手工产品的综合型平台。以较低的成本去解决旅游目的地的配套及运营问题，从而保证旅游目的地或旅游地产项目的可持续性经营 ，带动旅游项目的成功开发。与此同时，对于政府而言，通过就地开发， 解决了一部分美丽乡村建设及新农村改造的问题，最终得以改善农村空心化、农民工转型和对落后地区农民致富的一系列问题。
							</p>
							<h4 class="about-com-title">主要业务</h4>
							<p class="about-com-text">智汇乡创业务分为四大板块，分别面向旅游项目开发企业/政府、民宿经营者、餐饮娱乐创业者、民宿消费者、旅游地产投资人。</p>
							<ul class="row about-row-ul">
								<li class="col-xs-3 about-com-ul-lio">
									<span></span>
									<h4>开发企业/政府</h4>
									<p>核心内容： 民宿村项目开发与经营，拉动旅游地产升级、新农村建设 其他内容： 策划定位，规划定位，项目招商，项目运营管理</p>
								</li>
								<li class="col-xs-3 about-com-ul-lit">
									<span></span>
									<h4 class="about-com-auto">
	    			 	 	   			民宿经营者
	    			 	 	   			<br/>
	    			 	 	   			餐饮娱乐业者
	    			 	 	   		</h4>
									<p>核心内容： 商业及民宿品牌孵化扶持，客源开发及客房预定 其他内容： 民宿村与乡 村旅游综合体的日常管 理服务及特色服务
									</p>
								</li>
								<li class="col-xs-3 about-com-ul-litr">
									<span></span>
									<h4>民宿消费者</h4>
									<p>核心内容：民宿旅游产品 推介，旅游度假产品销售 其他内容： 特色小众乡村旅游安排，当地土特产品购买，旅游住宿目的地推荐预定，特色乡村文化体验等</p>
								</li>
								<li class="col-xs-3 about-com-ul-lif">
									<span></span>
									<h4>旅游地产投资人</h4>
									<p>核心内容： 会员制使用权消费型产品，旅游众筹类产品，资本导入 其他内容： 优质旅游地产销售代理</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
</script>

<style scoped>
	.about {
  background: #f9f9f9;
}
.about .about-detail {
  padding: 34px 80px 60px 88px;
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
  padding-bottom: 20px;
}
.about .about-detail .about-text .row .col-xs-5 {
  padding-left: 40px;
  margin-top: 40px;
}
.about .about-detail .about-text .row .col-xs-5 h4 {
  font-weight: 600;
  margin-top: 15px;
}
.about .about-detail .about-text .row .col-xs-5 .tel {
  height: 74px;
  padding: 6px 0px;
  width: 260px;
  margin-bottom: 20px;
  background: #EEEEEE;
  padding-left: 26px;
}
.about .about-detail .about-text .row .col-xs-5 .tel p {
  margin: 0;
}
.about .about-detail .about-text .row .col-xs-5 .tel span {
  display: block;
  font-size: 30px;
  line-height: 38px;
}
.about .about-detail .about-text .row .col-xs-7 {
  margin-top: 20px;
}
.about .about-detail .about-com {
  padding: 0;
  margin-top: 36px;
  background: #fff;
  border: 1px solid #dcdcdc;
  border-top: none ;
}
.about .about-detail .about-com h2 {
  line-height: 58px;
  margin: 0;
  padding-left: 25px;
  font-size: 25px;
  color: #636363;
  background: #efefef ;
  border: 1px solid #dcdcdc;
}
.about .about-detail .about-com .row {
  padding-left: 42px;
  padding-bottom: 20px ;
}
.about .about-detail .about-com .row .about-com-title {
  width: 100px;
  line-height: 36px;
  background: #7f6247;
  font-size: 20px;
  text-align: center;
  color: #fff;
  margin: 30px 0 20px;
}
.about .about-detail .about-com .row .about-com-text {
  padding-left: 5px;
  font-size: 15px;
  line-height: 30px;
}
.about .about-detail .about-com .row .about-row-ul {
  padding: 0;
  margin-top: 20px;
  display: flex;
}
.about .about-detail .about-com .row .about-row-ul .col-xs-3 {
  display: inline-block;
}
.about .about-detail .about-com .row .about-row-ul .col-xs-3 span {
  display: block;
  width: 178px;
  margin-left: 10px;
  height: 145px;
  background: url(../../../static/img/about/gsjs_icon.png) no-repeat;
  background-position: -20px -22px;
}
.about .about-detail .about-com .row .about-row-ul .col-xs-3 h4 {
  text-align: center;
  color: #7f6247 ;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0 20px;
}
.about .about-detail .about-com .row .about-row-ul .col-xs-3 .about-com-auto {
  line-height: 20px;
}
.about .about-detail .about-com .row .about-row-ul .col-xs-3 p {
  padding: 0 25px;
  font-size: 14px;
}
.about .about-detail .about-com .row .about-row-ul .about-com-ul-lit span {
  background-position: -20px -219px;
}
.about .about-detail .about-com .row .about-row-ul .about-com-ul-litr span {
  background-position: -24px -427px;
}
.about .about-detail .about-com .row .about-row-ul .about-com-ul-lif span {
  background-position: -20px -655px;
}
@media all and (max-width: 1200px) {
  .about {
    width: 1230px;
    margin: 0 auto;
  }
}

</style>