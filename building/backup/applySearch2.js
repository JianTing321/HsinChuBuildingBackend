let search = Vue.extend({
	name: 'search',
	vuetify: new Vuetify(),
	template: `
			<div>
				<v-app id="inspire">
					<v-data-table :headers="headers" :items="totalList" sort-by="calories" class="elevation-1">
						<template v-slot:top>
								<v-divider class="mx-4" inset vertical></v-divider>
								<v-dialog v-model="dialog" max-width="500px">
									<v-card>
										<v-card-text>
											<v-container>
												<v-row>
													<v-col cols=" 12" sm="6" md="4">
														<v-text-field v-model="editedItem.name"
															label="name">
														</v-text-field>
													</v-col>
													<v-col cols="12" sm="6" md="4">
														<v-text-field v-model="editedItem.place"
															label="place">
														</v-text-field>
													</v-col>
													<v-col cols="12" sm="6" md="4">
														<v-text-field v-model="editedItem.placeNum"
															label="placeNum">
														</v-text-field>
													</v-col>
													<v-col cols="12" sm="6" md="4">
														<v-text-field v-model="editedItem.date"
															label="date">
														</v-text-field>
													</v-col>
													<v-col cols="12" sm="6" md="4">
														<v-text-field v-model="editedItem.getNum"
															label="getNum">
														</v-text-field>
													</v-col>
												</v-row>
											</v-container>
										</v-card-text>
										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn color="blue darken-1" text @click="close">
												Cancel
											</v-btn>
											<v-btn color="blue darken-1" text @click="save">
												Save
											</v-btn>
										</v-card-actions>
									</v-card>
								</v-dialog>
								<v-dialog v-model="dialogDelete" max-width="500px">
									<v-card>
										<v-card-title class="text-h5">是否確定要刪除?
										</v-card-title>
										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn color="blue darken-1" text @click="closeDelete">Cancel
											</v-btn>
											<v-btn color="blue darken-1" text @click="deleteItemConfirm">OK
											</v-btn>
											<v-spacer></v-spacer>
										</v-card-actions>
									</v-card>
								</v-dialog>							
						</template>
						<template v-slot:item.actions="{ item }">
							<v-icon small class="mr-2" @click="editItem(item)">
								mdi-pencil
							</v-icon>
							<v-icon small @click="deleteItem(item)">
								mdi-delete
							</v-icon>
						</template>
						<template v-slot:no-data>
							<v-btn color="primary" @click="initialize">
								Reset
							</v-btn>
						</template>
					</v-data-table>
				</v-app>
			</div>`,
	// props: ['headers'],
	data: () => ({
		headers: [],
		dialog: false,
		dialogDelete: false,

		totalList: [],
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
	mounted() {
		// console.log(this.headers);
		console.log(this.$parent.headers) /*获取整个父组件*/
		this.headers = this.$parent.headers
		// this.$parent.run()/*获取父组件的方法*/

	},
	methods: {
		initialize() {
			this.totalList = [
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
			this.editedIndex = this.totalList.indexOf(item)
			this.editedItem = Object.assign({}, item)
			this.dialog = true
		},

		deleteItem(item) {
			this.editedIndex = this.totalList.indexOf(item)
			this.editedItem = Object.assign({}, item)
			this.dialogDelete = true
		},

		deleteItemConfirm() {
			this.totalList.splice(this.editedIndex, 1)
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
				Object.assign(this.totalList[this.editedIndex], this.editedItem)
			} else {
				this.totalList.push(this.editedItem)
			}
			this.close()
		},
	},
})
