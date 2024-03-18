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
    "af-ac-enc-dat": "AAczLjQuMS0xAAABjlK0NugAAAl8AhAAAAAAAAAAAiJ4pX3er/cbtIIrdi/7jMhrAugGUmDRTdP5JTFDk2+n8P4nhRkaq8yB9vYBAJaX0VJ6kNwtQAKeKBaYLtblS8bfiWsAqFBwdDotSNiTYu7UxoFMAxN5QCFuh0m2a7iQsFUA38hqWAB88FTY52P/elhePpWL/NIgwspfypL6HT+4PZk+wNd/S2TizKKdOPITO/W+NK6oDxtA6WRSRmbBO2/zrHsPmksFYKOt4JA+h4uzaoZqLU9eMQYZbLcMxVW6RkoOz7Zsf/2qgD4O1ZNNY9Vp7K1m/Vst8ssaKCf4Ak1cjXRYk69Q1/EbPQTZw+9oLvcvyWV2PdOCVYEIlUeUjB8C+e7TdyBfYB3PYpuAqUui2jB59wc8I9yCNqXpB5aGz6JCjORDY2m3Zwx/tYE/PzSnYnaKgBt+4paE+yF+VZuuyif/lZchUakHBsLxJuEz+BRzAXRA0wgNB2pRBqarkQPwsB00IU8k0U8Z9uEWvRNx6gU1RSMoISE7T9RSSjZ+GhdhMbe9Ehrs8sxCJ34xk1bmhugTl/82EyfDx/bVRcPaaRvYm0zOGhLrp5LMvXgTAM4BOzWfKsDt5CSwvQ0vXsBpdi1zzSW+ZA1pW7jjHLL36fA47eRXFRoMYshddrD+Ay5EqD+gxhHR900nRlnFcVNtYI7Il/82EyfDx/bVRcPaaRvYm9jVLcK9Q/8wU7q8Novshis=",
    "af-ac-enc-sz-token": "wax10HHIg0GfD4GymgrWCQ==|snz/yMv0jDmPmOjk0KNGKok2zOlf+OAKoIwX6wZ1I373IS0/ODeVVB/jSdFbicgJjhQr+gRjuap/swFn|5zLQuCRrcxHo46DC|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "76OgymZ2aBf2Kw0GNd57u6JhPwqbVccd",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.120.4.1|13|3.4.1-1_5.1.0_0_216|201b7dd68ea341d285840b0e8af9269da9feaa5e6fb642|10900|1100",
    "x-sap-access-s": "j6KQnpc-mDtiAK0ZNB9KsmQprAvvraYAtr3j9FXirlM=",
    "x-sap-access-t": "1710784527",
    "x-sap-ri": "0f80f8654c4e59975e438c3c0301a3a027f34df77c1361bc82a8",
    "x-sap-sec": "9zKlvttOKEGI2EGI0vGE2EtI0vGI2EtI2EGO2EGIKEtI2Oh52EwB2xGI0EGI2EoCDjJE2EGI4EmI2oh52EY8LYyOnSrTBdetj1Sb8Y13B+HQIejY/WZrL0wdJ3IDZv28tD1+1e5BDVG+tbEzDd4c8RAgWeqK3oAcyNBSvr7kl1ziYEIl2ejSCmuERfZwvcVudVEsoT50lwBozLnxreTRsX8Ub5mupyD+Gmm50aYkJ/eL0coR9x//63HYB9dsIMVaffKZvKXp4qzi6bra3tRgCCTtOx5O4Y7+3MoNBq8wFvSI9StLKvrfXAEJ2M5SY7QZT28Oon85Wbb2KGg1zftDWG/BMVt9nZxMaEPSX5ELNdwBMS/PgwHgJVIeilz2RDHeExS5p9BZvdF0hPnO21P6cfI9uAA3Gry3dgeQYz6VFuuM4RsKrjhxKZKXahRCQ6Ya3YfDEVOtLKeW/IEfm//59upDRB3y2dz/OehWtyfId8azY2uUk2ceWJVR+vBRQL0EfyT259XlLCeLW4vkIzr+hadgwp6hOA7MiFO9tSFcx+anS3kae6fFMXzlawjtWpbtLkYaoHWnNrkR1KpeZVdWa9d0LcBWmxT6zmKdRdfjHQHTM84hEAGZa8tQMSm1gALkuW++I6f0UsO1SgWPTFgYsa3p3kSl/r4HNUA9HG/SDBpiuUtria22jHb5WZX2Lnmp4R4xS6g7klyW99f62LkUU7hTnuxh9X/EQqTNTQT0syu8bPP9RZUoAieVpw0Bjr3HZ4jtEbDIVPnU+Rz9lhVO50bza3e/W35Cetn0cPGRnjt3BEbvVU9QsZ/fbw+rgCoPlWcUOex4i4qYGcrncl1EJ4IYl1Cc9AieqEpvEBrStteneaOXYmWTe0oJd29jf8fzElRMSvtFevpC2CKPN2twMN8OHL18rZgqpNu2yf5JC7PTSahpo7qFLbX+CEjSLJSTlXlNfKlNQhYSF6ioDiP5AvTdAUJft847/DVh788qGDK3qUkTNrb0u6kXWbUvN3+eoJ/rAFwPJcgPzKMrW4lTCXMe8EwaVPIhFQDbWfr3QQch3bL3ip4TQmsvCi9yYlB1XFqYQ9VsThwCB+oXhuQPxrU8axSTU9KpzRLQ7VO/CpWim4qBbkNeZ7lfQ6ygrtYiQevk3WlYefceohiLvhShH677t6jtlFIXAclzx6S0J5KseX6maZAdBxAh75ilumRccf8RZhIv0a3OT8gF8xBhNFGoMbN21+RFsNPE2EGIrqgZd6lArbgI2EGIZr4wDxLI2EGK2EGI7EGI2ea6KZKSD+5Nvn7wAa7nfwWEutSILEGI2HLjd0mxdVgZ2EGI2OowDjJE2EGI/EGI2etI2EYbadE8aBCq8lLxXobAf4eteTfEB/LI2ECTr6GjrqZjkEGI2EGE2EhILEGO2ELI2EGE2EGI/EGI2etI2EY8l+syC1J+4PMmDXHYgVJRCB8dLEFI2ECFdVxTk6Fg2s==",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "1.7.5",
    "cookie": "SPC_F=B5caMig8V4lU6V6LTKXbC6na8Yh76hVO; REC_T_ID=044eee72-aac3-11ee-af2e-caa2bed3b2e1; _gcl_au=1.1.406248876.1704346508; _fbp=fb.1.1704346508870.317682860; _hjSessionUser_868286=eyJpZCI6Ijg4OGFiNDNiLTJmOTYtNTE4Yy05OWQxLThjZjZkMTgwMDNlOSIsImNyZWF0ZWQiOjE3MDQzODYzOTE3NDcsImV4aXN0aW5nIjp0cnVlfQ==; _ga_TEVYGNDY1K=GS1.1.1707134184.12.0.1707134193.51.0.0; SPC_CLIENTID=QjVjYU1pZzhWNGxVhhpzbokvlrvexqvt; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDixckF-d4nKrp-VvVwI157LDjRiy909NjqtDpW.1; _ga_44R8KFLXBB=GS1.1.1707144427.1.1.1707144487.0.0.0; _gcl_aw=GCL.1708517113.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _gac_UA-61914164-6=1.1708517114.CjwKCAiA29auBhBxEiwAnKcSqg-PudxZQHjuKrX6XeUN5GJ7r6yaa57ZXY1iZGaTDySW7O1HYzMg_xoC6iIQAvD_BwE; _med=affiliates; _ga_3XVGTY3603=GS1.1.1709742030.2.1.1709742048.42.0.0; SPC_SI=zBfwZQAAAABkYUNzWlFZVyJA3wAAAAAAa000TG1DU2c=; SPC_SEC_SI=v1-bW1pS1NDbFRKM2pIZDhUeSmJpB/X0JI8vO29yXk0XPAwTYBACpZq+SUIDnObLIIq83LAZtNNwqQC0Z7jFDuOCqatckmSAmKQqrZamYBiLbk=; _gid=GA1.2.191229979.1710726332; SPC_EC=.VEpwcGRMYVFOYUpTdXlMWiJNo2I+a72W4fnNxgDvX4OD7GynQaa9IagK9fgYfROgD0m1FJRR931l8fhqI5kJnmQZ9FyPtrYHb5w6pNfUpqSF4RZ00MZ1M9oJca4dGg9cALnRVl6tuhdt7/N4aM5Vx8JjtMWModMyd5EW8PECWbP9Q8TmpIB3XASTG4+gyEKPKurmA9KFaufv1SOAC8CLlg==; SPC_ST=.VEpwcGRMYVFOYUpTdXlMWiJNo2I+a72W4fnNxgDvX4OD7GynQaa9IagK9fgYfROgD0m1FJRR931l8fhqI5kJnmQZ9FyPtrYHb5w6pNfUpqSF4RZ00MZ1M9oJca4dGg9cALnRVl6tuhdt7/N4aM5Vx8JjtMWModMyd5EW8PECWbP9Q8TmpIB3XASTG4+gyEKPKurmA9KFaufv1SOAC8CLlg==; SPC_U=1041523811; SPC_R_T_ID=oVI+XqtojFa/Yp6+qKSzJWcTgYym+S5YCAXH4MUopZqq/+5sHoWU5YDjq36+2F3ANa7AFM++NjilYOnTBBcVZvLCw/cCM+ekRN2a1ls+3O8s1aHeFLiYzlewZr2JPaASTx+tkblfhf3ZEXIJoernV+/LAT9UcptNgnflzKmaL1U=; SPC_R_T_IV=cVB3Z0ptZERMUWNReEVFQQ==; SPC_T_ID=oVI+XqtojFa/Yp6+qKSzJWcTgYym+S5YCAXH4MUopZqq/+5sHoWU5YDjq36+2F3ANa7AFM++NjilYOnTBBcVZvLCw/cCM+ekRN2a1ls+3O8s1aHeFLiYzlewZr2JPaASTx+tkblfhf3ZEXIJoernV+/LAT9UcptNgnflzKmaL1U=; SPC_T_IV=cVB3Z0ptZERMUWNReEVFQQ==; __LOCALE__null=VN; csrftoken=76OgymZ2aBf2Kw0GNd57u6JhPwqbVccd; _sapid=3b8363c96f5cf5ac61d641f8751b05be2ec322a897631315df744f9b; _QPWSDCXHZQA=805654a0-2ab4-4ba7-88b7-de2e08f49243; REC7iLP4Q=a9026440-ef5d-4de2-9d3e-cbf059ae13d0; shopee_webUnique_ccd=wax10HHIg0GfD4GymgrWCQ%3D%3D%7Csnz%2FyMv0jDmPmOjk0KNGKok2zOlf%2BOAKoIwX6wZ1I373IS0%2FODeVVB%2FjSdFbicgJjhQr%2BgRjuap%2FswFn%7C5zLQuCRrcxHo46DC%7C08%7C3; ds=91fb479c01b559ce7bd3a4db2e58dab4; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.366867320.1704346513; _dc_gtm_UA-61914164-6=1; _ga_4GPP1ZXG63=GS1.1.1710784495.68.0.1710784524.31.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=VUIxOTM1&from_source=voucher-wallet&promotionId=846936748244992&signature=382a817e21fd0ae43fbe0fb52fe6c0d4178cc66eaa7ee0237aebcecb7e743034",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":846936748244992,\"voucher_code\":\"UB1935\",\"signature\":\"382a817e21fd0ae43fbe0fb52fe6c0d4178cc66eaa7ee0237aebcecb7e743034\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
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


    
