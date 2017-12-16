
 //   var $ = jQuery.noConflict(true);
$(function(){
//process
processli();
function processli(){
	var span=$('#processli li .fl');
	//alert(span.eq(1).height());
	for(var i=0;i<span.length;i++){
		var spancur=span.eq(i);
		if(spancur.height()<21){
			spancur.addClass('singleline');
			}
		}
	$('#processli li').hover(function(){
		$('.cur').removeClass('cur');
		$(this).addClass('cur');
		});
}

//menu
index();
function index(){
	$('.menu p a:last').css('border','0');
}
footbut();
function footbut(){
	$('.footbut a').toggle(function(){
		$('.aboutarea .main').slideUp();
		},function(){$('.aboutarea .main').slideDown();
		});
}
casemain();
function casemain(){
$('.casetitle').css('display','none');
$('#case li').hover(function(){
	$(this).children('span').show()},function(){$(this).children('span').hide();
	
	}
	
	)
}

$('.menu li').mouseover(function(){
	$(this).find('.cur').removeClass('cur');
	$(this).find('.nav').slideDown();
	$(this).children('a').addClass('cur');
	});
$('.menu li').mouseleave(function(){
	$(this).find('.nav').slideUp();
	$(this).children('a').removeClass('cur');
	});
//case
var page=1;
var i=1;
var box=$('#honormain ul');
var n=$('#honormain li').length;
var h=$('#honormain li').width();
var pagetotal=Math.ceil(n/i);
$('#l').bind('click',upwardsfn);
$('#r').bind('click',downfn);
$('#l').addClass('lend');
function upwardsfn(){
		if(page>1){
			box.animate({ marginLeft : '+='+h }, "slow");
			page--;
			$("#r").removeClass('rend');	
			if(page<=1){
				$('#l').addClass('lend');
			}else{
				$('#l').removeClass('lend');	
			}
		}
	}
function downfn(){
		if(pagetotal>page){
			box.animate({ marginLeft : '-='+h }, "slow");
			page++;
			$("#l").removeClass('lend');	
			if(page>=pagetotal){
				$('#r').addClass('rend');
			}else{
				$('#r').removeClass('rend');	
			}
		}
	}
  });



