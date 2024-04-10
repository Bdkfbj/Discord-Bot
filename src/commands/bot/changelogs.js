const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        fields: [{
            name: "📃┆Changelogs",
                value: 'Made the bot / 4/8/2024',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 
