import zuraaa from '../../../'
import { Message } from 'discord.js'

zuraaa.client.on('messageUpdate', (old, newer) => {
    zuraaa.client.emit('message', newer as Message)
})
