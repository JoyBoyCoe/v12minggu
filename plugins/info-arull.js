let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : TAA
║│➸ ```UMUR``` : 18thn
║│➸ ```ASAL``` : KIMETSU
║│➸ ```OFFICIAL GRUP``` :
║│➸ ```ISTAGRAM``` : 
║│➸ ```WHATSAPP``` : http://wa.me/6281220181640
╰────────❉
`.trim(), m)
}

handler.help = ['infoarull']
handler.tags = ['main', 'utama']
handler.command = /^(infoarull|inforozi)$/i

handler.exp = 150

module.exports = handler
