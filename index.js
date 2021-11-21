const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '+wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**بـروڤـویس کـەسـەکـەم بـو ئـەوەێ بـتـوانـم جـویـن بـکـەم **'); 
 
} 

} 

});

client.on("message", msg => {
  if (msg.content === "REKLAM") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "ریکلام") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "سڵاو ریکلام") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "سڵاو ڕیکلام") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "ڕیکلام") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` مـن دام نـا بـەس تـوش دایـنـەێ  https://discord.gg/EXCuvNd`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("755636700482633791").send(
`> ئـەم گـوڵـە ڕیکـلامەکـەێ کـرد: <@${message.author.id}>
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ریکلام بـۆ مـن بـنیـرن`) 
});




client.login("");// تـۆکیـن بـوت 

///Code By MrTiGER///
