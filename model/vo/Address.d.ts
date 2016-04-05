import FabaValueObject from "fabalous/core/FabaValueObject";
export default class Address extends FabaValueObject {
    street: string;
    zip: string;
    city: string;
    constructor();
    fullAdress(): string;
}
