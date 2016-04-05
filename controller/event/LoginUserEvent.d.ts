import UserVo from "../../model/vo/UserVo";
import FabaEvent from "fabalous/core/FabaEvent";
export default class LoginUserEvent extends FabaEvent {
    static LOGIN: String;
    username: string;
    password: string;
    loggedIn: boolean;
    user: UserVo;
    users: Array<UserVo>;
    constructor(username?: string, password?: string);
    private test();
}
