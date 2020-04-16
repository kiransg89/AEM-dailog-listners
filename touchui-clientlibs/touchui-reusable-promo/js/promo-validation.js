(function($) {

    var REGEX_SELECTOR = "regex.eventpathvalidation",
        foundationReg = $(window).adaptTo("foundation-registry");


    foundationReg.register("foundation.validation.validator", {
        selector: "[data-foundation-validation='" + REGEX_SELECTOR + "']",
        validate: function(el) {
            if ($(el).is(":visible")) {
                var value = $(el).val();
                var flag = false;
				var type=$("[data-class='promo']").attr("data-promo");
                var errorMessage = 'The page you have selected does not match the type of promo';

                $.ajax({
                    type: "GET",
                    async: false,
                   url: "/libs/promopage.html?promo=" + type + "&pagepath=" + value,
                    success: function(result) {
                        var jsonResponse = $.parseJSON(result);
                        if (typeof(jsonResponse[0]) == 'undefined' || !jsonResponse[0].value) {
                            flag = true;
                            if (typeof(jsonResponse[0]) != 'undefined' && !jsonResponse[0].value) {
                                errorMessage = jsonResponse[0].message;
                            }
                        }
                    }
                });
                if (flag) {
                    return errorMessage;
                }
            }
        }
    });

}(jQuery));