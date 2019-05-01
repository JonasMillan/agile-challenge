const User = require('./models/user')

const seeds = async () => {
    const users = await User.find() 

    if(users.length === 0){
        const richard = new User({
            name:'Richard',
            acountMount: 10000,
        })
        await richard.save()
        console.log(`seeds done`)
    }    
}

module.exports = {
    seeds
}