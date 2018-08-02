const Person = require('./person');

class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        let i = Person.basicIntroduce(this.name,this.age);
        return `${i} I am a Worker. I have a job.`; 
    }
}

module.exports = Worker;