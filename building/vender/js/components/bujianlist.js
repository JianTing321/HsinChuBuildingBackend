
let bujianlist = Vue.extend({
	name: 'bujianlist',
	vuetify: new Vuetify(),
	template: `
	<v-app id="inspire">
      <v-toolbar color="#0B4873" dark>       
        <v-toolbar-title>清單</v-toolbar-title>  
        <v-spacer></v-spacer>          
      </v-toolbar>  
      <v-list>
        <v-list-group v-for="item in bujianlist" :key="item.title" v-model="item.active" no-action >
			<template v-slot:activator>
			<v-list-item-content>
				<v-list-item-title v-text="item.title"></v-list-item-title>
			</v-list-item-content>
			</template>	
				<table>
					<tr >
						<th>id</th>
						<th>Level</th>
						<th>TimeStamp</th>
						<th>Message</th>													
					</tr>
					<tr class="ApplyTr2" v-for="child in item.bujianlist[0].list">												
						<td>{{child.id}}</td>
						<td>{{child.Level}}</td>
						<td>{{child.TimeStamp}}</td>						
						<td>{{child.Message}}</td>
					</tr>
				</table>						
				</v-list-item-contentA>
			</v-list-item>
        </v-list-group>
      </v-list>    
	 </v-app>`,
	data: () => ({
		bujianlist: [
			{
				action: 'mdi-ticket',
				active: true,
				bujianlist: [{
					list: [
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
					],
				}],
				title: '第1次補件原因',
			},
			{
				action: 'mdi-silverware-fork-knife',
				active: false,
				bujianlist: [{
					list: [
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
					],
				}],
				title: '第2次補件原因',
			},
			{
				action: 'mdi-school',
				bujianlist: [{
					list: [
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
					],
				}],
				title: '3.各系統通知排程程式 (分區、地形圖、違規)',

			},
			{
				action: 'mdi-human-male-female-child',
				bujianlist: [{
					list: [
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
					],
				}],
				title: '4.排程執行狀況通知排程',
			},
			{
				action: 'mdi-bottle-tonic-plus',
				bujianlist: [{
					list: [
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
					],
				}],
				title: '5.圖資更新排程',
			},
			{
				action: 'mdi-briefcase',
				bujianlist: [{
					list: [
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },
					],
				}],
				title: '6.對帳處理(臺銀、e 政府)',
			},
			{
				action: 'mdi-tag',
				bujianlist: [{
					list: [
						{ id: 96258, Level: 'Information', TimeStamp: '2022/8/23 下午 05:00:16', Message: '使用分區 (臺銀) 對帳-完成 0 筆資料對帳' },

					],
				}],
				title: '7.臺銀銷帳檔匯入程式 (分區、地形圖、違規)',
			},
		],
	}),
})

