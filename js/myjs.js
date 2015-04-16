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

function loginOnSubmit(){
	var query = $('#username').val();
	var filter_query = query;
	if(query!=filterXSS(filter_query)){
		alert('XSS performed');
//		$('#username').val(filterXSS(filter_query));
	}
	return true;
}

function registerCheck(){
	var query = $('#username').val();
	var filter_query = query;
	if(query!=filterXSS(filter_query)){
		alert('XSS performed in Username Field');
		return false;
	}

	query = $('#firstname').val();
	filter_query = query;
	if(query!=filterXSS(filter_query)){
		alert('XSS performed in Firstname Field');
		return false;
	}

	query = $('#lastname').val();
	filter_query = query;
	if(query!=filterXSS(filter_query)){
		alert('XSS performed in Lastname Field');
		return false;
	}
	return true;
}
