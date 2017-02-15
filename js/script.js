$(document).ready(function(){
	var number = 1;
	var count = $(".photo").length;
	var before = count;
	$(".next").click(function(){
		if(number == count){
			number = 1;
			before = count;
		}
		else{
			number++;
			before = number - 1;
		}

		$(".photo:nth-child("+ before +")").animate({right: '100%'}, "slow",function(){
			$(this).hide();
		});
		$(".photo:nth-child("+ number +")").css("right", "-100%");
		$(".photo:nth-child("+ number +")").show();
		$(".photo:nth-child("+ number +")").animate({right: '0%'}, "slow");
	})
	$(".back").click(function(){
		if(number == 1){
			number = count;
			before = 1;
		}
		else{
			number--;
			before = number + 1;
		}
		$(".photo:nth-child("+ before +")").animate({right: '-100%'}, "slow",function(){
			$(this).hide();
		});
		$(".photo:nth-child("+ number +")").css("right", "100%");
		$(".photo:nth-child("+ number +")").show();
		$(".photo:nth-child("+ number +")").animate({right: '0%'}, "slow");
	})
})