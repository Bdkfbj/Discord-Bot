const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
    const promises = [
        client.shard.broadcastEval(client => client.guilds.cache.size),
        client.shard.broadcastEval(client => client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        client.shard.broadcastEval(client => client.channels.cache.size),
        client.shard.broadcastEval(client => client.voice.adapters.size)
    ];
    return Promise.all(promises)
        .then(async results => {
            const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
            const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
            const totalChannels = results[2].reduce((acc, channelCount) => acc + channelCount, 0);
            const totalVoice = results[3].reduce((acc, voiceCount) => acc + voiceCount, 0);

            const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");

            client.embed({
                title: `ℹ・Bot information`,
                desc: `____________________________`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                fields: [
               {
                    name: "ℹ️┆Information",
                    value: `Jackey army official bot`,
                    inline: false,
                },
                {
                    name: "_____ \n\n│General",
                    value: `_____`,
                    inline: false,
                },
                {
                    name: "🤖┆Bot name",
                    value: `${client.user.username}`,
                    inline: true,
                },
                {
                    name: "🔧┆Bot owner",
                    value: `<@!860918549195653151> `,
                    inline: true,
                },
                {
                    name: "🔧┆Bot Tester",
                    value: `<@!840542043801255946> `,
                    inline: true,
                },
                {
                    name: "💻┆Commands",
                    value: `\`${client.commands.size}\` commands`,
                    inline: true,
                },
                {
                    name: "🌐┆Servers",
                    value: `\`${totalGuilds}\` servers`,
                    inline: true,
                },
                {
                    name: "👥┆Members",
                    value: `\`${totalMembers}\` members`,
                    inline: true,
                },
                {
                    name: "🔊┆Connected channels",
                    value: `\`${totalVoice}\` channels`,
                    inline: true,
                },
                {
                    name: "📺┆Channels",
                    value: `\`${totalChannels}\` channels`,
                    inline: true,
                },

                {
                    name: "_____ \n\n│System",
                    value: `_____`,
                    inline: false,
                },
                {
                    name: "🆙┆Uptime",
                    value: `${duration}`,
                    inline: true,
                },],
                type: 'editreply'
            }, interaction)
        })
}

 
