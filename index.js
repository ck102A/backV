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
          const unixtime = Math.floor(Date.now())
          const apiURL = await `https://apiv3.beecost.vn/search/product?timestamp=${unixtime}&product_url=${url}`
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
          console.log("suc11111111111111")
          const sts =  obj.status
          if (sts === "error") {ctx.reply(`<a href="${url}">Sản phẩm</a> chưa có bất kì biến động giá nào! ${tagName}`,{message_thread_id: threadID, parse_mode: "HTML"})
          }
          if (sts === "success") {console.log('haha')}  

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


    
