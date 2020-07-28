import api from './config.js';

export default{
	getCart(data){
		return api.getReq('/api/getlunbo',data);
	}
}


// 页面调用方法
// 1. import api from '../../api/request.js';

/* 2. 
	* api.getCart().then((data) => {
	* 	const [error,res] = data;
	* 	if(res.data.status !== 0){
	* 		return uni.showToast({
	* 			title: "获取数据失败！！"
	* 		})
	* 	}
	* 	this.swipers = res.data.message;
	* })
	* */