const Person = require('./person');

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        let i = Person.basicIntroduce(this.name,this.age);          //类名调用静态方法
        return `${i} I am a Student. I am at Class ${this.klass}.`;
    }
}

module.exports = Student;