function toSubmit(){
	var query = $('#query2').val();
	var filter_query = query;
	if(query!=filterXSS(filter_query)){
		alert('XSS performed');
		$('#query2').val(filterXSS(filter_query));
	}
	return true;
}

function commentSubmit(){
	var query = $('#comment-box').val();
	var filter_query = query;
	if(query!=filterXSS(filter_query)){
		alert('XSS performed');
		$('#comment-box').val(filterXSS(filter_query));
	}
	return true;
}
