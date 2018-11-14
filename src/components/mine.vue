<template>
    <div class="i-container" id="App">
			<div class="mine-top">
				<img src="../assets/images/m-warn_03.png" class="mine-warn" />
				<div class="mine-tx">
					<img src="../assets/images/m-touxiang_03.png" />
				</div>
				<span class="mine-name">李锋</span>
				<span class="mine-about">乐荐信息科技（北京）有限公司</span>
			</div>
			<div class="mine-con">
				<div class="mine-con-top">
					<div class="mine-con-topa">
						<div class="fl">
							<img src="../assets/images/m-dingdan_11.png" class="mine-ddimg" />
							<span>我的订单</span>
						</div>
						<div class="fr">
							<div class="">
								<span>全部订单</span>
								<img src="../assets/images/more_11.png" class="mine-allddimg"/>
							</div>
						</div>
					</div>
					<div class="mine-top-list col-3" v-for="dingdan in dingdan_type" :key="dingdan.num">
						<img class="mine-dd-img" :src="dingdan.dingdanImg"  />
						<span class="content_top_span">{{dingdan.dingdanName}}</span>
					</div>
					
				</div>
				<div class="mine-con-con">
					<div class="mine-con-list col-4" v-for="minetools in minetools_type" :key="minetools.num">
						<img class="mine-con-img" :src="minetools.toolsImg"  />
						<span class="content_top_span">{{minetools.toolsName}}</span>
					</div>
					
				</div>
			</div>
    </div>
</template>
<script>
export default {
  name: 'mine',
  data () {
    return {
		dingdan_type:[
			{
				dingdanId:1,
				dingdanImg:require('../assets/images/mine-dd01_03.png'),
				dingdanName:'待支付',
			},
			{
				dingdanId:2,
				dingdanImg:require('../assets/images/mine-dd02_03.png'),
				dingdanName:'待发货',
			},
			{
				dingdanId:3,
				dingdanImg:require('../assets/images/mine-dd03_03.png'),
				dingdanName:'待收货',
			},
			{
				dingdanId:4,
				dingdanImg:require('../assets/images/mine-dd04_03.png'),
				dingdanName:'待评价',
			}
		],

		minetools_type:[
			{
				toolsId:1,
				toolsImg:require('../assets/images/mine-list01_03.png'),
				toolsName:'我的积分',
			},
			{
				toolsId:2,
				toolsImg:require('../assets/images/mine-list02_03.png'),
				toolsName:'我的保险',
			},
			{
				toolsId:3,
				toolsImg:require('../assets/images/mine-list03_03.png'),
				toolsName:'我的卡劵',
			},
			{
				toolsId:4,
				toolsImg:require('../assets/images/mine-list04_03.png'),
				toolsName:'我的收藏',
			},
			{
				toolsId:5,
				toolsImg:require('../assets/images/mine-list05_03.png'),
				toolsName:'我的优惠券',
			},
			{
				toolsId:6,
				toolsImg:require('../assets/images/mine-list06_03.png'),
				toolsName:'退换货管理',
			},
			{
				toolsId:7,
				toolsImg:require('../assets/images/mine-list07_03.png'),
				toolsName:'收货地址',
			},
			{
				toolsId:8,
				toolsImg:require('../assets/images/mine-list08_03.png'),
				toolsName:'设置',
			},
			{
				toolsId:9,
				toolsImg:require('../assets/images/mine-list08_03.png'),
				toolsName:'意见反馈',
			}
		]
    }
  }
}
</script>
<style>
.mine-top{
	position: relative;
	background: #ff5648;
	padding-top: 1px;
}
.mine-tx{
	width: 1.6rem;
	margin: 0.5rem auto 0 auto;
}
.mine-tx img{
	width: 100%;
	border-radius: 50%;
}
.mine-name{
	display: block;
	text-align: center;
	color: #FFFFFF;
	font-size: 0.38rem;
	line-height:0.7rem ;
}
.mine-about{
	line-height:0.5rem ;
	padding-bottom: 0.4rem;
	display: block;
	color: #FFFFFF;
	font-size: 0.25rem;
}
.mine-warn{
	position: absolute;
	top: 0.2rem;
	right: 0.2rem;
	width: 0.7rem;
}
.mine-con-top,.mine-con-con{
	margin: 0.2rem 0;
	overflow: hidden;
    background: #ffffff;
}
.mine-con-list{
    float: left;
	border-bottom: 1px solid #dddddd;
	float: left;
	padding: 0.3rem 0 0.25rem 0;
	border-right: 1px solid #dddddd;
}
.mine-con-img{
	width:0.7rem;
}
.mine-con-list .content_top_span{
	display: block;
	line-height: 0.5rem;
}
.mine-con-topa{
	margin: 0 0.2rem;
	font-size: 0.35rem;
	height: 0.8rem;
	line-height: 0.8rem;
	border-bottom: 1px solid #eaeaea;
	vertical-align: middle;
}
.mine-ddimg{
	margin-left: 0.1rem;
	width: 0.35rem;
}
.mine-allddimg{
	margin-right: 0.1rem;
	width: 0.35rem;
}
.mine-dd-img{
	width: 0.6rem;
	margin: 0.3rem 0 0 0;
}
.mine-top-list{
  float: left;
}
.mine-top-list .content_top_span{
	display: block;
	line-height: 0.5rem;
	color: #979797;
	line-height: 0.5rem;
	margin-bottom: 0.25rem;
}
</style>
