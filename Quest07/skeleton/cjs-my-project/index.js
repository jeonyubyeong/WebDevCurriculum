// TODO: cjs-package와 esm-package의 함수와 클래스들을 가져다 쓰고 활용하려면 어떻게 해야 할까요?
const { CjsUtilClass, cjsUtilFunction } = require("../cjs-package");

//const EsmUtilClass = _.EsmUtilClass;
//const esmUtilFunction = _.esmUtilFunction;

// CommonJs Module
console.log("CommonJs Module :::");
const myCjsClass = new CjsUtilClass(2);

const myCjsNumber = myCjsClass.double(2);

console.log(myCjsNumber);

const myCjsText = cjsUtilFunction("hello");

console.log(myCjsText);

// ES Module
console.log("ES Module :::");
const myEsmClass = new EsmUtilClass(2);

const esmNumber = myEsmClass.double();

console.log(esmNumber);

const esmText = esmUtilFunction("abcdefg");

console.log(esmText);