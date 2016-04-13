// Pham Phu Phi
/**
 * Open opup for recive information 
**/
$(document).ready(function(e) {
		
		 $('a.popup-window').click(function(){
			var windows_width = $(window).width()/2;
			var windows_height = $(window).height()/2;
			var popupBox = $(this).attr('href');
			
			var popupTop = ($(popupBox).height())/2;
			var popupLeft =  ($(popupBox).width())/2;
			
			$(popupBox).fadeIn('slow', function(){
				$(this).animate({'margin-top': -popupTop, 'top':windows_height, 'left':windows_width,
					'margin-left': -popupLeft },'slow');
			});
			
			/*
			
			$(popupBox).fadeIn(400);
				$(popupBox).css({
				'margin-top': -popupTop, 
				'margin-left': -popupLeft});
			*/
			
			$('body').append('<div id="mask"></div>');
			$('#mask').fadeIn(400);
			return false;
		
		});
		
		$('body').on('click','#mask,info-btn-close',function(){
			$('.popup-info').fadeOut(300, function(){
				
			});
			
			$('#mask').fadeOut(300, function (){
				$('#mask').remove();		
			});
			return false;
		});	
		
		$(window).resize(function(){
			
			var windows_width = $( window ).width()/2;
		
			windows_height = $( window ).height()/2;
			var popupBox = $(this).attr('href');
			popupTop = ($(popupBox).height())/2;
			popupLeft =  ($(popupBox).width())/2;
			$('popup-info').fadeOut(1);
			$('popup-info').fadeIn('slow', function(){
				$(this).animate({'margin-top': 0, 'top':0, 'left':0,
					'margin-left':0},'slow');
			});
		});
    });