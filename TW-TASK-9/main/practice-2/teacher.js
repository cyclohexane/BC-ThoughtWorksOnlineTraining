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
            let klassNumber = this.klasses.map(i => i.number).join(',');//*
            return `${i} I am a Teacher. I teach Class ${klassNumber}.`;
        }else{
            return `${i} I am a Teacher. I teach No Class.`;
        }
    }
}

module.exports = Teacher;