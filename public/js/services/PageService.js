var PageService = function () {
    this.initialize = function() { 
	}
    this.findFile = function (name) {
		var deferred = $.Deferred();
		var fileName = './files/' + name + '.html';	
		var pagefile = {
			"name": name, 
			"title":"Introduction", 
			"description": "What God has done for you.",
			"file": fileName, 
		 };
			
		$.ajax({url: pagefile.file, success: function(result){
			pagefile.text = result;
			deferred.resolve(pagefile);
		 }});
       
        return deferred.promise();
    }
}




