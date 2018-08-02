let Person = require('./person')

module.exports =function Student(name,age,klass){
		Person.call(this,name,age);
		this.klass=klass;
		this.introduce=function(){return "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.klass+"."};
}
