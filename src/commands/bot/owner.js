const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Silent`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Shi_55`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Jackey`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[Jackey army](https://discord.gg/zaDTtgwWrE)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
