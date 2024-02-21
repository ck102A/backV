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
    "af-ac-enc-dat": "AAczLjQuMS0yAAABjcvQj5IAAAnGAhAAAAAAAAAAAv+Jk4+q9i6tIQ7SLhDY6zctiiijl/82EyfDx/bVRcPaaRvYm5f/NhMnw8f21UXD2mkb2Jsd720n5pIOl74JVnmOugHKL6HFWcGtjqGozu47oDLeioG6zl280zTbCp43RE4iGhITenoWnGXDzZWFj8UAEwFPQRhf3zmoT6wdYiZsKlivWNli3aaXQ0eSIocA/DJiyHpeUB0B9Q6kDoaF4kw0mNTx/8B1R9Yuc+CRx6zSUA9SSNBNQJFOlPVIqsPBk5JQzDY58D4GgP6E9yHD0LOhn0bvF0Ph644fjJysuius03r4px5fD38EBS/Q42yygUwd1UxIA4awxavOdp6zr245dz8oSKJNpUjqBFZB/55k3eyUhlwVRDF1klRY3/O4QwLjlxSWSSuItD9vpNk6xqQ0JtDkhGUqLgejU+p4NEcRLtE7fG4ud6q1etLtBDwa+U7MYGgkTT10hVxmH2ZmV8SaXF0thDcS8FwqNrUXgoW4N3jVDSon+lDnFKKEqHTZOY21t6uX/zYTJ8PH9tVFw9ppG9ibl/82EyfDx/bVRcPaaRvYm27CS7zP2OQlA81/XC6Fpb6QSTNfOVSaKdmrHu6LLPx/gb2i4lHU78BjEYyMYqW2JrmGTMODDV4fe8Mi+3/bLVGFWvk61Wg3cFKkJlR9iqwkNRm8II80uum+YpmpDlun67ILHr5V8zN1MITLFtO20jE=",
    "af-ac-enc-sz-token": "YYP15LhsIPpjbpX0dfxaKQ==|eZw3ox0nA3UnHqyEUgnwSR15Zl9TIUkbKkE8swIck8hPr6LHwvUbNb4uDXI5+/ajdmUdSeZd8dAzjn0h|CTZOqtgJNx5cWW7g|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "i2HhuIA4W9DNnto8kHd62g9fxcnQdnCO",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-2_5.1.0_0_231|6ef3fa1c16ff4741a961d137e733e1380701422354bd49|10900|1100",
    "x-sap-access-s": "mhiMkJ7fnMBQPj_wdOy41JgBaNKY85xkMv-4PQqHzVE=",
    "x-sap-access-t": "1708521459",
    "x-sap-ri": "f3f7d565a2502d3939a0633c03010ea52c643551e8e87fc26afa",
    "x-sap-sec": "oTLn5p+tX9kqW9kq8kk9W9+q8kkqW9+qW9k1W9kqj9SqW9itW9PaWkkq89kqW1gd63a9W9kqe9oqWninW9kqKqUQMt5uzADLfziAZddVetfa9xoPEnqjtODmUmMrqHxUJ4RP+lZ0P4xK6/pFRjWq2ZHxLeFiJ9S5Twbwp02dOYGmGk10MzD3J6e8k7bAe1JwITNUjpdhPU4SvHsloaCtELRHA0KD2+UIEMyPpL6/6t6pi9T7eifOKfzMm3U/yFXo9UqIxCj8tknA67ZkfeLji9meQGNwBvBDqtVSz1W2owsxh1HEp8VMFtM3fkhRoK7xpsn/8iRkhL58mYu/Ps3yhZgJ/zrF0o7jZ1uWpG4R20gWxXYiz+S0xaj0p/oAO4150tJ1qyB+sc6hghUW0TpjdwLaVsgkV/FA0psi24x1tYKx+SfucNnREczdXLzSo+pn6ohTIjpT1taof+pMr0zY5KRHv9ad69mwZJhan1nXcsWnN6dbiCRwbk9P+NjWFieBndjf0n5SbIUt7EbXK9Tlk0aGyoR4HazpctqC5aLoo2gtUmlxnUwPv26Xcl57VdDKN4WgrLz/AVBmbVTj+OCfomXmHlx6IKMXdzj+8cIN9rSpg84HMTmSQL6lzBkmEGAAc3e7WHIJj8v3KcUNAH5lrEBdd4ZwJRZalJqyBBQ+AFg/6lhSQENC2nk3NjQiuOfuObz+sanYMtu+q+OW1+8ndUHZNRCBvpFA/WIIspuvutLzV9aG4uqiKRuLgVnQH3VXTjK08RIoDPfeGm32pghP/zFEkIQXkXNjsZ/dAc8WHElgBYcJWAWbafCfmpEXU2wyVgxvNjr+/HP2EIxipaIa0syOel1YkrhXUhNYRJJz2Ip8Ps3sqGYPhjByZreP6DnG8WYOSzxgpNWL5S/a/rssroNwJHV2Mds5hJnoVIqDMNAyXGFS/T2GAdfldAB734xgyvkLNnvUiXWTaAiS566NxUC+DtTjhfXBp409W9kq1Do3UQppvP0qW9kq4UZc6+9qW9kyW9kqF9kqWVbIvejUQ8aYXpAeOLOGFXDinxmN99kqWDppCP4LGgAHW9kqW1gc63a9W9kqA9kqWX+qW9PoGLjHoxWcC4+samOPyTBLJT4Nz99qW9kNUgT/vIpSC+kqW9k9W9iq99k1W99qW9k9W9kqA9kqWX+qW9rfdum11nyk3yMNRAQIbqFEhiaCS+7qW9rpUP5sGg76Wn==",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "3.4.1-2&1.6.16",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_TEVYGNDY1K=GS1.1.1707134184.12.0.1707134193.51.0.0; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; SPC_SI=CFPUZQAAAABucGQzSWFUUayQAQAAAAAAZDZLcGhBMUs=; _gid=GA1.2.967953127.1708441565; __LOCALE__null=VN; csrftoken=i2HhuIA4W9DNnto8kHd62g9fxcnQdnCO; SPC_SEC_SI=v1-a0ZHNUlkemhOOVFQNWZWNLS7qtC1uz8IaunhDxJop0517XzKws5/NCjLdzJnH+NgrFEJO75gugIH7XV5H+79rQrDdGiZgTsHD//TwtTCa2Q=; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; HAS_BEEN_REDIRECTED=true; _med=affiliates; SPC_EC=.Mm4yRzU2S0YwSXN6ZnpYdP45XJJx/YMRyI04K4rg+BDXZOzfCMthSN12ionpPA0COzBrgkiBlnjxqWQzixKYMqJYGxh/e5RyQy1ACW45VXqQYtaAjUhMqdnTRh6a7bPyGZBHjrKOkSkgNnwU3/pFfB5fyKF5w/Tc/xd5iX0Twz2Yg5Gj/w+4W4qic5wwagGRY2JrGQs8Zg/XF99k4sGzCA==; SPC_ST=.Mm4yRzU2S0YwSXN6ZnpYdP45XJJx/YMRyI04K4rg+BDXZOzfCMthSN12ionpPA0COzBrgkiBlnjxqWQzixKYMqJYGxh/e5RyQy1ACW45VXqQYtaAjUhMqdnTRh6a7bPyGZBHjrKOkSkgNnwU3/pFfB5fyKF5w/Tc/xd5iX0Twz2Yg5Gj/w+4W4qic5wwagGRY2JrGQs8Zg/XF99k4sGzCA==; SPC_U=1041523811; SPC_R_T_ID=RYdlG9XejRQ4P9NFjE8ORWbJICHc6fwClOpBuxxpzmpJFeSA3QUaq9sfJVkwz4i+a0Wf0Ihm5Xq5lidYOzyCY9wbOCOpvTcL0jVKLOwfUmNPpCdUjyFALjTejetTO5MwFzWkW/gQZrSH/5P7TQJyt6ft+OdmxAeGMgVaPoKixJI=; SPC_R_T_IV=YlhuTDVaQXdlRmFKNVROOA==; SPC_T_ID=RYdlG9XejRQ4P9NFjE8ORWbJICHc6fwClOpBuxxpzmpJFeSA3QUaq9sfJVkwz4i+a0Wf0Ihm5Xq5lidYOzyCY9wbOCOpvTcL0jVKLOwfUmNPpCdUjyFALjTejetTO5MwFzWkW/gQZrSH/5P7TQJyt6ft+OdmxAeGMgVaPoKixJI=; SPC_T_IV=YlhuTDVaQXdlRmFKNVROOA==; shopee_webUnique_ccd=YYP15LhsIPpjbpX0dfxaKQ%3D%3D%7CeZw3ox0nA3UnHqyEUgnwSR15Zl9TIUkbKkE8swIck8hPr6LHwvUbNb4uDXI5%2B%2FajdmUdSeZd8dAzjn0h%7CCTZOqtgJNx5cWW7g%7C08%7C3; ds=a86430b5dc081aac1d4c77e5c60a17ff; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.366867320.1704346513; _dc_gtm_UA-61914164-6=1; _ga_4GPP1ZXG63=GS1.1.1708521433.40.0.1708521457.36.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=VklERU8tODE1MTA3NTc2MDg2NTI4&from_source=voucher-wallet&promotionId=815107576086528&signature=572bfc3ec1b0e0412a61e10c5116067867a39b2175f1f6e55078912791055bd9",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":815107576086528,\"voucher_code\":\"VIDEO-815107576086528\",\"signature\":\"572bfc3ec1b0e0412a61e10c5116067867a39b2175f1f6e55078912791055bd9\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
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


    
