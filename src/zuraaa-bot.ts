import config from '../config.json'
import Discord from 'discord.js'
import {Handler} from './modules/handler'


class ZuraaaBot{
    private _client = new Discord.Client()
    private _handler: Handler

    constructor(){
        this._handler = new Handler(this)
    }

    get client(){
        return this._client
    }

    get handler(){
        return this._handler
    }

    start(){
        this._handler.build()
        this._client.login(config.bot.token)
    }

    
}

export default ZuraaaBot