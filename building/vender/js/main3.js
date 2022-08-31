let vm = new Vue({
	el: '#app',
	components: {
		search,
		permission,
		log,
		auto,
		Apply,
		applyusecheck,
		person,
		Apply2,
		Apply3
	},
	data() {
		return {
			headers: [
				{ text: '申請人', align: 'start', sortable: false, value: 'name', },
				{ text: '地段', value: 'place' },
				{ text: '地段號碼', value: 'placeNum' },
				{ text: '收件日期', value: 'date' },
				{ text: '收件編號', value: 'getNum' },
				{ text: '操作', value: 'actions', sortable: false },
			],
		}
	},

})


