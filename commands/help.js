exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: '**Music Help 🎶**',
            description: `
            __**Commands**__
            
            \`play\` <songName> => Play A Song From Youtube.
            \`pause\` => Pause Music.
            \`resume\` => Resume Music.
            \`np\` => Get Info on Current Song.
            \`skip\` => Skip To Next Song.
            \`stop\` => Stop Playing Music.
            \`volume\` <value> => Adjust Volume of The Song.
            \`queue\` => To See The Full Song Queue.


            `,
            color: 'BLACK'
        }
    })
}
