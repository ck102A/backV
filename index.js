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
      ///
  fetch("https://shopee.vn/api/v2/voucher_wallet/save_voucher", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,vi;q=0.8,zh-CN;q=0.7,zh;q=0.6",
    "af-ac-enc-dat": "AAczLjQuMS0xAAABjlD0c6gAABB/AzAAAAAAAAAAAiJ4pX31ZKnurS/EFNrvTh+UGgSWJSgZbvgkPtFgdJD1VrG7IKn+Lv82EjQVcrev5p8Cm51HJH5/2qmdhFATAtz74Bv1bzYFY4a2+NLDcv0RdP+rHXb68dnAzQIf1omszIHIAdiKVqCN5c76Dyg8fellUAcRwSqzkeqIz9Ma19Xhy7PmE3b68dnAzQIf1omszIHIAdiKVqCN5c76Dyg8fellUAcRkhWDuPzGQ8tcpsuuG35Kb+m7pS02OJvEIbrnM/6ulXKM2ksDv9Rl3tl3uv4HzymvmPjrKGAe2uix5Xlb3hufjCNO5v5XNpTyMdKhlWkTLm6M2ksDv9Rl3tl3uv4Hzymvly3uUxfIfGkUYMCds3+JbFglT7ZeN3evsHz37t37W5ma2k7lAA35FEXsMAVoNVMVodtQtino/HA+lopiuFOcte9HHSiJmzO9FlD4WCi4pVZSbzV4gJfhPFy2nqwdOqlWZNgj4M874RB6XMaX6vKB62YOhpcNH+zy5yZjdM+ywfbWXlfV3Oq4HzwHrh4wPBJnKFyH0xfu5K0+x21zF2q4fgJp0cQFBgIPBlRnVeeS3HYBq8YBHB9Zinha0EsPUECfCW0IpIyzcFtx0PLUjXj8lIaEVHkpxqOslSyLMYKhrghNqf1Qs6DgjIMbhv4Aby5cgcDA0w4FsjVzDoz8DI8a3YbD5jZX8j8PDxE0CEWKOtyUklVf/bhGtbJiG9BgYLgZvIkb9AglfLaMXWyGs90BeQp8TnTMxhOsMk4WQeBlsGPlqyAlaoEAMWC91ehScbImEHXJqguZTXiljlj1u8q2CJ7/MumgKhyFMPdLZ0PzqWfaIb7rQMwvKbl30AJJ1ry7UmYN71D+T6+Bmsxy/2vYf1vTk3+Ha7UjZI7H9sip5OaX/zYTJ8PH9tVFw9ppG9ibOH4MocjpljsHow6OyrRleyuFiW5fnvCveZq0Un2Q6KuiYhpLaq+GLIi7q30NNB6oGPYi/HzUjdmfQUnqysK9bBX+ut9s/LFfg6m3U47SoGaX/zYTJ8PH9tVFw9ppG9ibl/82EyfDx/bVRcPaaRvYm+ZCS0onqqa4ZwMH9tSUUzM=",
    "af-ac-enc-sz-token": "843MxV8BMIC/IRhH1UvG1A==|Qjw8pQ/DmVMfaxOXSPZk5kPP6Hup7gKmBLB629yzDOkGSEHslEBl5ziQf8Aw2ftqMXIK5zOKwlo=|rZBAajZ/f+XVqILu|08|3",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-api-source": "pc",
    "x-csrftoken": "JxWrT2o9x11aFmNEpWL5M7FHj4Y4pB39",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-access-f": "3.2.122.2.0|13|3.4.1-1_5.9.104_0_320|8b63e7ab34004155a46ad74da059c0af114b4f3dc81845|10900|100",
    "x-sap-access-s": "jN0UEVcXTHYkzq6yUPodB6op4xGYJ0K_WmvYGpmBr_A=",
    "x-sap-access-t": "1710755209",
    "x-sap-ri": "8a0df865a8cb3c1b81125a3b03019ceaea6a8abe9d2a4004d29c",
    "x-sap-sec": "N+ik5Q0D8kqW9kqWX9qn9kYWX9qW9kYW9kqD9kqWukYW9EYX9knE9iqWXkqW9eG23Zdn9kqWPkTW9oYX9ktsNK7nyaxXxfPTkm4RJBz7DZB9XNLPofaplp0lVqgLOVxNDQrkrtRjozdI9C9jaFo2YxerglT7XvqZHldQ2Hx3QEaS/bFcrqseH5o0WsHT/tZkl+2ZkhCqWIm88/sm0v1SvgtrhNWalqqMmGkQ5bFMQpr9zsuDR0WQD5G+XsefDIP8b3OaibOaXju6n9AISwH7NUVBOhoT87seLgn6wT9GSD/QYeqbms2tfp8lZDn8gpdSDMtEXhH+rpAQAijJaG/UEwTomPsj13KH7nAkW3o5ZpS7YP+2yeykRPfMf2NTMrAtokKW/ztQNZb342eG+HiLUCiRgOgQ1eV4Qz8mnLJGP30R7BS78eNwEK5OnqEnkWY1yaRhh6YmRQytsEP7CkQEE5u+iSrsWJp2xB6DdRsegWPs7QtoJUeLOvUambOCc6H37QN1m2Y1FS8HkjFqSqg6UG95I2//dUSe/odPHJq4IqHGuRbBjsoJ1Kj4m4Cf4oLv0MZijizGqwAbzQENsdcYfjdJDBXHHgSqwhbiS2Tv82BlrjjrtQFxVxeVfQZNh4JWXQFdnxpWQtos4BuyVtzzcsCOEPB8uAgQGkLv0MNcmH+FIRX5fTH1wBynEJa6frwFJgqP+rQtK9hjww02cc1DGEAINYJ2MUYeJtrNMw3E7/7uOIT7WsSiDtHhbKuIjTOaY8FFJEzwPhzg3yQoiE750q8eCTMVTgcV6+IPBBLO13punoocFXmxpsDtY8nBAc5tNeAqzh8YKsqz1jHuW+Gl2TUNEC3WwQl8EULnvwVgoOiKd5KcNC+gCG1t9qf7mEipP6Sd2IS7r2ZTKov/MRvfBdLZrGXczNtzIgExwZMHVRv8RsZlIzMyaUDkpbu09uZzSefJISqrmRRxO5bCk1xJA53XMedHnHKepf5vHNNUPzvpKP3ku9vRI6iop5Dp1eK+HQPnCiFZAmmtXUrgDwnFa7g1eLbEV/bVmvYwqewjRcsMcxuBkbKy34SIaK+d6r4HxM6IupWx3LQZHKYcBK3QPkl7ZjbjVH3idy6STT074QxIJZq0sTIlF9qPZALBZBXkgTMiWCa8UgPudqxNmy3POUOxkQNDBVRysPkcqboXdc9IiIfUQY5P67NbCBygG2L4Sa7MEpK5Qz7i4SZTDlI0iw5Qny5y3BrVtXOOIjaHTKVXtfZY5yCZXSC5sk5eQZqXjsdn9kqW181RYM9MVQiW9kqWIec63ioW9kqx9kqWAkqW9oTC9J7ozy5Jlc8IGY8kVf9xilWAWkqW9I9QvQjr1gbI9kqW9SL63Zdn9kqWFkqW9rYW9kt47o+Ttp8imxHA2XsPnaJTxYTaxioW9kqMV8SNY8aMw+qW9kqn9k0WWkqD9koW9kqn9kqWFkqW9rYW9ktzeuDS/6O9k6dViOI/5LfSjWdprkyW9kqL1PAIw89d9s==",
    "x-shopee-language": "vi",
    "x-sz-sdk-version": "1.7.5",
    "cookie": "SPC_F=Mk6aAzfZrOeEn0syyVnOxMzrL029znJF; REC_T_ID=be7d59c0-11a5-11ee-add6-2a2d259da05d; _hjSessionUser_868286=eyJpZCI6IjU3MzhmMzM5LTk2NDktNTU3MS04NDAwLTEwYjZhNDgzNjk5YiIsImNyZWF0ZWQiOjE2ODc1MTE5ODA3NjQsImV4aXN0aW5nIjp0cnVlfQ==; SPC_CLIENTID=TWs2YUF6ZlpyT2VFlkxwpkzlngpkdibg; _ga_M32T05RVZT=GS1.1.1692802602.7.0.1692802602.60.0.0; _gcl_au=1.1.1154017640.1705084045; _fbp=fb.1.1705084045598.1280771744; __LOCALE__null=VN; csrftoken=vC6VwZ6UJT8PHyTbbpwLlBvM6jCFnhVb; SPC_SI=zRfwZQAAAABnODBQWnBjVyRH9gAAAAAAbnQzMWltY0U=; SPC_SEC_SI=v1-YUZJNExZY0tQU2RhOG85SidFGMzblm5mK1NR4RoYKhCGqF4QWz6MpDTaE+AaA5GAPgLYQCXgOKKGlNaxWLX9i+HnT51s4WdLkTyQcYr0e4c=; _sapid=5c439c09d1c73d6c78bf58b26a031f829badd4eddb47feb9bacd9ad2; _QPWSDCXHZQA=6af11ccd-c280-476a-d3dd-3f349e20accb; REC7iLP4Q=a4710504-48ee-4326-aaa5-bd9a2ebaee1c; _hjSession_868286=eyJpZCI6IjExZjFhY2JjLWNlMTEtNDMwOS04MjhiLWE5MGM0MmQwZDlmYiIsImMiOjE3MTEwMzk2MDcxMjUsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MX0=; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.2.89506391.1711039608; SPC_ST=.aURvVXdRNDJXdjR0M1IwYloTwmqGMQ92J2HiSrqHbGCk33rY6pVWaXy6DDUewMufWMUKHFPxMrALy9qQssrODi6GFok5+EhyZe+3sF7Wxz5kknU1ziv8oDe1BgoHzXk4IDhAYvOkZUskUR30ixG6hp1qyeGOhJCTY0nb1UCVz+8ul1jWB34v4ZfMSjLLg4GI3zP8UQ12jx/K69mQp2rtpA==; SPC_EC=.aURvVXdRNDJXdjR0M1IwYloTwmqGMQ92J2HiSrqHbGCk33rY6pVWaXy6DDUewMufWMUKHFPxMrALy9qQssrODi6GFok5+EhyZe+3sF7Wxz5kknU1ziv8oDe1BgoHzXk4IDhAYvOkZUskUR30ixG6hp1qyeGOhJCTY0nb1UCVz+8ul1jWB34v4ZfMSjLLg4GI3zP8UQ12jx/K69mQp2rtpA==; SPC_U=1209283259; SPC_T_IV=S0JEMzZybkxSNVFtR3RaOA==;SPC_R_T_ID=jgh1hY7Yp5/RkMgkoBcGDSKghRdd5qJIAX4X5wBF1QkM5BXiiKAdBCYGnK0pBalYIZoslAc7PQa49AIVZ5aL1e2J1+yOgqtRZgrBmTDr53xMjLbY2PD+PHmS/CEI0JmP2QO61/bRnSCjUIgHaMqmct9n35e14b34CyKfi1yKFXY=; SPC_R_T_IV=S0JEMzZybkxSNVFtR3RaOA==; SPC_T_ID=jgh1hY7Yp5/RkMgkoBcGDSKghRdd5qJIAX4X5wBF1QkM5BXiiKAdBCYGnK0pBalYIZoslAc7PQa49AIVZ5aL1e2J1+yOgqtRZgrBmTDr53xMjLbY2PD+PHmS/CEI0JmP2QO61/bRnSCjUIgHaMqmct9n35e14b34CyKfi1yKFXY=; _ga=GA1.1.1519813705.1687511981; _ga_4GPP1ZXG63=GS1.1.1711039607.12.1.1711039684.60.0.0; shopee_webUnique_ccd=KC88fnV6AhOA71bnH9o74w%3D%3D%7CMP2VkDtArfh8%2BkHvwuJ%2BMKuQKwCjo3MjVkhplFr%2BdOVdtZzpg1nUHKRk4fzm3wpmT6Z1lYsryR2Zf3AJ%7C%2FLDYeeZD3XcudeOZ%7C08%7C3; ds=9955133638761d940e3258347308f4f5",
    "Referer": "https://shopee.vn/m/ma-giam-gia",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"voucher_promotionid\":847587201105936,\"signature\":\"4dbb277ff4fb9401b7e911085443bdc542c4fa7244d4db1e0c7a5e14ec29b173\",\"signature_source\":\"0\"}",
  "method": "POST"
})
  ///
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


    
