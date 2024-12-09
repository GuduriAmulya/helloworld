function fun1(){
    console.log("fun1");
}
function fun2(){
    console.log("fun2");
}

function fun(){
    setTimeout(fun1,3000);
    //fun1();
    fun2();
}
fun();