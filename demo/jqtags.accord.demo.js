_spam_('jqtags.accord.demo',function(demo,_demo_){
	
	utils.require(":jqtags/jq-accord");
	
	_demo_._init_ = function(){
		var self = this;
		this.model({
			dateValue : ""	
		});
		this.load({
			src : "test.html"
		}).done(function(){
		});
	};
	
});