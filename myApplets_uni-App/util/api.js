// 轮播图接口
export const getCart = {
	// url: '/getlunbo.json',
	url: '/api/getlunbo',
}

// 获取详情轮播图:id
export function getCartId(id){
	const path = {
		url: '/api/getthumimages/' + id,
	};
	return path;
}

// 获取商品列表
export const getGoods = {
	url: '/api/getgoods?pageindex=1',
	// url: '/getgoods.json',
}

// 获取商品列表:page
export function getGoodsPage(page) {
	 const path = {
		url: '/api/getgoods?pageindex=' + page,
	 };
	 return path;
}

// 获取商品详情参数:ID
export function getDetailInfo(id) {
	 const path = {
		url: '/api/goods/getinfo/' + id,
		// url: '/getgoods.json',
	 };
	 return path;
}

// 获取商品内容参数:ID
export function getDetailContent(id) {
	 const path = {
		url: '/api/goods/getdesc/' + id,
	 };
	 return path;
}

// 获取图片分类
export const getPics = {
 	url: '/api/getimgcategory',
 }
 
 // 二级图片列表
 export function getPicsId(id) {
 	 const path = {
 		url: '/api/getimages/' + id,
 	 };
 	 return path;
 }
 
// 资讯列表
export const getList = {
  	url: '/api/getnewslist',
	// url: '../static/json/getnewslist.json'
 }
 
 // 资讯详情
 export function getNew(id){
	const path = {
		url: '/api/getnew/' + id,
	};
	return path;
}



 