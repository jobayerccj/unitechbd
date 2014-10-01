

var s5_hor_acc_current_slide = "1";
var duration = s5_hor_acc_speed;
var easing = 'easeInOutCubic';
var s5_hor_acc_current_enable = "enabled";

function s5_hor_acc_disable() {
	s5_hor_acc_current_enable = "disabled";
}
function s5_hor_acc_enable() {
	s5_hor_acc_current_enable = "enabled";
}

function s5_hor_acc_rotate_slides() {

	if (s5_hor_acc_cycle == "yes") {
	if (s5_hor_acc_current_enable == "enabled") {
	
		if (s5_hor_acc_current_slide == "1") {
			if (document.getElementById("s5_hor_acc_second")) {
				s5_hor_acc_open_2();
			}
			else {
				s5_hor_acc_open_1();
			}
		}
		
		else if (s5_hor_acc_current_slide == "2") {
			if (document.getElementById("s5_hor_acc_third")) {
				s5_hor_acc_open_3();
			}
			else {
				s5_hor_acc_open_1();
			}
		}
		
		else if (s5_hor_acc_current_slide == "3") {
			if (document.getElementById("s5_hor_acc_fourth")) {
				s5_hor_acc_open_4();
			}
			else {
				s5_hor_acc_open_1();
			}
		}
		
		else if (s5_hor_acc_current_slide == "4") {
			if (document.getElementById("s5_hor_acc_fifth")) {
				s5_hor_acc_open_5();
			}
			else {
				s5_hor_acc_open_1();
			}
		}
		
		else if (s5_hor_acc_current_slide == "5") {
			if (document.getElementById("s5_hor_acc_sixth")) {
				s5_hor_acc_open_6();
			}
			else {
				s5_hor_acc_open_1();
			}
		}
		
		else if (s5_hor_acc_current_slide == "6") {
			if (document.getElementById("s5_hor_acc_seventh")) {
				s5_hor_acc_open_7();
			}
			else {
				s5_hor_acc_open_1();
			}
		}
		
		else if (s5_hor_acc_current_slide == "7") {
			if (document.getElementById("s5_hor_acc_eighth")) {
				s5_hor_acc_open_8();
			}
			else {
				s5_hor_acc_open_1();
			}
		}
		
		else if (s5_hor_acc_current_slide == "8") {
			if (document.getElementById("s5_hor_acc_ninth")) {
				s5_hor_acc_open_9();
			}
			else {
				s5_hor_acc_open_1();
			}
		}
		
		else if (s5_hor_acc_current_slide == "9") {
			if (document.getElementById("s5_hor_acc_tenth")) {
				s5_hor_acc_open_10();
			}
			else {
				s5_hor_acc_open_1();
			}
		}
		
		else if (s5_hor_acc_current_slide == "10") {
				s5_hor_acc_open_1();
		}
		
	}
	
	window.setTimeout('s5_hor_acc_rotate_slides()',s5_hor_acc_transition);
	
	}
}

jQuery(document).ready(function() {

	if (s5_hor_acc_def_slide == "1") {
		s5_hor_acc_open_1();
	}
	else if (s5_hor_acc_def_slide == "2") {
		if (document.getElementById("s5_hor_acc_second")) {
			s5_hor_acc_open_2();
		}
	}
	else if (s5_hor_acc_def_slide == "3") {
		if (document.getElementById("s5_hor_acc_third")) {
			s5_hor_acc_open_3();
		}
	}
	else if (s5_hor_acc_def_slide == "4") {
		if (document.getElementById("s5_hor_acc_fourth")) {
			s5_hor_acc_open_4();
		}
	}
	else if (s5_hor_acc_def_slide == "5") {
		if (document.getElementById("s5_hor_acc_fifth")) {
			s5_hor_acc_open_5();
		}
	}
	else if (s5_hor_acc_def_slide == "6") {
		if (document.getElementById("s5_hor_acc_sixth")) {
			s5_hor_acc_open_6();
		}
	}
	else if (s5_hor_acc_def_slide == "7") {
		if (document.getElementById("s5_hor_acc_seventh")) {
			s5_hor_acc_open_7();
		}
	}
	else if (s5_hor_acc_def_slide == "8") {
		if (document.getElementById("s5_hor_acc_eighth")) {
			s5_hor_acc_open_8();
		}
	}
	else if (s5_hor_acc_def_slide == "9") {
		if (document.getElementById("s5_hor_acc_ninth")) {
			s5_hor_acc_open_9();
		}
	}
	else if (s5_hor_acc_def_slide == "10") {
		if (document.getElementById("s5_hor_acc_tenth")) {
			s5_hor_acc_open_10();
		}
	}

	jQuery("div.s5_hor_acc").addClass('s5_hor_acc-js');
	jQuery("div#s5_hor_acc_wrapper").addClass('s5_hor_acc_wrapper-js');
	window.setTimeout('s5_hor_acc_rotate_slides()',s5_hor_acc_transition);
	
});

    function s5_hor_acc_open_1() {
		s5_hor_acc_current_slide = "1";
        jQuery("#s5_hor_acc_first").animate({"left": "0em"},
            {queue:false, duration:duration, easing:easing});
        
        jQuery("#s5_hor_acc_second").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter) * 136.42) + "%"},
          {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter ) * 135.52) + "%"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter ) * 134.62) + "%"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 4) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 5) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 6) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 7) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 8) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 9) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		
		
		jQuery("#s5_link_wrap1").css({"color": "#FFFFFF"});
                
		jQuery("#s5_link_wrap2").css({"color": "#050505"});
		jQuery("#s5_link_wrap3").css({"color": "#050505"});
		jQuery("#s5_link_wrap4").css({"color": "#050505"});
		jQuery("#s5_link_wrap5").css({"color": "#050505"});
		jQuery("#s5_link_wrap6").css({"color": "#050505"});
		jQuery("#s5_link_wrap7").css({"color": "#050505"});
		jQuery("#s5_link_wrap8").css({"color": "#050505"});
		jQuery("#s5_link_wrap9").css({"color": "#050505"});
		jQuery("#s5_link_wrap10").css({"color": "#050505"});
    }
    function s5_hor_acc_open_2() {
		s5_hor_acc_current_slide = "2";
        jQuery("#s5_hor_acc_first").animate({"left": "0px"},
             {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_second").animate({"left": "40px"},
             {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 2) * -197) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 3) * -434) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 4) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 5) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 6) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 7) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 8) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 9) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_first").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_second").css({"background-image": "url(" + s5_hor_acc_url + "images/slide2.png)"});
		jQuery("#s5_hor_acc_third").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fourth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fifth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_sixth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_seventh").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_eight").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_ninth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_tenth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		
		jQuery("#s5_link_wrap1").css({"color": "#050505"});
		jQuery("#s5_link_wrap2").css({"color": "#FFFFFF"});
		jQuery("#s5_link_wrap3").css({"color": "#050505"});
		jQuery("#s5_link_wrap4").css({"color": "#050505"});
		jQuery("#s5_link_wrap5").css({"color": "#050505"});
		jQuery("#s5_link_wrap6").css({"color": "#050505"});
		jQuery("#s5_link_wrap7").css({"color": "#050505"});
		jQuery("#s5_link_wrap8").css({"color": "#050505"});
		jQuery("#s5_link_wrap9").css({"color": "#050505"});
		jQuery("#s5_link_wrap10").css({"color": "#050505"});
    }
    function s5_hor_acc_open_3() {
		s5_hor_acc_current_slide = "3";
        jQuery("#s5_hor_acc_first").animate({"left": "0px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_second").animate({"left": "40px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": "80px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 3) * -434) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 4) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 5) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 6) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 7) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 8) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 9) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_first").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_second").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_third").css({"background-image": "url(" + s5_hor_acc_url + "images/slide3.png)"});
		jQuery("#s5_hor_acc_fourth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fifth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_sixth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_seventh").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_eight").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_ninth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_tenth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		
		jQuery("#s5_link_wrap1").css({"color": "#050505"});
		jQuery("#s5_link_wrap2").css({"color": "#050505"});
		jQuery("#s5_link_wrap3").css({"color": "#FFFFFF"});
		jQuery("#s5_link_wrap4").css({"color": "#050505"});
		jQuery("#s5_link_wrap5").css({"color": "#050505"});
		jQuery("#s5_link_wrap6").css({"color": "#050505"});
		jQuery("#s5_link_wrap7").css({"color": "#050505"});
		jQuery("#s5_link_wrap8").css({"color": "#050505"});
		jQuery("#s5_link_wrap9").css({"color": "#050505"});
		jQuery("#s5_link_wrap10").css({"color": "#050505"});
	}
	function s5_hor_acc_open_4() {
		s5_hor_acc_current_slide = "4";
        jQuery("#s5_hor_acc_first").animate({"left": "0px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_second").animate({"left": "40px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": "80px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": "120px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 4) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 5) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 6) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 7) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 8) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 9) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_first").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_second").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_third").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fourth").css({"background-image": "url(" + s5_hor_acc_url + "images/slide4.png)"});
		jQuery("#s5_hor_acc_fifth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_sixth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_seventh").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_eight").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_ninth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_tenth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		
		jQuery("#s5_link_wrap1").css({"color": "#050505"});
		jQuery("#s5_link_wrap2").css({"color": "#050505"});
		jQuery("#s5_link_wrap3").css({"color": "#050505"});
		jQuery("#s5_link_wrap4").css({"color": "#FFFFFF"});
		jQuery("#s5_link_wrap5").css({"color": "#050505"});
		jQuery("#s5_link_wrap6").css({"color": "#050505"});
		jQuery("#s5_link_wrap7").css({"color": "#050505"});
		jQuery("#s5_link_wrap8").css({"color": "#050505"});
		jQuery("#s5_link_wrap9").css({"color": "#050505"});
		jQuery("#s5_link_wrap10").css({"color": "#050505"});
	}
	function s5_hor_acc_open_5() {
		s5_hor_acc_current_slide = "5";
        jQuery("#s5_hor_acc_first").animate({"left": "0px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_second").animate({"left": "40px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": "80px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": "120px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": "160px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 5) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 6) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 7) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 8) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 9) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_first").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_second").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_third").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fourth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fifth").css({"background-image": "url(" + s5_hor_acc_url + "images/slide5.png)"});
		jQuery("#s5_hor_acc_sixth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_seventh").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_eight").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_ninth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_tenth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		
		jQuery("#s5_link_wrap1").css({"color": "#050505"});
		jQuery("#s5_link_wrap2").css({"color": "#050505"});
		jQuery("#s5_link_wrap3").css({"color": "#050505"});
		jQuery("#s5_link_wrap4").css({"color": "#050505"});
		jQuery("#s5_link_wrap5").css({"color": "#FFFFFF"});
		jQuery("#s5_link_wrap6").css({"color": "#050505"});
		jQuery("#s5_link_wrap7").css({"color": "#050505"});
		jQuery("#s5_link_wrap8").css({"color": "#050505"});
		jQuery("#s5_link_wrap9").css({"color": "#050505"});
		jQuery("#s5_link_wrap10").css({"color": "#050505"});
	}
	function s5_hor_acc_open_6() {
		s5_hor_acc_current_slide = "6";
        jQuery("#s5_hor_acc_first").animate({"left": "0px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_second").animate({"left": "40px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": "80px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": "120px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": "160px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": "200px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 6) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 7) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 8) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 9) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_first").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_second").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_third").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fourth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fifth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_sixth").css({"background-image": "url(" + s5_hor_acc_url + "images/slide6.png)"});
		jQuery("#s5_hor_acc_seventh").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_eight").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_ninth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_tenth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		
		jQuery("#s5_link_wrap1").css({"color": "#050505"});
		jQuery("#s5_link_wrap2").css({"color": "#050505"});
		jQuery("#s5_link_wrap3").css({"color": "#050505"});
		jQuery("#s5_link_wrap4").css({"color": "#050505"});
		jQuery("#s5_link_wrap5").css({"color": "#050505"});
		jQuery("#s5_link_wrap6").css({"color": "#FFFFFF"});
		jQuery("#s5_link_wrap7").css({"color": "#050505"});
		jQuery("#s5_link_wrap8").css({"color": "#050505"});
		jQuery("#s5_link_wrap9").css({"color": "#050505"});
		jQuery("#s5_link_wrap10").css({"color": "#050505"});
	}
	function s5_hor_acc_open_7() {
		s5_hor_acc_current_slide = "7";
        jQuery("#s5_hor_acc_first").animate({"left": "0px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_second").animate({"left": "40px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": "80px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": "120px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": "160px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": "200px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": "240px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 7) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 8) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 9) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_first").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_second").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_third").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fourth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fifth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_sixth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_seventh").css({"background-image": "url(" + s5_hor_acc_url + "images/slide7.png)"});
		jQuery("#s5_hor_acc_eight").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_ninth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_tenth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		
		jQuery("#s5_link_wrap1").css({"color": "#050505"});
		jQuery("#s5_link_wrap2").css({"color": "#050505"});
		jQuery("#s5_link_wrap3").css({"color": "#050505"});
		jQuery("#s5_link_wrap4").css({"color": "#050505"});
		jQuery("#s5_link_wrap5").css({"color": "#050505"});
		jQuery("#s5_link_wrap6").css({"color": "#050505"});
		jQuery("#s5_link_wrap7").css({"color": "#FFFFFF"});
		jQuery("#s5_link_wrap8").css({"color": "#050505"});
		jQuery("#s5_link_wrap9").css({"color": "#050505"});
		jQuery("#s5_link_wrap10").css({"color": "#050505"});
	}
	function s5_hor_acc_open_8() {
		s5_hor_acc_current_slide = "8";
        jQuery("#s5_hor_acc_first").animate({"left": "0px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_second").animate({"left": "40px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": "80px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": "120px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": "160px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": "200px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": "240px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": "280px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 8) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 9) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_first").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_second").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_third").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fourth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fifth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_sixth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_seventh").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_eight").css({"background-image": "url(" + s5_hor_acc_url + "images/slide8.png)"});
		jQuery("#s5_hor_acc_ninth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_tenth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		
		jQuery("#s5_link_wrap1").css({"color": "#050505"});
		jQuery("#s5_link_wrap2").css({"color": "#050505"});
		jQuery("#s5_link_wrap3").css({"color": "#050505"});
		jQuery("#s5_link_wrap4").css({"color": "#050505"});
		jQuery("#s5_link_wrap5").css({"color": "#050505"});
		jQuery("#s5_link_wrap6").css({"color": "#050505"});
		jQuery("#s5_link_wrap7").css({"color": "#050505"});
		jQuery("#s5_link_wrap8").css({"color": "#FFFFFF"});
		jQuery("#s5_link_wrap9").css({"color": "#050505"});
		jQuery("#s5_link_wrap10").css({"color": "#050505"});
	}
	function s5_hor_acc_open_9() {
		s5_hor_acc_current_slide = "9";
        jQuery("#s5_hor_acc_first").animate({"left": "0px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_second").animate({"left": "40px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": "80px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": "120px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": "160px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": "200px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": "240px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": "280px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": "320px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": s5_hor_acc_width - ((s5_hor_acc_module_counter - 9) * 40) + "px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_first").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_second").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_third").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fourth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fifth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_sixth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_seventh").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_eight").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_ninth").css({"background-image": "url(" + s5_hor_acc_url + "images/slide9.png)"});
		jQuery("#s5_hor_acc_tenth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		
		jQuery("#s5_link_wrap1").css({"color": "#050505"});
		jQuery("#s5_link_wrap2").css({"color": "#050505"});
		jQuery("#s5_link_wrap3").css({"color": "#050505"});
		jQuery("#s5_link_wrap4").css({"color": "#050505"});
		jQuery("#s5_link_wrap5").css({"color": "#050505"});
		jQuery("#s5_link_wrap6").css({"color": "#050505"});
		jQuery("#s5_link_wrap7").css({"color": "#050505"});
		jQuery("#s5_link_wrap8").css({"color": "#050505"});
		jQuery("#s5_link_wrap9").css({"color": "#FFFFFF"});
		jQuery("#s5_link_wrap10").css({"color": "#050505"});
	}
	function s5_hor_acc_open_10() {
		s5_hor_acc_current_slide = "10";
        jQuery("#s5_hor_acc_first").animate({"left": "0px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_second").animate({"left": "40px"},
            {queue:false, duration:duration, easing:easing});
        jQuery("#s5_hor_acc_third").animate({"left": "80px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fourth").animate({"left": "120px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_fifth").animate({"left": "160px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_sixth").animate({"left": "200px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_seventh").animate({"left": "240px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_eighth").animate({"left": "280px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_ninth").animate({"left": "320px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_tenth").animate({"left": "320px"},
            {queue:false, duration:duration, easing:easing});
		jQuery("#s5_hor_acc_first").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_second").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_third").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fourth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_fifth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_sixth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_seventh").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_eight").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_ninth").css({"background-image": "url(" + s5_hor_acc_url + "images/inactive.png)"});
		jQuery("#s5_hor_acc_tenth").css({"background-image": "url(" + s5_hor_acc_url + "images/slide10.png)"});
		
		jQuery("#s5_link_wrap1").css({"color": "#050505"});
		jQuery("#s5_link_wrap2").css({"color": "#050505"});
		jQuery("#s5_link_wrap3").css({"color": "#050505"});
		jQuery("#s5_link_wrap4").css({"color": "#050505"});
		jQuery("#s5_link_wrap5").css({"color": "#050505"});
		jQuery("#s5_link_wrap6").css({"color": "#050505"});
		jQuery("#s5_link_wrap7").css({"color": "#050505"});
		jQuery("#s5_link_wrap8").css({"color": "#050505"});
		jQuery("#s5_link_wrap9").css({"color": "#050505"});
		jQuery("#s5_link_wrap10").css({"color": "#FFFFFF"});
	}
	