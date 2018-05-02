

jQuery(document).ready(function ($) {
   // "use strict";
   $('#box-warning').show();
   $('.closebox-war').click(function() {
	  $('#box-warning').hide();
   });

  $('#nav-log > li > a').click(function(){
    if ($(this).attr('class') != 'active'){
      $('#nav-log li ul').slideUp();
      $(this).next().slideToggle();
      $('#nav-log li a').removeClass('active');
      $(this).addClass('active');
    }
  });

    $("#getting-started")
        .countdown("2018/03/20", function (event) {
            $(this).html(event.strftime('<div class="day_holder"><span class="day">%D</span><br>Hari</div>' + '<div class="hour_holder"><span class="hour">%H</span><br>Jam</div>' + '<div class="minute_holder"><span class="minute">%M</span><br>Menit</div>' + '<div class="second_holder"><span class="second">%S</span><br>detik</div>'));
        });

	// ini untuk menu
$('.menu-mobile').hide();
$('.but-menu-mobile').click(function() {
	$('.menu-mobile').toggle();
});

//ini untuk galeri
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});




    //open navigation clicking the menu icon
    $('.more_info').on('click', function (event) {
        event.preventDefault();
        toggleNav(true);
    });
    //close the navigation
    $('.close_more_info, .cd-overlay').on('click', function (event) {
        event.preventDefault();
        toggleNav(false);
    });
    //select a new section
    $('.cd-nav li').on('click', function (event) {
        event.preventDefault();
        var target = $(this),
                //detect which section user has chosen
                sectionTarget = target.data('menu');
        if (!target.hasClass('cd-selected')) {
            //if user has selected a section different from the one alredy visible
            //update the navigation -> assign the .cd-selected class to the selected item
            target.addClass('cd-selected').siblings('.cd-selected').removeClass('cd-selected');
            //load the new section
            loadNewContent(sectionTarget);
        } else {
            // otherwise close navigation
            toggleNav(false);
        }
    });
    //email validation for subscribe
    $("#mc-embedded-subscribe-form").on('submit', function (event) {
        $(".error_message span").remove();
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        if (!pattern.test($("input[name='EMAIL']").val())) {
            $("<span>Please write correct email</span>").hide().appendTo(".error_message").fadeIn(300).delay(3000).fadeOut(300).queue(function () {
                $(this).remove();
            });
            event.preventDefault();
        }
    });

    function toggleNav(bool) {
        $('.more_info_container, .cd-overlay').toggleClass('is-visible', bool);
        $('.main_details').toggleClass('scale-down', bool);
    }

    function loadNewContent(newSection) {
        //create a new section element and insert it into the DOM
        var section = $('<section class="cd-section ' + newSection + '"></section>').appendTo($('main'));
        //load the new content from the proper html file
        section.load(newSection + '.html .cd-section > *', function (event) {
            //add the .cd-selected to the new section element -> it will cover the old one
            section.addClass('cd-selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                //close navigation
                toggleNav(false);
            });
            section.prev('.cd-selected').removeClass('cd-selected');
        });

        $('main').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
            //once the navigation is closed, remove the old section from the DOM
            section.prev('.cd-section').remove();
        });

        if ($('.no-csstransitions').length > 0) {
            //if browser doesn't support transitions - don't wait but close navigation and remove old item
            toggleNav(false);
            section.prev('.cd-section').remove();
        }
    }
});
// more info cubes
$(window).on('load', function () {
    $('.services_cube_wrapper').on({mouseenter: function () {
            $(this).removeClass('show_front');
            $(this).addClass('show-bottom')
        }, mouseleave: function () {
            $(this).removeClass('show-bottom');
            $(this).addClass('show_front')
        }});
});
