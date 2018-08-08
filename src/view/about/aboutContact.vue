<template>
	 <div class="about" >
	    	<div class="container">
	    		<div class="row about-detail">
	    			 <ul class="col-xs-12 about-ul">
	    			 	<li class="home">
	    			 		<router-link to="/"></router-link>
	    			 	</li>
	    			 	<li>></li>
	    			 	<li>关于我们</li>
	    			 	<li>></li>
	    			 	<li>联系我们</li>
	    			 </ul>
	    			 <div class="col-xs-12 about-text">
	    			 	 <h2>联系我们</h2>
	    			 	 <div class="row flex">
	    			 	 	<div class="col-xs-5 ">
	    			 	 		<h4>公司信息</h4>
	    			 	 		<p>上海智汇乡创旅游发展有限公司</p>
	    			 	 		<h4>联系方式</h4>
	    			 	 		<div class="tel">
	    			 	 			<p>预订电话</p>
	    			 	 			<span>021-62669696</span>
	    			 	 		</div>
	    			 	 		<h4>公司地址</h4>
	    			 	 		<p>地址：上海市静安区新闸路1136弄1号11楼</p>
	    			 	 		<p>邮编：200041</p>
	    			 	 		<h4>投诉建议</h4>
	    			 	 		<p>电子邮箱：tousu@myvacation.cn</p>
	    			 	 	</div>
	    			 	 	<div class="col-xs-7">
	    			 	 		<img src="../../../static/img/about/xlwm_dt.png" width="500px"/>
	    			 	 	</div>
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