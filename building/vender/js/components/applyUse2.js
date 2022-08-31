let Apply2 = Vue.extend({
	name: 'Apply2',
	vuetify: new Vuetify(),
	template: `
	<div>
	<v-app id="inspire">
	<v-data-table :headers="headers" :items="totalList" class="elevation-1">
		<template v-slot:top>
			<v-divider class="mx-4" inset vertical></v-divider>
			<v-dialog v-model="dialog" width="98%">
				<v-card>
					<form class="applySearch" style="padding:10px">
						<div class="mb-1">
							<div class="row row-cols-12 row-cols-md-12 g-4">
								<div class="col-12">
									<div class="containerMember">
										<div class="card">
											<div class="card-body">
												<div class="input row-cols-12">
													<div class="col-3">
														<div class="formtitle ">申請日期</div>
														<input :value="editedItem.date" disabled>
													</div>
													<div class="col-3">
														<div class="formtitle">案件進度</div>
														<input type="text" value="待補件" disabled>
													</div>
													<div class="col-3">
														<div class="formtitle">繳費進度</div>
														<input type="text" value="未繳費" disabled>
														<!-- <input style="height:150px" type="text"
																				placeholder="新北市汐止區新台五路一段159號5樓"> -->
													</div>
													<div class="col-3">
														<div class="formtitle">承辦人移轉</div>
														<select
															style="width:100% ; background-color:white ; padding: 0; padding-left: 10px ; text-align: left ; height: 100%;"
															:disabled="!show">
															<option selected disabled>--選擇移轉對象--</option>
															<option>張雨生</option>
															<option>王慶翔</option>
															<option>徐自摩</option>
														</select>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<v-app id="inspire">
								<v-list>
									<v-list-group v-for="item in items" :key="item.title" v-model="item.activeList"
										no-action color="#0B4873">
										<template v-slot:activator>
											<v-list-item-content>
												<v-list-item-title>案件資訊</v-list-item-title>
											</v-list-item-content>
										</template>
										<div class="row row-cols-12 row-cols-md-12 g-4">
											<div class="col-6 mainCard">
												<div class="containerMember">
													<div class="card">
														<div class="card-body">
															<div class="title">
																<h5 class="formTitle">申請人姓名</h5>
															</div>
															<div class="input row-cols-12">
																<div class="col-6">
																	<div class="formtitle">姓名</div>
																	<input type="text" v-model="editedItem.name"
																		disabled>
																</div>
																<div class="col-6">
																	<div class="formtitle">聯絡電話</div>
																	<input type="text" :value="12345678"
																		:disabled="!show">
																</div>
																<div class="col-12">
																	<div class="formtitle">地址</div>
																	<input type="text" v-model="editedItem.place"
																		:disabled="!show">
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-6">
												<div class="containerMember">
													<div class="card">
														<div class="card-body">
															<div class="title">
																<h5 class="formTitle">代辦業者</h5>
															</div>
															<div class="input row-cols-12">
																<div class="col-6">
																	<div class="formtitle ">姓名</div>
																	<input type="text" value="彭小宏" :disabled="!show">
																</div>
																<div class="col-6">
																	<div class="formtitle">聯絡電話</div>
																	<input type="text" value="03-9999999"
																		:disabled="!show">
																</div>
																<div class="col-12">
																	<div class="formtitle">地址</div>
																	<input type="text" value="新竹市北區竹光路260號"
																		:disabled="!show">
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-6">
												<div class="containerMember">
													<div class="card">
														<div class="card-body">
															<div class="title">
																<h5 class="formTitle">建築師事務所</h5>
															</div>
															<div class="input row-cols-12">
																<div class="col-6">
																	<div class="formtitle ">名稱</div>
																	<input type="text" value="事務所名稱" :disabled="!show">
																</div>
																<div class="col-6">
																	<div class="formtitle">聯絡電話</div>
																	<input type="text" value="0912345678"
																		:disabled="!show">
																</div>
																<div class="col-6">
																	<div class="formtitle ">建築師姓名</div>
																	<input type="text" value="陳小明" :disabled="!show">
																</div>
																<div class="col-6">
																	<div class="formtitle">證書字號</div>
																	<input type="text" value="建開證字第1000號"
																		:disabled="!show">
																</div>
																<div class="col-12">
																	<div class="formtitle">地址</div>
																	<input type="text" value="新竹市香山區中華路五段125巷520號"
																		:disabled="!show">
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-6">
												<div class="containerMember">
													<div class="card">
														<div class="card-body">
															<div class="title">
																<h5 class="formTitle">申請事由&其他</h5>
															</div>
															<div class="input row-cols-12">
																<div class="col-6">
																	<div class="formtitle ">基地地點</div>
																	<input type="text" value="新竹市北區中正路"
																		:disabled="!show">
																</div>
																<div class="col-6">
																	<div class="formtitle">申請事由</div>
																	<input type="text" value="法定空地分割" :disabled="!show">
																</div>
																<div class="col-12">
																	<div class="formtitle">備註</div>
																	<textarea name="" id=""
																		style="height:71px"></textarea>
																	<!-- <input style="height:150px" type="text"
																				value="新北市汐止區新台五路一段159號5樓"> -->
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										</v-list-item-contentA>
										</v-list-item>
									</v-list-group>
								</v-list>
								<v-list>
									<v-list-group v-for="item in items" :key="item.title" v-model="item.activeList2"
										no-action color="#0B4873">
										<template v-slot:activator>
											<v-list-item-content>
												<v-list-item-title>申請地號及基地</v-list-item-title>
											</v-list-item-content>
										</template>
										<div class="row row-cols-12 row-cols-md-12 g-4" style="height:auto">
											<div class="col-6" style="height:100%">
												<div class="containerMember" style="height:100%">
													<div class="card" style="min-height: 200px;">
														<div class="card-body">
															<div class="title" style="flex-grow: 0">
																<h5 class="formTitle">申請地號列表</h5>
															</div>
															<table class="ApplyListLand" style="text-align:left; ">
																<tr id="ApplyTr1">
																	<th
																		style="min-width:8%;text-align:left ; padding-right:10px">
																		序號</th>
																	<th style="width:25%">地段</th>
																	<th style="width:65%">地號</th>
																</tr>
																<tr class="ApplyTr2" v-for="(list,key) in applyLand">
																	<td style="text-align:left; padding: 0 10px">
																		{{key+1}}</td>
																	<td>{{list.title}}</td>
																	<td>{{list.content}}</td>
																</tr>
															</table>
														</div>
													</div>
												</div>
											</div>
											<div class="col-6">
												<div class="containerMember" style="height:100%">
													<div class="card">
														<iframe
															src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2511.9272787642603!2d120.96352708382786!3d24.81384777264157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1661140110957!5m2!1szh-TW!2stw"
															frameborder="0" scrolling="yes" seamless="seamless"
															style="display:block; width:100%; height:100%;"></iframe>
													</div>
												</div>
											</div>
										</div>
										</v-list-item-contentA>
										</v-list-item>
									</v-list-group>
								</v-list>
							</v-app>
							<div class="row row-cols-12 row-cols-md-12 g-4">
								<div class="col-12">
									<div class="containerMember">
										<div class="card">
											<div class="card-body">
												<div class="input row-cols-12">
													<div class="col-12 fileCenterArea">
														<h5 class="formTitle ">申請書圖</h5>
														<div class="fileCenter row-cols-12 borderTop">
															<div class="formtext col-3"><a
																	href=""><span>1.</span>掛號申請書</a></div>
															<div class="formtext col-3"><a
																	href=""><span>2.</span>建築線指示(定)申請書</a></div>
															<div class="formtext col-3"><a
																	href=""><span>3.</span>地籍圖謄本</a></div>
															<div class="formtext col-3"><a
																	href=""><span>4.</span>使用分區證明</a></div>
															<div class="formtext col-3"><a
																	href=""><span>5.</span>土地登記謄本</a></div>
															<div class="formtext col-3"><a
																	href=""><span>6.</span>都市計畫圖</a></div>
															<div class="formtext col-3"><a
																	href=""><span>7.</span>都市計畫樁位圖</a></div>
															<div class="formtext col-3"><a
																	href=""><span>8.</span>紙本地籍套繪圖</a></div>
															<div class="formtext col-3"><a
																	href=""><span>9.</span>電子地籍套繪圖</a></div>
															<div class="formtext col-3"><a
																	href=""><span>10.</span>現況實測圖</a></div>
															<div class="formtext col-3"><a
																	href=""><span>11.</span>現況照片</a></div>
															<div class="formtext col-3"><a
																	href=""><span>12.</span>建築線申請書圖</a></div>
															<div class="formtext col-3"><a
																	href=""><span>13.</span>地籍套繪圖</a></div>
															<div class="formtext col-3"><a
																	href=""><span>14.</span>現況計畫圖</a></div>
															<div class="formtext col-3"><a
																	href=""><span>15.</span>其他與申請案有關之參考資料</a></div>
															<div class="formtext col-3"><a style="color:#a85a00"
																	href=""><span>16.</span>合併文件下載</a></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
					<v-card-actions style="justify-content: center">
						<v-btn color="#0B4873" style="color:white" elevation="1" raised @click="applyListLog()">
							審核
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
						<v-btn color="#0B4873" style="color:white" elevation="1" raised @click="closeDelete">Cancel
						</v-btn>
						<v-btn color="#0B4873" style="color:white" elevation="1" raised @click="deleteItemConfirm">
							OK
						</v-btn>
						<v-spacer></v-spacer>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<v-dialog v-model="returnedBox" max-width="80%">
				<v-card style="padding:50px 10px">
					<h5 class="formTitle">請填寫退件原因</h5>
					</v-card-title>
					<template>
						<section>
							<div style="margin:0 auto">
								<v-text-field label="請填寫原因" hide-details="auto"></v-text-field>
							</div>
						</section>
					</template>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="#0B4873" style="color:white" elevation="1" raised @click="returned">取消
						</v-btn>
						<v-btn color="#0B4873" style="color:white" elevation="1" raised @click="deleteItemConfirm">
							確定
						</v-btn>
						<v-spacer></v-spacer>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<v-dialog v-model="keepDate" max-width="80%">
				<div class="applyUse">
					<div class="card" style="padding:50px 10px ;background-Color:rgb(247, 247, 247)">
						<div class="card-body">
							<div class="title">
								<h5 class="formTitle">承辦日期展延</h5>
							</div>
							<div class="input row-cols-12">
								<div class="col-6">
									<div class="formtitle ">原承辦期限</div>
									<input type="text" value="111/06/01" disabled>
								</div>
								<div class="col-6">
									<div class="formtitle ">展延承辦期限</div>
									<input type="text" placeholder="天">
								</div>
							</div>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="#0B4873" style="color:white" elevation="1" raised @click="keepDateBtn">取消
								</v-btn>
								<v-btn color="#0B4873" style="color:white" elevation="1" raised
									@click="deleteItemConfirm">確定
								</v-btn>
								<v-spacer></v-spacer>
							</v-card-actions>
						</div>
					</div>
				</div>
			</v-dialog>
			<v-dialog v-model="buJianList" max-width="80%">
				<div>
					<v-app id="inspire">
						<div class="applyUseMargin">
							<v-toolbar color="#0B4873" dark>
								<v-toolbar-title>補件清單</v-toolbar-title>
								<v-spacer></v-spacer>
							</v-toolbar>
							<v-list>
								<v-list-group v-for="item in bujianlist" :key="item.title" v-model="item.active"
									no-action>
									<template v-slot:activator>
										<v-list-item-content>
											<v-list-item-title v-text="item.title"></v-list-item-title>
										</v-list-item-content>
									</template>
									<section class="textareaBujian">
										<div class="formtitle">補件原因</div>
										<textarea name="" id="" class="contentArea"></textarea>
									</section>
									<section class="textareaBujianInput" style="margin:10px 0">
										<input type="file" name="" id="">
									</section>
									<table>
										<tr>
											<th>勾選</th>
											<th>號碼</th>
											<th>項目</th>
										</tr>
										<tr class="ApplyTr2" v-for="(child,key) in item.bujianlist[0].list">
											</v-container>
											<td><input type="checkbox" name="" id=""></td>
											<td>{{key+1}}</td>
											<td>{{child.Level}}</td>
										</tr>
									</table>
									<v-btn color="#0B4873" style="color:white" elevation="1" raised>暫存</v-btn>
									<v-btn color="#0B4873" style="color:white" elevation="1" raised>返回</v-btn>
									<v-btn color="#0B4873" style="color:white" elevation="1" raised>發送補件通知</v-btn>
									</v-list-item-contentA>
									</v-list-item>
								</v-list-group>
							</v-list>
						</div>
					</v-app>
				</div>
			</v-dialog>
		</template>
		<template v-slot:item.actions="{ item }">
			<v-icon class="mr-2" @click="editItem(item)" color="#0B4873" size="25px">
				mdi-comment-check-outline
			</v-icon>
		</template>
		<template v-slot:no-data>
			<v-btn color="#0B4873" style="color:white" elevation="1" raised @click="initialize">
				Reset
			</v-btn>
		</template>
	</v-data-table>
	<v-dialog v-model="useCheck" max-width="80%">
		<v-app id="inspire">
			<div class="applyUseMargin">
				<v-toolbar color="#0B4873" dark>
					<v-toolbar-title>審核</v-toolbar-title>
					<v-spacer></v-spacer>
				</v-toolbar>
				<v-list>
					<v-list-group v-for="item in set" :key="item.title" v-model="item.active" no-action>
						<template v-slot:activator>
							<v-list-item-content>
								<v-list-item-title v-text="item.title"></v-list-item-title>
							</v-list-item-content>
						</template>
						<div class="col-12 applyUse" v-if="this.manager=0">
							<div class="containerMember">
								<div class="card">
									<div class="card-body">
										<div class="title">
											<h5 class="formTitle">承辦審核</h5>
										</div>
										<div class="input row-cols-12">
											<div class="col-6">
												<div class="formtitle ">預定勘查日期</div>
												<input type="text" placeholder="預定勘查日期">
											</div>
											<div class="col-6">
												<div class="formtitle">實際勘查日期</div>
												<input type="text" placeholder="實際勘查日期">
											</div>
											<div class="col-12">
												<div class="formtitle">會核意見</div>
												<textarea name="" id=""></textarea>
											</div>
											<div class="col-12">
												<div class="formtitle">加註事項</div>
												<textarea name="" id=""></textarea>
											</div>
											<div style="margin:0 auto"><input type="file" name="" id=""></div>
										</div>
										<v-card-actions style="display:block">
											<v-btn color="#0B4873" style="color:white" elevation="1" raised>
												取消
											</v-btn>
											<v-btn color="#0B4873" style="color:white" elevation="1" raised
												@click="applyListLog()">
												審核完成
											</v-btn>
										</v-card-actions>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 applyUse" v-if="this.manager=!0">
							<div class="containerMember">
								<div class="card">
									<div class="card-body">
										<div class="title">
											<h5 class="formTitle">科長決行</h5>
										</div>
										<div class="input row-cols-12">
											<div class="col-12">
												<div class="formtitle">科長決行意見</div>
												<textarea name="" id="" style="height:80px"
													placeholder="請輸入事項"></textarea>
											</div>
										</div>
										<div style="margin:0 auto"><input type="file" name="" id=""></div>
										<v-card-actions style="display:block">
											<v-btn color="#0B4873" style="color:white" elevation="1" raised>
												暫存
											</v-btn>
											<v-btn color="red accent-4" style="color:white" elevation="1" raised>
												退回
											</v-btn>
											<v-btn color="#0B4873" style="color:white" elevation="1" raised>
												審核完成
											</v-btn>
										</v-card-actions>
									</div>
								</div>
							</div>
						</div>
					</v-list-group>
				</v-list>
			</div>
		</v-app>
	</v-dialog>
</v-app>
</div>
		`,
	// props: ['headers'],
	data: () => ({
		activeList2: false,
		activeList: false,
		// disabled: true,
		show: false,
		buJianList: false,
		manager: 1,
		useCheck: false,
		headers: [],
		returnedBox: false,
		dialog: false,
		dialogDelete: false,
		keepDate: false,
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
		bujianlist: [
			{
				action: 'mdi-ticket',
				active: true,
				bujianlist: [{
					list: [
						{ id: 01, Level: '掛號申請書', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 02, Level: '建築線指示(定)申請書', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 03, Level: '地籍圖謄本', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 04, Level: '使用分區證明', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 05, Level: '土地登記謄本', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 06, Level: '都市計畫圖', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 07, Level: '都市計畫樁位圖', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 08, Level: '紙本地籍套繪圖', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 09, Level: '電子地籍套繪圖', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 10, Level: '現況實測圖', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 11, Level: '現況照片', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 12, Level: '建築線申請書圖', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 13, Level: '地籍套繪圖', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 14, Level: '現況計畫圖', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 15, Level: '其他與申請案有關之參考資料', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
					],
				}],
				title: '第1次補件原因',
			},],
		items: [
			{
				active: false,
				items: [{
					list: [
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
					],
				}],
				title: '第一次承辦審核',
			},
		],
		set: [{ title: '第一次承辦審核' }, { title: '第一次科長決行' },],
		applyLand: [
			{ title: "中山段一小段", content: "00010000(部分)" },
			{ title: "中山段一小段", content: "00030000" },
			{ title: "中山段一小段", content: "00050000(部分)" },
			{ title: "中山段一小段", content: "00070000" }
		],
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

		// 將審核列表最末位恆打開
		this.items[this.items.length - 1].active = true
		this.set[this.set.length - 1].active = true


		// this.totalList[2].style = "color:red"

	},
	methods: {
		editBtn() {
			this.show = !this.show
		},
		cancelBtn() {
			this.show = !this.show
		},
		buJianListBtn() {
			this.buJianList = !this.buJianList
		},
		returned() {
			// prompt("確定退件?")
			// this.editedIndex = this.totalList.indexOf(item)
			// this.editedItem = Object.assign({}, item)
			this.returnedBox = !this.returnedBox
		},
		applyListLog() {
			this.useCheck = !this.useCheck
		},
		keepDateBtn() {
			this.keepDate = !this.keepDate
		},
		cancelKeep() {
			this.keepDate = !this.keepDate
		},
		initialize() {
			this.totalList = [
				{
					name: '顏明南建築師事務所',
					place: '仙水段',
					placeNum: '03810000',
					date: '111 / 05 / 25',
					getNum: '1080012016',

				},
				{
					name: '鄒錦清',
					place: '東濱段',
					placeNum: '11230000',
					date: '111 / 04 / 23',
					getNum: '1080011714',

				},
				{
					name: '洪振平',
					place: '虎山段',
					placeNum: '08080001( ... 共 6 筆 )',
					date: '111 / 04 / 20',
					getNum: '1080012935',

				},
				{
					name: '江國競',
					place: '舊社段',
					placeNum: '01300000( ... 共 12 筆 )',
					date: '111 / 04 / 01',
					getNum: '1080015247',

				},
				{
					name: '曾宇翔',
					place: '關東段',
					placeNum: '14990000( ... 共 2 筆 )',
					date: '111 / 03 / 21',
					getNum: '1080016359',

				},
				{
					name: '顏明南建築師事務所',
					place: '仙水段',
					placeNum: '03810000',
					date: '111 / 03 / 19',
					getNum: '1080012016',

				},
				{
					name: '鄒錦清',
					place: '東濱段',
					placeNum: '11230000',
					date: '111 / 03 / 16',
					getNum: '1080011714',

				},
				{
					name: '洪振平',
					place: '虎山段',
					placeNum: '08080001( ... 共 6 筆 )',
					date: '111 / 03 / 11',
					getNum: '1080012935',

				},
				{
					name: '江國競',
					place: '舊社段',
					placeNum: '01300000( ... 共 12 筆 )',
					date: '111 / 03 / 05',
					getNum: '1080015247',

				},
				{
					name: '曾宇翔',
					place: '關東段',
					placeNum: '14990000( ... 共 2 筆 )',
					date: '111 / 03 / 02',
					getNum: '1080016359',

				},
				{
					name: '顏明南建築師事務所',
					place: '仙水段',
					placeNum: '03810000',
					date: '111 / 01 / 28',
					getNum: '1080012016',

				},
				{
					name: '鄒錦清',
					place: '東濱段',
					placeNum: '11230000',
					date: '111 / 01 / 26',
					getNum: '1080011714',

				},
				{
					name: '洪振平',
					place: '虎山段',
					placeNum: '08080001( ... 共 6 筆 )',
					date: '111 / 01 / 23',
					getNum: '1080012935',

				},
				{
					name: '江國競',
					place: '舊社段',
					placeNum: '01300000( ... 共 12 筆 )',
					date: '111 / 01 / 22',
					getNum: '1080015247',

				},
				{
					name: '曾宇翔',
					place: '關東段',
					placeNum: '14990000( ... 共 2 筆 )',
					date: '111 / 01 / 19',
					getNum: '1080016359',

				},
			]
		},

		editItem(item) {
			console.log(this.editedIndex = this.totalList.indexOf(item));
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
			// console.log(Object.assign(this.totalList[this.editedIndex], this.editedItem))
			if (this.editedIndex > -1) {
				Object.assign(this.totalList[this.editedIndex], this.editedItem);

			} else {
				this.totalList.push(this.editedItem)
			}
			this.close()
			this.show = !this.show
		},
	},
})
