(function($) {

    var foundationReg = $(window).adaptTo("foundation-registry");

	foundationReg.register("foundation.validation.validator", {
        selector: "[data-foundation-validation='max-tags']",
        validate: function(el) {
			var $tagList = $(el).find(".coral3-TagList");

            return Granite.I18n.get($tagList.find(".coral3-Tag").length >= 4
                            ? "Max exceeded, allowed : " + 3 : undefined);
            
        },
		show: function (el, message, ctx) {

				$(el).closest(".coral-Form-field").adaptTo("foundation-field").setInvalid(true);
        		ctx.next(); 

			  },
		clear: function (el, ctx) {
			    $(el).closest(".coral-Form-field").adaptTo("foundation-field").setInvalid(false);
        		ctx.next(); 
			  }
		
    });

}(jQuery));