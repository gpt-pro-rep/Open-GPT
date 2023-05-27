export function siteDesc (path:any) {
    let hostname:any = location?.hostname || ''
    hostname = hostname.split('.')
    let alias = hostname[0]

    switch (alias) {
        case 'gpt': return {
            apiUrl: '',
            proName: 'Open-GPT',
            proDesc: '开放版·直连GPT聊天机器人',
            proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/05/code.png',
        };
        case 'quick': return {
            apiUrl: '',
            proName: 'Quick-Chat',
            proDesc: '闪答·直连版GPT聊天机器人',
            proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/05/qc.png',
        }
    }
}