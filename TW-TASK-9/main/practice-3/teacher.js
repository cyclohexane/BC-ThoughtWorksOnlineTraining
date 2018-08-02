const Person = require('./person');
const Klass = require('./class');

class Teacher extends Person{
    constructor(name,age,klasses,id){
        super(name,age);
        this.klasses = klasses;
        this.id = id;
    }
    introduce(){
        let i = super.introduce();
        if(this.klasses.length !== 0){
            let klassNumber = this.klasses.map(i => i.number).join(',');
            return `${i} I am a Teacher. I teach Class ${klassNumber}.`;
        }else{
            return `${i} I am a Teacher. I teach No Class.`;
        }
    }
    isTeaching(student){
        let flag = false;
        for(let i of this.klasses){
            if(i.isIn(student)){
                console.log(`I am `+this.name+`. I know `+student.name+` has joined Class `+student.klass.number+'.');
                if(student.klass.leader === student.id){
                    console.log(`I am `+this.name+`. I know `+student.name+` become Leader of Class `+student.klass.number+`.`);
                }
                flag = true;
            }
        }
        return flag;
    }
    notifyStudentAppended(message){
        return `I am ${this.name}. I know ${message}.`;
    }

    notifyLeaderAssigned(message){
        return `I am ${this.name}. I know ${message}.`;
    }
}

module.exports = Teacher;