_tag_('jqtags.accord',function(accord){
	
	var jq = _module_("jQuery");
	
	jq("body").on("blur","jq-date input", function(e){
		if(editable){
			$tag = jq(e.target).closest('jq-date');
			if(changeValue($tag[0],e.target.value)){
				//date.trigger($tag[0],"input");
				//date.trigger($tag[0],"change");
			}
			editable = false;
		}
		return window.preventPropagation(e);
	});
	
	return  {
	    tagName: "jq-accord",
	    events: {
	    	"click jq-accord-title" : 'togglePane'
	    },
	    accessors: {
	        value: {
	            type: "string",
	            default : "",
	            onChange : "valueOnSet"
	        },
	        tabindex : {
	        	type : 'int',
	        	default : 0
	        }
	    },
	    attachedCallback: function () {
	    },
	    togglePane : function(e,target){
	    	var $section = jq(target).closest("jq-accord-section");
	    	var closed = $section.attr("closed");
	    	if(!closed){
	    		$section.attr("closed","closed");
	    	} else {
	    		$section.removeAttr("closed");
	    	}
	    }
	};
});