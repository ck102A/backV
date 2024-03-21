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
    "af-ac-enc-dat": "AAczLjQuMS0xAAABjmDl2CwAAAkgAhAAAAAAAAAAAiJ4pX3er/cbtIIrdi/7jMhrAugGUmDRTdP5JTFDk2+n8P4nhRkaq8yB9vYBAJaX0VJ6kNwtQAKeKBaYLtblS8bfiWsAqFBwdDotSNiTYu7UxoFMAxN5QCFuh0m2a7iQsFUA38hqWAB88FTY52P/elhePpWL/NIgwspfypL6HT+4PZk+wNd/S2TizKKdOPITO/W+NK6oDxtA6WRSRmbBO2/zrHsPmksFYKOt4JA+h4uzaoZqLU9eMQYZbLcMxVW6RkoOz7Zsf/2qgD4O1ZNNY9Vp7K1m58723mQhFbgDn8nDTPyfFS/rBL2IgSyAMJg1Y8rHKxq9CPjPj2h+qEVoVpYxb0fMQLyQdd0n4unzwVBNAe1Nn51m+lo7s/QHnR+dQg6mkeqpO8XYdroLJC9KPa8eGOzT8OnzoOs4V7AWWtbrYU/zUSRNvPmKLQcFP8IUcu0L+PaoSvysjzlNSU+ITWmRvRqcIU8k0U8Z9uEWvRNx6gU1RX2pircHpJhrPnpD1iXwR+69Ehrs8sxCJ34xk1bmhugTl/82EyfDx/bVRcPaaRvYm0zOGhLrp5LMvXgTAM4BOzUnHoSEv8RTdWgSGqlRO184/qmvNJWw6QqUrfP8i9TBkyqxBZZCMuPRRYfohpsOXyugxhHR900nRlnFcVNtYI7Il/82EyfDx/bVRcPaaRvYm9jVLcK9Q/8wU7q8Novshis=",
    "af-ac-enc-sz-token": "KBC2A/qLuWCjXpc4fW2Zdg==|AX814NlUxi0k7NHNKRVrOKsGdCqKblEu+HVg6PFKPqTzMm5n5Pe2r/ph2n+9C3nqxRd1+MTIYrg+f6I8|EXenTaK0HgaB31/R|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "nAv6qCpLfAq7W0ZhF1HXqYcPuQVPv0LP",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-1_5.1.0_0_231|bd8199d7368d46eb90d37803c421f61aac33ba4c22654c|10900|1100",
    "x-sap-access-s": "FIKqKlVaqooUUa5aWu2w3xYgSu-PgZg2CN0Tkw0n1So=",
    "x-sap-access-t": "1711022660",
    "x-sap-ri": "4422fc65dd3af38e13c0483e03019019c97c15f7b372b5f4929d",
    "x-sap-sec": "kEfgKWHMxcbcbcbcamb3bcVcambcbcVcbcbMbcbcYcVcbKVdbcZhbFbcacbcbcvtOqr3bcbcWcjcb+VdbcblhvETDFJKlJAK/5s907PjfD197QI2+VWlZ4+0k+EnH2hkHUk+CBq8MIGOJ9Ic9jV2b49u/frt6bzLVYEBrUxcFEPFl9QyRs6upKlVKL5TiRCSAmTibqFZFsveMueuNrCbnB3kcV0CpEENf3noFUsGWDKrDduHwo7YKZcYVbcLRbGviJFgUdP31i8n08xTEoCVNJm2Xr3v5ocs2DZIaNaY0TZkw9XhezgS4f1M3UK9J5GI07tPRsOoVpoc9wtAzqu0u6gMOAorcXFkDCzPU7uXiH3RdBivvy5bik7tDee57wAS/rAMs9EPxj0mJYAJuy2ptfbbuflnANr+Eb63CzP8g2EbTJHRosn8iVPp/ONAaAX/4Ojw859vNzryxOXwJMieRZc2xHm5pF6Yrs8KWWd+wMr7bYxf1qmyMS5O6MbGS9wNtJbrHJZK+gNg55YOvaVcqGLhcbARuyKTFbnEc5Vo6dxXShJPFDQx3HMYLTvW7CrgyI6gxDvoXrdwxmK2wl1WaxG4vHOiGABFz4pqYavvgjQSOfq+91CVleTUqbqZqEESfACefpSSCBkwXAIWU8SqifB7SywWAN23m+Nc8OZ7/SO8LgMv6+tdwSGfwmuLdErvrggth74wLUFyUJIZmJUdzKqux/UX/Ku7dNGqjPQtNVqbk8fv2HGHqXfLpaKT5VVkUmk+6TisLU32MPGR/CDfskrRALUkha1f0lvNUaQY29UFbmRSm9xvvlsK05m2DJ+032j0zkhK4lG5VI+zzKe64NtOA558JpjZSx8CvnT/chfwpFudr+4O/IIkxXA9Bc0ER5cG5y+exWMWPmoWHHd8SDeWDx/r+usz4moUHf/TzDIpn2zBMi1IrI/g4bGEDoXDz7dlzKwn5qy8eVNETr1fpWB6GUwK65zNZah6W5qLY3OL0TazubvJn2tWvzNR8wMWF2HxkgXOEBsgNet2rx9/KFBNxJSliW/3g1FK2NqeN9K4EHbiWr/iOgwck4qrv/788Mo9bA6sJzyP4TwAxEcf2AvhMmlxdYF0NM2zbDem7Z2vJywPLRFoE/7mEcHsdZeo9xFDJsaHbCDr3A+9VJhPAg5oaEXX8HWoNbtrLvW0KHr/r3Yd/60U6Bio+txjrIPVlEWUejEF477vhiJ4CznSeQYzh8YJxhJCLA3BWOIjr3kIic6cbcagiyjXirVvjFbcbcZeOqOqZcbcbQHcbcbPbcbcI3eH2W6asw4qEYNKz05IFlSm9753bcbciyuvT4ili4ucbcbcE0OqOF6cbcbhbcbcYcbcbc5sDdNZIG5G+BAYiMj+lFoD/P6CZcbcbNyyTyVWjTijbcbcbc6cxcb3bcVcZcbcbc6cbcbhbcbcYcbcbRlMyjKVHZsnWIomMplNkMcBJ7cmaFbcbNwXjryfiTuc",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "1.7.5",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _med=affiliates; _ga_3XVGTY3603=GS1.1.1709742030.2.1.1709742048.42.0.0; SPC_EC=.VEpwcGRMYVFOYUpTdXlMWiJNo2I+a72W4fnNxgDvX4OD7GynQaa9IagK9fgYfROgD0m1FJRR931l8fhqI5kJnmQZ9FyPtrYHb5w6pNfUpqSF4RZ00MZ1M9oJca4dGg9cALnRVl6tuhdt7/N4aM5Vx8JjtMWModMyd5EW8PECWbP9Q8TmpIB3XASTG4+gyEKPKurmA9KFaufv1SOAC8CLlg==; SPC_ST=.VEpwcGRMYVFOYUpTdXlMWiJNo2I+a72W4fnNxgDvX4OD7GynQaa9IagK9fgYfROgD0m1FJRR931l8fhqI5kJnmQZ9FyPtrYHb5w6pNfUpqSF4RZ00MZ1M9oJca4dGg9cALnRVl6tuhdt7/N4aM5Vx8JjtMWModMyd5EW8PECWbP9Q8TmpIB3XASTG4+gyEKPKurmA9KFaufv1SOAC8CLlg==; SPC_U=1041523811; SPC_R_T_ID=oVI+XqtojFa/Yp6+qKSzJWcTgYym+S5YCAXH4MUopZqq/+5sHoWU5YDjq36+2F3ANa7AFM++NjilYOnTBBcVZvLCw/cCM+ekRN2a1ls+3O8s1aHeFLiYzlewZr2JPaASTx+tkblfhf3ZEXIJoernV+/LAT9UcptNgnflzKmaL1U=; SPC_R_T_IV=cVB3Z0ptZERMUWNReEVFQQ==; SPC_T_ID=oVI+XqtojFa/Yp6+qKSzJWcTgYym+S5YCAXH4MUopZqq/+5sHoWU5YDjq36+2F3ANa7AFM++NjilYOnTBBcVZvLCw/cCM+ekRN2a1ls+3O8s1aHeFLiYzlewZr2JPaASTx+tkblfhf3ZEXIJoernV+/LAT9UcptNgnflzKmaL1U=; SPC_T_IV=cVB3Z0ptZERMUWNReEVFQQ==; SPC_SI=zBfwZQAAAABFblcxZmdOYyPTKQEAAAAAdU5SQ2J1Yzg=; SPC_SEC_SI=v1-aU9YSGtpZGhjMGxjMWJXRmK50nnKo8eBQnxWYhBGGfqkPid8+NXKPDMgWMATYpG3xRC3F664//olIFdkil0QLkBIaIt4FyZDHPD5Fo/O5Vk=; _gid=GA1.2.1682601717.1710959073; _ga_TEVYGNDY1K=GS1.1.1710984455.13.1.1710986665.60.0.0; __LOCALE__null=VN; csrftoken=nAv6qCpLfAq7W0ZhF1HXqYcPuQVPv0LP; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; shopee_webUnique_ccd=KBC2A%2FqLuWCjXpc4fW2Zdg%3D%3D%7CAX814NlUxi0k7NHNKRVrOKsGdCqKblEu%2BHVg6PFKPqTzMm5n5Pe2r%2Fph2n%2B9C3nqxRd1%2BMTIYrg%2Bf6I8%7CEXenTaK0HgaB31%2FR%7C08%7C3; ds=23e413d504e1ba563aed47fe1d7a306f; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.366867320.1704346513; _dc_gtm_UA-61914164-6=1; _ga_4GPP1ZXG63=GS1.1.1711022641.74.0.1711022657.44.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=VklERU8tODQ3NTg3MjAxMTA1OTM2&from_source=voucher-wallet&promotionId=847587201105936&signature=4dbb277ff4fb9401b7e911085443bdc542c4fa7244d4db1e0c7a5e14ec29b173",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":847587201105936,\"voucher_code\":\"VIDEO-847587201105936\",\"signature\":\"4dbb277ff4fb9401b7e911085443bdc542c4fa7244d4db1e0c7a5e14ec29b173\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
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


    
