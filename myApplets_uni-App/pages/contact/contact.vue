<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：999-999-9990（点击拨打）</view>
			<view>联系地址：广东省深圳市****</view>
		</view>
		<map class="map" 
			 :longitude="longitude"
			 :latitude="latitude"
			 :markers="markers"
			 :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 113.979399,
				latitude: 22.540746,
				scale: 12,
				markers: [
					{
						longitude: 113.979399,
						latitude: 22.540746,
						iconPath: '../../static/logo.png',
						width: 30,
						height: 30,
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber: "999-999-9990",
				})
		}
	},
}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #EEE;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
