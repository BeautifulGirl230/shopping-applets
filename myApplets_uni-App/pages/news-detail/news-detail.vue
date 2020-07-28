<template>
	<view class="news_detail">
		<text class="title">{{ newsDate[0].title }}</text>
		<view class="info">
			<text>发表时间：{{ newsDate[0].add_time }}</text>
			<text>浏览：{{ newsDate[0].click }}</text>
		</view>	
		<hr/>
		<view class="content">
			<rich-text :nodes="newsDate[0].content"></rich-text>
		</view>
	</view>
</template>

<script>
	import { getNew } from '../../util/api.js';
	export default {
		data() {
			return {
				id: 0,
				newsDate:{},
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail();
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRequest(getNew(this.id));
				this.newsDate = res.data.message;
			}
		}
	}
</script>

<style lang="scss">
	.news_detail{
		width: 670rpx;
		font-size: 30rpx;
		padding: 0 20px;
		.title{
			width: 100%;
			text-align: center;
			display: block;
			margin: 20rpx 0;
			font-weight: bolder;
		}
		.info{
			display: flex;
			justify-content: space-between;
			margin-bottom: 20rpx;
		}
		.content{
			margin-top: 20rpx;
		}
	}
</style>
