<template>
	<div>
		<div class="booking">
			<div class="container">
				<div class="row">
					<ul class="col-xs-12 booking-ul">
						<li class="home">
						<router-link to="/" target="_parent"></router-link>
						</li>
						<li>></li>
						<li>民宿预订</li>
						<li>></li>
						<li>无锡鸣珂里桃花源精品酒店</li>
					</ul>
					<div class="col-xs-12 mingkeli">
						<div class="mingkeli-box1-img">
							<div class="img">
								<img src="../../../static/img/index/msyd_web_02.jpg" style="display: block" />
								<img src="../../../static/img/index/msyd_web_02.jpg" />
							</div>
							<div class="ltr">
								<span class="left">&lt;</span>
								<span class="right">&gt;</span>
							</div>
						</div>
						<div class="mingkeli-box2-img">
							<div class="box2-img">
								<img src="../../../static/img/index/msyd2_web_05.jpg" class="img-right" />
								<img src="../../../static/img/index/msyd2_web_07.jpg" />
							</div>
							<div class="box2-img">
								<img src="../../../static/img/index/msyd2_web_11.jpg" class=" img-right" />
								<img src="../../../static/img/index/msyd2_web_12.jpg" />
							</div>
							<div class="text-img">
								<p>无锡鸣珂里桃花源精品酒店图片30张</p>
							</div>
						</div>
					</div>
					<div class="col-xs-12 mingkeli-type">
						<ul class="mingkeli-type-time">
							<li class="active">房型</li>
							<li><a href="#minsu">民宿信息</a></li>
							<li><a href="#dianp">民宿点评</a></li>
							<li class="in">
							   <div class="block">
							    <el-date-picker
							      v-model="value"
							      type="daterange"
							      range-separator="至"
							      start-placeholder="开始日期"
							      end-placeholder="结束日期"
							      format="yyyy 年 MM 月 dd 日"
      							  value-format="yyyy-MM-dd"
      							  @change="yuding">
							    </el-date-picker>
							  </div>
							</li>
							<li class="with">
								共
								<span class="day-time">1</span> 晚
							</li>
							<li class="confirm">
								<a href="JavaScript:void(0)" @click="getHouse(value)">确认修改</a>
							</li>
						</ul>
						<div style="text-align: center;">
							<span class="fa fa-spinner fa-spin" style="display: none;font-size: 30px;"></span>
						</div>
						
						<div class="Room-type-box">
							<ul class="Room-type-nav">
								<li></li>
								<li>床型</li>
								<li>早餐</li>
								<li>宽带</li>
								<li>取消政策</li>
								<li>价格</li>
							</ul>
							<table id="table">
								<tr v-for="type in f_type">
									<td class="first" >
										<img :src="type.imgs[0]+type.imgs[1]"/>
										<div class="type-hover">
											<label></label>
										   <img :src="type.imgs[0]+type.imgs[2]"/>
										   <img :src="type.imgs[0]+type.imgs[3]"/>
										   <img :src="type.imgs[0]+type.imgs[4]"/>
										   <span>最多可住2人  |  可加床：是   |  建筑面积：31平米   |   特色：禅意/亲自</span>
										</div>
									</td>
									<td class="type">{{type.fx_name}}</td>
									<td class="breakfast">{{type.fx_zc}}</td>
									<td class="wi-fi">{{type.fx_kd}}</td>
									<td class="refund">{{type.fx_cw}}</td>
									<td class="money">￥{{type.fx_jg}}</td>
									<td class="btn-b">
										<router-link :to="'/order/'+type.fx_id" class="a"  >预订</router-link>
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div class="col-xs-12 minsu-list" id="minsu">
						<h3>民宿信息</h3>
						<div class="jianjie">
							<table>
								<tr>
									<td class="jianjie-title">民宿简介</td>
									<td class="text-list"><p>
<pre>浮生如梦，为欢几何？
浮生如梦，为欢几何？
有美庐居于阳山，屋舍六椽，书房一间，花田半亩。
篱用竹编，墙以藤引；
有廊有厢，地极幽静；
亭榭窗栏尽从朴素。
鲜菱雪藕，风晴雨露；
柴火煎茶，暖酒烹肴；
烟火人间有味是清欢。

风生竹院，倚窗对月；
登舟解缆，桃李争妍；
诗书为伴不觉人生寒。
桃源一见寻，但期合意，不论风水，无关风月。
春风一杯酒，襟怀高旷，此心安处是吾乡。
美庐，等你回家。</pre>		
										    
									</p>
										
									</td>
								</tr>
							</table>
						</div>
                        <hr style="width:1000px;margin: 20px auto;" />
						<div class="jianjie time">
							<table>
								<tr>
									<td class="jianjie-title">入离店时间</td>
									<td class="text-list">入住时间：14:00以后	<span>  |  </span> 离店时间：12:00之前<span>  |  </span>儿童政策：不接受18岁以下客人单独入住。 </td>
								</tr>
							</table>	
						</div>
							 <hr style="width:1000px;margin: 20px auto;" />
						<div class="shes">
							<h4>配套设施</h4>
							<div class="shes-text">
								<table class="shes-text_table">
									<tr>
										<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
										<td class="tilte-td" >基础设施</td>
										<td>
											<ul>
												<li>有可无线上网的公共区域免费</li>
												<li>中餐厅 </li>
												<li>酒吧</li>
												<li>大堂吧</li>
												<li>中央空调</li>
												<li>公共音响系统 </li>
												<li>非经营性客人休息区 </li>
												<li>多媒体演示系统</li>
												<li>公共区域闭路电视监控系统 </li>
												<li>免费停车场</li>
										     </ul>
										</td>
										</tr>
								</table>
                               <hr />
								<table class="shes-text_table">
									<tr>
										<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
										<td class="tilte-td" >活动设施</td>
										<td>
											<ul>
												<li>有可无线上网的公共区域免费</li>
												<li>中餐厅 </li>
												<li>酒吧</li>
												<li>大堂吧</li>
												<li>中央空调</li>
												<li>公共音响系统 </li>
												<li>非经营性客人休息区 </li>
												<li>多媒体演示系统</li>
												<li>公共区域闭路电视监控系统 </li>
												<li>免费停车场</li>
										     </ul>
										</td>
										</tr>
								</table>
								<hr />
								<table class="shes-text_table">
									<tr>
										<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
										<td class="tilte-td" >活动设施</td>
										<td>
											<ul>
												<li>有可无线上网的公共区域免费</li>
												<li>中餐厅 </li>
												<li>酒吧</li>
												<li>大堂吧</li>
												<li>中央空调</li>
												<li>公共音响系统 </li>
										
										     </ul>
										</td>
										</tr>
								</table>
								<hr />
								<table class="shes-text_table">
									<tr>
										<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
										<td class="tilte-td" >客房设施</td>
										<td>
											<ul>
												<li>有可无线上网的公共区域免费</li>
												<li>中餐厅 </li>
												<li>酒吧</li>
												<li>大堂吧</li>
												<li>中央空调</li>
												<li>公共音响系统 </li>
												<li>非经营性客人休息区 </li>
												<li>多媒体演示系统</li>
												<li>公共区域闭路电视监控系统 </li>
												<li>免费停车场</li>
												<li>公共音响系统 </li>
												<li>非经营性客人休息区 </li>
												<li>多媒体演示系统</li>
												<li>公共区域闭路电视监控系统 </li>
												<li>免费停车场</li>
												<li>公共音响系统 </li>
												<li>非经营性客人休息区 </li>
												<li>多媒体演示系统</li>
												<li>公共区域闭路电视监控系统 </li>
												<li>免费停车场</li>
												<li>公共音响系统 </li>
												<li>非经营性客人休息区 </li>
												<li>多媒体演示系统</li>
												<li>公共区域闭路电视监控系统 </li>
										     </ul>
										</td>
										</tr>
								</table>
								<hr />
							</div>
						</div>
					</div>

					<div class="col-xs-12 dianpin" id="dianp">
						<h3>咨询点评</h3>
						<div class="dianpin-who">
							<table class="liuyan">
							<tr>
								<td class="name_style">
									<i><img src="../../../static/img/index/msyd_icon-1.png"/></i>
									<span><a href="#">你的名字</a></span>
								</td>
								<td class="text_style">
									<div class="text-us">
										<p>我没有想说的其实 我喜欢现在的生活</p>
									</div>
									<div class="text-me">
										<p>尊敬的客户你好 ，我不想回答你的问题</p>
									</div>

								</td>
							</tr>
							<tr>
								<td class="name_style">
									<i><img src="../../../static/img/index/msyd_icon-1.png"/></i>
									<span><a href="#">你的名字</a></span>
								</td>
								<td class="text_style">
									<div class="text-us">
										<p>我没有想说的其实 我喜欢现在的生活</p>
									</div>
								</td>
							</tr>					
							</table>
						</div>
						<div class="dianpin-sub">
							<ul>
								<li class="avatar"></li>
								<li></li>
								<li>您好 ，欢迎你的光临！</li>
								<li>
									<button ="">[退出]</button>
								</li>
							</ul>
							<i>留言内容：（500字以内）</i>
							<form class="sub">
								<textarea id="ly"></textarea>
								<input type="submit" value="确认，提交" onclick="sub()" />
							</form>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import { fetch } from '../../utils/fetch'
    import axios from 'axios'
	export default{
		data(){
			return{
				 value:'',
				 f_type:''
			}
		},
		 created:function(){
		 	fetch('post','user/Ft-type','',(res)=>{
					//console.log(res)
					this.f_type=res.data;
				});
		 },
		methods:{
			yuding(){
				console.log(this.value[0])
				console.log(this.value[1])
				
			},
			getHouse(){
				fetch('post','user/Ft-type',{startDate:this.value[0],endDate:this.value[1]},(res)=>{
					//console.log(res)
					this.f_type=res.data;
				})
			}
		 
		}
	}
</script>

<style scoped>
	.booking {
  background: #f9f9f9;
}
.booking .row {
 width: 1030px;
 margin: 0 auto;
 padding-bottom: 50px;
}
.booking .row .booking-ul {
  border-bottom: 2px solid #6e615b;
  padding: 4px;
  margin-bottom: 5px;
  text-align: left;
}

.booking .row .booking-ul li {
  display: inline-block;
  font-size: 15px;
  padding: 0 6px;
  cursor: pointer;
}
.booking .row .booking-ul a {
  color: #000;
  text-decoration: none;
}
.booking .row .booking-ul .home {
  height: 24px;
  padding: 0;
  padding-top: 5px;
}
.booking .row .booking-ul .home a {
  display: block;
  width: 22px;
  height: 22px;
  background: url(../../../static/img/about/home_icon.png) no-repeat;
  background-position: -15px -4px;
  transition: .3s;
}
.booking .row .booking-ul .home a:hover {
  background-position: -50px -4px;
}
.booking .row .booking-text {
  padding: 0;
  border: 1px solid #dcdcdc;
  display: block;
  margin-top: 40px;
  background: #fff;
}
.booking .row .booking-text .img {
  padding: 0;
}
.booking .row .booking-text .booking-title1 {
  padding: 10px 20px 10px 20px;
}
.booking .row .booking-text .booking-title1 h3 {
  color: #c8a063;
}
.booking .row .booking-text .booking-title1 p {
  font-size: 15px;
  margin-top: 20px;
  color: #000;
}
.booking .row .booking-text .booking-title1 .address {
  font-size: 14px;
}
.booking .row .booking-text .booking-title1 .price {
  width: 125px;
  padding-right: 10px;
  margin-left: 340px;
}
.booking .row .booking-text .booking-title1 .price b {
  display: block;
  color: #000;
}
.booking .row .booking-text .booking-title1 .price b span {
  font-size: 25px;
  color: #7c5a25;
}
.booking .row .booking-text .booking-title1 .price .yuding {
  width: 100px;
  height: 30px;
  display: block;
  background: #c8a063;
  margin-top: 8px;
  text-align: center;
  line-height: 30px;
  color: #fff;
}
.booking .row .booking-text:hover {
  box-shadow: 0px 0px 15px #8C8C8C;
}
.booking .row .paging ul {
  float: right;
  margin-top: 31px;
}
.booking .row .paging ul li {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #dcdcdc;
  text-align: center;
  line-height: 30px;
}
.booking .row .paging ul .paging-active {
  background: #c0996f;
  color: #fff;
  border: none;
}
.booking .row .mingkeli {
  padding: 14px;
  background: #fff;
}
.booking .row .mingkeli .mingkeli-box1-img {
  width: 564px;
  height: 380px;
  overflow: hidden;
  position: relative;
  margin-right: 13px;
  float: left;
}
.booking .row .mingkeli .mingkeli-box1-img img {
  position: absolute;
  top: 0;
  width: 564px;
  display: none;
}
.booking .row .mingkeli .mingkeli-box1-img .ltr {
  width: 560px;
  height: 50px;
  position: absolute;
  top: 50%;
  margin-top: -35px;
  font-size: 55px;
}
.booking .row .mingkeli .mingkeli-box1-img .ltr span {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  cursor: pointer;
}
.booking .row .mingkeli .mingkeli-box1-img .ltr .left {
  float: left;
}
.booking .row .mingkeli .mingkeli-box1-img .ltr .right {
  float: right;
}
.booking .row .mingkeli .mingkeli-box2-img {
  height: 380px;
  margin: 0;
  overflow: hidden;
}
.booking .row .mingkeli .mingkeli-box2-img .box2-img {
  margin-bottom: 8px;
}
.booking .row .mingkeli .mingkeli-box2-img .box2-img img {
  width: 208px ;
}
.booking .row .mingkeli .mingkeli-box2-img .box2-img .img-right {
  margin-right: 4px;
}
.booking .row .mingkeli .mingkeli-box2-img .text-img {
  width: 100%;
  height: 35px;
  background: #333333;
  color: #fff;
  line-height: 35px;
  padding-right: 20px ;
}
.booking .row .mingkeli .mingkeli-box2-img .text-img p {
  float: right;
}
.booking .row .mingkeli-type {
  border: 1px solid #f1f1f1;
  background: #fff;
  padding: 0;
  margin-top: 15px;
}
.booking .row .mingkeli-type .mingkeli-type-time {
  background: #f1f1f1;
  height: 70px;
}
.booking .row .mingkeli-type .mingkeli-type-time li {
  display: inline-block;
  width: 110px;
  text-align: center;
  line-height: 68px;
  height: 68px;
  font-size: 17px;
}
.booking .row .mingkeli-type .mingkeli-type-time li a {
  text-decoration: none;
  color: #000;
}
.booking .row .mingkeli-type .mingkeli-type-time li:hover {
  background: #fff;
}
.booking .row .mingkeli-type .mingkeli-type-time .active {
  background: #fff;
  height: 70px;
  border-top: 2px solid #000000;
}
.booking .row .mingkeli-type .mingkeli-type-time .in {
  width:370px;
  height: 50px;
  background: #fff;
  line-height: 50px;
}
.booking .row .mingkeli-type .mingkeli-type-time .in label {
  font-size: 14px;
}
.booking .row .mingkeli-type .mingkeli-type-time .in input {
  width: 140px;
  border: none;
  text-indent: 1em;
}
.booking .row .mingkeli-type .mingkeli-type-time .with {
  width: 78px;
}
.booking .row .mingkeli-type .mingkeli-type-time .with:hover {
  background: #f1f1f1;
}
.booking .row .mingkeli-type .mingkeli-type-time .confirm {
  height: 50px;
  background: #c8a063;
  line-height: 50px;
}
.booking .row .mingkeli-type .mingkeli-type-time .confirm a {
  display: block;
  width: 110px;
  height: 50px;
  text-decoration: none;
  color: #fff;
}
.booking .row .mingkeli-type .mingkeli-type-time .confirm:hover {
  background: #4c3b34;
}
.booking .row .mingkeli-type .Room-type-box {
  padding: 0 20px 20px 26px;
}
.booking .row .mingkeli-type .Room-type-box .Room-type-nav {
  border-bottom: 1px solid #000;
  margin: 0;
}
.booking .row .mingkeli-type .Room-type-box .Room-type-nav li {
  display: inline-block;
  text-align: center;
  width: 135px;
  height: 30px;
}
.booking .row .mingkeli-type .Room-type-box table tr {
  border-bottom: 1px dashed #aaaaaa;
  margin: 0;
}
.booking .row .mingkeli-type .Room-type-box table tr td {
  height: 120px;
  text-align: center;
  vertical-align: middle;
}
.booking .row .mingkeli-type .Room-type-box table tr .first {
  width: 136px;
  position: relative;
  cursor: pointer;
}
.booking .row .mingkeli-type .Room-type-box table tr .first .type-hover {
  width: 680px;
  background: #fff;
  position: absolute;
  z-index: 99;
  padding: 14px 8px;
  left: 40px;
  top: 103px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: none;
}
.booking .row .mingkeli-type .Room-type-box table tr .first .type-hover img {
  margin: 0 8px;
  width: 200px;
  height: 155px;
}
.booking .row .mingkeli-type .Room-type-box table tr .first .type-hover label {
  display: block;
  position: absolute;
  left: 20px;
  width: 0;
  height: 0;
  top: -16px;
  border: 8px solid;
  border-color: transparent transparent #fff;
}
.booking .row .mingkeli-type .Room-type-box table tr .first .type-hover span {
  display: block;
  margin-top: 10px;
  margin-right: 223px;
}
.booking .row .mingkeli-type .Room-type-box table tr .first:hover .type-hover {
  display: block;
}
.booking .row .mingkeli-type .Room-type-box table tr .type {
  width: 140px;
}
.booking .row .mingkeli-type .Room-type-box table tr .breakfast {
  width: 140px;
}
.booking .row .mingkeli-type .Room-type-box table tr .wi-fi {
  width: 140px;
}
.booking .row .mingkeli-type .Room-type-box table tr .refund {
  width: 140px;
}
.booking .row .mingkeli-type .Room-type-box table tr .money {
  width: 136px;
}
.booking .row .mingkeli-type .Room-type-box table tr .btn-a {
  width: 128px;
}
.booking .row .mingkeli-type .Room-type-box table tr .btn-a .a {
  width: 70px;
  height: 32px;
  line-height: 32px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  background: #aaaaaa;
}
.booking .row .mingkeli-type .Room-type-box table tr .btn-b {
  width: 146px;
}
.booking .row .mingkeli-type .Room-type-box table tr .btn-b .a {
  width: 70px;
  height: 32px;
  line-height: 32px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  background: #c8a063;
}
.booking .row .mingkeli-type .Room-type-box table tr .btn-b .a:hover {
  background: #4c3b34;
}
.booking .row .mingkeli-type .Room-type-box table tr:hover {
  background: #f8f8f8;
}
.booking .row .minsu-list {
  border: 1px solid #f1f1f1;
  background: #fff;
  padding: 0;
  margin-top: 20px;
}
.booking .row .minsu-list h3 {
  line-height: 68px;
  margin: 0;
  border-top: 2px solid #000;
  text-indent: 1em;
  font-size: 17px;
  border-bottom: 1px solid #dcdcdc;
}
.booking .row .minsu-list .jianjie {
  padding: 0 20px;
  margin-top: 20px ;
}
.booking .row .minsu-list .jianjie .jianjie-title {
  width: 80px;
  color: #959595;
  font-size: 16px;
  vertical-align: top;
}
.booking .row .minsu-list .jianjie .text-list {
  padding-left: 79px;
}
.booking .row .minsu-list .jianjie .text-list span {
  margin: 0 20px;
}
.booking .row .minsu-list .jianjie p {
  font-size: 12px;
  margin-top: -8px;
}
.booking .row .minsu-list .jianjie pre {
  padding: 0 !important;
  background: #fff;
  font-size: 12px;
  border: none;
}
.booking .row .minsu-list .time {
  font-size: 12px;
}
.booking .row .minsu-list .shes {
  padding-left: 20px;
  height: 620px;
}
.booking .row .minsu-list .shes h4 {
  color: #959595;
  width: 80px;
  margin-top: -1px;
  float: left;
  font-size: 17px;
}
.booking .row .minsu-list .shes .shes-text {
  float: right;
  width: 872px;
  padding-right: 15px ;
}
.booking .row .minsu-list .shes .shes-text hr {
  border-style: dashed;
  border-color: #dcdcdc;
}
.booking .row .minsu-list .shes .shes-text .shes-text_table .tilte-td {
  width: 60px;
  vertical-align: top;
  font-size: 15px;
}
.booking .row .minsu-list .shes .shes-text .shes-text_table ul {
  margin-left: 10px;
}
.booking .row .minsu-list .shes .shes-text .shes-text_table ul li {
  float: left;
  margin-right: 10px;
  font-size: 12px;
  background: url(../../../static/img/index/msyd_icon-2.png) no-repeat;
  text-indent: 1.5em;
  height: 40px;
  width: 174px;
}
.booking .row .dianpin {
  border: 1px solid #f1f1f1;
  background: #fff;
  padding: 0;
  margin-top: 20px;
}
.booking .row .dianpin h3 {
  line-height: 68px;
  margin: 0;
  border-top: 2px solid #000;
  text-indent: 1em;
  font-size: 17px;
  border-bottom: 1px solid #dcdcdc;
}
.booking .row .dianpin .dianpin-who {
  padding: 0px 90px 50px;
}
.booking .row .dianpin .dianpin-who table {
  margin-top: 20px;
  font-size: 13px;
}
.booking .row .dianpin .dianpin-who table tr {
  border-bottom: 1px dashed #000;
}
.booking .row .dianpin .dianpin-who table .name_style {
  height: 120px;
  width: 120px;
}
.booking .row .dianpin .dianpin-who table .name_style i {
  display: block;
  width: 71px;
  height: 71px;
}
.booking .row .dianpin .dianpin-who table .name_style span {
  display: block;
  margin-top: 10px;
}
.booking .row .dianpin .dianpin-who table .name_style span a {
  color: #000;
  text-decoration: none;
}
.booking .row .dianpin .dianpin-who table .text_style {
  width: 670px;
  margin-top: 20px;
  float: left;
}
.booking .row .dianpin .dianpin-who table .text_style .text-me {
  background: #eeeeee;
  width: 100%;
  padding: 8px;
}
.booking .row .dianpin .dianpin-who table .text_style .text-me p {
  margin: 0;
}
.booking .row .dianpin .dianpin-who li:after {
  content: '';
  display: block;
  clear: both;
}
.booking .row .dianpin .dianpin-sub {
  padding: 20px 96px;
  background: #f2f2f2;
  border: 1px solid #f1f1f1;
}
.booking .row .dianpin .dianpin-sub ul {
  height: 26px;
  font-size: 13px;
  margin-bottom: 20px;
}
.booking .row .dianpin .dianpin-sub ul li {
  display: inline-block;
}
.booking .row .dianpin .dianpin-sub ul li a {
  color: #c8a063;
}
.booking .row .dianpin .dianpin-sub ul .avatar {
  width: 18px;
  height: 26px;
  margin-left: 22px;
  background: url("../../../static/img/index/yc_icon_02.png") no-repeat;
  background-position: -15px 4px;
}
.booking .row .dianpin .dianpin-sub i {
  font-style: normal;
  display: block;
  text-indent: 3em;
  margin: 6px 0;
}
.booking .row .dianpin .dianpin-sub .sub {
  padding-left: 20px;
}
.booking .row .dianpin .dianpin-sub .sub textarea {
  resize: none;
  width: 784px;
  height: 240px;
  border: solid 2px #e5e5e5;
}
.booking .row .dianpin .dianpin-sub .sub input {
  width: 120px;
  height: 50px;
  border: none;
  background: #c8a063;
  color: #fff;
  font-size: 17px;
  margin-left: 664px;
  margin-top: 20px;
}
.booking .row .dianpin .dianpin-sub .sub input:hover {
  background: #4c3b34;
}
.booking .row .gift {
  padding: 0;
  margin: 30px 0 30px;
}
.booking .row .gift .gift-div {
  position: relative;
  height: 738px;
}
.booking .row .gift .gift-div .niren {
  width: 228px;
  height: 229px;
  margin-bottom: 17px;
  background: url(../../../static/img/about/bsxl_web_02_03.jpg) no-repeat;
}
.booking .row .gift .gift-div .niren span {
  display: block;
  width: 160px;
  height: 40px;
  line-height: 40px;
  font-size: 22px;
  text-align: center;
  position: absolute;
  top: 80px;
  left: 33px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.booking .row .gift .gift-div .taomu {
  background: url(../../../static/img/about/bsxl_web_02_10.jpg) no-repeat;
}
.booking .row .gift .gift-div .taomu span {
  top: 325px;
  left: 33px;
}
.booking .row .gift .gift-div .shuimitao {
  width: 240px;
  height: 475px;
  position: absolute;
  top: 0;
  left: 250px;
  background: url(../../../static/img/about/bsxl_web_02_05.jpg) no-repeat;
}
.booking .row .gift .gift-div .shuimitao span {
  display: block;
  width: 125px;
  height: 40px;
  line-height: 40px;
  font-size: 22px;
  text-align: center;
  position: absolute;
  top: 202px;
  left: 60px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.booking .row .gift .gift-div .jianzhi {
  width: 490px;
  height: 352px;
  position: absolute;
  top: 0;
  right: 0;
  background: url(../../../static/img/about/bsxl_web_02_07.jpg) no-repeat;
}
.booking .row .gift .gift-div .jianzhi span {
  display: block;
  width: 180px;
  height: 40px;
  line-height: 40px;
  font-size: 22px;
  position: absolute;
  top: 152px;
  left: 158px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.booking .row .gift .gift-div .show {
  background: url(../../../static/img/about/bsxl_web_02_12.jpg) no-repeat;
  position: absolute;
  top: 377px;
  right: 0;
}
.booking .row .gift .gift-div .show span {
  width: 125px;
  left: 180px;
}
.booking .row .gift .gift-div .di {
  width: 492px;
  height: 230px;
  position: absolute;
  top: 499px;
  left: 0;
  background: url(../../../static/img/about/bsxl_web_02_15.jpg) no-repeat;
}
.booking .row .gift .gift-div .di span {
  display: block;
  width: 180px;
  height: 40px;
  line-height: 40px;
  font-size: 22px;
  position: absolute;
  top: 90px;
  left: 158px;
}
@media all and (max-width: 1200px) {
  .booking {
    width: 1230px;
    margin: 0 auto;
  }
}
#toTop-go {
  position: fixed;
  bottom: 80px;
  right: 100px;
  display: block;
  width: 80px;
  height: 70px;
  display: none;
  background: url("../../../static/img/index/yc_icon_02.png") no-repeat;
  background-position: -7px -210px;
}
#toTop-go:hover {
  background-position-x: -100px;
}

</style>