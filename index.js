const app = new Vue({
	el: '#app',
	data: {
		activeIndex: '1',
		activeIndex2: '1',
		urls: [
			'https://c.wallhere.com/photos/b6/25/AI_art_rabbits_Easter_forest-2231178.jpg!d',
			'https://c.wallhere.com/photos/c1/82/AI_art_city_skyline_cyberpunk_science_fiction_aliens_illustration_city_lights-2231334.jpg!d',
			'https://c.wallhere.com/photos/eb/1b/AI_art_synthwave_sports_car_driving_sunset_desert-2230554.jpg!d',
			'https://c.wallhere.com/photos/3f/b6/AI_art_cyberpunk_city_street_neon-2230576.jpg!d',
		],
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		handleBannerClick(index) {
			this.$notify.info({
				title: '消息',
				message: `banner${index + 1} 由AI生成 来源：wallhaven`,
			});
		},
	},
});
