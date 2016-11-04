$(function () {
	
	$('.container').fullpage({
		
		navigation:true,
		verticalCentered:false,
		navigationTooltips:['首页','页面2','页面3','页面4','页面5','页面6','页面7','页面8','页面9','页面10'],
		
		afterLoad:function (anchorlink,index) {
			if (index == 8) {
				$('.section8').find('strong').css({
					opacity:1,
					transform:'scale(1,1)',
					transition:'all 1s 0.5s',
				});
				$('.section8').find('h3').css({
					opacity:1,
					transform:'scale(1,1)',
					transition:'all 1s 0.5s',
				});
				$('.section8').find('p').css({
					opacity:1,
					transition:'all 1s 0.7s',
				});
				$('.section8').find('.bg82').css({
					opacity:1,
					transition:'all 1s 0.5s',
					bottom:'260px',
					marginLeft:'-280px'
					
				});
				$('.section8').find('.bg83').css({
					opacity:1,
					transition:'all 1s 0.7s',
					bottom:'360px',
					marginLeft:'-380px'
					
				});
				$('.section8').find('.bg84').css({
					opacity:1,
					transition:'all 1s 1s',
					bottom:'420px',
					marginLeft:'-480px'
					
				});
			}
		},
		onLeave:function (index,direction) {
			if (index == 8) {
				$('.section8').find('strong').css({
					opacity:1,
					transform:'scale(0.5,0.5)',
					transition:'all 1s',
				});
				$('.section8').find('h3').css({
					opacity:0,
					transform:'scale(0.5,0.5)',
					transition:'all 1s',
				});
				$('.section8').find('p').css({
					opacity:0,
					transition:'all 1s',
				});
				$('.section8').find('.bg82').css({
					opacity:0,
					transition:'all 1s',
					bottom:'160px',
					marginLeft:'-180px'
					
				});
				$('.section8').find('.bg83').css({
					opacity:0,
					transition:'all 1s',
					bottom:'260px',
					marginLeft:'-280px'
					
				});
				$('.section8').find('.bg84').css({
					opacity:0,
					transition:'all 1s',
					bottom:'320px',
					marginLeft:'-410px'
					
				});
			}			
		}
		
	})
})