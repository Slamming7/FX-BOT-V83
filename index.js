 // <BOT BY FX - TEAM>

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES, 
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupsettingsChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const qrcode = require("qrcode-terminal") 
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const encodeUrl = require('encodeurl')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const SH = require('shthear')

const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();
const util = require('util');


//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const simple = require('./lib/simple.js')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')

//********** src **********//
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const antivirtex = JSON.parse(fs.readFileSync('./src/antivirtex.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostik.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antilinkmax = JSON.parse(fs.readFileSync('./src/antilinkmax.json')) 
const antitiburon = JSON.parse(fs.readFileSync('./src/antibot.json')) 
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const mekih = JSON.parse(fs.readFileSync('./src/simi.json'))
const settings = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const { stick } = require('./src/respon');

//*********** CUSTOMABLE ***********//

prefix = settings.prefix
f = '_'
antidel = true
blocked = []
fake = '- [ 𝙁𝙓 𝘽𝙊𝙏 ] -'
fakeimg = fs.readFileSync(`./media/FxBot.jpeg`)
numbernye = '0'
join = '\`\`\`New Member\`\`\` \n \`\`\`Nama :\`\`\` \n \`\`\`Askot : \`\`\` \n \`\`\`Umur :\`\`\` \n \`\`\`Status :\`\`\` \n\n - [ 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 ] -'
leave = '\`\`\`Sayonaraa👋\`\`\`'
promote = '*Your Welcome🥳*'
demote = '*Yahahahwahyuuu kasihaan di demote🤣*'
public = true



const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const scommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:FxBotシ︎\n'
            + 'ORG:Owner FxBot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281226770537:+62 831-1800-241\n'
            + 'END:VCARD'

//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const BarBarKey = 'Apikey-Lu' 
const VhtearKey = 'Apikey-Lu' 
const XteamKey = 'Apikey-Lu' 
const TobzApi = 'Apikey-Lu' 
const OnlyDev = 'Apikey-Lu'
const TechApi = 'Apikey-Lu'
const ZeksApi = 'Apikey-Lu'
const shizukaapi = 'Apikey-Lu'
const LolHuman = 'Apikey-Lu'
const LolKey = 'Apikey-Lu'

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
}
function tanggal(){
myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
			myDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const FxBot = new WAConnection()
	FxBot.version = [2, 2140, 12]
	FxBot.logger.level = 'warn'
	console.log(banner.string)
	
	FxBot.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el código QR de arriba'))
	})
	fs.existsSync('./FxBot_Connection.json') && FxBot.loadAuthInfo('./FxBot_Connection.json')
	FxBot.on('connecting', () => {
	start('2', 'Conectando...')
	})
	FxBot.on('open', () => {
	success('2', `Conectado\n\n\nBot WhatsApp Con NodeJS hecho por Felixcrack\n\n\nEscribe .public para iniciar el bot`)
	})
	FxBot.sendMessage(`12607825660@s.whatsapp.net`, `─────「 *CONECTADO* 」─────\n\n▢ Conectado exitomekente con su WhatsApp, para iniciar el bot, escribe .public\n\n▢ Este bot es creado por FxTeam\n\n▢ Canal Oficial de YT : https://youtube.com/c/Felixcrack409\n\n▢ Grupo de soporte por si tienes alguna duda : https://chat.whatsapp.com/LOHYHhBJRjG7ruk67QkExj\n\n▢ Recomendaciones para que el bot no se apagué\n\n▢ Quítale la optimización de la batería al WhatsApp donde tengas al bot\n\n▢ Quítale la optimización de la batería a Termux\n\n▢ Copyright Felixcrack 409 ©\n\n─────「 *FXBOT* 」─────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Fx-Bot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/FxBot.jpeg'),sourceUrl:"https://wa.me/529984646983?text=© FxBot Team"}}})
	await FxBot.connect({timeoutMs: 30*1000})
	 
    fs.writeFileSync('./FxBot_Connection.json', JSON.stringify(FxBot.base64EncodedAuthInfo(), null, '\t'))

	FxBot.on("group-participants-update", async (anu) => {
    try {
    	if(antifake.includes(anu.jid)) {
const mdata = await FxBot.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(00)) {

setTimeout(async function () {
if (num.startsWith('1')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('994')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('48')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('91')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('62')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('60')) return FxBot.groupRemove(mdata.id, [num])
 if (num.startsWith('66')) return FxBot.groupRemove(mdata.id, [num])
 if (num.startsWith('371')) return FxBot.groupRemove(mdata.id, [num])
 if (num.startsWith('380')) return FxBot.groupRemove(mdata.id, [num])
}, )
}
}
}

		const thisfrom = await FxBot.groupMetadata(anu.jid)

if (anu.action == 'add'){
bbykev = anu.participants[0]
const fakelord =  { "key" : {"remoteJid": "299277777@g.us","fromMe": false,"participant": '0@s.whatsapp.net'}, message: { "stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AipZmrw402_detgfViyjnKOg4hTUhpCTjyyJwHFYj8dw.enc", "fileSha256": "gUCkLdDm6fVT7oGr4Wtw1E4IcA1c2BNwX/IsNx2ox6U=", "fileEncSha256": "il2fkvb3+y3tKHfsWJVNnvz7CBdLhZQoCDdjGlbU1CI=", "mediaKey": "5aKnfk61dIoUlhBjvPCFYl3U9Wzq48thKjK/yZlXsrQ=", "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73", "fileLength": "44978", "mediaKeyTimestamp":"1621218472" }}}
if(bbykev.startsWith('5219984646983')) return FxBot.sendMessage(thisfrom.id, 'Ui Entro El Creador De Este Bot', MessageType.text, {quoted: fakelord, contextInfo: {forwardingScore: 9999, isForwarded: true}})
}


if (!welkom.includes(anu.jid)) return

const mdata = await FxBot.groupMetadata(anu.jid)
      groupMet = await FxBot.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      num = anu.participants[0]
      
      ini_user = FxBot.contacts[num]
      namaewa = ini_user.notify
      member = mdata.participants.length
      console.log(anu)
      memeg = mdata.participants.length
      let v = FxBot.contacts[num] || { notify: num.replace(/@.+/, "") }
      anu_user = v.vname || v.notify || num.split("@")[0]
       time_wel = moment.tz("America/Mexico_City").format("HH:mm")
        let w = FxBot.contacts[num] || { notify: num.replace(/@.+/, "") }
       
        out = `Adios Pedazo De Aborto 🥺👍🏿 Nunca Te Quisimos 👋🏻`
 try {
        pp_user = await FxBot.getProfilePicture(num)
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      try {
        pp_grup = await FxBot.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${pp_user}`)
        
     
 if (anu.action == 'add') {
  
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeUrl(namaewa)}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        )
        buttons = [
          { buttonId: `sjJwkLwbWk`, buttonText: { displayText: "¡Bienvenido al grupo!" }, type: 1 },
        ]
        imageMsg = (
          await FxBot.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage
        buttonsMessage = {
          contentText: `🪀 「 Bienvenid@ 」 🪀\n\n¡Hola @${anu_user}!\n\n ¿Como estas?\n\nYo soy FxBot y te doy la bienvenida a : ${mdata.subject}\n\n🪀 Usuarios: ${memeg}\n\n🪀 Administradores: ${groupAdmins.length}\n\n🪀 Reglas Del Grupo: \n\n${mdata.desc}`,
           
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        }
        prep = await FxBot.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        )
        FxBot.relayWAMessage(prep)
      }
     else if (anu.action == 'remove') {
        
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeUrl(namaewa)}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        )
        buttons = [
          { buttonId: `hHHYGFRH`, buttonText: { displayText: `${leave}` }, type: 1 },
        ]
        imageMsg = (
          await FxBot.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage
        buttonsMessage = {
          contentText: `${out}`,
          footerText: `${leave}`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        }
        prep = await FxBot.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        )
        FxBot.relayWAMessage(prep)
      
  
  }
  
  
  
  
  
     else if (anu.action == 'promote' && !num.includes(FxBot.user.jid)) {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Nuevo Admin Del Grupo&pp=${shortpc.data}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
            teks = `◪ PROMOTE DETECTADO\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ Mensaje: ¡Felicitaciones por ser un administrador de grupo!\n└─ ❏ @${num.split('@')[0]}`
            FxBot.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote' && !num.includes(FxBot.user.jid)) {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Un Admin Menos&pp=${shortpc.data}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
            teks = `◪ DEMOTE DETECTADO\n\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ Mensaje: Lo siento ya no eres admin 💩\n└─ ❏ @${num.split('@')[0]}`
            FxBot.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
  


	FxBot.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉  𝙂𝙍𝙐𝙋***\\\\\
FxBot.on('group-update', async(chat) => {
var donde = chat.jid
var group = await FxBot.groupMetadata(donde)
if (!chat.desc == '') {
var tag = chat.descOwner.split('@')[0] + '@s.whatsapp.net'
var mensajeDesc = `*🐤 「 Descripción Del Grupo Cambiada 」 🍟*\n\nLa descripción del grupo acaba de ser cambiada por\n\n@${chat.descOwner.split('@')[0]}*\n\n•Nueva descripción:\n\n${chat.desc}`
FxBot.sendMessage(group.id, mensajeDesc, MessageType.text)
}
if (chat.announce == 'false'){
teks = `「 *Grupo Abierto* 」\n\n_El grupo ha sido abierto por el administrador_\n\n_Ahora todos los miembros pueden enviar mensajes._`
FxBot.sendMessage(group.id, teks, MessageType.text)
}
if(chat.announce == 'true'){
teks = `「 *Grupo cerrado* 」\n\n_El administrador ha cerrado el grupo_\n\n_Ahora solo los administradores pueden enviar mensajes_`
FxBot.sendMessage(group.id, teks, MessageType.text)
 }
if(chat.restrict == 'false'){
teks = `「 *Configuración Del Grupo Cambiada 」\n\nSe ha abierto la opción Editar información del grupo para todos los miembros.\n\nAhora todos los miembros pueden editar la información de este grupo.`
FxBot.sendMessage(group.id, teks, MessageType.text)
}
if(chat.restrict == 'true'){
teks = `「 *Configuración Del Grupo Cambiada 」\n\nSe ha cerrado la opción de Editar la información del grupo para los miembros.\n\nAhora solo el administrador del grupo puede editar la información de este grupo`
FxBot.sendMessage(group.id, teks, MessageType.text)
}
})

	FxBot.on('message-delete', async (m) => {
 
if (m.key.remoteJid == 'status@broadcast') return
if (m.key.fromMe) return
FxBot.sendMessage(m.key.remoteJid, `antidelete detectado`, MessageType.text, {})
console.log(color('[ ANTI ELIMINAR MENSAJE ]', 'magenta'), color(`MENSAJE ELIMINADO DETECTADO`, 'red'))
setTimeout( () => {
                FxBot.copyNForward(m.key.remoteJid, m.message)
                
                }, 1000)
                })

FxBot.on('chat-update', async (mek) => {
	    try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
   
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = settings.apiKey 
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        const senderme = mek.participant
        symantec = (type === 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : ''
   body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesC = pes.slice(0).trim()
			 m = simple.smsg(FxBot, mek)
			button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''

			mess = {
			wait: '▢ ¡Espera un momento!',
			success: '▢ ¡Done!',
			nsfwoff: '▢ ¡La funcion de NSFW no está activa!',
			wrongFormat: '▢ Formato incorrecto.',
			waitimg: '▢ ¡Espera un momento!\n\nEstoy creando tu imagen.', 
			error: {
				stick: '▢ Ocurrió un error.',
				errostick: '▢ Ocurrió un error.',
				Iv: '▢ Verifica que el link sea correcto.',
			},
			only: {
				group: '▢ Este comando solo puede ser usado en gruposp.',
				admin: '▢ Lo siento.\n\nNo eres administrador del grupo.',
				Badmin: '▢ El bot necesita ser admin para poder usar este comando'
			}
		}
      const totalchat = await FxBot.chats.all()
			const botNumber = FxBot.user.jid
			const ownerNumber = [`${settings.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await FxBot.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const itsMe = sender == botNumber ? true : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiLinkMax = isGroup ? antilinkmax.includes(from) : false
            const isAntiTiburoMierdaBot = isGroup ? antitiburon.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
            const AntiVirtex = isGroup ? antivirtex.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
            const isAutoSt = isGroup ? autostick.includes(from) : false
			const isSimi = isGroup ? mekih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
				
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				FxBot.sendMessage(from, teks, text, {quoted:freply})
			}
			const sendMess = (hehe, teks) => {
				FxBot.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? FxBot.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : FxBot.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

const fakegroup = (teks) => {
			FxBot.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
		const txt1 = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": `© FxBot Team 🍡`, 'jpegThumbnail': fs.readFileSync('./media/FxBot.jpeg')}}
}
contextInfo: {
mentionedJid: [sender]}

const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "529984646983@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 999999999999,status: 1,surface : 1,message: `${fake}`,orderTitle: 'FXTeam',thumbnail: fs.readFileSync('./media/FxBot.jpeg'), sellerJid: '0@s.whatsapp.net'}}}

const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/FxBot.jpeg')}}}
            
const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/wait.webp')
			FxBot.sendMessage(hehe, ano, sticker, { quoted: ftoko})
		}

const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/FxBot.jpeg`)} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/FxBot.jpeg`)
					},
					"title": fake,
					"description": "SELF BOT",
					"currencyCode": "USD",
					"priceAmount1000": "999999999999",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await FxBot.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
fx10 = vid1
mhan = await FxBot.prepareMessage(from, fx10, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await FxBot.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
FxBot.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
FxBot.sendMessage(from, hasil, type, options).catch(e => {
FxBot.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}


const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await FxBot.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				FxBot.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 


////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙑𝙄𝙍𝙐𝙎***\\\\\
    if (budy.length > 1800) {
    if (!isGroup) return
    if (!AntiVirtex) return
    if (isGroupAdmins) return
    reply('                              \n'.repeat(300))
    reply(`「 *ANTI-TRAVA* 」\n\n¡Kuaker malo! ¿Por qué enviar una trava ✋🏻📰? \nBye kuaker...\n\nAdiós~`)
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    FxBot.groupRemove(from, [sender])
    }
/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉  𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙂𝙍𝙐𝙋***\\\\\
      if (budy.includes(`chat.whatsapp.com`)){
	   
					if (isGroup && !mek.key.fromMe) {
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@529984646983")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`▢ Eliminé al usuario @${sender.split("@")[0]}\n\nPor romper una de las reglas del grupo.`)
					FxBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
}
if (budy.includes(`http`)){
	   
					if (isGroup && !mek.key.fromMe) {
					if (!isAntiLinkMax) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@529984646983")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`▢ Eliminé al usuario @${sender.split("@")[0]}\n\nPor romper una de las reglas del grupo.`)
					FxBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
}
	if (budy.includes(`https://www.youtube.com/c/TheKillerMaxOFC`)){
	   
					if (isGroup && !mek.key.fromMe) {
					if (!isAntiTiburoMierdaBot) return
					 
					if (messagesC.includes("@529984646983")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`▢ Eliminé al usuario @${sender.split("@")[0]}\n\nPor usar BotTiburon.`)
					FxBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
}

if (!settings.autocomposing) {
FxBot.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
FxBot.updatePresence(from, Presence.recording)
}

			colors = ['red','white','black','blue','yellow','green']
			const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
	    const isTexto = type == 'textMessage'
	
	
		const isQuoted = type == 'extendedTextMessage'
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (itsMe){
        if(chats.toLowerCase() == `${prefix}self`){
        public = false
        FxBot.sendMessage(from, `Success`, `STATUS : SELF`)
        }
        if (chats.toLowerCase() == 'status'){
        FxBot.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
        }
        }
        if (!public){
    if (!mek.key.fromMe) return
  }
 
		if (isAutoSt && isMedia && isImage) {
		if (!mek.key.fromMe) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
           .input(media)
           .on('start', function (cmd) {
           console.log(`Started : ${cmd}`)
           })
          .on('error', function (err) {
          console.log(`Error : ${err}`)
          fs.unlinkSync(media)
          reply('error')
          })
          .on('end', function () {
           console.log('Finish')
           FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 & 𝑻𝒐𝒎𝒊𝒌𝒐 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/EDg6WLsSDLNBZYhI5XDjji'}}, quoted : mek })
           fs.unlinkSync(media)
           fs.unlinkSync(ran)
           })
           .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
           .toFormat('webp')
           .save(ran)
		}}
		if ((isAutoSt && isMedia && mek.message.videoMessage.fileLength < 10000000 || isVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		if (!itsMe) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            sticWait(from)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Falló, al convertir ${tipe} a stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 & 𝑻𝒐𝒎𝒊𝒌𝒐 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/EDg6WLsSDLNBZYhI5XDjji'}}, quoted : mek })
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(300,iw)':min'(300,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
		        }}
			if (!isGroup && !isCmd) console.log(color(time, 'white'), color('[ PV ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'yellow'))
            if (isGroup && !isCmd) console.log(color([time], 'white'), color('[  GRUPO  ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'yellow'), 'in', color(groupName, 'white'))
            if (!isGroup && isCmd) console.log(color([time], 'white'), color('[ COMANDO ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'yellow'))
            if (isGroup && isCmd) console.log(color([time], 'white'), color('[ COMANDO ]', 'aqua'), color(budy, 'white'), 'DE', color(sender.split('@')[0], 'yellow'), 'in', color(groupName, 'white'))
			let authorname = FxBot.contacts[from] != undefined ? FxBot.contacts[from].vname || FxBot.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			switch(command) {
			  
			
			     case 'help':
                case 'menu':
                const chatsIds = await FxBot.chats.all()
                const timestamp = speed();
                uptime = process.uptime()
                const latensi = speed() - timestamp 


teks = `───── ● BOT INFO ● ─────
◈ 💫 *Prefijo :*${prefix}
◈ 💫 *Runtime :*_${kyun(uptime)}_
◈ 💫 *Velocidad :*_${latensi.toFixed(4)} segundos_
◈ 💫 *Total De Chats :*_${totalchat.length}_

┌─── ● MENU PRINCIPAL ● ───
│◈ ⭐ *antienlace* 
├◇ Elimina por enlaces de WhatsApp.
│◈ ⭐ *antienlacemax * 
├◇ Elimina por todo tipo de enlaces.
│◈ ⭐ *antifake * 
├◇ Elimina números virtuales.
│◈ ⭐ *antimedia * 
├◇ Elimina al que mande un archivo.
│◈ ⭐ *autosticker * 
├◇ Crea stickers automáticos.
│◈ ⭐ *antibottiburon * 
├◇ Elimina al bot Tiburón.
│◈ ⭐ *antitrava * 
├◇ Elimina a quien mande travas.
│
├───── ● MENU TAG's ● ─────
│◈ 🗡️ *hidetag* 
├◇ Menciona a todos con texto.
│◈ 🗡️ *imgtag*
├◇ Menciona a todos con una imagen.
│◈ 🗡️ *sticktag* 
├◇ Menciona a todos con un sticker.
│◈ 🗡️ *contag*
├◇ Menciona a todos con un contacto.
│
├───── ● DUEÑO ● ─────
│◈ 🤖 *self *
├◇ Solo tu podras usar el bot.
│◈ 🤖 *public* 
├◇ Para que todos puedan usar el bot.
│◈ 🤖 *entrar_al_grupo*
├◇ Entrar a algun grupo.
│◈ 🤖 *term*
├◇ Ejecuta un comando de Termux.
│
├───── ● GRUPO ● ─────
│◈ 🪀 *linkgrupo *
├◇ Obtén el enlace del grupo
├───── ● DESCARGAS ● ─────
│◈ 🌹 *play *
├◇ Descarga una audio de YouTube.
│◈ 🌹 *ytmp3 *
├◇ Descarga un audio de YouTube.
│◈ 🌹 *ytmp4 *
├◇Descarga una video de YouTube.
│◈ 🌹 *nhentai *
├◇ Descarga hentai en forma de PDF.
│◈ 🌹 *gitclone *
├◇ Descarga un git de GitHub.
│◈ 🌹 *githubstalk*
├◇ Obtén información de un usuario de GitHub.
└──────────────────`
     FxBot.sendMessage(from, teks, MessageType.text, {sendEphemeral: true, quoted: ftroli, contextInfo: { forwardingScore: 9999, isForwarded: true, externalAdReply : { title : `私は道です`, body : "FX - BOT ⁴̅⁰͍⁴̵", mediaType: 2, thumbnail: fs.readFileSync('./media/FxBot.jpeg'), mediaUrl : `https://youtu.be/Np08yVjpnWU`}}})


 
break
         
case 'antilink':
case 'antienlace':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilink 1`)
if (args[0] === '1') {                             
						if (isAntiLink) return reply('Ya estaba activo 🙄')  
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('▢ El Anti-Enlace se ah activado con éxito. ✔️')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Anti-Enlace desactivado.')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('▢ El Anti-Enlace se ah desactivado con éxito. ✔️')
					} else {
						reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilink 1`)
					}
            break 
case 'antibottiburon':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Bot-Tiburon ?_\n\n┌─⊷ *ANTI-BOT-TIBURON * ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antitiburon 1`)
if (args[0] === '1') {                             
						if (isAntiTiburoMierdaBot) return reply('Ya estaba activo 🙄')  
						antitiburon.push(from)
						fs.writeFileSync('./src/antibot.json', JSON.stringify(antitiburon))
						reply('▢ El Anti-Bot-Tiburon se ah activado con éxito. ✔️')
					} else if (Number(args[0]) === 0) {
						if (!isAntiTiburoMierdaBot) return reply('Anti-Enlace desactivado.')
						var ini = antitiburon.indexOf(from)
						antitiburon.splice(ini, 1)
						fs.writeFileSync('./src/antibot.json', JSON.stringify(antitiburon))
						reply('▢ El Anti-Bot-Tiburon se ah desactivado con éxito. ✔️')
					} else {
						reply(`≡ _¿Cómo activar el Anti-Bot-Tiburon?_\n\n┌─⊷ *ANTI-BOT-TIBURON * ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antitiburon 1`)
					}
            break


case 'viewto2':
		const viewary = []
		const untpar = JSON.stringify(mek.message[type].contextInfo.quotedMessage.viewOnceMessage.message)
		const popet = JSON.parse(untpar)
		 
		if (!mek.message[type].contextInfo.quotedMessage.viewOnceMessage) return reply("No es nesesario convertir.")
		const viewtype = Object.keys(popet)[0]
		viewary.push(JSON.parse(untpar))
		delete popet[viewtype].viewOnce
		const viewom = FxBot.prepareMessageFromContent(from, popet,{quoted: mek})
		await FxBot.relayWAMessage(viewom)
		break

         case 'antilinkmax':
         case 'antienlacemax':
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE-MAX* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilinkmax 1`)
if (args[0] === '1') {                             
						if (isAntiLinkMax) return reply('Ya estaba activo 🙄')  
						antilinkmax.push(from)
						fs.writeFileSync('./database/antilinkmax.json', JSON.stringify(antilinkmax))
						reply('▢ El Anti-Enlace-Max se ah activado con éxito. ✔️')
						reply('▢ El Anti-Enlace-Max elimina a cualquier miembro que mande un link.\nMientras tanto, el Anti-Enlace Normal, solo elimina a quien mande links de WhatsApp.')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkMax) return reply('▢ El Anti-Enlace-Max se ah desactivado con éxito. ✔️')
						var ini = antilinkmax.indexOf(from)
						antilinkmax.splice(ini, 1)
						fs.writeFileSync('./database/antilinkmax.json', JSON.stringify(antilinkmax))
						reply('▢ El Anti-Enlace-Max se ah desactivado con éxito. ✔️')
					} else {
						reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE-MAX* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilinkmax 1`)
					}
					break

                case '?':
					FxBot.sendMessage(from, help(prefix), text,{contextInfo: {forwardingScore : 508, isForwarded: true},quoted : freply})
					break
					
					case 'antifake':
 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Fake?_\n\n┌─⊷ *ANTI-FAKE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antifake 1`) 
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ya estaba activo 🙄')  
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('▢ El Anti-Fake se ah activado con éxito✔️')
						FxBot.sendMessage (from, '▢ El AntiFake elimina a los siguientes numeros\n\n+1\n+994\n+380\n+62\n+61\n+81\n+371...', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
						
						
						
						
						
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('▢ El Anti-Fake se ah desactivado con éxito✔️')
					} else {
						reply(`≡ _¿Cómo activar el Anti-Fake?_\n\n┌─⊷ *ANTI-FAKE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antifake 1`) 
					}
					 
            break

			  
			  //********** SELF&PUBLIC **********//
			  case 'self':
			    public = false
			    FxBot.sendMessage(from, `\`\`\`Status : SELF\`\`\``, text,{quoted :freply})
			    break
			    
			  case 'public':
			    public = true
			    FxBot.sendMessage(from, `\`\`\`Status : PUBLIC\`\`\``, text,{quoted :freply})
			    break
			     
				
				case 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await FxBot.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					FxBot.sendMessage(from, thumb, MessageType.image)
				{quoted : freply}}
				break
				
				  case 'entrar_al_grupo':
                           if (!q) return reply('Masukan link group')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
                           var response = await FxBot.acceptInvite(codeInvite);
                           console.log(response);
                           break
  
                
             
				
				case 'blocklist':
				  case 'listblock':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					FxBot.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					 
 
					
					
                    
					
			           
			           case 'term': 
case 'exec':
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return FxBot.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
FxBot.sendMessage(from, stdout, text, term)
}
})
break
 

		
case 'test':
reshb = await FxBot.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "",
"hydratedFooterText": "",
"hydratedButtons": [
{
"urlButton": {
"displayText": "",
"url": ""
},
"index": 1
}
]
},
"hydratedTemplate": {
"hydratedContentText": `TEST #1`,
"hydratedFooterText": `TEST #2`,
"hydratedButtons": [
{
"urlButton": {
"displayText": `TEST #3 VIEW`,
"url": "#LINK"
},
"index": 0
}
]
}
}
}, {})
FxBot.relayWAMessage(reshb)
FxBot.sendMessage(from, { text: "Git Ofc del Creador:\nhttps://github.com/FxBot", matchedText: 'https://github.com/FxBot/NyanBot', description: "", title: "Click Aqui !!!", jpegThumbnail: fs.readFileSync('./media/reply.png') }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
break
		
		

case 'nhentai':
try {
if (args.length === 0) return reply(`⬡ Descargar Hentai En Formato PDF\n\n¿Como usar?\n\nEjemplo : ${prefix}nhentai ID\n\nEjemplo : ${prefix}nhentai 2033`)
id =args.join(" ")
let url = `http://hadi-api.herokuapp.com/api/nhentai?id=${id}`
sticWait(from)         
buffer = await getBuffer(`${url}`)
FxBot.sendMessage(from, buffer, document, {quoted: mek, mimetype : 'application/pdf', filename: `ID Del Hentai PDF : ${id}`})
} catch {
reply(`*▢ No se encontró ningún resultado.`)
}
break                    
		case 'githubstalk':
		try {
			if (args.length === 0) return reply(`⬡ Búsqueda de GitHub\n\n¿Como usar?\n\nEjemplo : ${prefix}githubstalk Nombre del usuario\n\nEjemplo : ${prefix}githubstalk Fxmods`)
		sh = args.join(" ")
		 anu = await fetchJson(`http://hadi-api.herokuapp.com/api/githubstalk?username=${sh}`)

gt = anu.result
                if (anu.error) return reply(anu.error)
                github = `                「 *GITHUB*  」
              
▢ Bio : ${gt.bio}
▢ Compañía : ${gt.company}
▢ Correo : ${gt.email}
▢ Twitter : ${gt.twiter_username}
▢ Repositorios : ${gt.public_repo}     
▢ Siguiendo : ${gt.following}
▢ Seguidores : ${gt.follower} 
▢ Ubicación : ${gt.location} 
▢ Tipo : ${gt.Type} 

▢ Información sobre el usuario ${gt.company}.`
buffer = await getBuffer(gt.avatar)
FxBot.sendMessage(from, buffer, image, {quoted: ftoko, caption: github})
} catch {
reply(`▢ Lo siento, no se encontró ningún usuario relacionado con ${sh}.`)
}
break
		
		
		
		
case 'play':
try {
if (args.length === 0) return reply(`⬡ Descargar Música\n\n¿Como usar?\n\nEjemplo : ${prefix}play Control NCS`)
yts = args.join(" ")
sticWait(from)
async function sendFileFromDts(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return FxBot.sendMessage(from, await getBuffer(url), type, {caption: caption, ptt: false, sendEphemeral: true, quoted: mek, mimetype: mime, contextInfo: { forwardingScore: 9999, isForwarded: true, "mentionedJid": men ? men : []}})
            }
anu = await fetchJson(`http://hadi-api.herokuapp.com/api/ytplay?q=${yts}`)
console.log(color(time, 'yellow'), color('▢ Iniciando Servidor 1...'))
 
                abuela = anu.result
                if (anu.error) return reply(anu.error)
                infomp3 = `                「 *MÚSICA*  」
       
▢ Título : ${abuela.title}
▢ Tamaño : ${abuela.size}
▢ Extensión : ${abuela.ext}
                
▢ Enviando archivo, espere por favor... `
                buffer = await getBuffer(abuela.thumb)
                FxBot.sendMessage(from, buffer, image, {quoted: ftroli, caption: infomp3})
        sendFileFromDts(from, abuela.download_audio, mek)
        } catch {
        	console.log('Ocurrio un error con el servidor, o no se encontró ningun resultado.')
reply(`▢ Lo siento, no se encontró ningun audio relacionado con ${yts}.`)
}
        break

case 'ytmp3':
try {
if (args.length === 0) return reply(`⬡ Descargar Música\n\n¿Como usar?\n\nEjemplo : ${prefix}ytmp3 Control NCS`)
yts = args.join(" ")
async function sendFileFromDts3(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return FxBot.sendMessage(from, await getBuffer(url), type, {caption: caption, ptt: false, sendEphemeral: true, quoted: mek, mimetype: mime, contextInfo: { forwardingScore: 9999, isForwarded: true, "mentionedJid": men ? men : []}})
            }
anu = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/audio?url=${yts}`)
sticWait(from)         
                abuela = anu.result
                if (anu.error) return reply(anu.error)
                infomp3 = `                「 *MÚSICA*  」
       
▢ Título : ${abuela.title}
▢ Tamaño : ${abuela.size}
▢ Extensión : ${abuela.ext}
▢ Resolución : ${abuela.resolution}
                 
▢ Enviando archivo, espere por favor... `
                buffer = await getBuffer(abuela.thumb)
                FxBot.sendMessage(from, buffer, image, {quoted: ftroli, caption: infomp3})
        sendFileFromDts3(from, abuela.download_audio, mek)
        } catch {
reply(`▢ Lo siento, no se encontró ningun audio relacionado con ${yts}.`)
}
        break


case 'ytmp4':
try {
if (args.length === 0) return reply(`⬡ Descargar Videos\n\n¿Como usar?\n\nEjemplo : ${prefix}ytmp4 Control NCS`)
yts = args.join(" ")
async function sendFileFromDts1(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return FxBot.sendMessage(from, await getBuffer(url), type, {caption: `▢ Descarga de video de YouTube hecha por FX - BOT ⁴̅⁰͍⁴̵`, ptt: false, sendEphemeral: true, quoted: mek, mimetype: mime, contextInfo: { forwardingScore: 9999, isForwarded: true, "mentionedJid": men ? men : []}})
            }
anu = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/video?url=${yts}`)
sticWait(from)         
                abuela = anu.result
                if (anu.error) return reply(anu.error)
                infomp3 = `                「 *VIDEO*  」
       
▢ Título : ${abuela.title}
▢ Tamaño : ${abuela.size}
▢ Resolución : ${abuela.resolution}
▢ Extensión : ${abuela.ext}
                
▢ Enviando archivo, espere por favor... `
                buffer = await getBuffer(abuela.thumb)
                FxBot.sendMessage(from, buffer, image, {quoted: ftroli, caption: infomp3})
        sendFileFromDts1(from, abuela.download_video, {quoted: mek, caption: 'FX'})
        } catch {
reply(`▢ Lo siento, no se encontró ningun video relacionado con ${yts}.`)
}
break

case 'telesticker':
link = args.join(" ")
if (args.length === 0) return reply(`⬡ Descargas de stickers de Telegram\n\n¿Como usar?\n\nEjemplo : ${prefix}telesticker + link\n\nEjemplo : ${prefix}telesticker t.me/addstickers/LINE_Menhera_chan_ENG`)

ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=DashBot&url=${link}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        FxBot.sendMessage(from, ini_buffer, sticker)
                    
 }  
break

case 'gitclone':
if (!mek.key.fromMe) return reply('▢ Lo siento, solamente yo puedo usar ese comando.')
try {
if (args.length === 0) return reply(`⬡ Descargar Repositorios de GitHub\n\n¿Como usar?\n\nEjemplo : ${prefix}gitclone Usuario/Nombre del repositorio\n\nEjemplo : ${prefix}gitclone Fxmods/FX-SELF-BOT-v83.2`)
repo =args.join(" ")
if (!q.includes('/')) return reply('▢ ¡Formato incorrecto!')
let url = `https://api.github.com/repos/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
sticWait(from)         
 
buffer = await getBuffer(`${url}`)

FxBot.sendMessage(from, buffer, document, {quoted: mek, mimetype : 'application/zip', filename: `${filename}`})
 
} catch {
reply(`*▢ Ningún Repositorio Encontrado*

⬡ No se ah podido encontrar ningún repositorio con ese nombre.

⬡ Intenta escribir bien el nombre de usuario y el nombre del repositorio.

⬡ Recuerda que el repositorio tiene que estar en modo publico para poder descargarlo.

*Si crees que el nombre esta bien intentalo nuevamente :*
1. ${prefix + command} <Nombre De Usuario>/<Repositorio>
2. ${prefix + command} Fxmods/FX-SELF-BOT-v83.2`)
}
break      






case 'mediafire':
if (args.length < 1) return reply('¿Y el enlace?')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*「 MEDIAFIRE DOWNLOAD 」*

*🔖 Nombre :* ${res[0].nama}
*🔖 Tamaño :* ${res[0].size}
*🔖 Enlace :* ${res[0].link}

_Lo sentimos, el tamaño supera el límite máximo, haga clic en el enlace de arriba_`)
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*「 MEDIAFIRE DOWNLOAD 」*

*¡Datos obtenidos con éxito!*
\`\`\`🔖 Nlmbre : ${res[0].nama}\`\`\`
\`\`\`🔖 Tamaño : ${res[0].size}\`\`\`
\`\`\`🔖 Enlace : ${res[0].link}\`\`\`

_El archivo se está enviando, espere unos minutos..._`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break







                    
case 'enviarimg':
                          if (!mek.key.fromMe) return reply('▢ Lo siento, solamente yo puedo usar ese comando.')
                          try {
            	if (args.length === 0) return reply(`⬡ Enviar Archivos Del Bot\n¿Como usar?\n\nEjemplo : ${prefix}enviardoc Ruta del archivo\n\nEjemplo : ${prefix}enviardoc lib/exif.js`)
            	name = args.join(" ")
                buffer = fs.readFileSync(`./${name}`)
                FxBot.sendMessage(from, buffer, document, {quoted: mek, mimetype : 'image/png', filename: `${name}`})
                } catch {
            	reply(`*▢ No se encontró ${name}\n\n▢ Comprueba si el nombre del archivo es correcto, o su ruta es la correcta.*`)
                }
                break
                          case 'enviardoc':
                          if (!mek.key.fromMe) return reply('▢ Lo siento, solamente yo puedo usar ese comando.')
                          try {
            	if (args.length === 0) return reply(`⬡ Enviar Archivos Del Bot\n¿Como usar?\n\nEjemplo : ${prefix}enviardoc Ruta del archivo\n\nEjemplo : ${prefix}enviardoc lib/exif.js`)
            	name = args.join(" ")
                buffer = fs.readFileSync(`./${name}`)
                FxBot.sendMessage(from, buffer, document, {quoted: mek, mimetype : 'application/json', filename: `${name}`})
                } catch {
            	reply(`*▢ No se encontró ${name}\n\n▢ Comprueba si el nombre del archivo es correcto, o su ruta es la correcta.*`)
                }
                break
                        
			     case 'contag':
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await FxBot.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${FxBot.user.jid.split('@')[0]}:${FxBot.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				FxBot.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/FxBot.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        
case 'stiker': case 's': case 'stikergif':
case 'sticker': case 'stickergif': case 'sgif':
   
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('FxBot')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(stick())
									FxBot.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('FxBot')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(stick())
									FxBot.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break



case 'sinfondo':
if ((isMedia || isQuotedImage)) {
const encmedianb = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const median = await FxBot.downloadAndSaveMediaMessage(encmedianb)
sticWait(from)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
ranp = getRandom('.png')
await removeBackgroundFromImageFile({path: median, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(median)
let buffer = Buffer.from(res.base64img, 'base64')
FxBot.sendMessage(from, buffer, image, {quoted: txt1, caption: 'Fx Lol'})
fs.unlinkSync(buffer)
})
}
break

        case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await FxBot.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					FxBot.sendMessage(from, options, text,{quoted : freply})
					break
					
					  
					
			           case 'sticktag':
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await FxBot.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await FxBot.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        FxBot.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await FxBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await FxBot.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        FxBot.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    
                    case 'owner':
                 FxBot.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: freply})
                 FxBot.sendMessage(from, 'Jika Mau Save Chat Aja Gan Ntar Disave Back:)',text, { quoted: freply} )
                 break
 
        
    			  //********** ONLY GROUP **********//
        case 'linkgroup':
        case 'linkgrupo':
				case 'linkgrup':
				case 'linkgc':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await FxBot.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    FxBot.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
        
					case 'hablen':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					 
						FxBot.groupsettingsChange(from, GroupsettingsChange.messageSend, false)
					
					break
case 'silencio':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					 
						FxBot.groupsettingsChange(from, GroupsettingsChange.messageSend, true)
					
					break
case 'prueba2':

let fx1 = FxBot.prepareMessageFromContent(from,{
          "listMessage": {
						"title": "              ✰ 𝗕𝗼𝘁 𝗕𝘆 𝗙𝗲𝗹𝗶𝘅𝗰𝗿𝗮𝗰𝗸 ✰  ",
						"description": "\n𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘, 𝚎𝚗 𝚎𝚜𝚝𝚊 𝚙𝚊𝚛𝚝𝚎 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚊𝚛𝚊𝚜 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚍𝚎 𝙵𝚡𝙱𝚘𝚝 𝚙𝚊𝚛𝚊 𝚊𝚋𝚛𝚒𝚛 𝚢 𝚌𝚎𝚛𝚛𝚊𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘, 𝚛𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚜𝚎𝚐𝚞𝚒𝚛𝚖𝚎 𝚎𝚗 𝚈𝚘𝚞𝚃𝚞𝚋𝚎.",
						"buttonText": "🇸 🇪 🇱 🇪 🇨 🇨 🇮 🇴 🇳 🇦 🇷 ",
						"footerText": "Felixcrack",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "𝐂𝐞𝐫𝐫𝐚𝐫 𝐆𝐫𝐮𝐩??",
								"rows": [
									{
										"title": "𝐂𝐞𝐫𝐫𝐚𝐫 𝐄𝐥 𝐆𝐫𝐮𝐩𝐨",
										"description": "\n_Click aquí para cerrar el grupo y que solo los administradores puedan hablar._",
										"rowId": ""
									}
								]
							},
							{
								"title": "𝐀𝐛𝐫𝐢𝐫 𝐆𝐫𝐮𝐩𝐨",
								"rows": [
									{
										"title": "𝐀𝐛𝐫𝐢𝐫 𝐄𝐥 𝐆𝐫𝐮𝐩𝐨",
										"description": "\n_Click aqui para abrir el grupo y que todos los participantes puedan hablar._",
										"rowId": ""
									}
								]
							}
						]
					}
				},
			{}
		)
		FxBot.relayWAMessage(fx1, {waitForAck: true})
                break



case 'testtt':
 res = await FxBot.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hola usuario. `,
							"hydratedFooterText": `FX - BOT ⁴̅⁰͍⁴̵`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "YouTube",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "WhatsApp",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
FxBot.relayWAMessage(res)
break
					case 'chatlist':
				case 'cekchat':
					FxBot.updatePresence(from, Presence.composing)
					FxBot.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : freply})
					break
					
					case 'demote':
			      case 'dm' : 
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						FxBot.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						FxBot.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					 
					case 'promote':
				case 'pm':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						FxBot.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						FxBot.groupMakeAdmin(from, mentioned)
					}
					break
					
					case 'welcome':

 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`≡ _¿Cómo activar la bienvenida?_\n\n┌─⊷ *BIENVENIDA* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}welcome 1`) 
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('Ya estaba activo 🙄')
				    welkom.push(from)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('▢ La bienvenida se ah activado con éxito. ✔️')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('▢ La bienvenida se ah desactivado con éxito. ✔️')
					} else {
					reply(`≡ _¿Cómo activar la bienvenida?_\n\n┌─⊷ *BIENVENIDA* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}welcome 1`) 
					}
                     
            break
					case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						FxBot.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					
			    case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						FxBot.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						FxBot.groupRemove(from, mentioned)
					}
					break 
					
										case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(FxBot.chats.get(ido).presences), FxBot.user.jid]
                FxBot.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break

 
      case 'leave': 
				    if (!isGroup) return reply(mess.only.group)
			    	anu = await FxBot.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break

 

				default:
           }
 
 if (budy.startsWith('$')){
                                        	if (!mek.key.fromMe) return
                            var konsol = budy.slice(2)
                        exec(konsol, (err, stdout) => {
                            if(err) return reply(`${err}`)
                                if (stdout) {
                                    reply(`${stdout}`)
                                    console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color("$", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                                }
                            })
                    } 
                    if (budy.startsWith('>')){
                    	if (!mek.key.fromMe) return
                        
                            var konsol = budy.slice(2)
                            function _return(sul) {
                            var sat = JSON.stringify(sul, null, 2)
                            var bang = util.format(sat)
                            return reply(bang)
                        }
                        try {
                            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                            console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color(">", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                        } catch (e) {
                              err = String(e)
                                reply(err)
                            }
                        } else {
                            if (budy != undefined) {
                                //console.log('>', '[',color('INGFO','red'),']',`Message : ${budy} From`, color(senderme.split('@')[0]))
                            } 
                        }
                        
if (budy.startsWith('=>')){
if (!mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
if (budy.startsWith('x')){
	if (!mek.key.fromMe) return
try {
return FxBot.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)

}  

if (isGroup && body != undefined) {
console.log(body)
}
}
} catch (e) {
const ee = String(e)
if (ee.includes('convert')){ 
return
}
if (ee.includes('this.isZero')){ 
return
}	
if (ee.includes('contextInfo')){ 
return
}	
if (ee.includes('owgi')){ 
return
}	
if (ee.includes('Cannot read property')){ 
return
}	
if (ee.includes('fileLength')){                           
return
}
if (ee.includes('jid')){                           
return
}
console.log('Error : %s', color(e, 'red'))
FxBot.sendMessage(`5219984646983@s.whatsapp.net`, `─────「 *ALERTA-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Fx-Bot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/FxBot.jpeg'),sourceUrl:"https://wa.me/12607825660?text=© FxBot Team"}}})
}
})
}
starts()
