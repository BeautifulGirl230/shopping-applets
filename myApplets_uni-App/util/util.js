const util = {
	to_nav_page: function(page){
		uni.navigateTo({
			url: page
		});
	},
};

module.exports = {
	util: util,
}
