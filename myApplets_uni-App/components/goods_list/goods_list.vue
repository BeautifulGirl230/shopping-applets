<template>
	<view class="goods_list">
		<view class="goods_item"
			  v-for="item in goodsList" 
			  :key="item.id"
			  @click="navigator(item.id)">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>${{ item.sell_price }}</text>
				<text>${{ item.market_price }}</text>
			</view>
			<view class="goods_name">{{ item.title }}</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			goodsList:{
				ytpe: Array,
				default: () => {
					return null
				}
			}
		},
		methods:{
			navigator(id){
				this.$emit('goodsItemClick',id);
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0 15rpx;
		.goods_item{
			background-color: #FFFFFF;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			image{
				width: 100%;
				display: block;
				margin: auot;
			}
			.price{
				color: $uni-text-color-tabBar;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				text:nth-child(2){
					color: #CCC;
					font-size: 28rpx;
					margin-left: 7rpx;
					text-decoration: line-through;
				}
			}
			.goods_name{
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10px;
			}
		}
	}
</style>
