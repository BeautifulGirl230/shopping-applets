<template>
	<view>
		<news-list :list="newsList" @itemClick="goDetail"></news-list>
	</view>
</template>

<script>
	import newsList from '../../components/news_item/news_item.vue';
	import { getList } from '../../util/api.js';
	export default {
		components:{
			newsList,
		},
		data() {
			return {
				newsList: [],
			}
		},
		onLoad() {
			this.getNews();
		},
		onPullDownRefresh() {
			// uni.stopPullDownRefresh();
			this.newsList = [];
			setTimeout(() => {
				this.getNews();
				uni.stopPullDownRefresh();
			},1000)
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest(getList);
				this.newsList = res.data.message;
		},
		goDetail(id){
			console.log(id);
			uni.navigateTo({
				url: '/pages/news-detail/news-detail?id=' + id,
			})
		}
	},
}
</script>

<style lang="scss">
	.news{
		.news_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid #B50E03;
			image{
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
				border: 1px solid #4CD964;
			}
			.right{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 15rpx;
				.tit{
					font-size: 30rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 30rpx ;
					}
				}
			}
		}
	}
</style>
