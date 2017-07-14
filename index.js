
const Discord = require('discord.js');
var schedule = require('node-schedule');
const token_key = " *** YOUR TOKEN FOR DISCORD BOT ***";
const bot = new Discord.Client();


bot.login(token_key);
console.log('**** Авторизация ****')

bot.on('message' , (message) => {
/* For testing
    if(message.content == '$$$war$$$') {
    message.channel.sendMessage('@everyone, через 5 минут битва замков!\n\nВСЕМ ВСТАТЬ В :shield:ЗАЩИТУ:exclamation:️\n:crossed_swords:️АТАКЕРАМ ЖДАТЬ ФЛАГА:exclamation:️\nСЛИТЬ :moneybag:ЗОЛОТО:exclamation:️\nВОЗМОЖЕН РАЗВОРОТ:arrow_right_hook:️\n');
	}
*/
});


bot.on('ready', () => {
    console.log('**** Бот запускается ****');
	var rule = new schedule.RecurrenceRule(); // Creates new Recurrence Rule

    /////00:00 Msk : 21:00 UTC : 20:55 Alert
	rule.hour = 20;
    rule.minute = 55;

	var i = schedule.scheduleJob(rule, function() {
		bot.channels.get("331485975060545538", channel).sendMessage("️@everyone, через 5 минут битва замков!\n\nВСЕМ ВСТАТЬ В :shield:ЗАЩИТУ:exclamation:️\n:crossed_swords:️АТАКЕРАМ ЖДАТЬ ФЛАГА:exclamation:️\nСЛИТЬ :moneybag:ЗОЛОТО:exclamation:️\nВОЗМОЖЕН РАЗВОРОТ:arrow_right_hook:️\n");
	})

    /////04:00 Msk : 01:00 UTC : 00:55 Alert
	rule.hour = 0;
    rule.minute = 55;

	var i = schedule.scheduleJob(rule, function() {
		bot.channels.get("331485975060545538", channel).sendMessage("️@everyone, через 5 минут битва замков!\n\nВСЕМ ВСТАТЬ В :shield:ЗАЩИТУ:exclamation:️\n:crossed_swords:️АТАКЕРАМ ЖДАТЬ ФЛАГА:exclamation:️\nСЛИТЬ :moneybag:ЗОЛОТО:exclamation:️\nВОЗМОЖЕН РАЗВОРОТ:arrow_right_hook:️\n");
	})

    /////08:00 Msk : 05:00 UTC : 04:55 Alert
	rule.hour = 4;
    rule.minute = 55;

	var i = schedule.scheduleJob(rule, function() {
		bot.channels.get("331485975060545538", channel).sendMessage("️@everyone, через 5 минут битва замков!\n\nВСЕМ ВСТАТЬ В :shield:ЗАЩИТУ:exclamation:️\n:crossed_swords:️АТАКЕРАМ ЖДАТЬ ФЛАГА:exclamation:️\nСЛИТЬ :moneybag:ЗОЛОТО:exclamation:️\nВОЗМОЖЕН РАЗВОРОТ:arrow_right_hook:️\n");
	})
    /////12:00 Msk : 09:00 UTC : 08:55 Alert
	rule.hour = 8;
    rule.minute = 55;

	var i = schedule.scheduleJob(rule, function() {
		bot.channels.get("331485975060545538", channel).sendMessage("️@everyone, через 5 минут битва замков!\n\nВСЕМ ВСТАТЬ В :shield:ЗАЩИТУ:exclamation:️\n:crossed_swords:️АТАКЕРАМ ЖДАТЬ ФЛАГА:exclamation:️\nСЛИТЬ :moneybag:ЗОЛОТО:exclamation:️\nВОЗМОЖЕН РАЗВОРОТ:arrow_right_hook:️\n");
	})
    /////16:00 Msk : 13:00 UTC : 12:55 Alert
	rule.hour = 12;
    rule.minute = 55;

	var i = schedule.scheduleJob(rule, function() {
		bot.channels.get("331485975060545538", channel).sendMessage("️@everyone, через 5 минут битва замков!\n\nВСЕМ ВСТАТЬ В :shield:ЗАЩИТУ:exclamation:️\n:crossed_swords:️АТАКЕРАМ ЖДАТЬ ФЛАГА:exclamation:️\nСЛИТЬ :moneybag:ЗОЛОТО:exclamation:️\nВОЗМОЖЕН РАЗВОРОТ:arrow_right_hook:️\n");
	})
    /////20:00 Msk : 17:00 UTC : 16:55 Alert
	rule.hour = 16;
    rule.minute = 55;

	var i = schedule.scheduleJob(rule, function() {
		bot.channels.get("331485975060545538", channel).sendMessage("️@everyone, через 5 минут битва замков за форты!\n\nВСЕМ ВСТАТЬ В :shield:ЗАЩИТУ:exclamation:️\n:crossed_swords:️АТАКЕРАМ ЖДАТЬ ФЛАГА:exclamation:️\nСЛИТЬ :moneybag:ЗОЛОТО:exclamation:️\nВОЗМОЖЕН РАЗВОРОТ:arrow_right_hook:️\n");
	})

	console.log("**** Бот запущен ****");
});
