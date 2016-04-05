import LoginUserEvent from "../event/LoginUserEvent";
import UserVo from "../../model/vo/UserVo";
import FabaSerivce from "fabalous/core/FabaService";
import LoginModel from "fabalous-login/model/LoginModel";

export default class LoginService extends FabaSerivce {
    users:any = LoginModel.getInstance().userCollection;

    async execute(event:LoginUserEvent) {
        event.user.address.fullAdress();
        console.log(this.users);
        //event.loggedIn = false;
        //this.sendToClient(event);
        if (!event.username || !event.password) {
            this.sendToClient(event);
            return;
        }


        let usersRt:Array<UserVo> = await this.users.getUser("Hallo");

        if (usersRt){
            usersRt.map((user)=>{
                //trace(user);
            });
        }

        await this.users.createtUser("Hallo 2");

        let loginSuccess = await this.users.checkLoginData(event.username, event.password);

       // console.log(loginSuccess);

        if (loginSuccess){
          //  console.log("true");
            event.loggedIn = true;
        } else {
           // console.log("false");
            event.loggedIn = false;
        }

        this.sendToClient(event);
    }
}
