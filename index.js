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
      "accept-language": "en-US,en;q=0.9,vi;q=0.8,zh-CN;q=0.7,zh;q=0.6",
      "af-ac-enc-dat": "AAczLjQuMS0yAAABjcR7V8IAAA+5AyAAAAAAAAAAAv+Jk4+lhxmJFR0nziZ/YaxPEEwFl/82EyfDx/bVRcPaaRvYm5f/NhMnw8f21UXD2mkb2JvOtkmHEb/Hq3OyNYJVL7qfOkAYmJibYERxv5wPwHgWyQ0Ku2OUZLBTg/L7Ar0e1/KlwYOE/ES3+T32U4Y3GInDuM6NuL8Qcgjkrsw//ye7EHUR5SlJTBLsf+5/YAM3bfBmNgtozLApSqWGQktyInj8H0Zu6GXzXbTzGhCPJ/r2U0iTnAFT2Rra5rBj3ThNptUBDBw0S/ZD//FPIACv+MBAt6ZQO3/cYL17aNAVtEhZQni+SQxScJTUR+9RY5QSlQS2TqXprXhoLNeJbHbdBWs/UQJfq3K1AG1EpKO616ktiwbY7P9KHML6aQtF4FlKd6wIZ7ugf/+klKjC7cTH7sR8wbX2+obBZ0Ft7Itc/pw0Wp7JqRbQi4qOBfX5l99KLTRetMvPd7B24O0bbJV1UmSWwbX2+obBZ0Ft7Itc/pw0Wp7JqRbQi4qOBfX5l99KLTQax8fiGjC0OB/S2DbFR/RPwsXNNYTyK3HSzCGoV/4BXUckfn/aqZ2EUBMC3PvgG/UYz6Rdg8a/lQzfapMRlwDxYH6oJSbUnFvFBdt+DtZeJ0ckfn/aqZ2EUBMC3PvgG/XS56jFyeFsh1a8fZI1WbBoXVkZk52+OPpl2sWUN9dn2+NPe4nm6ftMP7jCfpEpq/eYSlhcLvlWtuExt082lQqLioT23CvB/EXRICIPCI0nmmbajlaHX9S+GBgIzXz4xgIAnnDouEnRmusHr7rQzwunD3pHK1jhdeivfF/l+KMAN9evthKGIBxcPLYV4exrcc81xcZwa2HsqKP9Zld5yOt50RCG5fEn08XpfIfSqs82CjGVsRaH/qns6kJfWwhIMeyX/zYTJ8PH9tVFw9ppG9ibmQjgXUXTpPPKz8uOifIZL5sn9Ca3wjTTQF6PWvtd/tTRHJJ2HKErNOh5euwKv/tWaNCUHZI4LIIKj01LAXggiTtRXU2tjNvKetI8ZQrSyU2gp0neRjrocUF3zUGdZlgsydRk5Bc7YLWUCnV4WuIa1A==",
      "af-ac-enc-sz-token": "eAtVp3QjTIypuySNdRiwgw==|3IweVG62joKgiWg+r26BuVECJn3ERAgqpROP96lo4axThjbIPDLKG23eE5PkLeaW3b3y2NTiqQY=|vwX/jZ+oLriVTQ7s|08|3",
      "content-type": "application/json",
      "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-api-source": "pc",
      "x-csrftoken": "bZqDfD6U5pzPjNdUgb2YbHLyLo1Vwvsw",
      "x-requested-with": "XMLHttpRequest",
      "x-sap-access-f": "3.2.121.2.0|13|3.4.1-2_5.1.0_0_223|62d2b4ec2a524da8883763df6a63d9105b0a817a01dc42|10900|1100",
      "x-sap-access-s": "noPIvthqmBnXCGgXrggYzmixHSO6NcCQMW0uwZf8qow=",
      "x-sap-access-t": "1708398434",
      "x-sap-ri": "6117d46544bef8978a0fdf3e03010590e5fc776e961b2c3dc1f2",
      "x-sap-sec": "XPdgXQGH0ELELELEKvLILEhEKvLELEhELELsLELEhEcELELHLE0ILvLEKELELPYfTjFILELEjEMEL4LSLE0pUgQpjjYFeVTyXLB4U7HA5zIi/aWhNW2Kb6rUr8c4XUMpfTBPh8s0ZpjQ5UMSYSFE4SA08gzxtvnTstijxC6BRIvEANWo+T/D5EVor1f8/CS9zpOetL/zWYD/P67sTtgSbN46q+46nCAW7Ww4dgltO1vDExQNSAZ1n9CM0Ne1LaTAwVz2TFGgkhtVj0udVMDLDdr5DgaRGPap7DeGwQ7SNUxr3k3/0NAyIkVwA1PyXdIDUQ2fP7DAmKxoJ35IqqXcc8wV8rDEQ/fiNfK92Ux9RHmCGlZzfKwYtnlMJCGLkgNYgQm7lXc8HBTkN9P177bBqLw021Oixb+SLZCpwMIWr84HVgJe8CN12Nbx9rQo0m9sRTXKJme80DIgsAqmsGjgGipMdu31snfGFdFMlhfrXYbc8Pz3jnbpnOpBTfXhZbKC/7j2hvz1s9l6GYmvE27N5g3yAFOcuf948J15J9ibOHvdVyIdHgG5Z/OWWMeiBxRhRVRBt//jiK/Px0/fj0ZbEyrrCu7XscRFnO8oTSVzw8J1joGThHcJelWmKjCCDZLMSPRhfbtCubOur0XUd4OujLo6ShLrsernXm0TOsfWHzVXfAsIPQfemE3H1tTyi1/EOLkxQyF7q8bXystv/CG6nDLNcKTBhE+PA+39c4FJKU1/lGieLtvm0tTd81ClOghVVwUcxZqGyQCUIyD0E0nAhPVcMQHKLfqjFCOizgwi1QG/2rgS4uf1s8jxVqNxKcE1xZPMxHbCNzmjs6POnqevNNjh2jxfZpFLLCj2nF0ugK1BdH9G2iWJhaBwrRpWtLTyR+xESRi1OhdYN5oE4zi2y5AZ6AlcnqrIJy2OBbj37fNAD2Bboon/veA1KVjqKZDsvg19Hrz/rbZqT7okowMILELEcbcCO6PbPbMELELEbrTjTxGELELBLELE/ELEL4pxwBUJ8mcFy4jiUjqLv7pZikxf2ELELHIncqhbQHGmLELELOqjTjFILELE7ELELehELE0FYw3Zuvl8ZLV/3+l+di1yd+ZwevGELELCQoEVcbKtcELELELILEtE2ELsLEGELELILELE7ELELehELE2BuHabhGnA+gd9LuFLWCExazA4+EJELEKUQV/1O6JGLs==",
      "x-shopee-language": "vi",
      "x-sz-sdk-version": "3.4.1-2&1.6.16",
      "cookie": "SPC_F=X8A6BlgmJXJKBjHqfBekYb4FSe5bcCHW; REC_T_ID=78b3da35-7d41-11ee-89e5-b47af14b1878; _hjSessionUser_868286=eyJpZCI6ImMwMDRlMDk3LTk2MWMtNWY1NC1hZDEyLWE2Y2E5ZTA4NjcwYiIsImNyZWF0ZWQiOjE2OTkzNDMwODQ1MzcsImV4aXN0aW5nIjp0cnVlfQ==; SPC_CLIENTID=WDhBNkJsZ21KWEpLgrhxdtgcmoypfvvv; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDyxckFqcKvNtpIQw_EN0L_PEj_kyPu0MzytDp0.1; _ga_44R8KFLXBB=GS1.1.1699440802.1.1.1699440945.0.0.0; _med=refer; _ga_FV78QC1144=GS1.1.1701081314.1.0.1701081314.60.0.0; _ga_M32T05RVZT=GS1.1.1702552918.22.1.1702552937.41.0.0; _ga_TEVYGNDY1K=GS1.1.1705217891.5.1.1705218207.60.0.0; SPC_U=1041523811; SPC_R_T_ID=ECPllaQ0dW7gW9ntqr2hBFMN9ZssW4/KQ1nRK0mCXP4ZxdMz5UvLDYusTJiQB/Spk8DSI2dSISbd2FjNfB4JndzmTDHVEqsNcb3USX8WX/Wk2K1OaQVsZt2kVZrZrNLJ/4o3GA4FUPAhnz4Vev7oy91RuV/7M5EnkMDEkhI4kQQ=; SPC_R_T_IV=QVd6YTYyRDVwQUxIdFVlcQ==; SPC_T_ID=ECPllaQ0dW7gW9ntqr2hBFMN9ZssW4/KQ1nRK0mCXP4ZxdMz5UvLDYusTJiQB/Spk8DSI2dSISbd2FjNfB4JndzmTDHVEqsNcb3USX8WX/Wk2K1OaQVsZt2kVZrZrNLJ/4o3GA4FUPAhnz4Vev7oy91RuV/7M5EnkMDEkhI4kQQ=; SPC_T_IV=QVd6YTYyRDVwQUxIdFVlcQ==; _gcl_au=1.1.1512681945.1707880493; SPC_EC=.dm5uellOWDc0dGlsaUFJZqI3POUGiq0ubpKDly/44ffu4vBTCsqTYrYJoUdisCkrq4SeHdlOKTqepkQEHKFXjWf6HtWhaS4obgNO15jQzwytQQZWe/PJqRVR8BN8FoEwUJTeTIekbrJit54Pftu83Lp+xoZMtN7J/o3kljqwfJ3DucegEw8qjh5r/a5scFGveYFJ0AfOxaEfWDYj3rEd7A==; SPC_ST=.dm5uellOWDc0dGlsaUFJZqI3POUGiq0ubpKDly/44ffu4vBTCsqTYrYJoUdisCkrq4SeHdlOKTqepkQEHKFXjWf6HtWhaS4obgNO15jQzwytQQZWe/PJqRVR8BN8FoEwUJTeTIekbrJit54Pftu83Lp+xoZMtN7J/o3kljqwfJ3DucegEw8qjh5r/a5scFGveYFJ0AfOxaEfWDYj3rEd7A==; SPC_SEC_SI=v1-cmJMQXR1UXNXemtrVHNBT+ngmaXqrM646ugVpjz/bEEAHCQOkeEz/6C6kT6Anb1zFyNVTzD0wTMHRnWzrJkPsw8s3CQhN5giLZQAqdni3QU=; SPC_SI=o/jBZQAAAAA0QnY4TnpUVSWYqwAAAAAAUmNiNWFGMVg=; _gid=GA1.2.1953131871.1708334797; __LOCALE__null=VN; csrftoken=bZqDfD6U5pzPjNdUgb2YbHLyLo1Vwvsw; _sapid=9caf0a95ea498ef02704e468172856ad7d1744ea2ab06ccb10effb7e; SPC_IA=1; _QPWSDCXHZQA=4035b299-3e29-4209-bee3-0d9d3ce850c4; REC7iLP4Q=f85c2713-a138-4f7d-88b0-5cdb1709b104; _hjSession_868286=eyJpZCI6IjhkNWEyNThhLTA3MjktNDE5NC1hNTdlLWQ5MjFhZWI5ODYzMSIsImMiOjE3MDgzOTUzMDY2MjEsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; AMP_TOKEN=%24NOT_FOUND; shopee_webUnique_ccd=eAtVp3QjTIypuySNdRiwgw%3D%3D%7C3IweVG62joKgiWg%2Br26BuVECJn3ERAgqpROP96lo4axThjbIPDLKG23eE5PkLeaW3b3y2NTiqQY%3D%7CvwX%2FjZ%2BoLriVTQ7s%7C08%7C3; ds=ea9b146bfbc4d2b3aab9b3e9e1bf5f0b; _ga_4GPP1ZXG63=GS1.1.1708395306.46.1.1708398434.57.0.0; _ga=GA1.2.908291092.1699343070; _dc_gtm_UA-61914164-6=1",
      "Referer": "https://shopee.vn/voucher/details?evcode=UldTUDIwMDIyNENMMQ%3D%3D&from_source=voucher-wallet&promotionId=819999141380096&signature=5b7e5dbeb7fbacaa7fd6a24989280e3316edadfcd165380a242c4fafff678a41",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"promotionid\":819999141380096,\"voucher_code\":\"RWSP200224CL1\",\"signature\":\"5b7e5dbeb7fbacaa7fd6a24989280e3316edadfcd165380a242c4fafff678a41\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
    "method": "POST"
  })
    const res1 = await res.json()
    const used = await res1.data.voucher_basic_info.percentage_used
    if(used === 100){
        var d = new Date()
        console.log(used+"%" + ' time: ' + `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
        await fetch('https://api.telegram.org/bot6043554925:AAGVcKddvm8t_nRzgBlclulBFynT0YwAN0s/sendMessage?chat_id=-1002139375881&text=' + used+"%" + ' time: ' + `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
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
    
      const PORT = process.env.PORT || 10000;
      app.listen(PORT, () => {
        console.log(`Bot listening on port ${PORT}`);
      });
    } else {
      bot.start();
    }
  
    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));


    
