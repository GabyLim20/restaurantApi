const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const userSchema = require ("../middleware/validateUserMiddleware")

const databasePath = "./data/user.json"

require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY || 'admin123'

const registerUser = async(req,res) =>{
    const {name, password} = req.body
    console.log(req.body); 

    if (!name || !password) {
        return res.status(400).json({ error: "Missing data" });
    }
    const user = JSON.parse(fs.readFileSync(databasePath))
    const userExit = user.find((user) => user.name === name)
    if(userExit){
        return res.status(400).json({error: "The user already exists"})
    }
    const hashPasswprd = await bcrypt.hash(password,10)
    const newUser = {name:name, password: hashPasswprd}
    user.push(newUser)
    fs.writeFileSync(databasePath, JSON.stringify(user, null, 2));
    console.log('User added successfully');
    res.status(201).json({message: "User added successfully"})
}
const login =  async(req,res) =>{
    const {name, password} = req.body
    if(!name || !password){
        return res.status(400).json({error:"You need complete"})
    }
    const database = JSON.parse(fs.readFileSync(databasePath))
    const user = database.find((user) => user.name === name)
    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }
    const isPassworValid = await bcrypt.compare(password, user.password)
    if (!isPassworValid) {
        return res.status(401).json({ error: 'Incorrect password' })
    }
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: '1h'
    })
    res.json({ message: 'successful', token })
}


module.exports = { login,registerUser}
