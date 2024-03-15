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
    "af-ac-enc-dat": "AAczLjQuMS0xAAABjkDBgjkAAAmUAhAAAAAAAAAAAiJ4pX3er/cbtIIrdi/7jMhrAugGUmDRTdP5JTFDk2+n8P4nhRkaq8yB9vYBAJaX0VJ6kNwtQAKeKBaYLtblS8bfiWsAqFBwdDotSNiTYu7UxoFMAxN5QCFuh0m2a7iQsFUA38hqWAB88FTY52P/elhePpWL/NIgwspfypL6HT+4PZk+wNd/S2TizKKdOPITO/W+NK6oDxtA6WRSRmbBO2/zrHsPmksFYKOt4JA+h4uzaoZqLU9eMQYZbLcMxVW6RkoOz7Zsf/2qgD4O1ZNNY9Vp7K1mifxBDBgWFqCXKBQhBapnd9yd3hz1zIQfxbpkJ62cC5UGijw6O5CmtmOTmrfKzQ0OLtZJw4egrQNif1UCT41GaHmyAkj9xCfx81Bz2Ctj3P2jdF0QH80HhjspBouuY/o/5xicULU8/28ZS9/El9OHjNVWPmNWJ9UqxLQFpZWbbVFNDvS7cqhDR3k0YN/CoX+CIU8k0U8Z9uEWvRNx6gU1RV8UVPkmXHvVPep7kYnGMr69Ehrs8sxCJ34xk1bmhugTl/82EyfDx/bVRcPaaRvYm0zOGhLrp5LMvXgTAM4BOzWq7hdfPfzpV8Ev6WV3ii4hBkvNFz83OwoYgZarc9RJhZq2WbOvIKEJCZv3jMXJj9OgxhHR900nRlnFcVNtYI7Il/82EyfDx/bVRcPaaRvYm9jVLcK9Q/8wU7q8Novshis=",
    "af-ac-enc-sz-token": "EcMrf4nZbIUouIcE/sYI5Q==|v2mzILESidBWoWZZ3YyxXaRpNhXllkMNK6UwoJcmOCNp2cggYjFU2XuMIHG2YDsSOBWNAyoyvpKqnI8A|gLYsIVOKXhWcA6Li|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "4lawphCtCezFEJhOaA4ZLUYDcd57OoVk",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-1_5.1.0_0_230|71066ba2e94e48c99be251b4be699db1b4e3ace54b6c42|10900|1100",
    "x-sap-access-s": "eauQwBTOHXQZEVa4x9cbgL1t5IIVcT3QFe-TyhL8TJM=",
    "x-sap-access-t": "1710483408",
    "x-sap-ri": "d0e7f3652266dfba74382d330301002b659f2c95c96176475768",
    "x-sap-sec": "UxF4DjBtrqOqOqOqPoO9OqBqPoOqOqBqOqO1OqOqNqEqOqftOqraOoOqPqOqOTjdbcx9OqOqUqsqOWfnOqO1R+OxrbQdJNPZHu6PqNAZZBrhAWgUrXHvgYbKgVCHXKpP6dgU0/kCOnecVHpNcGxRHbuiH0hBom8NeaYWGJfDGwJx+1tive8zB6GtWVb14nqHT0vhOAcdvCuaHGE788Hm2tDnt40HpZ+Z2mNdF9nEGMG8+4rJ8ct00M2MnnYFZ7JdhLtEUyozHQ33z2VD45o9jB9u7HPa2yXAVWskpGBIY9IrPze5VLKNq2um55NwWCMkiZJUSCIPSIvtOR9INoiVLPDMrhd+KQ1sOynPunx3a1W1KqbhUMWZV3GO1K+RpiGBv/7uF0IZ9e64Ziqa8S1WLqUrDYm8ckuo72fkWj2q+e5UtMhtjOJ1xtP6yM66lSlpdJOW150Zopcc376NlBzUUaVJTPlT7lJ8ApIcJi5eaT56FUcILKR+PzlD/qmumLoCww4eExsKSS21lgrmR8hcuokvJAGIHO1JvMWNMX/BICul9nr64pgBPu0zv/elUGwQolPB2dIoOO9+hUqtO23MeR9ybvwUDiDNPNF7JAiDL4uDCw9sjtqDHi9suGGPgYvwNqpkZlri8yLeSHipewr6LSNOcVENlf8wrUCMwwbQcKjKML0FAnDTL6MTXt8iug4Svr613SyzNNxlM1knrI7nwMbGBFtRx6QrpzfuiodS/r5zOATz6KhRDIKSptvBT1D2XitOINcy4LcYNHb+3T/ZCF3PGMT5A8ZRMiyuRgfOTLLox++ooR2GtKLXDSq4YGu44WrH2IVE1a4J+Tko6t5daXiv8nAM/WPXZp0kgoTKqAd+liA3WYuVocBdyhEY/P9JCqgVKfxI9H541lMVRIuxSulzq1STscJim8ZO59qsVI1FCvCklV1RtzHV4lMmfMDToUYmZ9O/n9rR9JlEZ1lXIlK5Rmnjz2Vrj7n9OqOqLh3SeEE0SGWqOqOqTFbcb0WqOqOyOqOqJqOqOV9H3jdqFCzGhM2KnyZrN4zi++SvkqOqOtW+LtW2EhB7OqOqOTjcbcx9OqOq5qOqOuBqOqk7tbzOe+ukm1z8oVPuDgPZjLgKJ0WqOqPpSxJhExsNSYOqOqO9OqfqkqO1OqWqOqO9OqOq5qOqOuBqOqr2JH+hyfZymGFR9nhjAo/4iN8P8o/qOqPpehJsLG/6On==",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "1.7.5",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_TEVYGNDY1K=GS1.1.1707134184.12.0.1707134193.51.0.0; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _med=affiliates; SPC_R_T_ID=vtILMW8mBGxu4oa2hrBV2tEXDE+AnRS6bz9tEW/io3kOquAITdxsFp6iGha5mEbTKkynfNZujr9mqRYQp+dmkUsSluBaTSJzEJZONWHrCul2I83b5B06PLcnp5+0LlnnSo8lUuOIF5yPm9tOqIvvSbNwI8PCE99Be4ChiC27FPc=; SPC_R_T_IV=bk5UVGhRQ0xuRnIwZVRqbQ==; SPC_T_ID=vtILMW8mBGxu4oa2hrBV2tEXDE+AnRS6bz9tEW/io3kOquAITdxsFp6iGha5mEbTKkynfNZujr9mqRYQp+dmkUsSluBaTSJzEJZONWHrCul2I83b5B06PLcnp5+0LlnnSo8lUuOIF5yPm9tOqIvvSbNwI8PCE99Be4ChiC27FPc=; SPC_T_IV=bk5UVGhRQ0xuRnIwZVRqbQ==; _ga_3XVGTY3603=GS1.1.1709742030.2.1.1709742048.42.0.0; __LOCALE__null=VN; csrftoken=4lawphCtCezFEJhOaA4ZLUYDcd57OoVk; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; SPC_SI=zRfwZQAAAABLbngxM05TSt9kSQAAAAAAQk8yUDZmVTM=; SPC_SEC_SI=v1-UThSOXdZY2xGVVZuOVdjNLmu0nFGUH4rXJjRPp18cxh6iWTL+p663Jl1fVA2+3WrMtg0f0Si6jfo3+aRB8lnCGXz54cCN/LwFF+iY4d4wQw=; shopee_webUnique_ccd=EcMrf4nZbIUouIcE%2FsYI5Q%3D%3D%7Cv2mzILESidBWoWZZ3YyxXaRpNhXllkMNK6UwoJcmOCNp2cggYjFU2XuMIHG2YDsSOBWNAyoyvpKqnI8A%7CgLYsIVOKXhWcA6Li%7C08%7C3; ds=9fa409f5275875d423c136e7a2af219c; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.366867320.1704346513; _gid=GA1.2.343456606.1710483391; _dc_gtm_UA-61914164-6=1; _ga_4GPP1ZXG63=GS1.1.1710483390.64.0.1710483405.45.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=TElWRS04NDU4ODY0Mjc2OTMwNTY%3D&from_source=voucher-wallet&promotionId=845886427693056&signature=954c7caa4f2b14411678e82a5efe8c0c6fc9b14a7586b58e92b6bd42dcf6eb3b",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":845886427693056,\"voucher_code\":\"LIVE-845886427693056\",\"signature\":\"954c7caa4f2b14411678e82a5efe8c0c6fc9b14a7586b58e92b6bd42dcf6eb3b\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
  "method": "POST"
})
    const res1 = await res.json()
    const used = await res1.data.voucher_basic_info.percentage_used
    //const info = await res1.data.voucher_usage_term.description 
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


    
