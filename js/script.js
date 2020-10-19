

	$(document).ready(function(){
		var count = 39;

		$('.marks-list-item').each(function (a,b) {
			if(a <= count) {} else {
				$(this).hide();
			}
        })

        $('.raiting').rating();

        new WOW().init();

        $('.popup').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',
            removalDelay: 160,
            modal: true
        });

        $(document).on('click', '.workers-block .popup', function (e) {
            $('#modal_askquestion .callback-form-desc').html($(this).attr('data-name'));
        });
        $(document).on('click', '.popup-close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

        var $topblock = $(".header-top");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 40 && $topblock.hasClass("fixed") ){
            	if($('body').width() < 769) {
            		$topblock.removeClass("fixed");
            	} else {
            		$topblock.removeClass("fixed").addClass("default").slideToggle();
            	}
            } else if($(this).scrollTop() <= 40 && $topblock.hasClass("default")) {
            	$topblock.removeClass("default").addClass("fixed").slideToggle();
            }
        });//scroll
	});

    $('.results-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
	});

    if($('body').width() > 480 && $('body').width() > 769)
    {
        $('.avito-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 3600,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },
            ]
        });
    } else {
        $('.avito-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        });
	}
    $('.videos-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        dots: true,
	});

    $('.feedback-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
        dots: true,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 601,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
		  ]
	});

	if($('body').width() < 480) { 
		$('.points-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: 1,
			dots: true,
			arrows: false,
		});
	}

    (function($) {
        $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
                $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
            });
        });
    })(jQuery);

    $('input[type=radio]').on('click',function() {
		var block = $(this).closest('.form-field-container');
		block.addClass('active');
        block.find('.field-title').addClass('changed').show().html($(this).parent().find('.form-list-item-name').html());
		block.find('.field-label').toggleClass("not");
        block.find(".field-content").slideToggle("slow");
        block.find(".fas").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
		if(block.is('.first-block')) {
            block.find('.field-label').show();
			$('.form-field-container').show();
			$('.main-form .btn').attr('type','submit');
		}
    });
    
    $(".question-title").on('click',function () {
        $(this).siblings(".question-answer").slideToggle("slow");
        $(this).find(".fas").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
		$(this).toggleClass('without-border');
     });
    
    $(".field-content-toggle").on('click',function () {
		var block = $(this);
		var field_title = block.find('.field-title');
        var name = 0;
		block.find('.field-label').toggleClass("not");
		if(block.is('.checkbox-items')){
		    block.parent().find('.checkbox').each(function () {
                if($(this).prop("checked")) {
                    name++;
                }
            });
            if(name != 0) {
            	block.parent().addClass('active');
                field_title.addClass('changed').html('Выбрано: ' + name);
            }
        }
        if(!field_title.is('.changed')) {
            field_title.slideToggle();
        }
        block.siblings(".field-content").slideToggle("slow");
        block.find(".fas").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");

     });
    
    $('.inputfile').on('change',function () {
        if( this.files && this.files.length >= 1 ) {
            $('.attach-label').html('Прикреплено файлов: '+this.files.length);
        } else {
            $('.attach-label').html('Прикрепите фото вашего автомобиля');
        }
    });

    $(".search-field").bind("change paste keyup", function() {
        var val = $(this).val();
        $(this).parent().parent().find('.marks-list-item, .mark-item').each(function () {
            str = $(this).find('.form-list-item-name').html();
            if(str && str.toLowerCase().indexOf(val.toLowerCase()) + 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
            if(val.length == 0) {
                $(this).show();
            }
        })

    });

	$('.navbar').on('click',function (){
            if($(this).is('.active')){
                $(this).removeClass('active');
                $(this).parent().find('i.fa-times').hide();
                $(this).parent().find('i.fa-bars').show();
                $('.main-menu').hide("drop", { direction: "left" }, 500);
            } else {
                $('.main-menu').show("drop", { direction: "left" }, 500);
                $(this).addClass('active');
                $(this).parent().find('i.fa-bars').hide();
                $(this).parent().find('i.fa-times').show();
            }
        });
  
	if($('body').width() < 768) {
		$('.drop-item-link').on('click',function(e) {
			
			e.preventDefault();
			$('.drop-menu').slideToggle("slow");
		})
	}
	
	$('.review-body-menu i').on('click',function (){
            if($(this).is('.active')){
                $(this).removeClass('active');
                $(this).siblings('.review-options').hide("slow");
            } else {
                $(this).siblings('.review-options').show("slow");
                $(this).addClass('active');
            }
        });
	
	if($('body').width() < 480) {
		$('.footer-click').on('click',function (){
				if($(this).is('.active')){
					$(this).removeClass('active');
					$(this).find('i.fa-chevron-up').hide();
					$(this).find('i.fa-chevron-down').show();
					$(this).find('.hiden-menu').hide("slow");
				} else {
					$(this).find('.hiden-menu').show("slow");
					$(this).addClass('active');
					$(this).find('i.fa-chevron-down').hide();
					$(this).find('i.fa-chevron-up').show();
				}
			});
	}

	$('.footer-services a, .header-top .drop-menu a').on('click',function(e) {
      if($('body').is('.index-page')){
        e.preventDefault();
        var data_id = $(this).attr('data-id');
        if(data_id > 4) {
          data_id = data_id - 4;
          $('.tabs-second-section .tabs li:nth-child('+data_id+')').trigger('click');
          $('html, body').stop().animate({
            scrollTop: $('.tabs-second-section  .tabs').offset().top - 72
          }, 777);
        } else {
          $('.tabs-section .tabs__caption li:nth-child('+data_id+')').trigger('click');
          $('html, body').stop().animate({
            scrollTop: $('.tabs-section .tabs__caption').offset().top - 72
          }, 777);
        }
      }
        })

	var youtube = document.querySelectorAll( ".youtube" );
		// loop
		for (var i = 0; i < youtube.length; i++) {
			var list=(youtube[i].dataset.src).split('/')
			var ember=list[list.length-1];
			// thumbnail image source. youtube[i].dataset.embed
			var source = "https://img.youtube.com/vi/"+ember  +"/hqdefault.jpg"; 
			
			// Load the image asynchronously
			var image = new Image();
			image.src = source;
			image.addEventListener( "load", function() {
				youtube[ i ].appendChild( image );
			}( i ) );
			youtube[i].addEventListener( "click", function() {
					var list=(this.dataset.src).split('/')
					var src=list[list.length-1];
				var iframe = document.createElement( "iframe" );

					iframe.setAttribute( "frameborder", "0" );
					iframe.setAttribute( "allowfullscreen", "" );
					iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ src +"?rel=0&showinfo=0&autoplay=1" );

					this.innerHTML = "";
					this.appendChild( iframe );
					console.log(this);
					this.classList.add('video');
			} );
		}

		$('.marks-list-item.more').on('click',function() {
            $('.marks-list-item').show();
            $(this).hide();
            //$('.marks-list').css('max-height','690px');
		})

	$("a.scroll-to-form").on("click", function(e){
		var anchor = $(this);
		$('#scroll-to-form .block-title').html($(this).attr('data-title'));
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 150
		}, 777);
		e.preventDefault();
		return false;
	});
	
	if($('body').width() < 480) {
	$(".tabs-second-section .tabs__caption li").on("click", function(e){
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $('.tabs-second-section .tabs__content').eq($(".tabs-second-section .tabs__caption li").index($(this))).offset().top - 72
		}, 777);
		return false;
	});



	}
    ymaps.ready(init);

    function init() {
		
		if($('body').width() < 480) {
			var myMap = new ymaps.Map("map", {
            center: [55.80, 37.71],
            zoom: 10
        
			}, {
            	searchControlProvider: 'yandex#search'
        	});
		} else {
		
        var myMap = new ymaps.Map("map", {
            center: [55.90, 37.71],
            zoom: 10.1
        
		}, {
            searchControlProvider: 'yandex#search'
        });
		}
        myMap.behaviors.disable("scrollZoom");

        var myGeocoder = ymaps.geocode("Москва, Марксистская улица, 34к7");
        myGeocoder.then(function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            myMap.geoObjects
                .add(new ymaps.Placemark(coordinates, {
                    balloonContent: 'г. Москва, Марксистская улица, 34к7'
                }));
        });
		
		var myGeocoder = ymaps.geocode("Мытищи, Олимпийский проспект вл13с1кА ТЦ Фрегат");
        myGeocoder.then(function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            myMap.geoObjects
                .add(new ymaps.Placemark(coordinates, {
                    balloonContent: 'г. Мытищи, Олимпийский проспект вл13с1кА ТЦ Фрегат'
                }));
        });

    }