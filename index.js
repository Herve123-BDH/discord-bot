const discord= require('discord.js');
const express =require('express');
const app=express()
const route =require('./Routes/Route')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const MongoDB=require('./DB/Db')
const axios =require('axios');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', route)
MongoDB()
client.once('ready',()=>{
    console.log('bot ready')
})

client.on('messageCreate',message=>{
    if(message.author.bot){

    }else{
        axios.get('https://astucefxbot.herokuapp.com/api/get')
        .then(data=>{
            let value=false
            data.data.msg.map(elt=>{
                if (message.content===elt.token){

                    if(elt.amount==150){
                        message.member.roles.add('995392939427627008')
                    }
                    value=true
                    message.reply(`Congratulation you're now fully in AstuceFx discord group check out  ${client.channels.cache.get('985357709849284708')} to know how the discord works`);
                    message.member.roles.add('980587306635370517')
                    message.member.roles.remove('980587812019646534')
                    axios.delete(`https://astucefxbot.herokuapp.com/api/delete/${elt.token}`)
                    .then(data=>{
                        console.log('done well')
                    })
                    .catch(error => { throw error})
                }
                setTimeout(()=>{
                    if(value==false){
                        message.reply('you dont have a valid code to access the VIP section.')
                    }
                },2000)
                
                // else{
                //     message.reply("get out u dont have the valid code");
                // }
            })
        })
        


    }


})


app.listen(3000,()=>{
    console.log('server is running');
})

client.login('OTk1Mjg5NzI2NjUzMzEzMDY1.Gt7qWv.b0P7M6c43meiMuZ5qE-re6R9JOR8yXpegzNCaw');
