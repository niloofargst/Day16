// only change code below this line
class Person {
    static display() {
        var message = "Static method is invoked from Person class";
        return message;
    }

    show() {
        console.log(Person.display());
    }
}
// only change code above this line
var message = new Person();
message.show();

module.exports = Person;