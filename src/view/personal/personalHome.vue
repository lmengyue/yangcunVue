<template>
	<div>
		<div class="personal-box">
			<div class="container">
				<div class="row personal-detail">
					<ul class="col-xs-12 personal-ul">
						<li class="home">
							<a href="" target="_parent"></a>
						</li>
						<li>></li>
						<li>个人中心</li>

					</ul>
					<div class="col-xs-12 personal-me">
						<ul class="personal-nav">
							<li class="zl-me active-zl">
								<router-link to="/personalHome">我的资料</router-link>
							</li>
							<li class="order-me">
								<router-link to="/PersonalOrder">我的订单</router-link>
							</li>
							<li class="money-me">
								<router-link to="/PersonalWallet">我的钱包</router-link>
							</li>
							<li class="ly-me">
								<router-link to="/PersonalLy">我的留言</router-link>
							</li>
						</ul>
						<div class="personal-list">
							<router-view/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	};
</script>

<style>
	.personal-box {
		background: #f9f9f9;
	}
	
	.personal-box .personal-detail {
		margin-left: 12px;
		width: 1200px;
		margin: 0 auto;
		padding-bottom: 30px;
		;
	}
	
	.personal-box .personal-detail .clear {
		clear: both;
	}
	
	.personal-box .personal-detail .personal-ul {
		border-bottom: 2px solid #6e615b;
		padding: 4px;
		width: 1174px;
		margin-top: 34px;
		margin-bottom: 5px;
	}
	
	.personal-box .personal-detail .personal-ul li {
		display: inline-block;
		font-size: 15px;
		padding: 0 6px;
	}
	
	.personal-box .personal-detail .personal-ul .home {
		height: 24px;
		padding: 0;
		padding-top: 5px;
	}
	
	.personal-box .personal-detail .personal-ul .home a {
		display: block;
		width: 22px;
		height: 22px;
		background: url(../../../static/img/about/home_icon.png) no-repeat;
		background-position: -15px -4px;
		transition: .3s;
	}
	
	.personal-box .personal-detail .personal-ul .home a:hover {
		background-position: -50px -4px;
	}
	
	.personal-box .personal-detail .personal-me {
		padding: 56px 0 120px;
		margin-left: 16px;
		width: 1156px;
		height: 640px;
		clear: both;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav {
		float: left;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav li {
		width: 110px;
		height: 40px;
		margin-bottom: 30px;
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: 2px -4px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav li a {
		display: block;
		height: 40px;
		line-height: 40px;
		margin-left: 50px;
		text-decoration: none;
		color: #000;
		background: #f9f9f9;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .active-zl {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: -40px -4px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .active-zl a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .zl-me:hover {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: -40px -4px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .zl-me:hover a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .order-me {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: 2px -44px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .active-dingd {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: -40px -44px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .active-dingd a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .order-me:hover {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: -40px -44px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .order-me:hover a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .money-me {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: 2px -80px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .active-qianbao {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: -40px -80px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .active-qianbao a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .money-me:hover {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: -40px -80px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .money-me:hover a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .ly-me {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: 2px -118px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .active-ly {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: -40px -118px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .active-ly a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .ly-me:hover {
		background: url(../../../static/img/about/grzx_icon-1.png) no-repeat;
		background-position: -40px -118px;
	}
	
	.personal-box .personal-detail .personal-me .personal-nav .ly-me:hover a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-list {
		width: 980px;
		float: right;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-xinxi {
		border-bottom: 1px solid #eee;
		height: 58px;
		margin: 0;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-xinxi li {
		float: left;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-xinxi li a {
		color: #000;
		display: inline-block;
		padding: 16px 28px 17px;
		text-decoration: none;
		font-size: 17px;
		border-bottom: none;
		background: #e5e5e5;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-xinxi .active a {
		background: #fff;
		padding: 16px 28px 17px;
		border: 1px solid #eee;
		border-bottom: 0;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-xinxi li:hover a {
		background: #fff;
		padding: 16px 28px 17px;
		border-bottom: 0;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-text {
		border: 1px solid #eee;
		border-top: none !important;
		height: 195px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-text .me-lianxi {
		margin: 0;
		padding: 40px 0 0 40px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-text .me-lianxi li {
		width: 270px;
		float: left;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-text .me-lianxi li i {
		font-style: normal;
		display: block;
		line-height: 40px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-text .me-lianxi .img {
		width: 116px;
		height: 116px;
		margin-right: 60px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .me-text .me-lianxi .me-name,
	.personal-box .personal-detail .personal-me .personal-list .me-text .me-lianxi .me-email {
		margin-top: 20px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan {
		border: 1px solid #eee;
		padding: 10px 22px 30px;
		margin-top: 40px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .dingdan-nav {
		height: 32px;
		background: #f4f4f4;
		border: 1px solid #eee;
		font-size: 13px;
		margin: 0;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .dingdan-nav li {
		line-height: 32px;
		display: inline-block;
		text-align: center;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .dingdan-nav .dd-type {
		width: 110px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .dingdan-nav .dd-time,
	.personal-box .personal-detail .personal-me .personal-list .dingdan .dingdan-nav .dd-bh {
		width: 120px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .dingdan-nav .dd-lr {
		width: 310px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .dingdan-nav .dd-je {
		width: 90px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .dingdan-nav .dd-zt {
		margin-left: 10px;
		width: 54px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list {
		height: 70px;
		margin: 0;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list td {
		text-align: center;
		vertical-align: middle;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list .mins {
		width: 106px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list .sj {
		width: 132px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list .bh {
		width: 118px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list .lr {
		width: 264px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list .je {
		width: 135px;
		text-align: right;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list .zt {
		width: 90px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list .je b {
		font-size: 18px;
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list .qx a {
		display: block;
		width: 50px;
		height: 26px;
		line-height: 26px;
		background: #c8a063;
		color: #fff;
		text-decoration: none;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .dingdan .type-list .qx a:hover {
		background: #4c3b34;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl {
		border: 1px solid #eee;
		border-top: none;
		padding: 26px 0 40px 74px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl h5 {
		font-weight: bold;
		margin-left: 106px;
		margin-bottom: 40px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form label {
		display: block;
		font-weight: 100;
		margin-left: 176px;
		margin-bottom: 20px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form label span {
		color: red;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .name-nc input {
		width: 176px;
		height: 32px;
		text-indent: 1.5em;
		margin-left: 30px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .name-xm input {
		width: 176px;
		height: 32px;
		text-indent: 1.5em;
		margin-left: 30px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .sex select {
		width: 176px;
		height: 32px;
		text-indent: 1.5em;
		margin-left: 25px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .sr input {
		width: 176px;
		height: 32px;
		text-indent: 1.5em;
		margin-left: 30px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .sr i {
		font-style: normal;
		color: #a1a1a1;
		font-size: 12px;
		margin-left: 10px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .tel {
		margin-left: 148px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .tel input {
		width: 176px;
		height: 32px;
		text-indent: 1.5em;
		margin-left: 30px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .tel i {
		font-style: normal;
		color: #a1a1a1;
		font-size: 12px;
		margin-left: 10px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .email {
		margin-left: 148px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .email input {
		width: 176px;
		height: 32px;
		text-indent: 1.5em;
		margin-left: 30px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .dz {
		margin-left: 148px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .dz input {
		width: 430px;
		height: 32px;
		text-indent: 1.5em;
		margin-left: 30px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .kid-y,
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .cx,
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .sy,
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .will {
		margin-bottom: 20px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .kid-y label,
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .cx label,
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .sy label,
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .will label {
		display: inline-block;
		margin: 0;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .kid-y input,
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .cx input,
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .sy input,
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .will input {
		margin-left: 30px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .kid-y {
		margin-left: 112px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .cx {
		margin-left: 56px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form .sy {
		margin-left: 70px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form a {
		display: block;
		text-decoration: none;
		width: 92px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		background: #c8a063;
		color: #fff;
		margin-left: 360px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiugai-zl form a:hover {
		background: #4c3b34;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-toux {
		border: 1px solid #eee;
		border-top: none !important;
		height: 236px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-toux ul {
		margin: 0;
		padding: 52px 0 0 40px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-toux ul li {
		float: left;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-toux ul .img {
		width: 116px;
		height: 116px;
		margin-right: 60px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-toux ul .wenj input {
		padding: 5px 0 0 10px;
		float: right;
		width: 270px;
		height: 40px;
		line-height: 40px;
		border: 1px solid #dcdcdc;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-toux ul .wenj label {
		margin: 8px 20px 0 0;
		font-weight: 100;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-toux ul .wenj p {
		margin-top: 21px;
		color: #a6a6a6;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-toux ul .wenj a {
		display: block;
		text-decoration: none;
		width: 92px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		background: #c8a063;
		color: #fff;
		margin-top: 25px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-toux ul .wenj a:hover {
		background: #4c3b34;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-pass {
		border: 1px solid #eee;
		border-top: none !important;
		height: 338px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-pass form {
		padding: 50px 0 0 50px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-pass form label {
		display: block;
		font-weight: 100;
		margin-bottom: 24px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-pass form label input {
		width: 250px;
		height: 30px;
		margin-left: 20px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-pass form .x-pass {
		margin-left: 14px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-pass form a {
		display: block;
		text-decoration: none;
		width: 92px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		background: #c8a063;
		color: #fff;
		margin-top: 40px;
		margin-left: 160px;
		font-size: 15px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .xiug-pass form a:hover {
		background: #4c3b34;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .personal-cancel-form {
		padding: 30px 70px 30px 90px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .personal-cancel-form h5 {
		font-size: 14px;
		margin-bottom: 30px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .personal-cancel-form label {
		font-weight: 100;
		display: block;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .personal-cancel-form label input {
		margin-right: 10px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .personal-cancel-form textarea {
		width: 355px;
		height: 165px;
		display: block;
		margin: 20px 0;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .personal-cancel-form a {
		display: inline-block;
		text-decoration: none;
		width: 92px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		background: #c8a063;
		color: #fff;
		font-size: 15px;
	}
	
	.personal-box .personal-detail .personal-me .personal-list .personal-cancel-form a:hover {
		background: #4c3b34;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi {
		background: #fff;
		padding: 10px 20px;
		border: 1px solid #aaaaaa;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi h4 {
		margin-left: 20px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul {
		margin-left: 50px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul li {
		margin: 27px 0;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .jd-name {
		margin-left: 35px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .jd-name a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .bianhao {
		margin-left: 36px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .type {
		margin-left: 65px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .number {
		margin-left: 66px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .name {
		margin-left: 51px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .time {
		margin-left: 31px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .time label {
		margin: 0 6px;
		font-weight: 100;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .time label span {
		border: 0;
		width: 90px;
		margin: 0;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .tel {
		margin-left: 38px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .money {
		margin-left: 39px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .money b {
		color: #c8a063;
		font-size: 17px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .money i {
		font-style: normal;
		font-size: 12px;
		margin-left: 20px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .money i span {
		color: red;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .money i a {
		width: 65px;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi ul .zt {
		margin-left: 38px;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi .qx {
		text-align: center;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi .qx a {
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
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi .qx a:hover {
		background: #4c3b34;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi hr {
		border-top: 2px solid #e4dfdc;
	}
	
	.personal-box .personal-detail .personal-me .order-xinxi .order-cf-xinxi p {
		text-align: center;
		margin-bottom: 21px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly {
		width: 980px;
		float: right;
		background: #fff;
		border: 1px solid #E5E5E5;
		padding: 20px 24px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly h5 {
		margin-left: 27px;
		margin-bottom: 25px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .ul-nav {
		background: #f4f4f4;
		border: 1px solid #E5E5E5;
		border-bottom: none;
		margin: 0;
		height: 32px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .ul-nav li {
		display: inline-block;
		text-align: center;
		line-height: 32px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .ul-nav .type {
		width: 100px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .ul-nav .text {
		width: 190px;
		margin-left: 40px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .ul-nav .status {
		width: 108px;
		margin-left: 222px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .ul-nav .time {
		width: 120px;
		margin-left: 10px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .ul-nav .cz {
		width: 120px;
		margin-left: 5px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table {
		margin: 0;
		text-align: center;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table td {
		vertical-align: middle;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table td a {
		display: block;
		text-decoration: none;
		width: 50px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		background: #c8a063;
		color: #fff;
		font-size: 13px;
		
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table td a:hover {
		background: #4c3b34;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .td {
		text-align: left;
		padding-left: 40px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .type-name {
		width: 100px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .status-hf {
		width: 12%;
		text-align: left;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .time-sj {
		width: 16%;
		text-align: left;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .cz-ck {
		width: 12%;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .text-mins {
		width: 50%;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .text-mins h4 {
		font-size: 14px;
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .text-mins p {
		font-size: 13px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .huifu td {
		border: none;
		padding-top: 0;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .huifu .hf {
		padding-right: 30px;
	}
	
	.personal-box .personal-detail .personal-me .personal-ly .table .huifu .hf p {
		font-size: 13px;
		background: #f4f4f4;
		padding: 10px;
	}
	
	.personal-box .personal-detail .personal-me .personal-order {
		border: 1px solid #eee;
		border-top: none !important;
		padding: 26px 24px;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .order-nav {
		border: 1px solid #e5e5e5;
		background: #f4f4f4;
		margin: 0;
		height: 30px;
		font-size: 13px;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .order-nav li {
		display: inline-block;
		line-height: 30px;
		text-align: center;
		width: 100px;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .order-nav .sj {
		margin-left: 8px;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .order-nav .bh {
		margin-left: 23px;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .order-nav .lr {
		margin: 0 70px;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .order-nav .je {
		margin-left: 78px;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .border-none td {
		border: none;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table td {
		text-align: center;
		font-size: 13px;
		height: 74px;
		vertical-align: middle;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .mins {
		width: 10%;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .time {
		width: 17%;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .bianh {
		width: 12%;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .list {
		width: 33%;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .list a {
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .jg {
		width: 14%;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .yd {
		width: 9%;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .btn a {
		display: block;
		text-decoration: none;
		width: 50px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		background: #c8a063;
		color: #fff;
		font-size: 13px;
		margin-top: 15px;
	}
	
	.personal-box .personal-detail .personal-me .personal-order .table .btn a:hover {
		background: #4c3b34;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box {
		width: 980px;
		float: right;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-nav li {
		display: inline-block;
		padding: 8px 25px;
		border: 1px solid #eee;
		font-size: 15px;
		background: #eeeeee;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-nav li a {
		text-decoration: none;
		color: #000;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-nav li:hover {
		background: #fff;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-nav .active {
		background: #fff;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box h4 {
		font-size: 15px;
		text-align: center;
		margin-bottom: 40px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box h4 b {
		font-size: 17px;
		color: red;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-title {
		margin-top: 25px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-title li a {
		width: 126px;
		font-size: 15px;
		text-align: center;
		padding: 18px !important;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .search {
		float: right;
		font-weight: 100;
		margin-top: -64px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .search input {
		border: none;
		width: 150px;
		height: 27px;
		margin: 0 10px;
		border: 1px solid #eee;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .search a {
		display: inline-block;
		text-decoration: none;
		width: 66px;
		height: 27px;
		line-height: 27px;
		text-align: center;
		background: #c8a063;
		color: #fff;
		font-size: 13px;
		margin-top: 15px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .search a:hover {
		background: #4c3b34;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-qb .sum {
		height: 32px;
		line-height: 32px;
		background: #f3f3f3;
		border: 1px dashed #cccccc;
		margin-bottom: 20px;
		padding: 0 20px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-qb .sum i {
		font-style: normal;
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-qnav {
		font-size: 12px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-qnav .b-h {
		width: 50px;
		margin-left: 150px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-qnav .m-e {
		width: 50px;
		margin-left: 72px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-qnav .s-y {
		margin-left: 50px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-table td {
		font-size: 12px;
		height: 80px;
		text-align: left;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-table .f-l-j {
		width: 25%;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-table .b-h-bh {
		width: 16%;
		padding-left: 22px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-table .z-t-type {
		padding-left: 12px;
		width: 8%;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-table .g-m-xinxi {
		padding-left: 24px;
		width: 19%;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-table .g-m-xinxi a {
		color: #000;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-table .s-y-xinxi {
		width: 11%;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-table .t-m-time {
		padding-left: 14px;
		width: 14%;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet-table .t-m-time b {
		color: #cc6600;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet {
		background: #fff;
		border: 1px solid #eee;
		margin-top: 20px;
		padding: 10px 24px 20px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .wallet-nav {
		border: 1px solid #e5e5e5;
		background: #f4f4f4;
		margin: 0;
		height: 30px;
		font-size: 12px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .wallet-nav li {
		display: inline-block;
		line-height: 30px;
		text-align: center;
		width: 100px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .wallet-nav .juan {
		width: 158px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .wallet-nav .miane {
		margin-left: 287px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .wallet-nav .zt {
		margin-left: 46px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .table-wallet {
		margin: 0;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .table-wallet td {
		vertical-align: middle;
		height: 74px;
		font-size: 12px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .table-wallet .fenl-xin {
		width: 60px;
		padding-left: 26px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .table-wallet .kong {
		width: 12px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .table-wallet .juan-bianh {
		padding: 0 30px 0 78px;
		width: 265px;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .table-wallet .juan-bianh a {
		text-decoration: none;
		color: #c8a063;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .table-wallet .miane-q {
		width: 115px;
		font-size: 15px;
		padding-left: 35px;
		text-align: right;
	}
	
	.personal-box .personal-detail .personal-me .personal-wallet-box .personal-wallet .table-wallet .dq-time {
		width: 188px;
		text-align: right;
	}
	
	@media all and (max-width: 1200px) {
		.personal-box {
			width: 1230px;
			margin: 0 auto;
		}
	}
</style>