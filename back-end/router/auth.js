const jwt = require('jsonwebtoken');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate")
const requireAuth = require("../middleware/requireAuth")

const cookieParser = require("cookie-parser");
router.use(cookieParser());

require('../db/conn')
const User = require("../model/userSchema")

router.get('/', (req, res) => {
    res.send('Hello World router js');
});

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

router.get('/profile', authenticate ,(req, res) => {
    res.send(req.rootUser);
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/profile-pictures');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const fileExtension = file.originalname.split('.').pop();
      cb(null, `profilePicture-${uniqueSuffix}.${fileExtension}`);
    },
  });
  
  
  const upload = multer({ storage: storage });
  
  
  router.put('/profile', authenticate, upload.single('profilePicture'), async (req, res) => {
    try {
      const { name, batch, rollno, phone, field } = req.body;
      const user = req.rootUser;
  
      if (name) user.name = name;
      if (batch) user.batch = batch;
      if (rollno) user.rollno = rollno;
      if (phone) user.phone = phone;
      if (field) user.field = field;
  
      if (req.file) {
        user.profilePicture = req.file.filename;
      }
  
      await user.save();
      await user.populate('profilePicture').execPopulate();
  
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  router.get('/users', requireAuth, async (req, res) => {
    try {
        const users = await User.find().select('-password -cpassword -tokens');
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

  
  



module.exports = router;