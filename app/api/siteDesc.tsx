export const siteDesc = () => {
    let alias:string = process.env.HOST_NAME || ''
    switch (alias) {
        case 'Open-GPT': return {
            apiUrl: '',
            proName: 'Open-GPT',
            proDesc: '开放版·直连GPT聊天机器人',
            proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/06/open.png',
            // proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/06/open-code.png',
        };
        case 'Quick-GPT': return {
            apiUrl: '',
            proName: 'Quick-GPT',
            proDesc: '直连版·Chat-GPT聊天机器人',
            proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/06/quick.png',
            // proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/06/quick-code.png',
        };
        case 'Eazy-Chat': return {
            apiUrl: '',
            proName: 'Eazy-Chat',
            proDesc: '直连版·Chat-GPT聊天机器人',
            proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/06/eazy.png',
            // proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/06/eazy-code.png',
        };
        default: return {
            apiUrl: '',
            proName: 'AI-Open-GPT',
            proDesc: '智能版·直连GPT聊天机器人',
            proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/06/open.png',
        }
    }
}

export const getConfigItemFiled = (item: string) => {
    let val:string = ''
    if (process.browser) {
        const descInfo:any = document.getElementById('descInfo')
        const fields:any = JSON.parse(descInfo.getAttribute('content') || {})
        val = fields[item]
    }
    return val
}