let vm = new Vue({
	el: '#app',
	vuetify: new Vuetify(),
	data: () => ({
		dialog: false,
		dialogDelete: false,
		headers: [
			{ text: '申請人', align: 'start', sortable: false, value: 'name' },
			{ text: '地段', value: 'place' },
			{ text: '地段號碼', value: 'placeNum' },
			{ text: '收件日期', value: 'date' },
			{ text: '收件編號', value: 'getNum' },
			{ text: '操作', value: 'actions', sortable: false },
		],
		desserts: [],
		editedIndex: -1,
		editedItem: {
			name: '',
			place: 0,
			placeNum: 0,
			date: 0,
			getNum: 0,

		},
		defaultItem: {
			name: '',
			place: '',
			placeNum: 0,
			date: 0,
			getNum: 0,
		},
	}),
	computed: {
		formTitle() {
			return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
		},
	},
	watch: {
		dialog(val) {
			val || this.close()
		},
		dialogDelete(val) {
			val || this.closeDelete()
		},
	},
	created() {
		this.initialize()
	},
	methods: {
		initialize() {
			this.desserts = [
				{
					name: '顏明南建築師事務所',
					place: '仙水段',
					placeNum: '03810000',
					date: '108 / 1 / 2',
					getNum: '1080012016',

				},
				{
					name: '鄒錦清',
					place: '東濱段',
					placeNum: '11230000',
					date: '108 / 1 / 2',
					getNum: '1080011714',

				},
				{
					name: '洪振平',
					place: '虎山段',
					placeNum: '08080001( ... 共 6 筆 )',
					date: '108 / 1 / 3',
					getNum: '1080012935',

				},
				{
					name: '江國競',
					place: '舊社段',
					placeNum: '01300000( ... 共 12 筆 )',
					date: '108 / 1 / 7',
					getNum: '1080015247',

				},
				{
					name: 'Jelly bean',
					place: '關東段',
					placeNum: '14990000( ... 共 2 筆 )',
					date: '108 / 1 / 8',
					getNum: '1080016359',

				},
				{
					name: '顏明南建築師事務所',
					place: '仙水段',
					placeNum: '03810000',
					date: '108 / 1 / 2',
					getNum: '1080012016',

				},
				{
					name: '鄒錦清',
					place: '東濱段',
					placeNum: '11230000',
					date: '108 / 1 / 2',
					getNum: '1080011714',

				},
				{
					name: '洪振平',
					place: '虎山段',
					placeNum: '08080001( ... 共 6 筆 )',
					date: '108 / 1 / 3',
					getNum: '1080012935',

				},
				{
					name: '江國競',
					place: '舊社段',
					placeNum: '01300000( ... 共 12 筆 )',
					date: '108 / 1 / 7',
					getNum: '1080015247',

				},
				{
					name: 'Jelly bean',
					place: '關東段',
					placeNum: '14990000( ... 共 2 筆 )',
					date: '108 / 1 / 8',
					getNum: '1080016359',

				},
				{
					name: '顏明南建築師事務所',
					place: '仙水段',
					placeNum: '03810000',
					date: '108 / 1 / 2',
					getNum: '1080012016',

				},
				{
					name: '鄒錦清',
					place: '東濱段',
					placeNum: '11230000',
					date: '108 / 1 / 2',
					getNum: '1080011714',

				},
				{
					name: '洪振平',
					place: '虎山段',
					placeNum: '08080001( ... 共 6 筆 )',
					date: '108 / 1 / 3',
					getNum: '1080012935',

				},
				{
					name: '江國競',
					place: '舊社段',
					placeNum: '01300000( ... 共 12 筆 )',
					date: '108 / 1 / 7',
					getNum: '1080015247',

				},
				{
					name: 'Jelly bean',
					place: '關東段',
					placeNum: '14990000( ... 共 2 筆 )',
					date: '108 / 1 / 8',
					getNum: '1080016359',

				},
			]
		},

		editItem(item) {
			this.editedIndex = this.desserts.indexOf(item)
			this.editedItem = Object.assign({}, item)
			this.dialog = true
		},

		deleteItem(item) {
			this.editedIndex = this.desserts.indexOf(item)
			this.editedItem = Object.assign({}, item)
			this.dialogDelete = true
		},

		deleteItemConfirm() {
			this.desserts.splice(this.editedIndex, 1)
			this.closeDelete()
		},

		close() {
			this.dialog = false
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem)
				this.editedIndex = -1
			})
		},

		closeDelete() {
			this.dialogDelete = false
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem)
				this.editedIndex = -1
			})
		},

		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.desserts[this.editedIndex], this.editedItem)
			} else {
				this.desserts.push(this.editedItem)
			}
			this.close()
		},
	},
})