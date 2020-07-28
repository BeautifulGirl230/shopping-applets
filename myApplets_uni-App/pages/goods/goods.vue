<template>
	<view class="goods_list">
		<goodsList :goodsList="goods"
				   @goodsItemClick="goDetail"></goodsList>
		<view class="isOver" v-if="flag">----我是有底线的----</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'
	import { getGoodsPage } from '../../util/api.js'
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				num: 1,
				pageindex: 1,
				goods:[],
				flag: false,
			}
		},
		onLoad(){
			this.getGoodsList();
		},
		onPullDownRefresh() {
			this.pageindex = 1;
			this.goods = [];
			this.flag = false;
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh();
				});
			},1000)
		},
		onReachBottom(){
			if(this.goods.length < this.pageindex * this.num * 10) return this.flag = true;
			console.log('触底了');
			this.pageindex++;
			this.getGoodsList();
			if(!this.flag){
				this.num++;
				this.pageindex = 1;
				this.flag = !this.flag;
				this.getGoodsList();
			}
		},
		methods: {
			async getGoodsList(callBack){
				const res = await this.$myRequest(getGoodsPage(this.pageindex))
				this.goods = [...this.goods,...res.data.message];
				// callBack && callBack();
			},
			goDetail(id){
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id,
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background: #EEE;
	}
	.isOver{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 28rpx;
	}
</style>
