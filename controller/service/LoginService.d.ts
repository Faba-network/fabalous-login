import LoginUserEvent from "../event/LoginUserEvent";
import FabaSerivce from "fabalous/core/FabaService";
export default class LoginService extends FabaSerivce {
    users: any;
    execute(event: LoginUserEvent): Promise<void>;
}
