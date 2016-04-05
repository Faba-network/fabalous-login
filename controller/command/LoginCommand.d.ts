import LoginShowEvent from "../event/LoginShowEvent";
import FabaCommand from "fabalous/core/FabaCommand";
export default class LoginCommand extends FabaCommand {
    execute(event: LoginShowEvent): void;
    result(event: LoginShowEvent): void;
    timeout(event: LoginShowEvent): void;
    error(event: LoginShowEvent): void;
    offline(event: LoginShowEvent): void;
}
