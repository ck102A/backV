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
    "af-ac-enc-dat": "AAczLjQuMS0xAAABjja8YT4AAAXSAZAAAAAAAAAAAiJ4pX3er/cbtIIrdi/7jMhrAugGUmDRTdP5JTFDk2+n8P4nhRkaq8yB9vYBAJaX0VJ6kNwtQAKeKBaYLtblS8bfiWsAqFBwdDotSNiTYu7UxoFMAxN5QCFuh0m2a7iQsFUA38hqWAB88FTY52P/elhePpWL/NIgwspfypL6HT+4PZk+wNd/S2TizKKdOPITO/W+NK7dl5ogZyZod78gWSdMsy3UmksFYKOt4JA+h4uzaoZqLU9eMQYZbLcMxVW6RkoOz7Zsf/2qgD4O1ZNNY9Vp7K1m56lu51dYztFkn6RhJEn3paDdBdJp550lLRWYRNXVoxjlltRwaoXs6qS7mV5XdIW8HoGiB92m9ems3RNQw5EMB5f/NhMnw8f21UXD2mkb2JtiVTylp3LY+SoiiIs3E6CpBHWzxD32qq8OgIO5CRuqgw56b+4LHFLiROjzUBlD7X/mtPtEXHR6u8Cp2jfGDSrEeUIziZdDwYbhGNjdCUaSP5f/NhMnw8f21UXD2mkb2JuSuMbqajWfYlFZgmz2Rf/t",
    "af-ac-enc-sz-token": "",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "mmMwBtgs2OfhZBFDSbI3tLBHzoZJ835t",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-1_5.1.0_0_229|c96e818f7a2a4133bc6b673debdadc41ce4afdbb8a404d|10900|1100",
    "x-sap-access-s": "wRHxRBd0dYbNRU3YmNXchm1WIAMYFNVtFkAd3649qnw=",
    "x-sap-access-t": "1710315300",
    "x-sap-ri": "2457f1652df81640f0e80b3b03010c0643085a72503019e170d2",
    "x-sap-sec": "7WEijpxTO0xFr0xFkYxUr0vFkYxFr0vFr0x8r0xFg0lFr+/Ar0ZgrYxFk0xFr6bKxFOUr0xFS0lFrKEAr0adXrnarWUAaCYrNmFUnvU0BqPEnlbCyvgVvLfBIG+k6poEv/1YPR78aR9wN8nkyjFWaf6FJuJXEUaxDmrUItB4b/h1CQBnLakqxVgmOsvxVya90UTXasw+kLKipaha9VyG18IPFk9IC2YWj8YNqt84tEggMcp0T/2VfErXlpi2DsiLm+LqHjJMiv4M7iTvihAbrrLUcUU27kg5utkB73aTzSxqMlPCOUMex0eFbfhL0CJF6d+2VfSHYJJ6R+2wUQdy2sboy9C0kC9OmbqZkDZ+8tmhwk92DKJn73Cm3T31Qc7m6btY3C+nMw8Jdk9q8UhGESg0Gwx0HFjdQZdKGLYpQ3ysqogDUYAr0YAhthDsKB2Fq5DqAXSlHopj4Wwhcq6H1r44BucmNYeq+D4YfikeoXHBWuYT6fEvAwOJ/JiN0/Rs7ovzMDQZRG1D5lmEuGbsHKjmO4hsHLiY8SI5s0uhB/8MzSJPmWZ3SzdQ3uQsOQSR9/1jVXfmajtBY6Ifdz9HPiS8Hu/4NagZOvbrLHX/wwx9zNO+Ay4dQn+eRC1c9tLbVEteBBselGoqwp8x4Bqv313Hy0Y7ITezT2jrDVzG4f2Oq1jyk7gxJ7HQOO4WgQExu/Deucl0EsYYOVjyfv+dT3pDOwIGJpExSt8LD5CZW5riwHXpO+gzYghOG1rTpxJ4HwiSAC9OIalQufH+g03kcH/KJP6iC5SoIME/9z8CMJ7bM0b0MyR6Lea5P0xFrLFIeLCMHGC3r0xFrNH0xFOUr0xFI0xFr2vFr0aBxgrq/Z2pF/vaP3vHSHYw+m8WpYWFr0ZISGG50hWBrdH0xFOUr0xFI0xFr2vFr0bH+zRagsvmpI7LkWxRLYktIzECjY/Fr0x3StfQHhC/S0xFr0xUr0EFP0x8r0/Fr0xUr0xFI0xFr2vFr0bgDhjHEL4IKE2I5FQ9pFYrV1yyaYWFr0xBHtWcSGxBrK==",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "1.7.5",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_TEVYGNDY1K=GS1.1.1707134184.12.0.1707134193.51.0.0; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _med=affiliates; SPC_R_T_ID=vtILMW8mBGxu4oa2hrBV2tEXDE+AnRS6bz9tEW/io3kOquAITdxsFp6iGha5mEbTKkynfNZujr9mqRYQp+dmkUsSluBaTSJzEJZONWHrCul2I83b5B06PLcnp5+0LlnnSo8lUuOIF5yPm9tOqIvvSbNwI8PCE99Be4ChiC27FPc=; SPC_R_T_IV=bk5UVGhRQ0xuRnIwZVRqbQ==; SPC_T_ID=vtILMW8mBGxu4oa2hrBV2tEXDE+AnRS6bz9tEW/io3kOquAITdxsFp6iGha5mEbTKkynfNZujr9mqRYQp+dmkUsSluBaTSJzEJZONWHrCul2I83b5B06PLcnp5+0LlnnSo8lUuOIF5yPm9tOqIvvSbNwI8PCE99Be4ChiC27FPc=; SPC_T_IV=bk5UVGhRQ0xuRnIwZVRqbQ==; _ga_3XVGTY3603=GS1.1.1709742030.2.1.1709742048.42.0.0; _ga_4GPP1ZXG63=GS1.1.1709946206.62.0.1709946206.60.0.0; _ga=GA1.2.366867320.1704346513; __LOCALE__null=VN; csrftoken=mmMwBtgs2OfhZBFDSbI3tLBHzoZJ835t; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; SPC_SI=zhfwZQAAAAAzSXp1RWZsUK6yHAAAAAAAbU4xU1Y0VGU=; SPC_SEC_SI=v1-c2VaMXpVdXpMdmZQdkVDb7XiS5xrMf1rOQJ36ODU4ZHUjS3poHegyntIWlPSGg8QDc1IFz7ACnv8/xRndgWmiBBRjT9ioEA+gbczScnG8VI=",
    "Referer": "https://shopee.vn/voucher/details?evcode=RlNWLTg0MTA0NjM0MzQ4MzM5Mg%3D%3D&from_source=voucher-wallet&promotionId=841046343483392&signature=1988b8bcc7ccbeeb367fec497d203c899af9fe23ac3c306e30c19ae49f6660cb",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":841046343483392,\"voucher_code\":\"FSV-841046343483392\",\"signature\":\"1988b8bcc7ccbeeb367fec497d203c899af9fe23ac3c306e30c19ae49f6660cb\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
  "method": "POST"
})
    const res1 = await res.json()
    const used = await res1.data.voucher_basic_info.percentage_used
    const info = await res1.data.voucher_usage_term.description 
    if(used < 100){
        var d = new Date()
        console.log(used+"%" + ' time: ' + `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
        await fetch('https://api.telegram.org/bot6043554925:AAGVcKddvm8t_nRzgBlclulBFynT0YwAN0s/sendMessage?chat_id=-1002139375881&text=' + used+"%" + ' time: ' + `${d.getHours()+7}:${d.getMinutes()}:${d.getSeconds()} \n${info}`)
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


    
