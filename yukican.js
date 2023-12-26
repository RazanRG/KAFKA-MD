// Buat Lu Yang Jual Sc Ini Gw Tonjok 



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/62856017311419?text=bang+aku+mau+donasi+i+love+yuuu'
global.ig = 'https://instagram/@genkaku._' // ubah aja
global.gcori = 'https://chat.whatsapp.com/JrXO3YytUWo5soRMlPLs4Q'
global.email = 'shimizuyuki115@gmail.com' //serah
global.region = 'indonesia' // serah
global.dana = '085875105908'
global.gopay = '085875105908'
global.pulsa = '085875105908'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Shiqi' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['62856017111419'] // ubah aja pake nomor lu
global.premium = ['62856017111419']
//==========================BY Hw Mods=======================//
global.lolkey = 'a8e86232771f9bc1826742c1'
global.zenz = 'zenzkey_41b4fe7a5d' // https://api.zahwazein.xyz
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'Kafka - MD' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Kafka' // ubah aja ini nama sticker
global.simbol = '•' //cuma simbol
global.author = 'by shiqizey' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'shiqisesi' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//


//imgnya disini
global.thum = fs.readFileSync("./yukicapedia/image/thum.jpeg") 
global.gambar = fs.readFileSync("./yukicapedia/image/gambar.jpeg")
global.tumnail = fs.readFileSync("./yukicapedia/image/tumnail.jpeg")
global.good = fs.readFileSync("./yukicapedia/image/good.jpeg") 
global.vidmenu = fs.readFileSync("./yukicapedia/video/mainmenu.mp4")

global.mess = {
    done: 'Done Kak 😁',
    admin: 'Fitur ini buat _*Admin Group*_ ',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Fitur ini buat _*owner*_ ',
    group: 'Fitur ini buat _*Group Chat*_ ',
    private: 'Fitur ini buat _*Admin Group*_ ',
    wait: 'tunggu bentar ',
    endLimit: 'punya limit sudah abis, tunggu jam 12 malam untuk reset',
    error: '*Fitur Error!!!*',
    prem : 'Fitur ini buat _*Member Premium*_ '
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})