//泛型
var foo = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
var result = foo(3, "abc");
console.log(result);
