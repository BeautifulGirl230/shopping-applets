<template>
	<view class="goods_detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key="index" autoplay="true">
				<image :src="item.src" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>${{ detailInfo.sell_price }}</text>
				<text>${{ detailInfo.market_price }}</text>
			</view>
			<view class="goods_name">{{ detailInfo.title }}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{ detailInfo.goods_no }}</view>
			<view>库存：{{ detailInfo.stock_quantity }}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" 
						   :options="options" 
						   :buttonGroup="buttonGroup" 
						   @click="onClick" 
						   @buttonClick="buttonClick" />
		</view>	
	</view>
</template>

<script>
	import {
		getCartId,
		getDetailInfo,
		getDetailContent,
	} from '../../util/api.js';
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			uniGoodsNav,
		},
		data() {
			return {
				id: 0,
				swipers: [],
				detailInfo: {},
				content: '',
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#9496ff',
					infoColor: "#FFF"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}]
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getDetailDate();
		},
		methods: {
			async getDetailDate() {
				const res = await this.$myRequest(getCartId(this.id));
				this.swipers = res.data.message;
				
				const res1 = await this.$myRequest(getDetailInfo(this.id));
				this.detailInfo = res1.data.message[0];
				
				const res2 = await this.$myRequest(getDetailContent(this.id));
				this.content = res2.data.message[0].content;
			},
			to_confirm_back:function(){
			    uni.showModal({
			        title:'确认要放弃付款吗？',
			        content:'可以再考虑一下喔！',
			        cancelText:'暂时放弃',
			        confirmText:'继续支付',
			        confirmColor:'#FF0000',
			        success: (res) => {
			            if(res.confirm){
							console.log('您已确认支付！！');
							this.util.to_nav_page('./payment/payment');
						}else if(res.cancel){
							console.log('您已取消支付！！');
						}
			        },
			    })
			},
			onClick(e) {
				console.log(e);
				if(e.index === 0){
					uni.showToast({
						title: `您已点击${e.content.text}`,
						icon: 'none',
						duration: 1500,
					})
				}else if(e.index === 1){
					uni.showToast({
						title: `您已点击${e.content.text}`,
						icon: 'none',
						duration: 1500,
					})
				}else{
					uni.showToast({
						title: `您已点击${e.content.text}`,
						icon: 'none',
						duration: 1500,
						success: function(res){
							this.util.to_nav_page('../cart/cart');
						}
					})
				}
			},
			buttonClick(e) {
				if(e.index === 0){
					console.log('您已带点击加入购物车');
				}else{
					console.log('您已带点击立即购买');
					this.to_confirm_back();
				}
				
			}
		},
	}
</script>

<style lang="scss">
	swiper {
		height: 700rpx;

		image {
			height: 100%;
			width: 100%;
		}
	}

	.box1 {
		padding: 10px;

		.price {
			font-size: 35rpx;
			font-weight: 800;
			color: $uni-text-color-tabBar;
			line-height: 80rpx;

			text:nth-child(2) {
				color: #CCC;
				font-size: 28rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}

		.goods_name {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}

	.line {
		width: 750rpx;
		height: 10rpx;
		background-color: #EEE;
	}

	.box2 {
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}

	.box3 {
		padding-bottom: 100rpx;
		.tit {
			font-size: 32rpx;
			padding-left: 10px;
			border-bottom: 1px solid #EEE;
			line-height: 70rpx;
		}
		.content {
			padding: 10px;
			font-size: 28rpx;
			color: #333;

			// 这里设置从后台获取到的HTML数据样式
			/deep/ .gomeImgLoad {
				width: 750rpx;
				height: 0 auto;
			}
		}
	}
	.goods_nav{
		position: fixed;
		width: 100%;
		bottom: 0;
	}
</style>