const router=require('express').Router();
const user=require('../controllers/user.controller.js');

//Retrive all users
router.get('/',user.findAll);

//Retrieve user with the given id
//router.get('/:userId',user.findOne);

//create user
router.post('/',user.update);

//upate user with given id 
//router.put('/:userId',user.update);

// Delete a user with the given id
// router.delete('/:userId',user.delete);
router.post('/login',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    user.findOne({email})
        .then(user=>{
            if(!person){
                return res.status(404).json({emailerror:'user not Found'})
            }
            else{
                bcrypt.compare(password,user.password)
                      .then(isCorrect=>{
                          if(iscorrect){
                              //res.json({success:'login success});
                              const payload={
                                  id:user.id,
                                  email:user.email,
                                  name:user.name
                              };
                              jsonwt.sign(
                                  payload,
                                  key.secret,
                                  {
                                      expiresIn:3600

                                  },
                                  (err,token)=>{
                                      res.json({
                                          success:true,
                                          token:"Bearer" + token
                                      });
                                  }

                                  );
                                }
                                else{
                                    res.status(500).json({error:'internal error caused by bcrypt'});
                                }
                      })
                      .catch(err=>console.log(err));
            }
        });
});

router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.send('authorized');
})

module.exports=router;