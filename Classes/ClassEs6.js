// class in ES6 have no this keyword and no constructor methods can be declared in arrow function

class Parent{

    Pname ='parent'
     getPName=()=>{
       console.log(this.Pname);
    }
}
class Child extends Parent{
    
        Cname = 'child'
  
    getCName=()=>{
        console.log(this.Cname);
    }
}
// here child class has excess to parent class
const child = new Child();
child.getPName()
child.getCName()
