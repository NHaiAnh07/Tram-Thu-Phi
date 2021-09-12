require("dotenv").config()

const {BOT_TOKEN, IRC_USERNAME, IRC_PASSWORD, OSU_API_KEY} = process.env

const Discord = require("discord.js")
const client = new Discord.Client()

const Banchojs = require("bancho.js")
const banchoclient = new Banchojs.BanchoClient({ username: IRC_USERNAME, password: IRC_PASSWORD, apiKey: OSU_API_KEY})

const { MessageEmbed } = require("discord.js")
const ytdl = require("ytdl-core")
const queue = new Map()
const { Menu } = require('discord.js-menu')
const { DiscordTogether } = require("discord-together")
const currentDate = new Date();
prefix = "~"
client.discordTogether = new DiscordTogether(client)
const pepenhi = ["hai anh", "haianh", "nhaianh", "hải anh", "Hải Anh", "bot"]

client.on("ready", () => {
  console.log("The bot is ready, LETS GOOOOOOOOOOO!")

  client.user.setPresence({
    activity: {
      name: "♿"
    }
  })
  
})

client.on("message", msg => {
  if (msg.channel.type === "dm") return
  if (msg.author.bot) return

  if (msg.content === "arakami") {
    msg.channel.send("Người sẽ không bao giờ roll ra botan!")
  }

  if (msg.content === "hime hime") {
    msg.channel.send("Suki Suki Daisuki")
  }

  if (msg.content === "uk rs") {
    msg.channel.send(":flag_gb: :flag_ru:")
  }

  if (msg.content === "nguyet" || msg.content === "nguyệt") {
    msg.channel.send("月")
  }

  if (msg.content.includes("ngu") && pepenhi.some(checkhaianh)){
    if (msg.author.id === "648504249050857482") return
    msg.react("👍")
  }
  function checkhaianh(names) {
    return msg.content.includes(names)
  }

  if (msg.content.includes("horny") || (msg.content.includes("hỏny"))) {
    msg.react("<a:koronebonkhorny:879355729046298716>")
  }

  if (msg.content.includes("chôn") || (msg.content.includes("chon") || (msg.content.includes("troll") || (msg.content.includes("trôn"))))) {
    msg.react("<:chon:883178837758865418>")
  }
  
  if (msg.content === "coldgreeneyes") {
    setTimeout(() => {
    msg.channel.send("Everchanging")
    },500);
    setTimeout(() => {   
      msg.channel.send("The knowing feeling")
    },2000);
    setTimeout(() => {
      msg.channel.send("Could make you fall from the dreamy skies")
    },4000);
    setTimeout(() => {
      msg.channel.send("Suddenly the deepness can get true")
    },6000);
    setTimeout(() => {
      msg.channel.send("Realize I fall along with you")
    },8000);
    setTimeout(() => {
      msg.channel.send("And you're looking into calm green eyes")
    },10000);
    setTimeout(() => {
      msg.channel.send("AWOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    },12000);
  }
})

client.on("message", msg => {
  if (msg.author.bot) return
  if (msg.channel.type === "dm") return
  if (!msg.content.startsWith(prefix)) return

  if (msg.content === `${prefix}prefix`) {
    msg.channel.send("My prefix is " + prefix)
  }

  if (msg.content === `${prefix}help`){
    let helpMenu = new Menu(msg.channel, msg.author.id, [
      {
        name: "main",
        content: new MessageEmbed({
          title: "Common Commands Menu",
          description: "List of normal commands",
          fields: [
            {
              name: "~help",
              value: "You just used it to show this menu! 🤣",
              inline: true
            },
            {
              name: "~prefix",
              value: "Display the Bot's prefix.",
              inline: false
            }
          ]
        }),
        reactions: {
          '⬅️': "information",
          '➡️': "funnycommand",
        }
      },
      {
        name: "funnycommand",
        content: new MessageEmbed({
          title: "Funny Commands",
          description: "List of funny commands",
          fields: [
            {
              name: "~discordgift",
              value: "Free 1 Year of Nitro 😱😱😱",
              inline: false
            },
            {
              name: "~roll",
              value: "Get a random number in range 1 to 1000 (Can you get 727?)",
              inline: false
            }
          ]
        }),
        reactions: {
          '⬅️': "main",
          '➡️': "arcadecommand",
        }
      },
      {
        name: "arcadecommand",
        content: new MessageEmbed({
          title: "Arcade Commands",
          description: "Lets play!!",
          fields: [
            {
              name: "~start yt",
              value: "Watching Youtube together.",
              inline: false
            },
            {
              name: "~start poker",
              value: "Play Poker",
              inline: false
            },
            {
             name: "~start chess",
             value: "Play Chess",
             inline: false 
            },
            {
              name: "~start betrayal",
              value: "Play Betrayal.io",
              inline: false
            },
            {
              name: "~start fishing",
              value: "Catch fish",
              inline: true
            }
          ]
        }),
        reactions: {
          '⬅️': "funnycommand",
          '➡️': "information",
        }
      },
      {
        name: "information",
        content: new MessageEmbed({
          title: "Developers",
          description: "List of Developers",
          fields: [
            {
              name: "GasmaskChan",
              value: "The founder",
              inline: false
            },
            {
              name: "NHaiAnh07",
              value: "https://bit.ly/NHaiAnh07pf",
              inline: true
            },
            {
              name: "Source Code:",
              value: "||https://github.com/Gasmask-Chan/Tram-Thu-Phi||",
              inline: false
            }
          ]
        }),
        reactions: {
          '⬅': "arcadecommand",
          '➡️': "main",
        }
      }
    ], 300000)
    helpMenu.start()
    helpMenu.on("Pagechange", destination => {
      destination.content.title = "Hey, " + msg.author.username
    })
  }

  if (msg.content === `${prefix}discordgift`){
    msg.channel.send("https://discordgift.site/pqM7dUWuL8TR9OWF")
   setTimeout(function () {msg.channel.send("https://cdn.discordapp.com/emojis/880989337913815061.png?v=1")
   },5000)
  }

  if (msg.content === `${prefix}start yt`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'youtube').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
  }

  if (msg.content === `${prefix}start poker`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'poker').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
  }

  if (msg.content === `${prefix}start chess`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'chess').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
  }

  if (msg.content === `${prefix}start betrayal`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'betrayal').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
  }

  if (msg.content === `${prefix}start fishing`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'fishing').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
  }

  if (msg.content === `${prefix}roll`) {
    var number = Math.floor(Math.random() * 1000) + 1
    if (number == 727) {
      msg.reply(`YOU FUCKING ROLLED ${number}!! WHEN YOU FUCKING SEE IT!`)
    } else {
      if (number == 666) {
        msg.reply(`You rolled ${number}. Wtf man? :skull:`)
      } else {
          msg.reply(`You rolled ${number}.`)
        }
      }
  }

  //ngu hai anh
  if (msg.content === `${prefix}vanmau ruleplayer`){
    msg.channel.send("Này ông, tôi không biết ông thấy như thế nào, nhưng đối với tôi, nó ngu, cơ mà có vẻ như nó không đáp ứng được tiêu chí là một thông báo giải cho anh em trong server và cả tôi, tôi chắc chắn rằng ông có thể đọc luật. Nhưng không, tôi và cả anh em staff trong server cảm thấy thật buồn khi có ông trong server, chúng tôi bị triggered về những cố gắng ông đã đóng góp để phát triển cơn giận trong tôi và anh em staff, chào ông và thân ái :wave:")
  }
})

client.on("message", msg => {
  if (msg.author.bot) return
  if (msg.content.includes("@here") || msg.content.includes("@everyone")) return
  if (msg.mentions.has(client.user.id)) {
    msg.channel.send(`Hello? If you're looking for my prefix then its ${prefix}!`)
  }
})

banchoclient.connect().then(() => {
  console.log("Connected to Bancho.")
  banchoclient.getChannel("#vietnamese").join().then(() => {
    banchoclient.on("JOIN", member => {
          if (member.user.ircUsername.includes("NHaiAnh07")) {
            client.channels.cache.get("809443529322528798").send(`con cho nghien ${member.user.ircUsername} vua dang nhap vao osu.`)
          }
      }) 
  }) 
}).catch(console.error)

client.login(BOT_TOKEN)