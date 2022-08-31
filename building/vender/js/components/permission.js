
let permission = Vue.extend({
	userId: 'permission',
	vuetify: new Vuetify(),
	template: `<div>
	<v-app id="inspire">
		<v-data-table :headers="headers" :items="userList" sort-by="createTime" class="elevation-1">
			<template v-slot:top>
				<v-toolbar flat>
					<v-toolbar-title></v-toolbar-title>
					<v-divider class="mx-4" inset vertical></v-divider>
					<v-spacer></v-spacer>
					<v-dialog v-model="dialog" max-width="500px">
						<template v-slot:activator="{ on, attrs }">
							<v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
								新增使用者
							</v-btn>
						</template>
						<v-card>
							<v-card-title>
								<span class="text-h5">{{ formTitle }}</span>
							</v-card-title>
							<v-card-text>
								<v-container>
									<v-row>
										<v-col cols="12" sm="6" md="4">
											<v-text-field v-model="editedItem.userId" label="使用者帳號"></v-text-field>
										</v-col>
										<v-col cols="12" sm="6" md="4">
											<v-text-field v-model="editedItem.createTime" label="建立日期"></v-text-field>
										</v-col>
										<v-col cols="12" sm="6" md="4">
											<v-text-field v-model="editedItem.userName" label="使用者名稱"></v-text-field>
										</v-col>
										<v-col cols="12" sm="6" md="4">
											<v-text-field v-model="editedItem.userKind" label="權限類別"></v-text-field>
										</v-col>
										<v-col cols="12" sm="6" md="4">
											<v-text-field v-model="editedItem.loginStatus" label="可否登入">
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
							<v-card-title class="text-h5">確定要移除?</v-card-title>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
								<v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
								<v-spacer></v-spacer>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</v-toolbar>
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
</div>`
	,
	data: () => ({
		dialog: false,
		dialogDelete: false,
		headers: [
			{
				text: '帳號',
				align: 'start',
				sortable: false,
				value: 'userId',
			},
			{ text: '建立日期', value: 'createTime' },
			{ text: '使用者名稱', value: 'userName' },
			{ text: '權限類別', value: 'userKind' },
			{ text: '可否登入', value: 'loginStatus', sortable: false },
			{ text: '操作', value: 'actions', sortable: false },
		],
		userList: [],
		editedIndex: -1,
		editedItem: {
			userId: '',
			createTime: 0,
			userName: 0,
			userKind: 0,
			loginStatus: 0,
		},
		defaultItem: {
			userId: '',
			createTime: 0,
			userName: 0,
			userKind: 0,
			loginStatus: 0,
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
			this.userList = [
				{
					userId: '0001',
					createTime: '2022/04/25',
					userName: '張○○',
					userKind: '主管人員',
					loginStatus: '是',
				},
				{
					userId: '0002',
					createTime: '2022/02/25',
					userName: '鄭○○',
					userKind: '系統管理人員',
					loginStatus: '否',
				},
				{
					userId: '0003',
					createTime: '2022/02/24',
					userName: '周○○',
					userKind: '核發承辦人員',
					loginStatus: '是',
				},
				{
					userId: '0004',
					createTime: '2021/08/15',
					userName: '楊○○',
					userKind: '核發承辦人員',
					loginStatus: '是',
				},
				{
					userId: '0005',
					createTime: '2021/02/15',
					userName: '都市計畫科',
					userKind: '核發承辦人員',
					loginStatus: '是',
				},
				{
					userId: '0006',
					createTime: '2021/01/15',
					userName: '都市發展處',
					userKind: '核發承辦人員',
					loginStatus: '是',
				},
				{
					userId: '0007',
					createTime: '2021/02/10',
					userName: '楊△△',
					userKind: '系統管理人員',
					loginStatus: '是',
				},
				{
					userId: '0008',
					createTime: '2021/02/05',
					userName: '陳○○',
					userKind: '公務作業人員',
					loginStatus: '是',
				},
				{
					userId: '0009',
					createTime: '2020/09/10',
					userName: '科學園區',
					userKind: '系統管理人員',
					loginStatus: '是',
				},
				{
					userId: '0010',
					createTime: '2020/07/10',
					userName: '馬○○',
					userKind: '公務作業人員',
					loginStatus: '是',
				},
			]
		},

		editItem(item) {
			this.editedIndex = this.userList.indexOf(item)
			this.editedItem = Object.assign({}, item)
			this.dialog = true
		},

		deleteItem(item) {
			this.editedIndex = this.userList.indexOf(item)
			this.editedItem = Object.assign({}, item)
			this.dialogDelete = true
		},

		deleteItemConfirm() {
			this.userList.splice(this.editedIndex, 1)
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
				Object.assign(this.userList[this.editedIndex], this.editedItem)
			} else {
				this.userList.push(this.editedItem)
			}
			this.close()
		},
	},
})
