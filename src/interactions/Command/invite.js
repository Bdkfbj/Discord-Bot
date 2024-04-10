const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Get an invite to the bot'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        let row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setLabel("Invite")
                    .setURL("https://discord.com/oauth2/authorize?client_id=1187310423884693574&permissions=8&scope=bot")
                    .setStyle(Discord.ButtonStyle.Link),

                new Discord.ButtonBuilder()
                    .setLabel("Support server")
                    .setURL("https://discord.gg/zaDTtgwWrE")
                    .setStyle(Discord.ButtonStyle.Link),
            );

        client.embed({
            title: `📨・Invite`,
            desc: `Make your server even better with Bot!`,
            image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
            url: client.config.discord.botInvite,
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

 
