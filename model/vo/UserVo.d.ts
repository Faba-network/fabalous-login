import Address from "./Address";
import FabaValueObject from "fabalous/core/FabaValueObject";
export default class UserVo extends FabaValueObject {
    username: string;
    password: string;
    address: Address;
    constructor();
    validate(): boolean;
    clone(): UserVo;
}
