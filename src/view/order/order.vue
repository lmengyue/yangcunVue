<template>
	<div>
		<div class="order-box">
			<div class="container order">
				<div class="row">
					<div class="col-xs-12 order-head">
						<ul>
							<li class="active">
								1.订单填写
								<span></span>
							</li>
							<li>
								2.订单确认
								<span></span>
							</li>
							<li>
								3.订单支付
								<span></span>
							</li>
							<li>
								4.订单完成
							</li>
						</ul>
					</div>

					<div class="col-xs-12 order-body clear">
						<div class="tiaokuan">
							<h4>预订须知</h4>
							<p>
								1.在预订开始前，请仔细阅读本须知，产品页面中的产品备注也做为协议的补充内容。当您开始预订度假产品时，已表明您仔细阅读并接受协议的所有条款。
							</p>
							<p>
								预订提前期与付款期：为保证度假产品预订，所有国内度假产品请提前3天以上预订并付清已订产品所有款项。您在3天内提交的预订请求，我们会尽力满足您的需要，但对操作结果不做任何承诺。
							</p>
							<p>
								2.关于度假产品的行程推荐仅为友情提示，不能作为约定条款。
							</p>
							<p>
								我们保留在不事先知会的情况下更改其网站上已公布的度假产品价格的权利。您预订的度假产品价格，以确认订单上约定的金额为准。
							</p>
							<p>
								确认订单上约定的价格，不包含您的个人消费、航空人身意外保险费及您应自行投保的其它保险费用等。
							</p>
							<p>3.只有您及时付清确认的应付费用，或及时提供认可的经济担保后，确认的订单方会生效。如您未按要求及时付清相关费用，而此时产品的价格、内容或标准等发生变化，我们对此将不承担任何责任。
							</p>
							<p>
								订单生效后，您若需要更改该订单内的任何项目，请务必在度假活动开始前通知您的更改需求。我们会尽量满足您的需求，但您必须全额承担因变更带来的损失及可能增加的费用。
							</p>
							<p>4.在您按要求付清度假费用或订金后，如因供应商原因，致使您的度假不能成行或内容发生改变的，我们将立即通知您，无条件退返您已支付的所有费用。
							</p>
							<p>
								或在经您同意后，调整产品中的行程内容或接待标准，退还差额费用。如调整后的产品价格高于原来价格，您须补足多出的差额。
							</p>
							<hr />
							<h4>退款政策：</h4>
							<p>
								变更：请至少提前4个工作日与我们联系变更，视酒店房态安排。 退订：请至少提前4个工作日告知我们，否则不予退款，请谅解。 节假日期间入住的订单不予退订。
							</p>
						</div>
						<div class="order-xinxi">
							<div class="yuding">
								<h4>预订中心</h4>
								<label class="minsu-name">民宿名称：
								<b>{{name}}</b>
								</label>
								<label class="minsu-name">房型：
								<b>{{fx}}</b>
								</label>
								<label>入住日期：
								<span>{{ksTime}}</span>
								</label>
								<label>离店日期：
							     <span>{{endTime}}</span>
								</label>
								<b class="jw">共<span class="jw-span" >{{DateDiff(ksTime,endTime)}}</span>晚</b>
								<label>房间数量：
									<select  v-model="value" @change="newmoney(value)">
									  <option  v-for="fj in js" :value="fj">{{fj}}</option>
									</select>
								</label>
								<ul class="money-list">
									<li v-for='de in detail'>
										<h5>{{de.fx_rzrq}}{{Time(de.fx_rzrq)}}</h5>
										<p>会员价{{de.fx_jg}}</p>
										<p>早饭：{{zf}}</p>
									</li>
								
								</ul>
								<i>总费用：<span>￥{{money}}</span></i>
							</div>
							<div class="ruzhu">
								<h4>入住人信息</h4>
								<form action="" method="post">
									<label class="name"><i>*</i>姓名：<input type="" v-model="username" placeholder="请输入您的姓名" class="ruzhu-name" required/><b class="name-show" v-show="nameErr">（姓名不能为空）</b></label>
									<label class="tel"><i>*</i>联系电话：<input type="" v-model="usertel" placeholder="请输入您的手机"  class="ruzhu-tel" required/><b class="tel-show" v-show="telErr">（手机不能为空）</b></label>
									<label class="email">电子邮件：<input type="" placeholder="请输入您的邮箱" class="ruzhu-email" required/><b class="email-show" v-show="emailErr">（邮箱书写有误）</b></label>
									<label class="time"><i>*</i>到店时间：
										<i class="zui-zao">最早到店时间</i>
								    <select class="arrive-zhao" v-model="startime" @change="selectTime(startime)">
									  <option value="14">14:00</option>
									  <option value="15">15:00</option>
									  <option value="16">16:00</option>
									  <option value="17">17:00</option>
									  <option value="18">18:00</option>
									  <option value="19">19:00</option>
									  <option value="20">20:00</option>
									  <option value="21">21:00</option>
									  <option value="22">22:00</option>
									  <option value="23">23:00</option>
									  <option value="24">23:59</option>
									</select>
									最晚到店时间
									<select class="arrive-wan" v-model="endtime">
									
									  <option :value="i" v-for="i in selectime">{{i}}:00</option>
									  
									</select>
									<b class="time-show" v-show='timeErr'>不能为空</b>
									</label>
									<label class="time-shuoming">最早到店与最晚到店的时间跨度不得超过3小时</label>
									<label class="luiy"><span>备注：</span><textarea class="text-sm"></textarea></label>
									<label class="check"><input type="checkbox" name="" id="check" value="" v-model="check" />我已阅读左侧条款，并同意<b class="check-show" v-show="check==false?true:false">（请仔细阅读左侧的条款，并选中!）</b></label>
								</form>
								<button @click="submit"  id="form-a">订单提交</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { fetch } from '../../utils/fetch'
	export default {
		data() {
			return {
				fx: '',
				ksTime: '',
				endTime: '',
				name: '',
				zf: '',
                js:[],
                detail:'',
                value:'1',
               	startime:'',
               	endtime:'',
               	timeErr:false,
                money:'',
                selectime:[],
               	username: '',
               	nameErr: false,
               	usertel:'',
               	telErr:false,
               	emailErr:false,
               	check:false
             
                
			}
		},
		created: function() {
			fetch('get', 'order/detail', {
				id: this.$route.params.id
			}, (res) => {
			//	console.log(res)
				this.fx = res.data.fx;
				this.endTime = res.data.endTime;
				this.ksTime = res.data.startTime;
				this.zf = res.data.zc;
				this.name = res.data.name;
				this.jg = res.data.jg;
//				this.js = res.data.fx_sl;
				this.detail=res.data.Time;
				
				for(let i=1;i<=res.data.fx_sl;i++){
					this.js.push(i);
					
				};
				this.newmoney(this.value)
			});		
		},
		methods: {
			//计算天数差的函数，通用  
			DateDiff(sDate1, sDate2) { //sDate1和sDate2是2002-12-18格式  
				var aDate, oDate1, oDate2, iDays
				aDate = sDate1.split("-")
				oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]) //转换为12-18-2002格式  
				aDate = sDate2.split("-")
				oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
				iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数  
				return iDays;

			},
			Time(timeday){
				let arys1 = new Array();
				arys1 = timeday.split('-');
				let ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
				let week1 = String(ssdate.getDay()).replace("0", "日").replace("1", "一").replace("2", "二").replace("3", "三").replace("4", "四").replace("5", "五").replace("6", "六");
				let week = "(周" + week1 + ")";
				return week
			},

			newmoney(houses){
				let money = 0;
				for(let item of this.detail){
					money += item.fx_jg * houses;
				}
				this.money = money;
			},
			selectTime(val){
				this.selectime=[];
				val = parseInt(val);
				for(let i=val;i<=val+3;i++){
					this.selectime.push(i);
				}
			},
			submit(){
//				console.log(this.startime)
			//	console.log(this.username)
				if(this.username==""){
					this.nameErr=true;
					return false;
				}else if(!/^1[3|4|5|7|8]\d{9}$/.test(this.usertel)){
					this.nameErr=true;
					return false;
				}else if(this.startime==""||this.endtime==""){
					this.timeErr=true;
					return false;
				}else{
					this.$router.push('/orderOk');
				}
				

			}
			
		}
	}
</script>

<style scoped>
	.order-box {
		background: #f9f9f9;
		padding: 35px 0;
	}
	
	.order {
		padding: 0;
		width: 1200px;
		margin: 0 auto;
	}
	
	.order .order-head {
		padding: 0;
	}
	
	.order .order-head ul {
		width: 1200px;
		margin-left: 23px;
	}
	
	.order .order-head ul li {
		display: inline-block;
		width: 296px;
		height: 35px;
		line-height: 35px;
		text-align: center;
		position: relative;
		color: #606060;
		font-size: 14px;
		background: #e9e9e9;
		margin-right: -4px;
	}
	
	.order .order-head ul li span {
		position: absolute;
		right: 0;
		width: 20px;
		display: inline-block;
		height: 36px;
		background: url(../../../static/img/about/ddtb_web_03.png) no-repeat;
		background-position: -5px -53px;
	}
	
	.order .order-head ul .active {
		background: #c8a063;
		color: #fff;
	}
	
	.order .order-head ul .active span {
		background: url(../../../static/img/about/ddtb_web_03.png) no-repeat;
		background-position: -5px -5px;
	}
	
	.order .order-head ul .denger span {
		background: url(../../../static/img/about/ddtb_web_03.png) no-repeat;
		background-position: -5px -101px;
	}
	
	.order .order-pay {
		padding: 0;
		margin-left: 22px;
		width: 1186px;
		margin-top: 30px;
		background: #fff;
		border: 1px solid #dcdcdc;
		padding: 40px 65px;
	}
	
	.order .order-pay .order-pay-box {
		width: 100%;
		text-align: center;
	}
	
	.order .order-pay .order-pay-box input {
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
	
	.order .order-pay .order-pay-box .zhifb {
		margin-right: 40px;
	}
	
	.order .order-pay .order-pay-box label span {
		margin-left: 10px;
		display: inline-block;
		height: 50px;
		text-indent: 4em;
		line-height: 50px;
		background: url(../../../static/img/about/ddtb_web_03.png) no-repeat;
		background-position: -5px -237px;
	}
	
	.order .order-pay .order-pay-box .pay-ok {
		margin-bottom: 20px;
	}
	
	.order .order-pay .order-pay-box .pay-ok span {
		margin: 0;
		height: 64px;
		font-size: 22px;
		text-indent: 3em;
		color: #22ac38;
		background: url(../../../static/img/about/ddtb_web_04.png) no-repeat;
		background-position: -5px -372px;
	}
	
	.order .order-pay .order-pay-box .pay-ok .dingdan-ok {
		background: url(../../../static/img/about/ddtb_web_04.png) no-repeat;
		background-position: -5px -451px;
	}
	
	.order .order-pay .order-pay-box .pay-ok-box {
		background: #f7f7f7;
		padding: 1px 0 20px;
	}
	
	.order .order-pay .order-pay-box .pay-ok-shuoming {
		text-align: left;
		width: 476px;
		margin: 30px auto;
	}
	
	.order .order-pay .order-pay-box .pay-ok-table {
		margin: 0 auto;
	}
	
	.order .order-pay .order-pay-box .pay-ok-table td {
		width: 260px;
		height: 35px;
		text-align: left;
	}
	
	.order .order-pay .order-pay-box .pay-ok-table td .minsu-name {
		color: #c8a063;
		text-decoration: none;
	}
	
	.order .order-pay .order-pay-box .pay-ok-table .color span {
		color: #c8a063;
		font-size: 18px;
		font-weight: bold;
	}
	
	.order .order-pay .order-pay-box .wx span {
		background: url(../../../static/img/about/ddtb_web_03.png) no-repeat;
		background-position: -5px -305px;
	}
	
	.order .order-pay .order-pay-box hr {
		border-top: 2px solid #dcdcdc;
	}
	
	.order .order-pay .order-pay-box .pay-img img,
	.order .order-pay .order-pay-box .zfb img,
	.order .order-pay .order-pay-box .weix img {
		margin: 40px 0;
	}
	
	.order .order-pay .order-pay-box .pay-img p,
	.order .order-pay .order-pay-box .zfb p,
	.order .order-pay .order-pay-box .weix p {
		color: #cda870;
	}
	
	.order .order-pay .order-pay-box .zfb,
	.order .order-pay .order-pay-box .weix {
	
	}
	
	.order .order-pay h3 {
		margin: 30px 0;
	}
	
	.order .order-pay .ck {
		width: 148px;
		height: 35px;
		display: inline-block;
		line-height: 35px;
		text-align: center;
		text-decoration: none;
		color: #fff;
		background: #c8a063;
		font-size: 16px;
		margin: 0 auto;
		margin-top: 20px;
	}
	
	.order .order-pay .ck:hover {
		background: #4c3b34;
	}
	
	.order .order-body {
		padding: 0;
		margin-left: 22px;
		width: 1186px;
		margin-top: 30px;
		background: #edecea;
	}
	
	.order .order-body .tiaokuan {
		width: 360px;
		padding: 25px 30px 30px;
		float: left;
		background: #edecea;
	}
	
	.order .order-body .tiaokuan h4 {
		margin-top: 0;
		margin-bottom: 20px;
	}
	
	.order .order-body .tiaokuan p {
		font-size: 13px;
		margin-bottom: 12px;
	}
	
	.order .order-body .tiaokuan hr {
		border-top: 1px solid #aaaaaa;
	}
	
	.order .order-body .tiaokuan label {
		width: 100%;
		text-align: center;
	}
	
	.order .order-body .tiaokuan label input {
		margin-right: 6px;
	}
	
	.order .order-body .tiaokuan .order-cf img {
		margin-left: -8px;
	}
	
	.order .order-body .tiaokuan .order-cf h5 {
		font-weight: bold;
		margin: 30px 0 20px;
	}
	
	.order .order-body .tiaokuan .order-cf span {
		font-size: 12px;
	}
	
	.order .order-body .tiaokuan .order-cf hr {
		border-top: 1px solid #aaaaaa;
	}
	
	.order .order-body .tiaokuan .order-cf h4 {
		font-weight: bold;
		font-size: 16px;
		margin-top: 30px;
	}
	
	.order .order-body .tiaokuan .order-cf p {
		font-size: 13px;
	}
	
	.order .order-body .order-xinxi {
		width: 674px;
		background: #fff;
		padding: 10px 45px 32px;
		border: 1px solid #aaaaaa;
		float: right;
	}
	
	.order .order-body .order-xinxi .yuding h4 {
		line-height: 30px;
		border-bottom: 2px solid #e4dfdc;
		margin-bottom: 34px;
	}
	
	.order .order-body .order-xinxi .yuding .minsu-name {
		width: 253px;
		margin-bottom: 20px;
	}
	
	.order .order-body .order-xinxi .yuding .minsu-name b {
		margin-left: 10px;
	}
	
	.order .order-body .order-xinxi .yuding .fx_type {
		width: 175px;
	}
	
	.order .order-body .order-xinxi .yuding label {
		font-weight: 100;
		margin-left: 30px;
	}
	
	.order .order-body .order-xinxi .yuding label span {
		display: inline-block;
		height: 28px;
		margin: 0 10px;
		line-height: 28px;
	}
	
	.order .order-body .order-xinxi .yuding label select {
		width: 140px;
		height: 28px;
		margin: 0 10px 15px;
		text-indent: 1em;
	}
	
	.order .order-body .order-xinxi .yuding label a {
		color: #c8a063;
		border-bottom: 1px solid #c8a063;
		text-decoration: none;
	}
	
	.order .order-body .order-xinxi .yuding label a:hover {
		color: #4c3b34;
		border-bottom: 1px solid #4c3b34;
	}
	
	.order .order-body .order-xinxi .yuding b {
		font-weight: 100;
	}
	.order .order-body .order-xinxi .yuding .money-list {
		margin-left: 30px;
	}	
	.order .order-body .order-xinxi .yuding .money-list li {
		display: inline-block;
		width: 106px;
		height: 80px;
		font-size: 12px;
		text-align: center;
		border: 3px solid #ddb06b;
		margin-right: 5px;
	}
	.order .order-body .order-xinxi .yuding .money-list li h5 {
		font-size: 12px;
		padding: 8px 0;
		margin: 0;
		background: #c8a063;
		color: #fff;
	}
	.order .order-body .order-xinxi .yuding .money-list li h5 span {
		font-size: 12px;
	}
	.order .order-body .order-xinxi .yuding .money-list li p {
		margin: 0;
		margin-top: 3px;
	}
	.order .order-body .order-xinxi .yuding i {
		display: block;
		font-style: normal;
		float: right;
	}
	.order .order-body .order-xinxi .yuding i span {
		color: #c8a063;
		font-size: 17px;
	}
	.order .order-body .order-xinxi .order-cf-xinxi ul li {
		margin: 27px 0;
	}
	.order .order-body .order-xinxi .order-cf-xinxi ul .bianhao {
		margin-left: 36px;
	}
	.order .order-body .order-xinxi .order-cf-xinxi ul .type {
		margin-left: 65px;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi ul .number {
		margin-left: 66px;
	}
	.order .order-body .order-xinxi .order-cf-xinxi ul .name {
		margin-left: 51px;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi ul .time {
		margin-left: 31px;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi ul .time label {
		margin: 0 6px;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi ul .time label span {
		border: 0;
		width: 90px;
		margin: 0;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi ul .tel {
		margin-left: 38px;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi ul .money {
		margin-left: 52px;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi ul .zt {
		margin-left: 38px;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi a {
		width: 120px;
		height: 38px;
		display: inline-block;
		line-height: 38px;
		text-align: center;
		text-decoration: none;
		color: #fff;
		background: #c8a063;
		font-size: 16px;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi a:hover {
		background: #4c3b34;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi .qx {
		margin-left: 350px;
		margin-right: 30px;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi hr {
		border-top: 2px solid #e4dfdc;
	}
	
	.order .order-body .order-xinxi .order-cf-xinxi p {
		text-align: center;
		margin-bottom: 21px;
	}
	
	.order .order-body .order-xinxi .ruzhu h4 {
		line-height: 30px;
		border-bottom: 2px solid #e4dfdc;
		margin: 40px 0 20px;
	}
	
	.order .order-body .order-xinxi .ruzhu form label {
		display: block;
		font-weight: 100;
		margin: 20px 0;
	}
	
	.order .order-body .order-xinxi .ruzhu form label i {
		margin: 0 5px;
		font-size: 18px;
		color: red;
		font-style: normal;
	}
	
	.order .order-body .order-xinxi .ruzhu form label .zui-zao {
		font-size: 13px;
		color: #000;
	}
	
	.order .order-body .order-xinxi .ruzhu form label span {
		float: left;
	}
	
	.order .order-body .order-xinxi .ruzhu form label input {
		width: 172px;
		height: 30px;
		margin-left: 8px;
	}
	
	.order .order-body .order-xinxi .ruzhu form label b {
		font-weight: 100;
		font-size: 11px;
		color: red;
	}
	
	.order .order-body .order-xinxi .ruzhu form .name {
		margin-left: 42px;
	}
	
	.order .order-body .order-xinxi .ruzhu form .tel {
		margin-left: 13px;
	}
	
	.order .order-body .order-xinxi .ruzhu form .email {
		margin-left: 30px;
	}
	
	.order .order-body .order-xinxi .ruzhu form .time {
		margin-left: 13px;
	}
	
	.order .order-body .order-xinxi .ruzhu form .time select {
		margin-right: 20px;
	}
	
	.order .order-body .order-xinxi .ruzhu form .time-shuoming {
		font-size: 12px;
		margin: 0;
		margin-left: 112px;
		color: #c8a063;
	}
	
	.order .order-body .order-xinxi .ruzhu form .luiy {
		margin-left: 58px;
		margin-bottom: 0;
	}
	
	.order .order-body .order-xinxi .ruzhu form .luiy textarea {
		margin-left: 8px;
		resize: none;
		width: 530px;
		height: 64px;
	}
	
	.order .order-body .order-xinxi .ruzhu form .check {
		margin-left: 102px;
	}
	
	.order .order-body .order-xinxi .ruzhu form .check input {
		width: 13px;
		height: 13px;
	}
	
	.order .order-body .order-xinxi .ruzhu button {
		display: block;
		width: 120px;
		height: 34px;
		line-height: 34px;
		text-align: center;
		text-decoration: none;
		color: #fff;
		background: #c8a063;
		font-size: 16px;
		float: right;
		margin-top: 20px;
	}
	
	.order .order-body .order-xinxi .ruzhu button:hover {
		background: #4c3b34;
	}
	
	@media all and (max-width: 1200px) {
		.order-box {
			width: 1230px;
			margin: 0 auto;
		}
	}
</style>