class Person{
    constructor(name){
        this.name=name;
    }
    get pname(){
        return this.name;
    }
    set pname(x){
        this.name=x;
    }
    walk(){
        console.log("Person dang di chuyen");
    }
}
class Programmer extends Person{
    constructor(name,language){
        super(name);
        this.language=language;
    }
    get lan(){
       return this.language;
    }
    set lan(x){
        this.language=x;
    }
    writeCode(){
        console.log("Programmer dang viet code");
    }
}
let a = new Programmer("TenA","Javascript");
console.log(a)
console.log(a.lan)
a.walk();
a.writeCode();

let b = new Programmer("TenA","C#");
console.log(b)
console.log(b.lan)
