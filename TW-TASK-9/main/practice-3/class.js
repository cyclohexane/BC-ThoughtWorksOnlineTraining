class Klass{
    constructor(number){
        this.number = number;
        this.teachers = [];
        this.students = [];
    }
    assignLeader(student){
        if(this.students.includes(student)){
            this.leader = student.id;
            for(let i of this.teachers){
                let message = `${student.name} become Leader of Class ${student.klass.number}`
                i.notifyLeaderAssigned(message);
            }
        }else{
            return 'It is not one of us.';
        }
        return `Assign team leader successfully.`;
    }
    appendTeacher(teacher){
        this.teachers.push(teacher);
    }
    appendMember(student){
        student.klass = this;
        this.students.push(student);
        for(let i of this.teachers){
            let message = `${student.name} has joined Class ${student.klass.number}`;
            i.notifyStudentAppended(message);
        }
    }
    isIn(student){
        if(this.students.includes(student)){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = Klass;