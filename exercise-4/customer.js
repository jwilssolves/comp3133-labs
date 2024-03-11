"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.GetAge = function () {
        console.log("Age: ".concat(this.age));
        return this.age;
    };
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("Richard", "Wilson", 23);
customer.greeter();
customer.GetAge();
