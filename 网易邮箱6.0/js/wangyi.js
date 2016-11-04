$(function () {
	$(".fullpage").fullpage({
		navigation:true,
		scrollingSpeed:'1000',
		
		afterLoad:function (anchorlink,index) {
			if (index ==1) {
				$("#section0").find('.a1').animate({
					top:'5%',
				},500);
				$("#section0").find(".a2").fadeIn(500);
				$("#section0").find(".p1").delay(500).fadeIn(500);
				$("#section0").find('.a3').delay(200).animate({
					top:'45%',
				},800);
				$("#section0").find('.a4').animate({
					top:'55%',
				},300);
			}
			if (index ==2) {
				$("#section1").find(".b1").fadeIn(500);
				$("#section1").find('.b2').animate({
					left:'10%',
				},500);
				$("#section1").find('.b3').animate({
					bottom:'15%',
				},500);
				$("#section1").find('.b4').animate({
					right:'10%'
				},500);
			}
			
			if (index ==3) {
				$("#section2").find(".c1").fadeIn(500);
				
				$("#section2").find('.c4').animate({
					right:'17%'
				},500);
				$("#section2").find('.p2').animate({
					left:'20%'
				})
				
			}
			
			if (index ==4) {
				$('#section3').find('.p3').fadeIn(500);
				$("#section3").find(".d1").fadeIn(500);
				$("#section3").find('.d2').delay(200).animate({
					bottom:'15%',
				},500);
				$("#section3").find('.d3').delay(200).animate({
					bottom:'20%',
				},500);
				$("#section3").find('.d4').delay(200).animate({
					bottom:'15%',
				},500);
			}
			
			if (index ==5) {
				
				$("#section4").find(".e1").fadeIn(500);
				$("#section4").find('.e2').animate({
					left:'10%',
				},500);
				$("#section4").find('.e3').animate({
					left:'30%',
				},500);
				$("#section4").find('.e4').animate({
					right:'30%',
				},500);
				$("#section4").find('.e5').animate({
					right:'10%',
				},500);
			}
			if (index ==6) {
				$("#section5").find(".f1").fadeIn(500);
				$("#section5").find('.f2').animate({
					bottom:'20%',
				},500);
				$("#section5").find('.f3').animate({
					left:'10%'
				},500);
				$("#section5").find('.p4').animate({
					right:'10%',
				},500);
			}
			if (index ==7) {
				$("#section6").find(".g1").fadeIn(500);
				$("#section6").find('.g2').animate({
					bottom:'60%',
				},500);
				$("#section6").find('.g3').delay(400).animate({
					bottom:'60%'
				},500);
				
			}
			if (index==8) {
				$("#section7").find(".h1").fadeIn(500);
				$("#section7").find('.h3').animate({
					left:'30%',
					top:'30%',
					opacity:'1'
				},500);
				$("#section7").find('.h4').delay(400).animate({
					left:'25%',
					top:'25%',
					opacity:'1',
				},500);
				$("#section7").find('.h5').delay(800).animate({
					left:'20%',
					top:'20%',
					opacity:'1',
				},500);
				
			}
			if (index ==9) {
				$('#section8').find('.j1').fadeIn(500);
				$("#section8").find(".j2").animate({
					opacity:'1',
				},500);
				$("#section8").find('.j3').animate({
					left:'10%',
				})
				$("#section8").find('.j4').animate({
					top:'50%',
				})
				$("#section8").find('.j5').animate({
					right:'5%',
				})
				
			}
			
			if (index ==10) {
				
				$("#section9").find(".k2").fadeIn(500);
				$("#section9").find(".k4").fadeIn(500);
				$("#section9").find('.k5').animate({
					top:'55%'
				},500);
				
			}
			
		},
		onLeave:function (index,direction) {
			if (index==1) {
				$("#section0").find('.a1').animate({
					top:'-5%',
				},500);
				$('#section0').find(".a2").fadeOut(500);
				$("#section0").find(".p1").delay(500).fadeOut(500);
				$("#section0").find('.a3').delay(200).animate({
					top:'145%',
				},800);
				$("#section0").find('.a4').animate({
					top:'155%',
				},300);
			}
			if (index ==2) {
				$("#section1").find(".b1").fadeOut(500);
				$("#section1").find('.b2').animate({
					left:'-50%',
				},500);
				$("#section1").find('.b3').animate({
					bottom:'-10%',
				},500);
				$("#section1").find('.b4').animate({
					right:'-50%'
				},500);
			}
			
			if (index ==3) {
				$("#section2").find(".c1").fadeOut(500);
				
				$("#section2").find('.c4').animate({
					right:'-30%'
				
				},500);
				$("#section2").find('.p2').animate({
					bottom:'-50%'
				});
				
			}
			
			if (index ==4) {
				$('#section3').find('.p3').fadeOut(500);
				$("#section3").find(".d1").fadeOut(500);
				$("#section3").find('.d2').delay(200).animate({
					bottom:'-70%',
				},500);
				$("#section3").find('.d3').delay(200).animate({
					bottom:'-80%',
				},500);
				$("#section3").find('.d4').delay(200).animate({
					bottom:'-70%',
				},500);
			}
			if (index ==5) {
				
				$("#section4").find(".e1").fadeIn(500);
				$("#section4").find('.e2').animate({
					left:'-30%',
				},500);
				$("#section4").find('.e3').animate({
					left:'-30%',
				},500);
				$("#section4").find('.e4').animate({
					right:'-30%',
				},500);
				$("#section4").find('.e5').animate({
					right:'-30%',
				},500);
			}
			if (index ==6) {
				$("#section5").find(".f1").fadeOut(500);
				$("#section5").find('.f2').animate({
					bottom:'100%',
				},500);
				$("#section5").find('.f3').animate({
					left:'-40%'
				},500);
				$("#section5").find('.p4').animate({
					right:'-35%',
				},500);
			}
			if (index ==7) {
				$("#section6").find(".g1").fadeOut(500);
				$("#section6").find('.g2').animate({
					bottom:'-10%',
				},500);
				$("#section6").find('.g3').delay(400).animate({
					bottom:'-10%'
				},500);
				
			}
			if (index==8) {
				$("#section7").find(".h1").fadeIn(500);
				$("#section7").find('.h3').animate({
					left:'32%',
					top:'35%',
					opacity:'0'
				},500);
				$("#section7").find('.h4').delay(200).animate({
					left:'27%',
					top:'30%',
					opacity:'0',
				},500);
				$("#section7").find('.h5').delay(400).animate({
					left:'22%',
					top:'25%',
					opacity:'0',
				},500);
				
			}
			if (index ==9) {
				$('#section8').find('.j1').fadeOut(500);
				$("#section8").find(".j2").animate({
					opacity:'0',
				},500);
				$("#section8").find('.j3').delay(100).animate({
					left:'-30%',
				})
				$("#section8").find('.j4').delay(100).animate({
					top:'150%',
				})
				$("#section8").find('.j5').delay(100).animate({
					right:'-35%',
				})
				
			}
			if (index ==10) {
				
				$("#section9").find(".k2").fadeOut(500);
				$("#section9").find(".k4").fadeOut(500);
				$("#section9").find('.k5').animate({
					top:'155%'
				},500);
				
			}
		
		}
	})
})