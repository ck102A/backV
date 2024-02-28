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
    "af-ac-enc-dat": "AAczLjQuMS0yAAABje6byQ4AAAlJAhAAAAAAAAAAAv+Jk4+q9i6tIQ7SLhDY6zctiiijl/82EyfDx/bVRcPaaRvYm5f/NhMnw8f21UXD2mkb2JvbGvZfbALj6TJZ4OzcIQ4mu/KnsMm/BPuRO6MFWvDpCl/8PrBXaSH0vnCIXqLLB0z8L+Fys2o6SQc90hHGu4nYaRzG7CCsigGNuqaEEnfJe1bwFUnP+pT0DL5dH7zjBJK3t2HR0hI+ZYa1IJ5S6YGzK/S2Qt8HFEoKlyP0meC06ggW07uwBw1APiPr500RUJe/ir/1QSwYjOhbT9pE5TyLVoj2Ag3mI5kqRmK/LpT0BebyVwCnSHnRYBwUQtbFW3ESvDQNPbrTqUZ3E4z6FA1ReThsEdAlb9+6US+XN1f4s6pYv4FlBYVuhf8hYehj2XToh+pVK318OXr8kWQ5CPja/jBq/8dl+5rLsLfH21aTcrH/kQ8zN1OR67FxVMu8yfNzdZuu0798JWEr5OE6X11wo/GPRwHEJkaGu4XkXZToKzyWPixNkA93jVevNHNSfeKD/2aDQWh7eFt5edr/3WXwl/82EyfDx/bVRcPaaRvYm9JBGF0xaolNvtTR/pnRd88TeUAhbodJtmu4kLBVAN/IXXZVb6DSri1txdxM24th1uPA9AT63YvCe7DzNXwGm2r5eoNfbZETkOWrYjnXC8n6E3lAIW6HSbZruJCwVQDfyNwe9chsoMath5qOKlZWIf4=",
    "af-ac-enc-sz-token": "WJHiWFMEe2QqUGGJUHZ/Gw==|z0eQHDIMuTmOI7AHMbF8hgIxrEas90VX92jHiOj3Wr7LlCjaSpt8yy0KTODI9P4xGIHy0hryAee9xpe4|xStXyXP9Qgl3zAGr|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "JH5rjpxaYEigsx5ZozVQREfWwNJSyUMo",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-2_5.1.0_0_218|af1efd2ff00444b6bbd1763b9b3ad9a59e0b226e919242|10900|1100",
    "x-sap-access-s": "-KRPk422j782aRlaQAKuoWjtNMHxac523t32hJh6aBQ=",
    "x-sap-access-t": "1709105203",
    "x-sap-ri": "34e0de655d90a43609bfba3803018220a289359b0e266b1ca917",
    "x-sap-sec": "XOKAJDZd/3Zc63Zc7ZZ363Uc7ZZc63Uc63ZM63Zce3gc633d63aJ6ZZc73Zc6BatW9P363Zcj3mc6R3R63bXqUbalqIHj1fthyiVSt3geEmO6Qlgd1YTHJpI/We4UwUDCSMT0hEeD3eCzPYbrQZ5na4fLWwH4ObH4hjdXx7S8ALcpqsUFt9pTp/qQoUWrDFI/K4+O88ZUZbJBi5WtAPo5c/TDJVl5TQC8LOsJY+8RwJ1exmPLCzPqKyoy8rwuV8nq41iouf4yptWl38vR1CS6/btSFfzzx5HjkQ1mEwhgZHWG2FtSwriSNjwgGsEi9TTCNpWLrzU7GjN+jyNAma/mdu5dC9bWuEehWgryx8f7MN3aEizlThZbmSo9Wr9BYcVFGi1Z6cm+EE52E1T02GYojYcKU9J4YjDiYRiSmMTTIKV4RVt59C9bGdpOIpD6sL8xzog+669Lp5iqHwB5dnND6g0h9/V7ovNZ79O7gX3GLGIV8IWi0l/Yr3XjX9Dxormg16W8ist7QqfZ/jHvuowYRH6RdmuyJeKmEV7r//zqlHIBym97XmNsCV7A8JJ6HnobDVuEM4Vz5y57KKmrM5PFRWjBfHMvWRkJ0dRpggQXvGBjQceXv45jpC20HWyZujO6oKubpvs3g6a2jJg8Nh04z/mCx8+DSB0o+EJv2MqYQ7zmVi4JsKigps0Alr1uVfalPKQuf71WCxARxyKjMaTt30ejCsTtKHvmF61/c8brNhpeI60B+Y1jWomT8Rwqeh56l3O5xeODMhV9L3gOp+T736jlyqy3bvtr4Flw1A3C/CK4nQyoqaUb9SwFqNI+0Ucq3YKXN39H3CLeUsjLOcHD+OVGkgogLPlSMgOQ+PyaN8JiE34jFgGxf/llSBmgXJs2ctJqhR9SpTiPfXPXLvunRykw3WCk/f0u+H7YYOEtsqKgkhIXjR8rVJOZBxt3fTE+K39tbOHqh5crOGxCBF5T29jNSSz133c63Z947Cj4SZ9+UZc63beW9kq33Zc6/ec63ZP63ZcHtyOlwIs6BSj+yNWW6H0qTAwFzF363ZcMS3WN2nlNwUc63Zcv+kqWU3c63Zh63Zc03Zc66Fh79PKWMM3i4ub438TC0HMhfAT33Zc62FDN73W4pmv63Zc633c/3Z363Uc33Zc633c63Zh63Zc03Zc6BEXnG0iqlOeHh/MkmOabp/NScZN7UZc62GXNplf+1tc",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "3.4.1-2&1.6.16",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_TEVYGNDY1K=GS1.1.1707134184.12.0.1707134193.51.0.0; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _med=affiliates; SPC_EC=.Mm4yRzU2S0YwSXN6ZnpYdP45XJJx/YMRyI04K4rg+BDXZOzfCMthSN12ionpPA0COzBrgkiBlnjxqWQzixKYMqJYGxh/e5RyQy1ACW45VXqQYtaAjUhMqdnTRh6a7bPyGZBHjrKOkSkgNnwU3/pFfB5fyKF5w/Tc/xd5iX0Twz2Yg5Gj/w+4W4qic5wwagGRY2JrGQs8Zg/XF99k4sGzCA==; SPC_ST=.Mm4yRzU2S0YwSXN6ZnpYdP45XJJx/YMRyI04K4rg+BDXZOzfCMthSN12ionpPA0COzBrgkiBlnjxqWQzixKYMqJYGxh/e5RyQy1ACW45VXqQYtaAjUhMqdnTRh6a7bPyGZBHjrKOkSkgNnwU3/pFfB5fyKF5w/Tc/xd5iX0Twz2Yg5Gj/w+4W4qic5wwagGRY2JrGQs8Zg/XF99k4sGzCA==; SPC_U=1041523811; SPC_R_T_ID=RYdlG9XejRQ4P9NFjE8ORWbJICHc6fwClOpBuxxpzmpJFeSA3QUaq9sfJVkwz4i+a0Wf0Ihm5Xq5lidYOzyCY9wbOCOpvTcL0jVKLOwfUmNPpCdUjyFALjTejetTO5MwFzWkW/gQZrSH/5P7TQJyt6ft+OdmxAeGMgVaPoKixJI=; SPC_R_T_IV=YlhuTDVaQXdlRmFKNVROOA==; SPC_T_ID=RYdlG9XejRQ4P9NFjE8ORWbJICHc6fwClOpBuxxpzmpJFeSA3QUaq9sfJVkwz4i+a0Wf0Ihm5Xq5lidYOzyCY9wbOCOpvTcL0jVKLOwfUmNPpCdUjyFALjTejetTO5MwFzWkW/gQZrSH/5P7TQJyt6ft+OdmxAeGMgVaPoKixJI=; SPC_T_IV=YlhuTDVaQXdlRmFKNVROOA==; __LOCALE__null=VN; csrftoken=JH5rjpxaYEigsx5ZozVQREfWwNJSyUMo; SPC_SI=CVPUZQAAAABvU2pvZDg1elB6MAEAAAAAZHpUMWtDWGg=; SPC_SEC_SI=v1-Rnpyc0J5RmVxSVBJckxia0Axvt1DVrMDsI0vxF5nIpb4Zcu558XMK/1YZvVCRyp9Q9hnAHRlsp5uIOSR7p7fuhbbWTZDlI9MTCZ46hI42dE=; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; shopee_webUnique_ccd=WJHiWFMEe2QqUGGJUHZ%2FGw%3D%3D%7Cz0eQHDIMuTmOI7AHMbF8hgIxrEas90VX92jHiOj3Wr7LlCjaSpt8yy0KTODI9P4xGIHy0hryAee9xpe4%7CxStXyXP9Qgl3zAGr%7C08%7C3; ds=87b85db97598716f31770dcc4a591458; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.366867320.1704346513; _gid=GA1.2.1144465495.1709105136; _ga_4GPP1ZXG63=GS1.1.1709105134.49.0.1709105144.50.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=QUFSMzAwVlQ%3D&from_source=voucher-wallet&promotionId=829998488027248&signature=9f85125e991500ebd6d7112f2e0440eb1871237567dd2f5617b0acc8e2866029",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":829998488027248,\"voucher_code\":\"AAR300VT\",\"signature\":\"9f85125e991500ebd6d7112f2e0440eb1871237567dd2f5617b0acc8e2866029\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
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


    
