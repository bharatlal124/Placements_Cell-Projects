//import all the required modules
import "./env.js"
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import ejsLayouts  from 'express-ejs-layouts';
import { connectToDb } from "./config/mongoose.js";
import studentRouter from "./src/routes/student.routes.js";
import userRouter from "./src/routes/user.routes.js";
import session from 'express-session';
import interviewRouter from "./src/routes/interviews.routes.js";
import { auth } from "./src/middlewares/auth.middleware.js";


const server = express();

server.use(bodyParser.urlencoded({ extended: true }));

server.use(session({
    secret:'YourSecretKey',
    resave:false,
    saveUninitialized:true,
    cookie: {secure: false},
}))

// setup view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(),"src",'views')); 
server.use(ejsLayouts);
server.use(express.static('public'));
server.use(express.static('src/views'));

//Setup the Routes
server.use("/",userRouter);
server.use("/", auth, studentRouter);
server.use("/",auth, interviewRouter);

//Server listening PORT 3300 
server.listen(3300, ()=>{
    console.log('Server is listening on port 3300');
    connectToDb();
});
