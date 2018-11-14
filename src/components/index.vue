<template>
  <div id="app" class='i-container'>
      <div class="sy-header">
        <span class="sy-title show" >首页</span>
        <img class="sy-warn" src="../assets/images/sy_warn_03.png">
      </div>
      <div class="content">
        <div class="content_top_carousel">
          <!-- 修改img个数，请修改 cir 个数，img个数，以及banner.js内设置的默认轮播图个个数 -->
          <div class="banner">
            <!--<img class="change pre"  src="carousel/pre.png" >
            <img class="change next" src="carousel/next.png" >-->
            
            <div class="cirbox" >
              <div class="cir cr"></div>
              <div class="cir"></div>
              <div class="cir"></div>
              <div class="cir"></div>
            </div>
            <div class="imgbox">
              <img class="img im" id="Img1" src="../assets/images/banner-01_02.png">
              <img class="img im" id="Img2" src="../assets/images/banner-01_02.png">
              <img class="img im" id="Img3" src="../assets/images/banner-01_02.png">
              <img class="img im" id="Img4" src="../assets/images/banner-01_02.png">
            </div>	
          </div>
        </div>
        <div class="content_top_list">
          <div class="content_top_left">
            <div class="tuanti_icon"></div>
            <span class="content_top_span">团体保障</span>
          </div>
          <div class="content_top_center">
            <div class="geren_icon"></div>
            <span class="content_top_span">个人保障</span>
          </div>
          <div class="content_top_right">
            <div class="mine_icon"></div>
            <span class="content_top_span">我的礼金</span>
          </div>
        </div>
        <div class="content_news">
          <div class="news_tit">
            <span class="news_tit_span">热门资讯</span>
            <img src="../assets/images/more_11.png" class="news_more" />
          </div>
          <div class="news_con">
            <div class="news_con_list" v-for="news in news_type" :key="news.num">
              <div class="news_list_left col-4">
                <img :src="news.newsImg" />
              </div>
              <div class="news_list_right col-8">
                <a>
                  <p class="news-list-title ">{{news.newsName}}</p>
                </a>
                <div class="c-color-gray news-list-time"> <span>{{news.time}}</span></div>
              </div>
            </div>
           
          
          </div>
        </div>
      </div>
  </div>

</template>

<script>
/*important axios from 'axios'*/
export default {
  name: 'index',
  data () {
    return {
      news_type:[
				{
					newsId:1,
					newsImg:require('../assets/images/content-nes-img01_15.png'),
					newsName:'对于新入职的员工如何购买社保和商业保险?',
					time:'2017-12-12'
				}, {
					newsId:2,
				  newsImg:require('../assets/images/content-nes-img02_15.png'),
					newsName:'对于新入职的员工如何购买社保和商业保险?',
					time:'2017-12-12'
				}, {
					newsId:3,
					newsImg:require('../assets/images/content-nes-img01_15.png'),
					newsName:'对于新入职的员工如何购买社保和商业保险?',
					time:'2017-12-12'
				}
			]
    }
  }
}

/**banner* */
$(function(){
	var t;
	var index=-1;
	var times=1500;//速度
	var imagenum = 5//图片数量
	t=setInterval(play,times);

	function play(){
		index++;
		if(index>imagenum){index=0}
		$('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000)
		$('.cir').eq(index).addClass('cr').siblings().removeClass('cr')
	}
	
	$('.cir').click(function(){
		$(this).addClass('cr').siblings().removeClass('cr')
		var index=$(this).index()
		$('.img').eq(index).fadeIn(600).siblings().fadeOut(600)
	})
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-list-title {
  height: 1rem;
  margin-bottom: 0.1rem;
	position:relative;
}

.i-container .sy-warn {
	right: 0.5rem;
	top:0;
	position: absolute;
	display: inline-block;
	width: 0.5rem;
	line-height: 0.8rem;
	text-align: center;
}
.sy-warn i{
	color: #979797;
}
.content_top_list{
	width: 7.5rem;
    height: 2rem;
    background: #FFFFFF;
}
.content_top_list .content_top_span{
	font-size: 0.28rem;
}
.content_top_left,.content_top_center,.content_top_right{
	width: 2.5rem;
	height: 2rem;
	float: left;
	text-align: center;
}
.tuanti_icon,.geren_icon,.mine_icon  {
	width: 1.06rem;
	height: 1.07rem;
	margin: 0.22rem 0 0.1rem 0.7rem;
	background-size: cover;
}
.tuanti_icon{
	background: url(../assets/content_list01.png);
	 background-size: cover;
}
.geren_icon {
    background: url(../assets/content_list02.png);
     background-size: cover;
}
.mine_icon {
    background: url(../assets/content_list03.png);
    background-size: cover;
}
.content_news{
	background: #FFFFFF;
	margin: 0.2rem 0 0 0;
}
.news_tit{
	height: 0.7rem;
}
.news_tit_span{
	font-size: 0.36rem;
	line-height: 0.7rem;
	display: inline-block;
	margin:0 0 0 0.2rem;
}
.news_more{
	width: 0.35rem;
    float: right;
    margin: 0.15rem 0.2rem 0 0;
}
.news_con_list{
    padding: 0.15rem 0 0.15rem 0;
	overflow: hidden;
	border-bottom: 1px solid #eaeaea;
}
.news_list_left{
	float: left;
}
.news_list_left img{
	width: 100%;
}
.news-list-title{
	font-size: 0.35rem;
  color: #333333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}
.news_list_right{
	text-align: left;
}
.news-list-time{
	font-size:0.2rem ;
}
.c-color-gray {
    color: #999;
}
/**banner**/
.banner {
	width: 7.5rem;
	height: 3.96rem;
	background-color: aqua;
	position: relative;
	overflow: hidden;
	cursor: pointer;
}
.imgbox {
	width: 7.5rem;
	height: 3.96rem;
	position: relative;
	background-color: #222222;
	overflow: hidden;
}
.img {
	width: 7.5rem;
	height: 3.96rem;
	background-size: cover;
	position: absolute;
	display: none;
	/*left: 50%;*/
	/*margin-left: -683px;*/
}
.im {
	display: block;
}
.change {
	height: 1rem;
	display: block;
	position: absolute;
	z-index: 20;
	opacity: 0.4;
	transition: 0.4s;
	top: 50%;
	margin-top: -50px
}
.change:hover {
	opacity: 1;
}
.pre {
	left: 1%;
}
.next {
	right: 1%;
}
.cirbox {
	width: 88px;
	position: absolute;
	bottom: 15px;
	z-index: 10;
	left: 50%;
	margin-left: -44px;
	cursor: pointer;
}
.cir {
	width: 6px;
	height: 6px;
	background-color: white;
	opacity: 1;
	float: left;
	border-radius: 6px;
	margin: 0 5px 0 5px;
	cursor: pointer;
}
.cir:hover {
	background-color: cyan;
	transition: 0.8s;
}
.cr {
	opacity: 1;
	background:#ff4d43;
}
.cr:hover {
	background-color: white;
}
</style>
