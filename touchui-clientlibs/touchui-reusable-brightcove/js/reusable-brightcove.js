(function (document, $, ns) {
    "use strict";

    $(document).on("click", ".cq-dialog-submit", function (e) {
		if($("[aria-invalid='true']").length==0){
		   if ($('#ajaxDone').length > 0){
				return; 
			}            

			e.stopPropagation();
			e.preventDefault(); 

			$("input[name='./embedurl']").after('<coral-wait size="L" class="coral3-Wait coral3-Wait--large coral3-Wait--centered"></coral-wait>'); 
			var pagePathValue = window.location.pathname.replace("/editor.html/content/www","").replace(".html", "");
			var bcAccount = $("input[name='./bcAccount']").val();
			var videoSelect = $(".videoplayerid").attr("name");
			var videoId = $("input[name='" + videoSelect + "']").val();
			var videoType = "video";
			if($(".video").length === 1){
				videoType = "video";
			} else if($(".playlist").length===1) {
				videoType = "playlist";
			}
			
			var param = {
							pagepath : pagePathValue,
							accTitle : bcAccount,
							bcVideoorPlaylistId : videoId,
							videoType : videoType
						}			
			$.ajax({
					type: "GET",
					url: "/example/videoschema",
					data: param,
					success: function(data) {
								$("input[name='./thumbnailurl']").val(data.thumbnailURL);
								$("input[name='./uploaddate']").val(data.publishedDate);
								$("input[name='./duration']").val(data.length);
								$("input[name='./embedurl']").val(data.linkURL); 
								addHidden();				
							 },
					error: function(data) {
						addHidden();
					}						
				});

			function addHidden(){
				$('<input>').attr({
					type: 'hidden',
					id: 'ajaxDone'
								 }).appendTo('.cq-dialog');
					$(".cq-dialog-submit").click();
			}
		}
    });
})(document, Granite.$, Granite.author);