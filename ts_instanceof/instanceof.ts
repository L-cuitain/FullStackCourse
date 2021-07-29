class Foo{
    foo = 123;
    common = '123';
}

class Bar{
    bar = 123;
    common = '123';
}

function doStuff(arg: Foo | Bar){
    if(arg instanceof Foo){
        console.log(arg.foo);
        // console.log(arg.bar);  error
    }

    if(arg instanceof Bar){
        // console.log(arg.foo); error
        console.log(arg.bar);
    }
}

doStuff(new Foo());
doStuff(new Bar());