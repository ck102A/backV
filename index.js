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
    "af-ac-enc-dat": "AAczLjQuMS0yAAABjgm7dDUAAAlmAhAAAAAAAAAAAv+Jk4+q9i6tIQ7SLhDY6zctiiijl/82EyfDx/bVRcPaaRvYm5f/NhMnw8f21UXD2mkb2JvbGvZfbALj6TJZ4OzcIQ4mu/KnsMm/BPuRO6MFWvDpCvFsZcbIybDxVhwn0rcpYzT8L+Fys2o6SQc90hHGu4nYaRzG7CCsigGNuqaEEnfJe1bwFUnP+pT0DL5dH7zjBJKXpsHOkfuMsYyMw73UoWy4n2FhjynS7BFWFNgVa3iGYLCoL2HWiLOifhCfIrZPajNR3TDYdwKv+nB9GgWWNVVwt5t8/YfzPb7M1Dv7MQEQ+lXPilfNLxYax3BCRvxa2/M9udFei/bGBs8JbWf+79Nuuj4OPNN9OSQn85wzNlzc4W6T7TObfycbgG0Cqnzrlsu50w8g2xO4sLIL9xdWXRwdm/iWCYDWa7fAe9AoX2m/T0vkoMGxi2rBLZFPYM8Mrvpbr82fhIggGzVDwPsubcE+o/GPRwHEJkaGu4XkXZToKzyWPixNkA93jVevNHNSfeKD/2aDQWh7eFt5edr/3WXwl/82EyfDx/bVRcPaaRvYm9JBGF0xaolNvtTR/pnRd88TeUAhbodJtmu4kLBVAN/IXXZVb6DSri1txdxM24th1uPA9AT63YvCe7DzNXwGm2r5eoNfbZETkOWrYjnXC8n6E3lAIW6HSbZruJCwVQDfyNwe9chsoMath5qOKlZWIf4=",
    "af-ac-enc-sz-token": "ltg90U3yaVfnjo/VhS2RSQ==|kBy1IDF7vvk9Xgst8GOyXARprpV/odsuHkqgUHCYliiO+vmRd/mseVoYQpZt12OhfYB6xZWKhBCxCgGd|oCHl33WfivCA31Rs|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "FZ8U49udHZySjz38qK8rJJEhffaSLLz2",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-2_5.1.0_0_231|ba67cb285a1243aea3dc94dea3808f98e64c21747e1e47|10900|1100",
    "x-sap-access-s": "rd2cvHTDroqo0R2GzaON1aymvGcTbjRGFxfA_fFqVWY=",
    "x-sap-access-t": "1709560263",
    "x-sap-ri": "c7d1e565ca55c4b9f2a87e3003010b13079e3defd24cfa6d9aa0",
    "x-sap-sec": "jdtTYZjPGDXkYDXkwIXoYDjkwIXkYDjkYDX4YDXktDVkYDNPYDWdYIXkwDXkYnBaJ26oYDXkRDukY1NOYDWthW3cw4+7IZHvUu5k5N7hmi+G1srtByelPlwA1OAXw/c5UA/64YImRQ7IySQbEPKZ2h/mfrQzJpZLsJ3v1EfLHtdpVwYHo5Qwt9Wx0NZyxUEfrwR9Bp82y4YUJb2jCHhWcijnThC44K1LlAmQe2UcyJk+Vypg4qUSbCCztUIovCLJnW0IWpOGHVjTCSWQDhFlX/WGdwEeXCogm6B9FtDG8psmBXplK+C9ZRaseAkXttvuY8XpqV7TNcpCid5SLPII7gYGf9RqspgmoZmDDTOTQ0N6zvf2R6iKsG6YTP7irF5r/KovQXpqj83DiBfS/6PkrZWS2j3w1nMQ7D/3mXF0oKiaOGeSwRpsxTqGUoKbegPJEpcT6MKqGiIfygM6WH8ucns5lcWHddQ61SKDXDTU6n4h51mME7h2v+4kc+dFyQo2QZc/FBF/+fahERbuR7rO8IoacaawWeoC2cm8A/OsFVxDKaCBAh1WSDx81uQwNlYcozptV6RWgqG27OkxCOz7oBNdvtXknvyG2DvKP3rYpXwjvxYWVniMkJ9llBYhyIIseS1PVnsoPXJWsGOncj+h0DIo74grImYvEzulib+KSvJTwvvHirxd4WsCvEjK8nQrHw1k8BNiQFALcYLY63Y3A7g+AMqmepe6OzCZrwwAsRfnbZ2/3Ei5VeTBDCO8ynEqVdbPV9tnJQ0KtBUunyv3j1k+xeLLsQOmpE2NX98uCOhN4pzVpoFSwvw+WXjkuNx037gF0EE371jsfriQdljUjNKS6MBNqSffWZu3gpItPujrUj4VPD/pNgQSjQn2QhPmQgwipnG7ch5ZhVQXZtaCsnIMVerOT4Ro9qvkniSJVedcFDMIlhsI8i0QrCitvmGJ7zUwwczPTFnnAkbuUjNE5zDdfCYITfUiPaXoYDXkXzwgX5ViX5wkYDXk/u/ZJQrkYDX7YDXkbDXkYFgoc5Jtp6mUIQ0AskJcoOlL3PbCCDXkY9q89kzy9RbiYDXkYnBZJ26oYDXkZDXkYFjkYD82PPf0cfmM5Lhj6Hi6/p6vQgM7IlrkYDXmyijl9zVizlXkYDXoYDNkCDX4YDrkYDXoYDXkZDXkYFjkYD9R1hxGmc3LB3rkXaUNMphnC5izSlbkYD9Xz5TWXzbzYn==",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "3.4.1-2&1.6.16",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_TEVYGNDY1K=GS1.1.1707134184.12.0.1707134193.51.0.0; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _med=affiliates; __LOCALE__null=VN; csrftoken=FZ8U49udHZySjz38qK8rJJEhffaSLLz2; SPC_U=-; SPC_EC=-; SPC_SI=gy/cZQAAAAA4OWVmaEpEU/i7ngEAAAAAQkZXRmJDYnQ=; SPC_SEC_SI=v1-ZFBYbkJHU0JNSHRNMmpIYgZZjEqL6e6Z/TgCQMYL+uapuor3NGktGi+4jM2DIzetGh3uPNhv0eF/5tt9yRuwNEDIyWaoup3PWISWrX80YRg=; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; SPC_R_T_ID=vtILMW8mBGxu4oa2hrBV2tEXDE+AnRS6bz9tEW/io3kOquAITdxsFp6iGha5mEbTKkynfNZujr9mqRYQp+dmkUsSluBaTSJzEJZONWHrCul2I83b5B06PLcnp5+0LlnnSo8lUuOIF5yPm9tOqIvvSbNwI8PCE99Be4ChiC27FPc=; SPC_R_T_IV=bk5UVGhRQ0xuRnIwZVRqbQ==; SPC_T_ID=vtILMW8mBGxu4oa2hrBV2tEXDE+AnRS6bz9tEW/io3kOquAITdxsFp6iGha5mEbTKkynfNZujr9mqRYQp+dmkUsSluBaTSJzEJZONWHrCul2I83b5B06PLcnp5+0LlnnSo8lUuOIF5yPm9tOqIvvSbNwI8PCE99Be4ChiC27FPc=; SPC_T_IV=bk5UVGhRQ0xuRnIwZVRqbQ==; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; shopee_webUnique_ccd=ltg90U3yaVfnjo%2FVhS2RSQ%3D%3D%7CkBy1IDF7vvk9Xgst8GOyXARprpV%2FodsuHkqgUHCYliiO%2BvmRd%2FmseVoYQpZt12OhfYB6xZWKhBCxCgGd%7CoCHl33WfivCA31Rs%7C08%7C3; ds=8d7cc1677b13230ec7e9461b5140bccb; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.366867320.1704346513; _gid=GA1.2.1786406799.1709560257; _dc_gtm_UA-61914164-6=1; _ga_4GPP1ZXG63=GS1.1.1709560255.53.0.1709560260.55.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=VklERU8tODM1MjcxNTc1MTI2MDE2&from_source=voucher-wallet&promotionId=835271575126016&signature=78a200fa664cf3308bfc2814058403ddd9b5f2c6f8b1f2082169bd9637031f32",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":835271575126016,\"voucher_code\":\"VIDEO-835271575126016\",\"signature\":\"78a200fa664cf3308bfc2814058403ddd9b5f2c6f8b1f2082169bd9637031f32\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
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


    
