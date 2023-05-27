export const siteDesc = () => {
    let alias:string = process.env.HOST_NAME || ''
    switch (alias) {
        case 'Open-GPT': return {
            apiUrl: '',
            proName: 'Open-GPT-AI',
            proDesc: '开放版·直连GPT聊天机器人',
            proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/05/code.png',
        };
        case 'Quick-Chat': return {
            apiUrl: '',
            proName: 'Quick-Chat-AI',
            proDesc: '闪答·直连版GPT聊天机器人',
            proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/05/qc.png',
        };
        default: return {
            apiUrl: '',
            proName: 'AI-Open-GPT',
            proDesc: '智能版·直连GPT聊天机器人',
            proPayUrl: 'https://e.northviewer.cn/wp-content/uploads/2023/05/code.png',
        }
    }
}

export const getConfigItemFiled = (item: string) => {
    let val:string = ''
    if (process.browser) {
        const descInfo:any = document.getElementById('descInfo')
        const fields:any = JSON.parse(descInfo.getAttribute('content') || {})
        val = fields(item)
    }
    return val
}