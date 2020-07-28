const url_path = 'http://localhost:8181';
function api (url,method,header = {},data){
	return uni.request({
		url: url_path + url,
		method,
		header,
		data
	})
}

function getReq(url,data){
	return api(url,'GET',data);
}

function postReq(url,data){
	return api(url,'POST',{},data);
}

export default{
	getReq,
	postReq
}