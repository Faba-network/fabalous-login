import LoginUserEvent from "../event/LoginUserEvent";
import FabaCommand from "fabalous/core/FabaCommand";
export default class LoginUserCommand extends FabaCommand {
    execute(event: LoginUserEvent): void;
    result(event: LoginUserEvent): void;
}
