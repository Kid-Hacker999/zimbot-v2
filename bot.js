// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮ZimBotInc SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF ZimBotInc SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃ZimBotInc SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃THANKS TO DIKA ARDNT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━

const fs = require('fs')
const chalk = require('chalk')

//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}

//settings
global.owner = ['263715183177',''] //owner number +27634090203
global.pemilik = ['263715183177'] //owner number +27634090203
global.premium = ['263715183177'] //premium number +27634090203
global.pengguna = 'Juice KiD' //username
global.footer = 'Juice Bot'
global.botnma = 'Juice Bot' //bot name
global.ownernma = 'Juice KiD' //owner name
global.packname = 'Juice KiD' //sticker package name
global.author = 'By Juice KiD' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','#','#',''] //prefix
global.sp = '🔵' //sp
global.mess = {
    success: 'Done!',
    admin: '*This feature is only for admin!*',
    botAdmin: '*Juice Bot  must be admin first!*',
    owner: '*this feature is only for Juice KiD*',
    group: '*Feature is only for groups!*',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: '*whoa wait a moment Juice bot proccessing*',
    endLimit: '*Your daily limit has expired the limit will be reseted every 12 hours*',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('./Zimbot/IMG-20220402-WA0056.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
