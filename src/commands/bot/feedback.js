const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1227517453488357428",
    token: "mPAkpfMwZSMyTEM-hWt65naTgkPud1HGwAmYmTDmGZsZvnmjG55QzOd8V5idE95n_Onj",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 
