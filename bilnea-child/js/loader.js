var b_f_load = 0;
document.onreadystatechange = function(e) {
	if (document.readyState=="interactive") {
		var all = document.getElementsByTagName("*");
		for (var i=0, max=all.length; i < max; i++) {
			set_ele(all[i]);
		}
	}
}

function check_element(ele) {
	var all = document.getElementsByTagName("*");
	var totalele=all.length;
	var per_inc=100/all.length;

	if (jQuery(ele).on()) {
		b_f_load = (Math.ceil((per_inc+b_f_load)*10000))/10000;
		if (b_f_load >= 100) {
			jQuery('#loader-wrap').fadeOut(100, function() {
				jQuery('#loader-wrap').remove();
			})
		}
	} else {
		set_ele(ele);
	}
}

function set_ele(set_element) {
	check_element(set_element);
}
