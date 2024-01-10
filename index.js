import express from "express";
import { Bot,webhookCallback } from "grammy";
import fetch from "node-fetch"
import {} from 'dotenv/config'
const bot = new Bot(process.env.BOT_TOKEN);



  

bot.on('message', async (ctx, next) => {
  const chatId = ctx.message.chat.id
    const threadID = ctx.message.message_thread_id
    const fromID = ctx.message.from.id
    const lastName = (ctx.message.from.last_name == undefined) ? "":ctx.message.from.last_name;
    const fullName = `${ctx.message.from.first_name} ${lastName}`
    // const messID = ctx.message.message_id
    console.log(chatId + " - " + fromID) 
    const tagName = `<a href="tg://user?id=${fromID}">${fullName}</a>`
    if (fromID == "5229925261") {
        const message = ctx.message.text;
        const linkRegex = /(https?:\/\/[^\s]+)/;
        const pee = /https:\/\/sh/;
        if (linkRegex.test(message)) {
            const url = message.match(linkRegex)[0]
            if (pee.test(url)){
              let retryCount = 0;
              const maxRetries = 10;
      while (retryCount < maxRetries) {
        try {
        const respee = await fetch(url)
        const resURL = await decodeURIComponent(respee.url.replace(/https:\/\/shopee\.vn\/universal-link\?af=false&deep_and_deferred=1&redir=/gm,''))
        const peeDlink = resURL.match(/(.*?)\?/)[1]
        console.log(peeDlink)
        const unixtime = Math.floor(Date.now())
      const apiURL = `https://apiv3.beecost.vn/search/product?timestamp=${unixtime}&product_url=${resURL}`
      const response = await fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer {token}',
        },
    });
      const res = await response.text(); 
      const obj = await JSON.parse(res)
      const sts =  obj.status
      
      if (sts === "error" && obj.msg === "product url is not valid") {
        ctx.reply(`Opps! Có vẻ như đây không phải link sản phẩm! Vui lòng kiểm tra lại nhé! ${tagName}`,{message_thread_id: threadID, parse_mode: "HTML"} )
      } else {console.log("haha")
    await fetch("https://addlivetag.com/api/add-video.php", {
      "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "us_id=8ce0d9b891645b8162e72b76a2c8e50d; ref=xurio; _ga=GA1.1.1952564566.1704787707; _fbp=fb.1.1704787706854.147812631; ref=0; PHPSESSID=gicfpeqkj9ddnq754lhpauuorm; user=xurio; _ga_JFEPJSWCC6=GS1.1.1704808576.5.1.1704808577.0.0.0",
        "Referer": "https://addlivetag.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": `user=xurio&user_id=8ce0d9b891645b8162e72b76a2c8e50d&video=${url}`,
      "method": "POST"
    })
    console.log("add")
    }
      break;
    } catch (ers) {
      console.log(ers)
      retryCount++;
    }
  }
    if (retryCount === maxRetries) {
      ctx.reply(`Máy chủ gặp sự cố trong quá trình truy xuất, hãy thử lại nhé! ${tagName}`,{message_thread_id: threadID, parse_mode: "HTML"} )
      // Handle the case when the maximum number of retries is reached
      //await ctx.deleteMessage(message.message_id); 
    }         
            
        }
      }
    }
    })
        
    
    
 
    if (process.env.NODE_ENV === "production") {
      const app = express();
      app.use(express.json());
      app.use(webhookCallback(bot, "express"));
    
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Bot listening on port ${PORT}`);
      });
    } else {
      bot.start();
    }
  
    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));


    
