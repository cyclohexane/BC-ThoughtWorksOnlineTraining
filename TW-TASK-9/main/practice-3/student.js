const Person = require('./person');
const Klass = require('./class');

class Student extends Person{
    constructor(name,age,klass,id){
        super(name,age);
        this.klass = klass;
        this.id = id;
    }
    introduce(){
        let i = super.introduce();
        if(this.klass.leader !== undefined && this.klass.leader === this.id){
            return `${i} I am a Student. I am Leader of Class ${this.klass.number}.`;
        }else{
            if(this.klass.students.includes(this)){
                return `${i} I am a Student. I am at Class ${this.klass.number}.`;
            }else{
                return `${i} I am a Student. I haven't been allowed to join Class.`;
            }
        }
    }
}

module.exports = Student;