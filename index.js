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
    "af-ac-enc-dat": "AAczLjQuMS0yAAABjdGeMJAAAApXAiAAAAAAAAAAAv+Jk4+q9i6tIQ7SLhDY6zctiiijl/82EyfDx/bVRcPaaRvYm5f/NhMnw8f21UXD2mkb2JvbGvZfbALj6TJZ4OzcIQ4m/zy4QSz1oZ0hs4fZgd+EmyHE1z57EVq+cl4hwzDHVKr8L+Fys2o6SQc90hHGu4nYaRzG7CCsigGNuqaEEnfJe1bwFUnP+pT0DL5dH7zjBJLV+E+fgQUl7aPtw4LYKlwgXRHUBNHqknd5j4+bFol3MXCgJL81qi/4a6WzNBEbIWKOm7A1TevXxrHyi5cdKC+6MgpiJsGCXclVN/90TiRxAkh4Nlbg59E4MtZz8sJYY8zkFYvGfiey2tV9aXpQks/xZsEzkXOtiU/p4alGCOO8X3lV/jm6rclawxFAygS2HrAuI0A5SADGSipBCJ2HypKV8OLrst0BVFtvbNImz4ywoZFTFyXDaeH9ZWRk9OfQJJ2Rk1s1PhdaSJuCU17H6E0po/GPRwHEJkaGu4XkXZToK0+dVdMw2jXke7+iG7VqS4NO6/2nlqdgTgcoT4fuWw/Zl/82EyfDx/bVRcPaaRvYm5f/NhMnw8f21UXD2mkb2JvdlPPQb3+1UPZZ5AzRY0M/4uCgisFY7om8kJPXrmzIjuF5WafgdmuzpWYO/qz29bRpcHSfOmfuVPluO5Be9P3Gk0wQmo5FObWVAgXJE2Ztj2BmSOTISj16RpKsP9bgPgAHFT8jGpY3myiNDkSEmEKM",
    "af-ac-enc-sz-token": "pf30Y9EFfOhbTYcEXc0jkw==|oUYJ9GD77WJVgPWzXrWfz6R7qxyGjNxg+g+1dtYB1Q3iUnAFTGaeQb8Fpr1e/wPpiJ3nzwtgPm9jUePy|sxQbiBX+XHlzI9In|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "H4quX5zMu2QlL89yFREOtcr1gnuMxUw5",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-2_5.1.0_0_229|b58cb68fc75c4073b88f435b04edc89cc92962bf141146|10900|1100",
    "x-sap-access-s": "OhEUgB0pNKeKa6yEMRcbphn84HxF_uQhDVQaAEeGFTA=",
    "x-sap-access-t": "1708618821",
    "x-sap-ri": "4574d765a830491e8c9403300301a06021283662b534b2d3d9db",
    "x-sap-sec": "hJTGrwqX8kqW9kqWX9qn9kYWX9qW9kYW9kqD9kqWfkTW9koX9ktf99qWXkqW9Ht/3Zdn9kqWSk9W9so99kqkO1pmzzM9ISHx+ups9ttxJqix2IToYWNneRvCIzhaM/XSxzAQIlN0QAYM9BWYtboMl2cOqhYw73xwtz38Qcr7jiXlDCl9uD+agMKwPW3MAr0+ihjNamAcnaZsaq20NfI9S1kr32/IrVz0H+PQbFe0lxiFBu1BRDqsu5rrpbnl5/DwkY2v+sKfTlbAY960DOAp+qxIUqZCk2UjB+Xsni02rTjW0heS9KkLm2SdGbUi2DmGRzWzBbACdbqlTevGJ23WNx7fiyd5CA9S1egDML4gs7f1tU717cunY8bRvHbwhtUH3VpSltDxBx7PWRIparsnFgYgN9Br565At8bt8YGMHtyWqB25d18flERQPThQlSnTnf7PpJlytGGS8IrwS9bfbNI24APWnWmYl/RcCqs3mFg8uR7+EO+0EgaYVN68/udASZia9WgF72dWwHq+pm3kol7K6cyf9E599Wo/fsy22KpzqoMZ3CNumTwckGjqzDttNDTQi0NcyAyUqURwyVo6ESTPdCWo1JESgJR2sKxKELWZ1o6eY0tIqWpPTebLO9nehS9HhpuB5HoxPh6aJnB1UgdXEW6MqEK00O+mjJHEy8TcvtZ21RY8eOakb+OSNJ6Ial6KHbFGxNZ115xeJSEJc/SdrhmDGwjicp8M7VvXA6Jv01Jly0UK6mg2ijb2nNk+8xJ6BxfOY+y2/bjw8C0YhcWMujzk6OkqhDgoAl8mhr5cUqIqNxI2LoDcJl+a2ytfOP47/MLyhGJqFraAveXvF2xKeLnRzqxSLoucJhqqQfYqxvaVHSXWHkjMON609kbAN1WlNlDIEfP4K9DYmK8eSGd9vqhNB0UrvFBNX3fcxx8+fDA7QLFkxdvylF/KajHMMuLsq/uPg3G6AWKQi4YXnyJYh/wzukoW9kqRYMoLVMiR1+qW9knC3Zc6WkqW9r0W9kql9kqW3xG1yChKlhNp4TJH0fhFxPgL3h1n9kqW18VrVMTBvQYW9kqWMec63ioW9kqx9kqWAkqW9J5cX/ydz4rQ0VmsB0Mun50m+U/CWkqW9IVJvMaKwIiK9kqW9koW8kqn9kYWWkqW9koW9kqx9kqWAkqW9rU3de1Qe2EFmL9bkkVPYiJvgSxfXiqW9I1d1QXJVgaW",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "3.4.1-2&1.6.16",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_TEVYGNDY1K=GS1.1.1707134184.12.0.1707134193.51.0.0; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; SPC_SI=CFPUZQAAAABucGQzSWFUUayQAQAAAAAAZDZLcGhBMUs=; _gid=GA1.2.967953127.1708441565; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _med=affiliates; SPC_EC=.Mm4yRzU2S0YwSXN6ZnpYdP45XJJx/YMRyI04K4rg+BDXZOzfCMthSN12ionpPA0COzBrgkiBlnjxqWQzixKYMqJYGxh/e5RyQy1ACW45VXqQYtaAjUhMqdnTRh6a7bPyGZBHjrKOkSkgNnwU3/pFfB5fyKF5w/Tc/xd5iX0Twz2Yg5Gj/w+4W4qic5wwagGRY2JrGQs8Zg/XF99k4sGzCA==; SPC_ST=.Mm4yRzU2S0YwSXN6ZnpYdP45XJJx/YMRyI04K4rg+BDXZOzfCMthSN12ionpPA0COzBrgkiBlnjxqWQzixKYMqJYGxh/e5RyQy1ACW45VXqQYtaAjUhMqdnTRh6a7bPyGZBHjrKOkSkgNnwU3/pFfB5fyKF5w/Tc/xd5iX0Twz2Yg5Gj/w+4W4qic5wwagGRY2JrGQs8Zg/XF99k4sGzCA==; SPC_U=1041523811; SPC_R_T_ID=RYdlG9XejRQ4P9NFjE8ORWbJICHc6fwClOpBuxxpzmpJFeSA3QUaq9sfJVkwz4i+a0Wf0Ihm5Xq5lidYOzyCY9wbOCOpvTcL0jVKLOwfUmNPpCdUjyFALjTejetTO5MwFzWkW/gQZrSH/5P7TQJyt6ft+OdmxAeGMgVaPoKixJI=; SPC_R_T_IV=YlhuTDVaQXdlRmFKNVROOA==; SPC_T_ID=RYdlG9XejRQ4P9NFjE8ORWbJICHc6fwClOpBuxxpzmpJFeSA3QUaq9sfJVkwz4i+a0Wf0Ihm5Xq5lidYOzyCY9wbOCOpvTcL0jVKLOwfUmNPpCdUjyFALjTejetTO5MwFzWkW/gQZrSH/5P7TQJyt6ft+OdmxAeGMgVaPoKixJI=; SPC_T_IV=YlhuTDVaQXdlRmFKNVROOA==; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; SPC_SEC_SI=v1-S29qQnFmOWU0ckpNTmRySAPjm/6Vj49UrL5on4nSp8Hqb+JV16/LG9XLMRMnVM5XUa1G4yTHxmZA2OZpRnoHBjHh1shm52ml9lymQedMxeQ=; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; __LOCALE__null=VN; csrftoken=H4quX5zMu2QlL89yFREOtcr1gnuMxUw5; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; shopee_webUnique_ccd=pf30Y9EFfOhbTYcEXc0jkw%3D%3D%7CoUYJ9GD77WJVgPWzXrWfz6R7qxyGjNxg%2Bg%2B1dtYB1Q3iUnAFTGaeQb8Fpr1e%2FwPpiJ3nzwtgPm9jUePy%7CsxQbiBX%2BXHlzI9In%7C08%7C3; ds=8ef5c7ddf068b3d5ca2cb2f4695d3e5d; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.366867320.1704346513; _dc_gtm_UA-61914164-6=1; _ga_4GPP1ZXG63=GS1.1.1708618806.44.0.1708618819.47.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=RlNWLTgyNzkyNzU4Mzg5OTY0OA%3D%3D&from_source=voucher-wallet&promotionId=827927583899648&signature=08e2875cff38f9fc1d359a5860831dc3ded9e2c0023f5265aaacfd1fe71fef3c",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":827927583899648,\"voucher_code\":\"FSV-827927583899648\",\"signature\":\"08e2875cff38f9fc1d359a5860831dc3ded9e2c0023f5265aaacfd1fe71fef3c\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
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


    
