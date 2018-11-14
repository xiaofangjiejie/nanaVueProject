<template>
    <div class="i-container">
			<div class="fx-header">
				<div class="send-back"></div>
				<span class="fx-title show" >发现</span>
			</div>
			<div class="content">
				<div class="fx-top">
					<div class="fx-top-list ">
						<div class="send_icon"></div>
						<span class="content_top_span">发送感谢卡</span>
					</div>
					<div class="fx-top-list ">
						<div class="mine_gx_icon"></div>
						<span class="content_top_span">我的感谢卡</span>
					</div>
					<div class="fx-top-list ">
						<div class="gxbiao_icon"></div>
						<span class="content_top_span">感谢卡榜单</span>
					</div>
				</div>
				<div class="fx-con">
					<div class="fx-con-list"  v-for="thanks in thankscare" :key="thanks.num">
						<div class="fx-con-lista">
							<div class="fx-con-name fl">
								<img class="fx-con-tx" :src="thanks.thanksImg" />
								<span>{{thanks.thanksName}}</span>
							</div>
							<span class="fx-con-date fr">{{thanks.thankstime}}</span>
						</div>
						<p class="fx-con-text">{{thanks.thankswho}}</p>
						<div class="fx-con-img">
							<img :src="thanks.thankswhat" />
						</div>
					</div>
				</div>
			</div>
    </div>
		
</template>
<script>
export default {
  name: 'faxian',
  data () {
    return {
	   thankscare:[
			{
				thanksId:1,
				thanksImg:require('../assets/images/fx_touxiang_11.png'),
				thanksName:'李锋',
				thankstime:'2017-12-12',
				thankswho:'我送了一张#最佳导师感谢卡#给阿雅',
				thankswhat:require('../assets/images/picture_14.png')
			}, {
				thanksId:2,
				thanksImg:require('../assets/images/fx_touxiang_11.png'),
				thanksName:'李锋',
				thankstime:'2017-12-12',
				thankswho:'我送了一张#最佳导师感谢卡#给阿雅',
				thankswhat:require('../assets/images/picture_14.png')
			}, {
				thanksId:3,
				thanksImg:require('../assets/images/fx_touxiang_11.png'),
				thanksName:'李锋',
				thankstime:'2017-12-12',
				thankswho:'我送了一张#最佳导师感谢卡#给阿雅',
				thankswhat:require('../assets/images/picture_14.png')
			}
		]
    }
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
.send-back {
	position: absolute;
	top:0.18rem;
    height: 0.45rem;
    line-height: 0.6rem;
    text-align: center;
    background: url(../assets/images/send-back_03.png) no-repeat;
    background-size: cover;
    width: 0.2rem;
}
.fx-top{
	border-top: 1px solid #dfdfdf;
	background: #FFFFFF;
	height: 1.8rem;
}
.fx-top-list{
  width: 2.42rem;
}
.fx-top-list,.mine-con-list,.mine-top-list{
	float: left;
	text-align: center;
}
.fx-top-list span,.mine-con-list span,.mine-top-list span{
	font-size: 0.28rem;
}
.send_icon,.mine_gx_icon,.gxbiao_icon  {
    width: 0.8rem;
    height:0.7rem;
    margin: 0.3rem 0 0.1rem 0.7rem;
    background-size: cover;
}
.send_icon{
	background: url(../assets/images/send_03.png);
	 background-size: cover;
}
.mine_gx_icon {
    background: url(../assets/images/mine_gx_03.png);
     background-size: cover;
}
.gxbiao_icon {
    background: url(../assets/images/gz-biao_03.png);
     background-size: cover;
}
.fx-con{
	width: 7.5rem;
	padding: 0.2rem;
}
.fx-con-list{
	background: #FFFFFF;
	width: 100%;
	padding: 0.2rem ;
}
.fx-con-lista{
	overflow: hidden;
}
/*.fx-con-name{
	
}*/
.fx-con-tx{
	width: 1rem;
}
.fx-con-name span{
	margin-left: 0.1rem;
	font-size: 0.35rem;
}
.fx-con-date{
	vertical-align: middle;
	line-height: 1rem;
	color: #9c9c9c;
	font-size: 0.2rem;
}
.fx-con-text{
	margin-top: 0.1rem;
	text-align: left;
	line-height: 0.6rem;
  font-size: 0.35rem;
  margin-bottom: 0.05rem;
}
.fx-con-img{
	text-align: left;
}
.fx-con-img img{
	width: 60%;
}
</style>

