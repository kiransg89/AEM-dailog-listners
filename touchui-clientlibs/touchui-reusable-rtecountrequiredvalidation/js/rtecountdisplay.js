(function (document, $) {
    "use strict";

   $(document).on("foundation-contentloaded", function () {       

		$("div[data-wrapperClass='description-count-validation']").on("focus",function(){
			$('coral-buttongroup.rte-toolbar').append('<button is="coral-button" class="desc-count coral3-Button rte-toolbar-item disabled coral3-ButtonGroup-item is-disabled coral3-Button--quiet hide" size="M" variant="quiet" type="button" tabindex="-1" aria-checked="false" role="checkbox" style="color:black;font-weight:bold;"><coral-button-label class="count-label"></coral-button-label></button>');

            var txtlen = 0;
    		var maxchar = 300;

            $(this).bind("keydown keyup keypress", function (e) {
                var char_code = e.which;
                txtlen = $(this).text().length;

                $($('.desc-count')[0]).removeClass('hide');
                $($('.desc-count')[0]).addClass('show');

                $('.count-label').html(txtlen + '/' + maxchar); 

                if (!(txtlen < maxchar || char_code == 46 || char_code == 8)) return false;

                if (txtlen / maxchar >= 0 && txtlen / maxchar < 0.25) {
                   $($('.desc-count')[0]).css("color", "#008000");
                }
                else if (txtlen / maxchar >= 0.25 && txtlen / maxchar < 0.5) {
                    $($('.desc-count')[0]).css("color", "#cccc00");
                }
                else if (txtlen / maxchar >= 0.5 && txtlen / maxchar < 0.75) {
                    $($('.desc-count')[0]).css("color", "#ee7700");
                }
                else if (txtlen / maxchar >= 0.75) {
                    $($('.desc-count')[0]).css("color", "#FF0000");
                }
			});
		});
   });


})(document, Granite.$);
