<template>
  <div>
    <div class="activ-box">
      <div class="container">
        <div class="row clear">
          <ul class="col-xs-2  fl">
            <li class="activ">
              <router-link to="/life" target="_parent">日常活动</router-link><span>></span></li>
          </ul>
          <div class="col-xs-10 f fl">
            <router-view/>
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
    },

  }
</script>

<style>
  .activ-box {
    background: #f9f9f9;

  }
  .activ-box .container{
    width: 1200px;
    margin: 0 auto;
  }
  .activ-box .row {
    width: 1200px;

  }
  .activ-box .row .f{
    width: 1000px;
  }
  .activ-box .row .col-xs-2 {
    padding: 0;
    margin-left: -10px;
  }
  .activ-box .row .col-xs-2 li {
    width: 170px;
    height: 76px;
    text-align: center;
    line-height: 76px;
    color: #fff;
    background: #4b3b34;
    font-size: 17px;
  }
  .activ-box .row .col-xs-2 li a {
    display: inline-block;
    color: #fff;
    margin: 0 auto;
    text-decoration: none;
  }
  .activ-box .row .col-xs-2 li span {
    margin-left: 20px;
  }
  .activ-box .row .col-xs-2 li:hover {
    background: #c0996f;
  }
  .activ-box .row .col-xs-2 .activ {
    background: #c0996f;
  }
  .activ-box .row .col-xs-2 .activ a {

  }
  .activ-box .row .col-xs-10 {
    padding: 0;
    margin-left: 10px;
  }
  .activ-box .row .col-xs-10 ul {
    border-bottom: 2px solid #6e615b;
    padding: 4px;
    margin-bottom: 5px;
  }
  .activ-box .row .col-xs-10 ul li {
    display: inline-block;
    font-size: 15px;
    padding: 0 6px;
  }
  .activ-box .row .col-xs-10 ul .home a {
    display: block;
    width: 22px;
    height: 22px;
    background: url(../../../static/img/about/home_icon.png) no-repeat;
    background-position: -15px -4px;
    transition: .3s;
  }
  .activ-box .row .col-xs-10 ul .home a:hover {
    background-position: -50px -4px;
  }
  .activ-box .row .col-xs-10 ul .fenlei a {
    text-decoration: none;
    font-size: 15px;
    display: block;
    color: #000;
  }
  .activ-box .row .col-xs-10 ul .fenlei a:hover {
    color: #c8a063;
  }
  .activ-box .row .col-xs-10 ul .home {
    height: 24px;
    padding: 0;
    margin-left: 14px;
    padding-top: 5px;
  }
  .activ-box .row .col-xs-10 .new-activ {
    cursor: default;
  }
  .activ-box .row .col-xs-10 .new-activ .a-row{
    width: 975px;
  }
  .activ-box .row .col-xs-10 .col-xs-12 {
    padding: 0 40px 0 30px;
    text-decoration: none;
  }
  .activ-box .row .col-xs-10 .col-xs-12 .row {
    border: 1px solid #d2d2d2;
    padding: 18px 26px 18px 0;
    margin-top: 30px;
    margin-bottom: 0;
    background: #fff;
  }
  .activ-box .row .col-xs-10 .col-xs-12 .row .col-xs-5 {
    padding: 0;
    text-indent: 2em;
  }
  .activ-box .row .col-xs-10 .col-xs-12 .row .col-xs-7 {
    padding: 0;
  }
  .activ-box .row .col-xs-10 .col-xs-12 .row .col-xs-7 h3 {
    margin: 0;
    width: 100%;
    border-bottom: 1px solid #d2d2d2;
    padding-bottom: 15px;
    margin-bottom: 10px;
    margin-top: 8px;
    color: #5f4b42;
    font-size: 22px;
    text-indent: .5em;
  }
  .activ-box .row .col-xs-10 .col-xs-12 .row .col-xs-7 h3 i {
    font-style: normal;
  }
  .activ-box .row .col-xs-10 .col-xs-12 .row .col-xs-7 p {
    font-size: 15px;
    padding: 0 10px;
    line-height: 29px;
    color: #5c5c5c;
  }
  .activ-box .row .col-xs-10 .col-xs-12 .row .col-xs-7 span {
    color: #5c5c5c;
    display: inline-block;
    font-size: 15px;
    line-height: 29px;
    padding: 0 10px;
  }
  .activ-box .row .col-xs-10 .col-xs-12 .news-shadow:hover {
    box-shadow: 0px 0px 15px #8C8C8C;
  }
  .activ-box .row .col-xs-10 .show-title1 {
    width: 238px;
    height: 56px;
    margin: 30px 0px 22px 360px;
    background: url(../../../static/img/about/YC_show_icon_bt.png) no-repeat;
    background-position: -7px -7px;
  }
  .activ-box .row .col-xs-10 .show-title2 {
    width: 238px;
    height: 56px;
    margin: 0px 0px 22px 360px;
    background: url(../../../static/img/about/YC_show_icon_bt.png) no-repeat;
    background-position: -7px -80px;
  }
  .activ-box .row .col-xs-10 .show-text1,
  .activ-box .row .col-xs-10 .show-text2 {
    overflow: hidden;
  }
  .activ-box .row .col-xs-10 .show-text1 a,
  .activ-box .row .col-xs-10 .show-text2 a {
    text-decoration: none;
    width: 300px;
    height: 400px;
    margin-right: 30px;
    margin-bottom: 30px;
    cursor: default;
    background: #fff;
    display: block;
    font-size: 16px;
    color: #5a5a5a;
    float: left;
  }
  .activ-box .row .col-xs-10 .show-text1 a p,
  .activ-box .row .col-xs-10 .show-text2 a p {
    padding: 20px 30px;
  }
  .activ-box .row .col-xs-10 .show-text1 .right-no,
  .activ-box .row .col-xs-10 .show-text2 .right-no {
    margin-right: 0px;
  }
  .activ-box .row .col-xs-10 .new-mingkeli {
    background: #fff;
    border: 1px solid #eee;
    margin: 30px 0;
  }
  .activ-box .row .col-xs-10 .new-mingkeli div {
    padding: 20px 138px 40px;
  }
  .activ-box .row .col-xs-10 .new-mingkeli div img {
    max-width: 626px;
  }
  .activ-box .row .col-xs-10 .new-mingkeli div h3 {
    text-align: center;
  }
  .activ-box .row .col-xs-10 .new-mingkeli div i {
    display: block;
    font-style: normal;
    float: right;
    margin: 10px 0 20px;
  }
  .activ-box .row .col-xs-10 .new-mingkeli div p {
    line-height: 38px;
    margin: 30px 0;
  }
  .activ-box .row .paging ul {
    float: right;
    margin-right: 24px;
    margin-top: 31px;
  }
  .activ-box .row .paging ul li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #dcdcdc;
    text-align: center;
    line-height: 30px;
    margin: 0 5px;
    cursor: pointer;
  }
  .activ-box .row .paging ul li a {
    text-decoration: none;
    color: #000;
  }
  .activ-box .row .paging ul li:hover {
    border: 1px solid #c8a063;
  }
  .activ-box .row .paging ul .paging-active {
    background: #c0996f;
    border: 1px solid #c0996f;
  }
  .activ-box .row .paging ul .paging-active a {
    color: #fff;
  }
  .activ-box .show-row {
    margin-bottom: 0px;
  }
  @media all and (max-width: 1280px) {
    .activ-box {
      width: 1230px;
      margin: 0 auto;
    }
  }
  .toTop {
    position: fixed;
    bottom: 80px;
    right: 40px;
    display: block;
    width: 80px;
    height: 70px;
    display: none;
    background: url("../../../static/img/index/yc_icon_02.png") no-repeat;
    background-position: -7px -210px;
  }
  .toTop:hover {
    background-position-x: -100px;
  }

</style>
