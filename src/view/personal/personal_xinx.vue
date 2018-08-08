<template>
	<div>
		<el-tabs type="border-card">
			<el-tab-pane label="基本信息">
				<div class="me-text">
					<ul class="me-lianxi">
						<li class="img">
							<img src="../../../static/img/about/tx.png" />
						</li>
						<li class="me-name">
							<i>用户名：<span>刘梦月</span></i>
							<i>联系方式：<span>12345676</span></i>
						</li>
						<li class="me-email">
							<i>会员级别：<span>普通会员</span></i>
							<i>电子邮箱：<span>sfjdfj@myvaction.cn</span></i>
						</li>
					</ul>
				</div>
				<div class="dingdan">
					<h4>近一个月订单</h4>
					<ul class="dingdan-nav">
						<li class="dd-type">订单类型</li>
						<li class="dd-time">订单时间</li>
						<li class="dd-bh">订单编号</li>
						<li class="dd-lr">订单内容</li>
						<li class="dd-je">订单金额</li>
						<li class="dd-zt">订单状态</li>
					</ul>
					<table class="table type-list">
						<tr>
							<td class="mins">民宿</td>
							<td class="sj">2017-07-22</td>
							<td class="bh">hx02020200</td>
							<td class="lr">
								<span>无锡鸣珂里桃花源精品酒店</span>
								<span>观景大床房</span>
								<span>2晚</span>
							</td>
							<td class="je"><b>￥1790</b></td>
							<td class="zt">预订中</td>
							<td class="qx">
								<a href="#">取消</a>
							</td>
						</tr>
					</table>
				</div>

			</el-tab-pane>
			<el-tab-pane label="修改资料">
				<div class="xiugai-zl">
				<h5>完整填写个人资料</h5>
				<form>
					<label class="name-nc"><span>*</span>呢称：<input type="text" placeholder="请输入您的呢称"/></label>
					<label class="name-xm"><span>*</span>姓名：<input type="text" placeholder="请输入您的姓名"/></label>
					<label class="sex">
						  <span>*</span>性别：
					 	  <select>
							  <option value="男">男</option>
							  <option value="女">女</option>
						  </select>
	            	</label>
					<label class="sr"><span>*</span>生日：<input type="text" placeholder="请输入您的生日"/><i>(格式:1980-8-8) 赶快填写生日，有机会赢取生日大礼包！</i></label>
					<label class="tel"><span>*</span>移动电话：<input type="text" placeholder="请输入您的手机"/><i>请认真填写，以便我们更好的为您服务</i></label>
					<label class="email"><span>*</span>电子邮件：<input type="text" placeholder="请输入您的邮箱"/></label>
					<label class="dz"><span>*</span>通信地址：<input type="text" placeholder="请认真填写，以便我们更好的为您服务。"/></label>
					<div class="kid-y">
						<span>您是否有孩子？：</span>
						<input type="radio" name="kid" id="kid1" value="" /><label for="kid1">是</label>
						<input type="radio" name="kid" id="kid2" value="" /><label for="kid2">否</label>
					</div>
					<div class="cx">
						<span>您会选择的出行方式是？：</span>
						<label><input type="checkbox" name="" id="" value=""/>在职</label>
						<label><input type="checkbox" name="" id="" value="" />退休</label>
						<label> <input type="checkbox" name="" id="" value="" />火车</label>
						<label> <input type="checkbox" name="" id="" value="" />高铁</label>
						<label> <input type="checkbox" name="" id="" value="" />飞机</label>

					</div>
					<div class="sy">
						<span>您喜欢的山游方式是？：</span>
						<label><input type="checkbox" name="" id="" value=""/>跟团</label>
						<label><input type="checkbox" name="" id="" value="" />背包</label>
						<label> <input type="checkbox" name="" id="" value="" />半自由行</label>
						<label> <input type="checkbox" name="" id="" value="" />自由行</label>
						<label> <input type="checkbox" name="" id="" value="" />不确定</label>
					</div>
					<div class="will">
						<span>您是否愿意关注阳村微信公众号？：</span>
						<input type="radio" name="hao" id="yes" value="" /><label for="yes">是</label>
						<input type="radio" name="hao" id="no" value="" /><label for="no">否</label>
					</div>
					<a href="#">确认修改</a>
				</form>
              </div>
			</el-tab-pane>
			<el-tab-pane label="修改头像">
				<div class="xiug-toux">
		 			 <ul>
		 			 	<li class="img">
		 			 		<img src="../../../static/img/about/tx.png"/>
		 			 	</li>
		 			 	<li class="wenj">
		 			 		<form enctype="multipart/form-data" action="" method="post">
		 			 			    <label>上传文件:</label>
								    <input type="file" id="choosefile" />
								    
								     <p>文件格式：jpg，gif，   文件大小： 小于500k</p>
						             <a href="#">确认，保存</a>
						    </form>
						   
		 			 	</li>
		 			 </ul>
		 		</div>
			</el-tab-pane>
			<el-tab-pane label="修改密码">
				<div class="xiug-pass">
		 			 <form action="" method="post">
		 			 	 <label>原始密码：<input type="password" value="" placeholder="请输入原始密码"/></label>
		 			 	 <label class="x-pass">新密码：<input type="password" value="" placeholder="请输入新密码"/></label>
		 			 	  <label>确认密码：<input type="password" value=""placeholder="请确认新密码"/></label>
		 			 	  <a href="#">确认</a>
		 			 </form>
		 		</div>
	    			 		
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
</script>

<style>
	.el-tab-pane: {
		padding: 0;
	}
	
	el-tab-pane {
		color: #000;
	}
</style>