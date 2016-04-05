import UserVo from "./vo/UserVo";
import FabaModel from "fabalous/core/FabaModel";
export default class LoginModel extends FabaModel {
    private static _instance;
    name: string;
    busy: boolean;
    userName: string;
    passWord: string;
    autoLogin: string;
    userData: UserVo;
    constructor();
    static getInstance(): LoginModel;
}
