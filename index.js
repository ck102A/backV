import express from "express";
import { Bot,webhookCallback } from "grammy";
import fetch from "node-fetch"
import {} from 'dotenv/config'
const bot = new Bot(process.env.BOT_TOKEN);



  

bot.on('message', async (ctx, next) => {
  const chatId = ctx.message.chat.id
  console.log(chatId)
var a = 1
var b = 10
while (a<b) {
  // var url = 'https://www.lazada.vn/shop/site/api/shop/products/query?shopId=541775&limit=10'
  const res = await fetch("https://shopee.vn/api/v2/voucher_wallet/get_voucher_detail", {
  "headers": {
    "accept": "application/json",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "af-ac-enc-dat": "AAczLjQuMS0xAAABjh6/gRoAAAlTAhAAAAAAAAAAAiJ4pX3er/cbtIIrdi/7jMhrAugGUmDRTdP5JTFDk2+n8P4nhRkaq8yB9vYBAJaX0VJ6kNwtQAKeKBaYLtblS8bfiWsAqFBwdDotSNiTYu7UxoFMAxN5QCFuh0m2a7iQsFUA38hqWAB88FTY52P/elhePpWL/NIgwspfypL6HT+4PZk+wNd/S2TizKKdOPITO/W+NK6oDxtA6WRSRmbBO2/zrHsPmksFYKOt4JA+h4uzaoZqLU9eMQYZbLcMxVW6RkoOz7Zsf/2qgD4O1ZNNY9Vp7K1mxpCw4FrmqPZsDvTzcRLtY/13qoxz9t7ZwriUARbJfYj726ptTcXiQqBzfSW0iXc7XXmFRxvyp8rE9g9c/QthLT6e+c4FyByofchLjkV5XexZkY0jSBEhhU1WvRTa76AhnNb0Fousg4WTQ86x4bwr2+BXvs00x53AvLB4v6lKci3ZERSca/r/GB8CQr5SpebQIU8k0U8Z9uEWvRNx6gU1RSYXvCFeluPixLg2wNmH0EG9Ehrs8sxCJ34xk1bmhugTl/82EyfDx/bVRcPaaRvYm0zOGhLrp5LMvXgTAM4BOzV/5LJPbvdTcknTz7bwAfnbtKA9WD243pTqlF+XcyhBcvHKLzzIywWfT+jg4Wa7LsSgxhHR900nRlnFcVNtYI7Il/82EyfDx/bVRcPaaRvYm9jVLcK9Q/8wU7q8Novshis=",
    "af-ac-enc-sz-token": "ohkdES7gpfZLJkmEF2Am+g==|dMW/5XGEiFkdjzbAPbcFTIBVNP12MZURo04Z9WH8uGUk3jJ2t6g2xokCZS9zsGhZsakSbHd8NFUCS7+t|sIvtISk4CMJmuHCR|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "CfAZwc50P2HSvzZyieEq1bd1GtwdiOpT",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-1_5.1.0_0_230|5dca7e0bb62a46d9b55fd6c6864aba21e4683ff668c140|10900|1100",
    "x-sap-access-s": "4VMYslxqAKtXUp6pnltVJ5H62EbR4qy4ZBqRJhm0l2A=",
    "x-sap-access-t": "1709912851",
    "x-sap-ri": "1433eb65965156ae03470539030126922095107c183c14516ed4",
    "x-sap-sec": "oaNrQCk318+7U8+7vP+dU8k7vP+7U8k7U8+0U8+7a877U893U8MoUP+7v8+7UU89+71dU8+7O807Uu9/U8++nEstdFKehyR7hKcDpO7O80vjBFYyQIj3kLzmt6KrDWI75xiM+hPkoG4Q609USmqXmKgvUHDjVEDWVSMRrEa7xI6tAgPx19DsmwO27F2k9iqQd6FJK04Swj839e5mWlSc4LEuDd83ePl3LyigIyfa6H8YNJEuC+S7cjT0B6X2/sYz0gT0CKFjETq4GUbuJd1dkY/23ZkkRt+FsgOlaLTSV3k6wyxCuMhn9hdTCw7K9RSTDN+KrC7Re20WFGgBffpb2cUtJqpIIpBzJbbpJTuueEUNpfrzXsvnL9iUL9JcpMQta3Rgya7loUDa3Xk+z/6Ckd7fbtMVACrpPAenZ6Prh2wkU+UikmODBv9WManRfaUhjG3cUDxG3JUP5diPlGaHVb8qX9HoCRdkcj7BjNV3Y3zQVdhOqWbLHSK1Rk42tmoslu78nGXxEC70XE1jMVXKyaO9nsNVHs2dvXL3EY4eLByjNIzCLXmfkFU86Z8EmbMyyIqCw6BA+IFNJZX9/Vzp1LQKUAAQdoxCupGUty3qzAeI4ROq/lyySJrob4zIXAWinMkITpMyN8Iji8zpx9+0tO6dO27KB+dEKvzCOx7aq6TwDdL2oxQXx2VsM1IB0O3tVxfDWfSYu86EselrHYUyNzg3m5OIdiGM/FJ8pWLeU1kieK8OzO0wa6CJkhsQGB9R0vAj71ubTB2XYbQwyhU+PzU5tLYekmTwAcY1gR2sRfh4IH/Mres9pv/VpwTxbEm0zAjBYR5az9oSvfDIWUx6luRyc01rOuRZ21Zq5qLUMrSeUuZrIrBxXfLl1+ovBfzcGel7404+zQhIv6gmUkBiNiTcVMLVKO8t2L6Spkzg6BaqTTVGAxEoFjUimJw8NHkSSfdjAbpRFvguXgEi5cjqOPoylXw7m6u9KBddU8+7WArxW52w8kd7U8+7p1U8+Mi7U8+kU8+7n8+7Uu5z55Nt9YrUsCiFn/pofuCVI7nRV8+7U90qW54uWk0nU8+7UU88+71dU8+7q8+7UWk7U8+uxiyfeHrKLiQUtupYgT67jn3qhgi7U8+tl55xW9dnWP+7U8+dU897V8+0U8i7U8+dU8+7q8+7UWk7U8NNsKzTXepnd17q7F5hxSc/i6/lEMS7U8NbWkRxliSuUn==",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "1.7.3",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_TEVYGNDY1K=GS1.1.1707134184.12.0.1707134193.51.0.0; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _med=affiliates; SPC_R_T_ID=vtILMW8mBGxu4oa2hrBV2tEXDE+AnRS6bz9tEW/io3kOquAITdxsFp6iGha5mEbTKkynfNZujr9mqRYQp+dmkUsSluBaTSJzEJZONWHrCul2I83b5B06PLcnp5+0LlnnSo8lUuOIF5yPm9tOqIvvSbNwI8PCE99Be4ChiC27FPc=; SPC_R_T_IV=bk5UVGhRQ0xuRnIwZVRqbQ==; SPC_T_ID=vtILMW8mBGxu4oa2hrBV2tEXDE+AnRS6bz9tEW/io3kOquAITdxsFp6iGha5mEbTKkynfNZujr9mqRYQp+dmkUsSluBaTSJzEJZONWHrCul2I83b5B06PLcnp5+0LlnnSo8lUuOIF5yPm9tOqIvvSbNwI8PCE99Be4ChiC27FPc=; SPC_T_IV=bk5UVGhRQ0xuRnIwZVRqbQ==; _ga_3XVGTY3603=GS1.1.1709742030.2.1.1709742048.42.0.0; __LOCALE__null=VN; csrftoken=CfAZwc50P2HSvzZyieEq1bd1GtwdiOpT; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; SPC_SI=fdfmZQAAAABMQTNPZURwVmnUVQAAAAAAbVVrTHdZOGs=; SPC_SEC_SI=v1-MkxNWGFQZXZsOTl6VDFNSXAyHNGMobXH1m2owfx6ID16NVMFVDBfUnU2NG3mzCXvjeBLPnQxCl+y5RlkDmPxlMe1POCG1YqRsj5QedFTmP0=; shopee_webUnique_ccd=ohkdES7gpfZLJkmEF2Am%2Bg%3D%3D%7CdMW%2F5XGEiFkdjzbAPbcFTIBVNP12MZURo04Z9WH8uGUk3jJ2t6g2xokCZS9zsGhZsakSbHd8NFUCS7%2Bt%7CsIvtISk4CMJmuHCR%7C08%7C3; ds=71d6c3750fe8c2917bf673ec338e7165; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.366867320.1704346513; _gid=GA1.2.1236993575.1709912835; _dc_gtm_UA-61914164-6=1; _ga_4GPP1ZXG63=GS1.1.1709912834.60.0.1709912848.46.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=TElWRS04NDEwMzg3MTc5OTI5NzY%3D&from_source=voucher-wallet&promotionId=841038717992976&signature=40ff22a66eb329245bbb8b4b6e72389d9f6d9709e060c021021a76af6bd1c508",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":841038717992976,\"voucher_code\":\"LIVE-841038717992976\",\"signature\":\"40ff22a66eb329245bbb8b4b6e72389d9f6d9709e060c021021a76af6bd1c508\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
  "method": "POST"
})
    const res1 = await res.json()
    const used = await res1.data.voucher_basic_info.percentage_used
    if(used < 100){
        var d = new Date()
        console.log(used+"%" + ' time: ' + `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
        await fetch('https://api.telegram.org/bot6043554925:AAGVcKddvm8t_nRzgBlclulBFynT0YwAN0s/sendMessage?chat_id=-1002139375881&text=' + used+"%" + ' time: ' + `${d.getHours()+7}:${d.getMinutes()}:${d.getSeconds()}`)
        break;
    } else {
        console.log(`running...`)
    }

  
b+=1


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


    
