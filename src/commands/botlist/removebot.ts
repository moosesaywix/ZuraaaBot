import emojis from '../../../emojis.json'
import { BaseCommand, Command, HelpInfo } from '../../modules/handler'
import { MessageEmbed } from 'discord.js'
import ZuraaaApi from '../../modules/api/zuraaaapi'

@Command('removebot', 'deletebot', 'rbot', 'dbot')
@HelpInfo({
    description: 'Remove um bot da botlist.',
    module: 'BotList',
    usage: ['@bot', '{id}'],
})
class RemoveBot extends BaseCommand{
    execute(){
        const botId = this.msg.mentions.users.first()?.id || this.args[0]
        
        const api = new ZuraaaApi()

        api.removeBot(botId, this.msg.author.id).then(result => {
            if(!result.deleted)
                return this.msg.channel.send(new MessageEmbed()
                    .setColor('RED')
                    .setTitle(emojis.error.name + ' | Bot não está cadastrado.')
                )
            this.msg.react(emojis.ok.id)
        }).catch(err => {
            console.error(err)
            this.msg.react(emojis.error.id)
        })
    }
}

export default RemoveBot