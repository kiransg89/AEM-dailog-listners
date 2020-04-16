(function($) {

    var foundationReg = $(window).adaptTo("foundation-registry");

	foundationReg.register("foundation.validation.validator", {
        selector: ".vanity-path",
        validate: function(el) {
			var value = el.value;
			var duplicate = false;
            var arr = [];
				$(".vanity-path").each(function(){
					var value = $(this).val();
					if (arr.indexOf(value) == -1)
						arr.push(value);
					else
						return duplicate = true;
				});	
			if(!/^\/((.+?)\/)*[a-zA-Z0-9_-]+$/.test(value)){
				return Granite.I18n.get('Vanity URL must start with a slash and should not contain an extension like .html and must not end with a slash.');
			} else if(duplicate){
				return Granite.I18n.get("Vanity URL is already used.");
			}
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
