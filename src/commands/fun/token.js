const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.com/bottoken?id=${interaction.user.id}`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {

            client.embed({
                title: `🤖・Bot token`,
                desc: "MTE4NzA0NjY0NDcwNTkxOTEyNw.G5N53P.fprtlp3OIrarhSWr8BImjT_CoS1vJ5d0zxcyJU",
                type: 'editreply',
            }, interaction);
        }).catch({})

}

 
