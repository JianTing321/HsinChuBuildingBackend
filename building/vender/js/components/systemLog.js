
let log = Vue.extend({
	name: 'log',
	vuetify: new Vuetify(),
	template: `
	<div>
 <v-app id="inspire">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="logCaseH"
        :items="logCase"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-app>
					</div>`,
	data() {
		return {
			search: '',
			logCaseH: [
				{
					text: '時間',
					align: 'start',
					filterable: false,
					value: 'times',
				},
				{ text: '類型', value: 'kinds' },
				{ text: '內容', value: 'content' },
				{ text: '備註', value: 'note' },
				{ text: 'IP', value: 'IP' },
				{ text: '用戶身分', value: 'userKind' },
			],
			logCase: [
				{
					times: '2022/07/25 18:00:05',
					kinds: '線上申辦_加入申請',
					content: '加入申請：地段_中山段一小段_地號：00010000(部分)、00050000、00070000(部分)、00090000_地段：仙水段_共 13 筆 999 元',
					note: '測試功能完整性',
					IP: '192.168.1.124',
					userKind: '訪客',
				},
				{
					times: '2022/07/23 18:00:05',
					kinds: '線上申辦_加入申請',
					content: '加入申請：地段_中山段一小段_地號：00010000(部分)、00050000、00070000(部分)、00090000_地段：仙水段_共 13 筆 999 元',
					note: '測試功能完整性',
					IP: '192.168.1.124',
					userKind: '訪客',
				},
				{
					times: '2022/07/22 18:00:05',
					kinds: '線上申辦_加入申請',
					content: '加入申請：地段_中山段一小段_地號：00010000(部分)、00050000、00070000(部分)、00090000_地段：仙水段_共 13 筆 999 元',
					note: '測試功能完整性',
					IP: '192.168.1.124',
					userKind: '訪客',
				},
			],
		}
	},
})