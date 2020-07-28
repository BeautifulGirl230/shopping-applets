<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="active === index ? 'active' : ''"
				  @click="leftClickHandle(index,item.id)"
				  v-for="(item,index) in cates"
				  :key="item.id">{{ item.title }}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData"
				  :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<view class="view_title">
					<text class="text">{{ item.title }}</text>
				</view>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	import { getPics,getPicsId } from '../../util/api.js'
	export default {
		data() {
			return {
				cates:[],
				active: 0,
				secondData:[],
			}
		},
		onLoad() {
			this.getPicsCate();
		},
		methods: {
			async getPicsCate(){
				 const res = await this.$myRequest(getPics)
				 this.cates = res.data.message
				 this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle(index,id){
				this.active = index;
				const res = await this.$myRequest(getPicsId(id))
				this.secondData = res.data.message
			},
			previewImg(current){
				const urls = this.secondData.map(item =>{
					return item.img_url;
				})
				console.log();
				uni.previewImage({
					urls,
					current
				})
			}
		}
	}
</script>

<style lang="scss">
	.pics{
		height: 100vh;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #EEE;
			view{
				height: 120rpx;
				line-height: 120rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #EEE;
			}
			.active{
				background-color: $uni-text-color-tabBar;
				color: #FFFFFF;
			}
		}
		.right{
			height: 100vh;
			width: 520rpx;
			background-color: #EEE;
			padding: 15rpx;
			margin: 0 auto;
			.item{
				background: #FFFFFF;
				border-radius: 15rpx;
				margin-bottom: 30rpx;
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 10rpx;
				}
				.view_title{
					padding: 10rpx 10rpx;
					.text{
						font-size: 30rpx;
						line-height: 60rpx;
					}
				}
			}
		}
	}
</style>
