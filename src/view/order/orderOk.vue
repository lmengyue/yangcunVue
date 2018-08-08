<template>
	<div>
		<div class="order-box">
			<div class="container order">
				<div class="row">
					<div class="col-xs-12 order-head">
						<ul>
							<li class="denger">
								1.订单填写
								<span></span>
							</li>
							<li class="active">2.订单确认
								<span></span>
							</li>
							<li>
								3.订单支付
								<span></span>
							</li>
							<li >
								4.订单完成
							</li>
						</ul>
					</div>

					<div class="col-xs-12 order-pay">
						<div class="order-pay-box">
							<label class="pay-ok">
								<span>订单提交成功</span>
							</label>
							<p>客服将于工作日2小时内予以处理，请在订单显示“待支付”状态后，予以支付！谢谢配合</p>
							<hr />
							<div class="pay-ok-box">
							<h3>订单详情</h3>
							<table class="pay-ok-table">
								<tr>
									<td class="minsu">
										入住民宿：<a href="" class="minsu-name">{{data.name}}</a>
									</td>
									<td class="bianhao">
										订单编号：<span></span>
									</td>
								</tr>
								<tr>
									<td class="type">
										入住房型：<span>{{data.type}}</span>
									</td>
									<td class="number">
										间数：<span>{{data.js}}</span>间
										晚数：<span>{{data.ws}}</span>晚
									</td>
								</tr>
								<tr>
									<td class="type">
										入住日期：<span>{{data.startTime}}</span>
									</td>
									<td class="number">
										离店日期：<span>{{data.endTime}}</span>
									</td>
								</tr>
								<tr>
									<td class="type">
										入住人：<span>{{data.rz_name}}</span>
									</td>
									<td class="number">
										联系方式：<span>{{data.tel}}</span>
									</td>
								</tr>
								<tr>
									<td class="type">
										订单状态：<span>{{data.zt}}</span>
									</td>
									<td class="number">
										间数：<span>{{data.js}}</span>
									</td>
								</tr>
								
							</table>
							</div>
							<router-link to="/orderConfirm" class="ck">查看订单详情</router-link>
						</div>

					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {fetch} from '../../utils/fetch'
	export default{
		data(){
			return{
				data:{
					
				}
			}
		},
		created:function(){
			fetch('get','order/order_success','',(res)=>{
				console.log(res)
				this.data=res.data
				
			})
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
		display: none;
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
		display: none;
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
	
	.order .order-body .order-xinxi .ruzhu a {
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
	
	.order .order-body .order-xinxi .ruzhu a:hover {
		background: #4c3b34;
	}
	
	@media all and (max-width: 1200px) {
		.order-box {
			width: 1230px;
			margin: 0 auto;
		}
	}
</style>