(function (document, $, Coral) {
    "use strict";
    $(document).on("foundation-contentloaded", function (e) {
        $(".cmp-list__editor coral-select.cq-dialog-dropdown-showhide", e.target).each(function (i, element) {
            var target = $(element).data("cqDialogDropdownShowhideTarget");
            if (target) {
                Coral.commons.ready(element, function (component) {
                    showHide(component, target);
                    component.on("change", function () {
                        showHide(component, target);
                    });
                });
            }
        });
        showHide($(".cq-dialog-dropdown-showhide", e.target));
    });

    function showHide(component, target) {
		if(typeof component.selectedItem != "undefined" && component.selectedItem != null){
			var value = component.selectedItem.className;
			$(target).not(".hide").addClass("hide");
			$(target).find(".touchui-required-fields").attr("aria-required", "false");
			$(target).find(".touchui-required-fields").removeAttr("required");
			$(target).find(".touchui-required-fields").removeAttr("data-cq-fileupload-required");
			$(target).filter("[data-showhidetargetvalue='" + value + "']").removeClass("hide");
			$(target).filter("[data-showhidetargetvalue='" + value + "']").find(".touchui-required-fields").attr("aria-required", "true");
			$(target).filter("[data-showhidetargetvalue='" + value + "']").find(".touchui-required-fields").attr("required", "true");
			$(target).filter("[data-showhidetargetvalue='" + value + "']").find(".touchui-required-fields").attr("data-cq-fileupload-required", "");
            var tfilter = $(target).filter("[data-showhidetargetvalue='" + value + "']");
             $($(tfilter).find("coral-radio[data-toggle]")).each( function (index,value){
                var radioElement = $(value).attr("checked");
                if(typeof radioElement != undefined && radioElement == 'checked'){
                	var el = $(".coral--light [data-id='" + $(value).attr("value") + "']");
                	var selectedElement = el.closest(".coral-Form-fieldwrapper").addBack(el);
                    $(selectedElement).find(".touchui-required-fields").attr("aria-required", "true");
                    $(selectedElement).find(".touchui-required-fields").attr("aria-invalid", "true");                    
                } else {
                	var el = $(".coral--light [data-id='" + $(value).attr("value") + "']");
                	var selectedElement = el.closest(".coral-Form-fieldwrapper").addBack(el);
                    $(selectedElement).find(".touchui-required-fields").attr("aria-required", "false");
                    $(selectedElement).find(".touchui-required-fields").removeAttr("required");
                    $(selectedElement).find(".touchui-required-fields").attr("aria-invalid", "false");
                    $(selectedElement).find(".touchui-required-fields").removeAttr("invalid");
                }
                })
		}
    }

})(document, Granite.$, Coral);
