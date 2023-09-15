import UserClass  from "../controller/user";  

import { Router } from "./handler";

//  实例化 UserClass 
const userClass = new UserClass();


export const routers: Router[] = [
    { pattern: "/", method: userClass.index },
    { pattern: "/add", method: userClass.add },
    { pattern: "/list", method: userClass.list },
    { pattern: "/delete", method: userClass.delete },
];
