(function (document, $) {
    "use strict";
 
    $(document).on("click", ".granite-form-saveactivator", function (e) {
        e.stopPropagation();       

        var $form = $(this).closest("form.foundation-form");
        var richText = $("div[data-wrapperClass='description-count-validation']");
        var richTextValue = richText.val();

        var linebrkcount = (richTextValue.match(/<p>&nbsp;</g) || []);
        var tmp = richText.text();
        tmp = tmp.replace(/(\r\n|\n|\r)/gm, "");
        var count = tmp.length - linebrkcount.length;



		if(count > 300) {
			e.preventDefault();
			var fui = $(window).adaptTo("foundation-ui");
          	var message = "You have too many characters in the textarea, please delete some characters! <br /> You are only allowed 300 characters."

        	fui.prompt("Max characters exceeded!", message, "notice", [{
                id: "OK"
                , text: "OK"
                , className: "coral-Button"
            }]);
       }
    });
})(document, Granite.$);