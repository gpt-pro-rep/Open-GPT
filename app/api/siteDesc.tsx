export const siteDesc = () => {
  let alias: string = process.env.HOST_NAME || "";
  switch (alias) {
    case "Open-GPT":
      return {
        apiUrl: "",
        proName: "Open-GPT",
        proDesc: "开放版·直连GPT聊天机器人",
        proPayUrl: "",
      };
    default:
      return {
        apiUrl: "",
        proName: "AI-Open-GPT",
        proDesc: "智能版·直连GPT聊天机器人",
        proPayUrl: "",
      };
  }
};

export const getConfigItemFiled = (item: string) => {
  let val: string = "";
  if (process.browser) {
    const descInfo: any = document.getElementById("descInfo");
    const fields: any = JSON.parse(descInfo.getAttribute("content") || {});
    val = fields[item];
  }
  return val;
};
