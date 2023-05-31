const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn')
const User = require("../model/userSchema")

router.get('/', (req, res) => {
    res.send('Hello World router js');
});

// USING PROMISES

// router.post('/register', (req,res) => {

//     const {name, email, phone, work, password, cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill all the fields properly"})
//     }

//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist) {
//             return res.status(422).json({ error:"Email already Exist"})
//         }

//         const user = new User({name, email, phone, work, password, cpassword})

//         user.save().then(() => {
//             res.status(201).json({message:"User Registered Succesfully"})
            
//     }).catch((err)=> res.status(500).json({error: "Failed to Register"}))
// }).catch(err => {console.log(err)});

// });

// register route

router.post('/register', async (req,res) => {

    const {name, email, batch, rollno, phone, field, password, cpassword} = req.body;

    if(!name || !email || !batch || !rollno || !phone || !field || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields properly"})
    }

    try {

       const userExist = await User.findOne({email:email})



       if(userExist) {
        return res.status(422).json({ error:"Email already Exist"})
    } else if (password != cpassword) {
        return res.status(422).json({ error:"Password do not match"})
    } else {
        const user = new User({name, email, batch, rollno, phone, field, password, cpassword})
    


    const userRegister = await user.save();

    console.log(`${user} User Registered Succesfully`)
    console.log(userRegister);

    res.status(201).json({message:"User Registered Succesfully"})

    }

    

    } catch (err) {
        console.log(err)

    }

    
});

// login route

router.post('/signin', async (req,res) => {
    try {
        let token;
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({error:"Please fill the fields"})
        }

        const userLogin = await User.findOne({email:email})


        // console.log(userLogin); 

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)


            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

        if(!isMatch) {
            res.status(400).json({message:"Invalid Credentials"})

        } else  {
            res.status(200).json({message:"Login Successfull"})
        }

        } else {
            res.status(400).json({message:"Invalid Credentials"})

        }

        

        

    } catch (err) {
        console.log(err)

    }
})

router.get('/about', authenticate (req, res) => {
    res.send('Hello About');
});



module.exports = router;