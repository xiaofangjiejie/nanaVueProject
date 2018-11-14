$(document).ready(function(){
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
	
	$('.pre').click(function(){
		index--
		if(index<0){index=imagenum}
		$('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000)
		$('.cir').eq(index).addClass('cr').siblings().removeClass('cr')
	})
	$('.next').click(function(){
		index++
		if(index>imagenum){index=0}
		$('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000)
		$('.cir').eq(index).addClass('cr').siblings().removeClass('cr')
	})

	//重新设置轮播图位置
	// $('.banner').hover(
	// 	function(){
	// 		clearInterval(t);
	// 	},
	// 	function(){
	// 		t=setInterval(play,times)
	// 		function play(){
	// 			index++
	// 			if(index>imagenum){index=0}
	// 			$('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000)
	// 			$('.cir').eq(index).addClass('cr').siblings().removeClass('cr')
	// 		}
	// 	}
	// );
	
});
	
