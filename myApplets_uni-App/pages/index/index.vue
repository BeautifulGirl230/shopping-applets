<template>
	<view class="home">
		<swiper indicator-dots circular autoplay="true">
			<swiper-item v-for="item in swipers" 
						 :key="item.id">
				<image :src='item.img'></image>
			</swiper-item>
		</swiper>
		<view class="nav">
			<view class="nav_item"
				  v-for="(item,index) in navs" 
				  :key="item.index"
				  @click="navItemClick(navs[index])">
				<view :class="item.icon"></view>
				<text>{{ item.title }}</text>
			</view>
		</view>
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<goods-list :goodsList="goods"
					    @goodsItemClick="goGoodsDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'
	import goodsDetail from '../goods-detail/goods-detail.vue'
	import { getCart,getGoods } from '../../util/api.js'
	export default {
		components:{
			goodsList,
			goodsDetail,
		},
		data() {
			return {
				swipers:[],
				goods:[],
				navs:[
					{
						icon: 'iconfont icon-ziyuan',
						title: '商品列表',
						path: '/pages/goods/goods',
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact',
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics',
					},
					{
						icon: 'iconfont icon-shipin',
						title: '热门视频',
						path: '/pages/videos/videos',
					}
				],
			}
		},
		onLoad() {
			this.getSwipers();
			this.getHotGoods();
		},
		methods: {
			//获取轮播图数据
			async getSwipers(){
				/* this.$myRequest(getCart).then((res) => {
					this.swipers = res.data.message;
				}) */
				// 由于它最终返回的是 Promise 可以用 qsync await 来简写
				const res = await this.$myRequest(getCart);
				this.swipers = res.data.message;
			},
			async getHotGoods(){
				const res = await this.$myRequest(getGoods);
				this.goods = res.data.message;
				// this.goods =  res.data.message.filter((basket) =>{
				// 	return basket.pageindex === 1;
				// });
			},
			navItemClick(urlPath) {
				console.log(urlPath);
				uni.navigateTo({
					url:urlPath.path
				})
			},
			// 跳转导航详情页面
			goGoodsDetail(id){
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id,
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav{
			display: flex;
			.nav_item{
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background-color: $uni-text-color-tabBar;
					border-radius: $uni-border-radius;
					margin: 10px auto;
					line-height: 120rpx;
					color: #FFFFFF;
					font-size: 50rpx;
				}
				.icon-tupian{
					font-size: 45rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods{
			background-color: #EEE;
			overflow: hidden;
			margin-top: 20rpx;
			.title{
				height: 50px;
				line-height: 50px;
				color: $uni-text-color-tabBar;
				text-align: center;
				letter-spacing: 20px;
				background-color: #FFFFFF;
				margin: 7rpx 0;
			}
		}
	}
</style>
