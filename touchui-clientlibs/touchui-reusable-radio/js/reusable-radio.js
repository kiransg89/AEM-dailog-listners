(function () {
    var getToggleElement = function (elementId) {
            var el = $(".cq-dialog [data-id='" + elementId + "']");
            if (el.length == 0) {
                // for pathbrowser and rich text field, granite:data attributes do not work, so we are using
                // css classes for them
                el = $(".cq-dialog ." + elementId);
                if(el.length == 0) {
					//for tabs
					el = $(".coral-TabPanel-tab[aria-controls='" + elementId + "']");
				}
            }
            return el.closest(".coral-Form-fieldwrapper").addBack(el);
        },
        toggle = function (el) {
            var showIds = $(el).attr("data-show"),
                hideIds = $(el).attr("data-hide");
            if (!_.isUndefined(showIds)) {
                showIds.split(",").forEach(function (showId) {
                    var el = getToggleElement(showId).show();
                    el.find(".touchui-required-fields").attr("aria-required", "true");
                    el.find(".touchui-required-fields").find("input").attr("aria-required", "true");                    
					el.find(".touchui-required-fields").attr("aria-invalid", "true");
                });
            }
            if (!_.isUndefined(hideIds)) {
                hideIds.split(",").forEach(function (hideId) {
                    var el = getToggleElement(hideId).hide();
                    el.find(".touchui-required-fields").attr("aria-required", "false");
                    el.find(".touchui-required-fields").find("input").attr("aria-required", "false");
                    el.find(".touchui-required-fields").removeAttr("required");
					el.find(".touchui-required-fields").attr("aria-invalid", "false");
                    el.find(".touchui-required-fields").removeAttr("invalid");
                });
            }
        },
		checkToggle = function (el) {
			var isChecked = $(el).attr("checked") === "checked" ? true : false
            var showIds = $(el).attr("data-showoncheckbox");
			if(isChecked) {
				if (!_.isUndefined(showIds)) {
					showIds.split(",").forEach(function (showId) {
						var el = getToggleElement(showId).show();
                        el.find(".touchui-required-fields").attr("aria-required", "true");
                        el.find(".touchui-required-fields").find("input").attr("aria-required", "true");
					});
				}
			} else {
				if (!_.isUndefined(showIds)) {
					showIds.split(",").forEach(function (showId) {
						var el = getToggleElement(showId).hide();
                        el.find(".touchui-required-fields").attr("aria-required", "false");
                        el.find(".touchui-required-fields").find("input").attr("aria-required", "false");
					});
				}
			}
        },
        radioToggle = function ($el) {
            $el.each(function () {
                var $this = $(this);
                //same as onLoad so that relevant radio options is checked and works likewise.
                if ($this.attr("checked") != null) {
                    toggle($this);
                }
                if ($this.data("radio-toggle") == null) {
                    $this.data("radio-toggle", "enabled");
                } else {
                    return;
                }
                $this.change(function () {
                    toggle($this);
                });
            });
        },
        checkboxToggle = function ($el) {
				$el.each(function () {
					var $this = $(this);
					//var $this = $("coral-checkbox[data-usecheckbox]");
					//same as onLoad so that relevant checkbox options is checked and works likewise.
					checkToggle($this);
					$this.change(function () {
						checkToggle($this);
					});
				});
        };

    $(document).on("foundation-contentloaded", function (e) {
        // if there is already an inital value make sure the according target element becomes visible
        radioToggle($("coral-radio[data-toggle]", e.target));
		checkboxToggle($("coral-checkbox[data-usecheckbox]", e.target));        
    });
}());
