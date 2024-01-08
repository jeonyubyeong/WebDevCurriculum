// TODO: cjs-package와 esm-package의 함수와 클래스들을 가져다 쓰고 활용하려면 어떻게 해야 할까요?
import _ from "../esm-package/index.mjs";
import { CjsUtilClass, cjsUtilFunction } from "../cjs-package/index.js";
const EsmUtilClass = _.EsmUtilClass;
const esmUtilFunction = _.esmUtilFunction;

// ES Module
console.log("ES Module :::");
const myEsmClass = new EsmUtilClass(2);

const esmNumber = myEsmClass.double();

console.log(esmNumber);

const esmText = esmUtilFunction("abcdefg");

console.log(esmText);

// CommonJs Module
console.log("CommonJs Module :::");
const myCjsClass = new CjsUtilClass(2);

const cjsNumber = myCjsClass.double(2);

console.log(cjsNumber);

const cjsText = cjsUtilFunction("abcdefg");

console.log(cjsText);