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
    "af-ac-enc-dat": "AAczLjQuMS0yAAABje4vWJkAAA+oAyAAAAAAAAAAAv+Jk4+lhxmJFR0nziZ/YaxPEEwFl/82EyfDx/bVRcPaaRvYm5f/NhMnw8f21UXD2mkb2JvOtkmHEb/Hq3OyNYJVL7qfOkAYmJibYERxv5wPwHgWyQ0Ku2OUZLBTg/L7Ar0e1/KlwYOE/ES3+T32U4Y3GInDuM6NuL8Qcgjkrsw//ye7EHUR5SlJTBLsf+5/YAM3bfBmNgtozLApSqWGQktyInj8H0Zu6GXzXbTzGhCPJ/r2U0iTnAFT2Rra5rBj3ThNptXcS3M8WrFWxi3vmqqvYYTFE2RdsRRijniWuOlI1EgfkGwK4O7k2EmJdiVvBK2k25wfeFKGfaSMCuTxEBMF1JWpUQJfq3K1AG1EpKO616ktiwbY7P9KHML6aQtF4FlKd6wIZ7ugf/+klKjC7cTH7sR8wbX2+obBZ0Ft7Itc/pw0Wp7JqRbQi4qOBfX5l99KLTRetMvPd7B24O0bbJV1UmSWwbX2+obBZ0Ft7Itc/pw0Wp7JqRbQi4qOBfX5l99KLTQax8fiGjC0OB/S2DbFR/RPwsXNNYTyK3HSzCGoV/4BXUckfn/aqZ2EUBMC3PvgG/UYz6Rdg8a/lQzfapMRlwDxYH6oJSbUnFvFBdt+DtZeJ0ckfn/aqZ2EUBMC3PvgG/XS56jFyeFsh1a8fZI1WbBoBvz1XAQOOAlSm8TMiSpY6QWcyUZatW8kv8TAWyR/sj+4fRm+ispZVFR2/v2qos4q5pYC6+KA1e8a5kVnxaPVMp1ilFFH5e5k9OwOQhR3Xc0WDjyPDxr1CxPES+8ZXOMGlPggMlLme7qoZjpeFzVJ9Pr3aiKuLCyCxieCR/5oIMA1xcZwa2HsqKP9Zld5yOt50RCG5fEn08XpfIfSqs82CjGVsRaH/qns6kJfWwhIMeyX/zYTJ8PH9tVFw9ppG9ibmQjgXUXTpPPKz8uOifIZL5sn9Ca3wjTTQF6PWvtd/tTRHJJ2HKErNOh5euwKv/tWaNCUHZI4LIIKj01LAXggiTtRXU2tjNvKetI8ZQrSyU2gp0neRjrocUF3zUGdZlgsydRk5Bc7YLWUCnV4WuIa1A==",
    "af-ac-enc-sz-token": "WgNndsV7SbYpb4AGHQhR1g==|lOKuQnRQ8/JdrwlyWwdR3kqQ74eicH3cWixptOrepp8JkFLED8rTDSaOJ7Vww2KzHYeWDCR7a7Y=|uucHWlaXJzw0q6lL|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "M5yoX6DzcjgWQ8j16uiqPKmyf4z2yWp4",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.122.2.0|13|3.4.1-2_5.1.0_0_230|3dd68b0be78a44239efff52b6575b1199898f8e8fa664f|10900|1100",
    "x-sap-access-s": "VZwyUUAg18p7_TFmld0vxD1rMS6zxFeIGXA0YZit-Tc=",
    "x-sap-access-t": "1709098096",
    "x-sap-ri": "70c4de65cea0c2c411dc7d3a030183754a9cc2324578a536c3c9",
    "x-sap-sec": "CRSf2ENJCDj4wDj4YIjSwDX4YIj4wDX4wDjkwDj4lDb4wDjJwDfSwIj4YDj4wtOYI2HSwDj4MDw4w1jIwDi3hkF84DJGo+jhQKvAPsedY7iNkHK3oauY7mEjmNYVzUD8bTntwOkXXJp3h6idW0OuxcELOZPkmmrRcxoASUfAVLcltibL2+RleHqsyKdCah8JjhQpkcW/se2NBUWEEBt+TRqb4sHYE+bOyxwXKICqg8IyhxbFlDvUX14wZ6ZuKvUHcosreClP5vZWIdzdhzEjU+OYIdn9/M0Ksch9SQDxyZJImSWsEp/L/F4MiGQMmFbrosmFh2Uu0CIj4qVDHa/lYAObvU/6V5T8o5lksjLZPLjtVQtwHnJ04rtXlI+ggYtYAQsRQVo6nWynOd3nlcaPX/BDMRrhqaD0Gov7p5pg1anUcq9TQFnzYNqJ+h9DTkIyuDLEuJwDvcgsp2Ls4XpbKHSBIO1dQ0/q4ZZ63coVN/Qzp+uNCjQ+kwQp72dEYZFiX4z0g5kzvo56DN6A+zB1r0CfEkuHNQ277QljGza7AS07Ot+p2qNAF5c5R1JJ5XSOH6VawcpWV/F9MxBWjKyiROMod2TRozKjjXdl4J+KDr2y0cv/5S5woDBvO83eyIbuebm3UFsa029eKpEKlhUoLazOGtGMhwmifZ+A1oYOuMNWanH4jHYr6ahx069TdIkzwJDx+vKLQhlaGy+Y+26vdSq6vsOThXb6eWfKL6cB+Bt2xWQqYN9yDmbVKNZs7bM5oYeRiH501tZBLLlwMKPBC8BU6IC8q3lMC8gREJsOqYpdMYfQrYRYd51kmDfHXlXWi7oU7/7RGPcAFsBhZahumQoUkp64+L057zLsKNzxxZNjc8hVsEN86Hi7VIit16wCrcdGBOaoH0cO9EANghTUC0oZTVd18jeWA8OqeCuXK+AWsE51zEFKd8WHsGn/5VLVd0NFc8dphjDAw2s4ZyXSwDj4zRVy9kwfyAA4wDj4/uEGIQN4wDj0wDj4aDj4w9FQYbxDzbgsethxRmiThQSAQ7CPGDj4wA1Fy+zaX5jfwDj4wtfGI2HSwDj4xDj4wFX4wDgg/PeNaqyB/OBQzev7LItqcr6RzQV4wDiAy5yD9zVjwDN4CDjSwDX4GDj4wDN4wDj0wDj4aDj4wAF77IhRmqrsehNP+FtsBtp2cXF8GDj4wANgzRuzzzubwDj4wn==",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "3.4.1-2&1.6.16",
    "cookie": "SPC_F=X8A6BlgmJXJKBjHqfBekYb4FSe5bcCHW; REC_T_ID=78b3da35-7d41-11ee-89e5-b47af14b1878; _hjSessionUser_868286=eyJpZCI6ImMwMDRlMDk3LTk2MWMtNWY1NC1hZDEyLWE2Y2E5ZTA4NjcwYiIsImNyZWF0ZWQiOjE2OTkzNDMwODQ1MzcsImV4aXN0aW5nIjp0cnVlfQ==; SPC_CLIENTID=WDhBNkJsZ21KWEpLgrhxdtgcmoypfvvv; __zi=2000.SSZzejyD2zOackkldWi0aIREzU6G4qBDDCJhyz81LDyxckFqcKvNtpIQw_EN0L_PEj_kyPu0MzytDp0.1; _ga_44R8KFLXBB=GS1.1.1699440802.1.1.1699440945.0.0.0; _med=refer; _ga_M32T05RVZT=GS1.1.1702552918.22.1.1702552937.41.0.0; _ga_TEVYGNDY1K=GS1.1.1705217891.5.1.1705218207.60.0.0; SPC_U=1041523811; SPC_R_T_ID=ECPllaQ0dW7gW9ntqr2hBFMN9ZssW4/KQ1nRK0mCXP4ZxdMz5UvLDYusTJiQB/Spk8DSI2dSISbd2FjNfB4JndzmTDHVEqsNcb3USX8WX/Wk2K1OaQVsZt2kVZrZrNLJ/4o3GA4FUPAhnz4Vev7oy91RuV/7M5EnkMDEkhI4kQQ=; SPC_R_T_IV=QVd6YTYyRDVwQUxIdFVlcQ==; SPC_T_ID=ECPllaQ0dW7gW9ntqr2hBFMN9ZssW4/KQ1nRK0mCXP4ZxdMz5UvLDYusTJiQB/Spk8DSI2dSISbd2FjNfB4JndzmTDHVEqsNcb3USX8WX/Wk2K1OaQVsZt2kVZrZrNLJ/4o3GA4FUPAhnz4Vev7oy91RuV/7M5EnkMDEkhI4kQQ=; SPC_T_IV=QVd6YTYyRDVwQUxIdFVlcQ==; _gcl_au=1.1.1512681945.1707880493; SPC_EC=.bVNRd2ZlMjJaUG85VlZBVJYBzSKm8rwcy0lgKPgT5HHGE8HmKecoEM6unfwWdioKoVdbtRzrrfJnDSduHOnnfx0cSUMbB+4zkq/ngh/ccSB6Pw+Ly9gx0/KOhq9kBTEEtsci71HKlPw99mIvGo0WP6/mhaOxw/oCfNtPEv+rVz88IwC9cqxgAOxOWBTeC9cCYincn9aKSQAxH878W+qAVA==; SPC_ST=.bVNRd2ZlMjJaUG85VlZBVJYBzSKm8rwcy0lgKPgT5HHGE8HmKecoEM6unfwWdioKoVdbtRzrrfJnDSduHOnnfx0cSUMbB+4zkq/ngh/ccSB6Pw+Ly9gx0/KOhq9kBTEEtsci71HKlPw99mIvGo0WP6/mhaOxw/oCfNtPEv+rVz88IwC9cqxgAOxOWBTeC9cCYincn9aKSQAxH878W+qAVA==; _ga_FV78QC1144=GS1.1.1708861306.2.0.1708861308.58.0.0; __LOCALE__null=VN; csrftoken=M5yoX6DzcjgWQ8j16uiqPKmyf4z2yWp4; _sapid=9caf0a95ea498ef02704e468172856ad7d1744ea2ab06ccb10effb7e; SPC_SEC_SI=v1-eVhNcWg1MzJrOE44ZlV0VoP5LYwyyXvJ1qsop1LugvnK0BGgRbVa4kr/QERk69bBk6XaEaT+XoRhTfj3OlRRC/9Ap+hcue2W0VX0cC9Da0k=; SPC_SI=CVPUZQAAAAA3b0hzT2Q1TK2FgwEAAAAAU1F4c3dxWk4=; _QPWSDCXHZQA=8abbb3a1-e03c-41bc-a321-f7b665981080; REC7iLP4Q=f85c2713-a138-4f7d-88b0-5cdb1709b104; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.908291092.1699343070; _gid=GA1.2.109085109.1709098087; _dc_gtm_UA-61914164-6=1; shopee_webUnique_ccd=WgNndsV7SbYpb4AGHQhR1g%3D%3D%7ClOKuQnRQ8%2FJdrwlyWwdR3kqQ74eicH3cWixptOrepp8JkFLED8rTDSaOJ7Vww2KzHYeWDCR7a7Y%3D%7CuucHWlaXJzw0q6lL%7C08%7C3; ds=8ab995005c90935e05ecd16b64ee1f59; _ga_4GPP1ZXG63=GS1.1.1709098086.63.0.1709098093.53.0.0",
    "Referer": "https://shopee.vn/voucher/details?evcode=TElWRS04MzIzMjYzNzY5OTY4NjQ%3D&from_source=voucher-wallet&promotionId=832326376996864&signature=28297483bc7d9a2c2b42a0dc449cdaf2a9e556f0e2f3049d304c43d6fb10abe3",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"promotionid\":832326376996864,\"voucher_code\":\"LIVE-832326376996864\",\"signature\":\"28297483bc7d9a2c2b42a0dc449cdaf2a9e556f0e2f3049d304c43d6fb10abe3\",\"need_basic_info\":true,\"need_user_voucher_status\":true,\"source\":\"0\",\"addition\":[]}",
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


    
