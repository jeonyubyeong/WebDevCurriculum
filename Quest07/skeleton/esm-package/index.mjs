class EsmUtilClass {
    constructor(foo) {
    this.foo = foo;
    }

    double() {
      return this.foo * 2;
    }
}

const esmUtilFunction = (str) => {
    return str.toUpperCase();
};

  // TODO: 다른 패키지가 EsmUtilClass와 esmUtilFunction를 가져다 쓰려면 어떻게 해야 할까요?
export { EsmUtilClass, esmUtilFunction };

Object.defineProperty(module.exports, "__esModule", true);
module.exports.EsmUtilClass = EsmUtilClass;
module.exports.esmUtilFunction = esmUtilFunction;