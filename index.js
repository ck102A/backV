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
    "af-ac-enc-dat": "AAczLjQuMS0yAAABjc92Nk8AAAkiAhAAAAAAAAAAAv+Jk4+q9i6tIQ7SLhDY6zctiiijl/82EyfDx/bVRcPaaRvYm5f/NhMnw8f21UXD2mkb2JvbGvZfbALj6TJZ4OzcIQ4mu/KnsMm/BPuRO6MFWvDpCtkiS3bHuStQECvm5x1q4hj8L+Fys2o6SQc90hHGu4nYaRzG7CCsigGNuqaEEnfJe1bwFUnP+pT0DL5dH7zjBJJIURfIT0S2hUTboc71d06IsChyqKU6ayyEc4JRr5bYRno6HXIWXPMZtXFmx3fXU1OJk42HaTGyLCgQwhkIV9ZOOVXQiB+oK2apCPru7JgXFlVhxkZNHiguJbpJnnS8EF8Kkpq8AIylYIGpDnkLYrD/ZsEzkXOtiU/p4alGCOO8X4BDyd1sBvcL2XHB//Zbwy65dIVHgUUuY/L2vA1LJqcC8OLrst0BVFtvbNImz4ywoZFTFyXDaeH9ZWRk9OfQJJ2Rk1s1PhdaSJuCU17H6E0po/GPRwHEJkaGu4XkXZToKzyWPixNkA93jVevNHNSfeKD/2aDQWh7eFt5edr/3WXwl/82EyfDx/bVRcPaaRvYm9JBGF0xaolNvtTR/pnRd88TeUAhbodJtmu4kLBVAN/IXXZVb6DSri1txdxM24th1uPA9AT63YvCe7DzNXwGm2r5eoNfbZETkOWrYjnXC8n6E3lAIW6HSbZruJCwVQDfyNwe9chsoMath5qOKlZWIf4=",
    "af-ac-enc-sz-token": "sIVr13DTVLSwBeG87pRGPQ==|q0YJ9GD77WJVgPWzXrWfz6R7qxyGjNxg+g+1dk8mPRPiUnAFTGaeQb8Fpr1e/wPpiJ3nzwtgPm9jUePy|sxQbiBX+XHlzI9In|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "ejzoGwF9jsltUEhTDUUXC1GMcbV36cxp",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-2_5.1.0_0_230|43014eca3f3a4bf3ae0a4aae9809a9ae32133520dcde43|10900|1100",
    "x-sap-access-s": "6DBVGJXvn_U9_y_AoEaquDIh1V8y3eNnMvu_wZdZPcg=",
    "x-sap-access-t": "1708582647",
    "x-sap-ri": "f6e6d665e092e0b24baf423a03014940486d78f5f51becb45003",
    "x-sap-sec": "gXHYsV2uj4pnf4pngTpWf42ngTpnf42nf4pvf4pnX45nf4wuf4sxfTpng4pnfoCQHGzWf4pn34rnfEwqf4oRdzlcmp9In1vfuOkEd1d8+arsGjKUcYDSqzrgrq+ijU70KPHLWHI/Tza9l5qX1eUMjGBmlYHe0Oy9mv8Jv9uMwYjlV2jwM902Iirq6Zb53sMuz76Qa1ZQ2mJZ7Jiv681e+/urduFdfaErgIv+Ppo3sm2J0hlUCmz32torDfWZnMunx8mQh+AqWEUxybPSniqkc0h6RuJYUuOHU2Jg35xZfJowhRCYUVb1AwxyEZ/I2HnpOupQxA2ckpzgPNFEWJEC7K9waYAr7EnHv0awzTw1asFGFWmY36sPkXHr2LeJ6mpLj6a+3KImzKM5NfTo6RQHg/sRfljUVrxSj7zfIzm6MBNE/q4YUH3CDDik9iyY4wl3y/uuGO/JSCm3BxIX2WXA7ZR2R03GIUo7s789idB8VuOnpSI/hKcMOMXp85Bp1fRWgdm2O/M4nQhRl86BtzikVCtU15RVCTiNxTffgKtpLOM5i+h+4gywys4c9fe7GnXB4EwP+10ZPMJ4cd/1MpZ66QKRFrmpmaxnKBY+jyFx96arPe62N3gd8Y5rN3QqTKVJWkexSkDQH0VPmzPSsEatyX4vat88hFl8ISd3i0mGRqtD4QiLZq/XiwFWWyxbOZsDk+H+hIajUPWy4aUP5eUgcz21uZCleSezfOkx2PqasfnslLjlHUbO7HT6PuOwnnpN7pLlBLVXZgoloIDqg9YhTUBEf+anjOLrQbnFA+GXtw0YOwMCLnUcIiXnMBMCfNKl39H/8dpTwUUA/MV5Errtq9RrIFbcBN1H4ln1hWetnwqG9qKeIdlO4lHFzuISlgQuvIk3vKssCiKtnx2xVuUDqH+qU0+qhAgN958H114bNkESm0KVgPFliCU5okXer2TMMwpWR05dKCjqVaknXR8YdkcpKiPBK5phVcXWf4pntON2nmr6tB6nf4pndhlRHyunf4plf4pnm4pnfPQ2V+X6n/AUxAMCLAG0Cf4XriYEi4pnfO4SnBrKZBSef4pnfoCRHGzWf4pnz4pnf52nf4hcKeNkdZ96W5AorX+d+Jff7WwVnTunf4pBnfN7ZFN3xypnf4pWf4wni4pvf4unf4pWf4pnz4pnf52nf4oVKSsH8Zn5McXFxS+htJ7SmMjjWTRnf4ohZFSotcR3fs==",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "3.4.1-2&1.6.16",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_TEVYGNDY1K=GS1.1.1707134184.12.0.1707134193.51.0.0; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; SPC_SI=CFPUZQAAAABucGQzSWFUUayQAQAAAAAAZDZLcGhBMUs=; _gid=GA1.2.967953127.1708441565; SPC_SEC_SI=v1-a0ZHNUlkemhOOVFQNWZWNLS7qtC1uz8IaunhDxJop0517XzKws5/NCjLdzJnH+NgrFEJO75gugIH7XV5H+79rQrDdGiZgTsHD//TwtTCa2Q=; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; HAS_BEEN_REDIRECTED=true; _med=affiliates; SPC_EC=.Mm4yRzU2S0YwSXN6ZnpYdP45XJJx/YMRyI04K4rg+BDXZOzfCMthSN12ionpPA0COzBrgkiBlnjxqWQzixKYMqJYGxh/e5RyQy1ACW45VXqQYtaAjUhMqdnTRh6a7bPyGZBHjrKOkSkgNnwU3/pFfB5fyKF5w/Tc/xd5iX0Twz2Yg5Gj/w+4W4qic5wwagGRY2JrGQs8Zg/XF99k4sGzCA==; SPC_ST=.Mm4yRzU2S0YwSXN6ZnpYdP45XJJx/YMRyI04K4rg+BDXZOzfCMthSN12ionpPA0COzBrgkiBlnjxqWQzixKYMqJYGxh/e5RyQy1ACW45VXqQYtaAjUhMqdnTRh6a7bPyGZBHjrKOkSkgNnwU3/pFfB5fyKF5w/Tc/xd5iX0Twz2Yg5Gj/w+4W4qic5wwagGRY2JrGQs8Zg/XF99k4sGzCA==; SPC_U=1041523811; SPC_R_T_ID=RYdlG9XejRQ4P9NFjE8ORWbJICHc6fwClOpBuxxpzmpJFeSA3QUaq9sfJVkwz4i+a0Wf0Ihm5Xq5lidYOzyCY9wbOCOpvTcL0jVKLOwfUmNPpCdUjyFALjTejetTO5MwFzWkW/gQZrSH/5P7TQJyt6ft+OdmxAeGMgVaPoKixJI=; SPC_R_T_IV=YlhuTDVaQXdlRmFKNVROOA==; SPC_T_ID=RYdlG9XejRQ4P9NFjE8ORWbJICHc6fwClOpBuxxpzmpJFeSA3QUaq9sfJVkwz4i+a0Wf0Ihm5Xq5lidYOzyCY9wbOCOpvTcL0jVKLOwfUmNPpCdUjyFALjTejetTO5MwFzWkW/gQZrSH/5P7TQJyt6ft+OdmxAeGMgVaPoKixJI=; SPC_T_IV=YlhuTDVaQXdlRmFKNVROOA==; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; __LOCALE__null=VN; csrftoken=ejzoGwF9jsltUEhTDUUXC1GMcbV36cxp; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; shopee_webUnique_ccd=sIVr13DTVLSwBeG87pRGPQ%3D%3D%7Cq0YJ9GD77WJVgPWzXrWfz6R7qxyGjNxg%2Bg%2B1dk8mPRPiUnAFTGaeQb8Fpr1e%2FwPpiJ3nzwtgPm9jUePy%7CsxQbiBX%2BXHlzI9In%7C08%7C3; ds=9625cff16e2684de629fd5216027be0f; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.366867320.1704346513; _dc_gtm_UA-61914164-6=1; _ga_4GPP1ZXG63=GS1.1.1708582623.42.0.1708582644.39.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=TElWRS04MjcyMzQwODkyNzEyOTY%3D&from_source=voucher-wallet&promotionId=827234089271296&signature=066fceff8db143afc8c296b632b4114629c10cac355df2a3ca428e163857cb52",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":827234089271296,\"voucher_code\":\"LIVE-827234089271296\",\"signature\":\"066fceff8db143afc8c296b632b4114629c10cac355df2a3ca428e163857cb52\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
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


    
