# Quest 07. node.js의 기초

## Introduction
* 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics
* node.js
* npm
* CommonJS와 ES Modules

## Resources
* [About node.js](https://nodejs.org/ko/about/)
* [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
* [npm](https://docs.npmjs.com/about-npm)
* [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
* [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
* [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
* [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
* [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
* [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist
* node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?
  - Node.js는 확장성 있는 네트워크 애플리케이션(특히 서버 사이드) 개발에 사용되는 소프트웨어 플랫폼이다. Node.js는 Chrome V8 JavaScript 엔진에 기반하여 작성되었으며, 이를 통해 비동기식 및 이벤트 기반 프로그래밍을 지원합니다.
  - Node.js의 내부는 크게 두 가지 요소로 구성됩니다.
  첫 번째 요소는 Node.js의 핵심 모듈인 libuv입니다. libuv 라이브러리는 Node.js에서 이벤트 기반, 비동기 I/O 작업을 처리하는 데 사용됩니다. <br>
  libuv 모듈은 이벤트 루프, 비동기 작업 처리 및 스레딩을 담당합니다.

  - 두 번째 요소는 Node.js의 모듈 시스템입니다. Node.js의 모듈 시스템은 파일 시스템 기반으로 동작하며, 모듈 간에 코드를 공유하고 재사용하는 데 사용됩니다. Node.js의 모듈 시스템은 CommonJS 모듈 규격을 따르며, require() 함수와 exports 객체를 사용하여 모듈을 로드하고 내보냅니다.
  
* npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?
  - npm(Node Package Manager)은 Node.js 패키지를 관리하는 툴입니다. npm을 사용하면 개발자들이 Node.js 애플리케이션에 필요한 다양한 패키지를 쉽게 설치하고 관리할 수 있습니다. npm은 패키지를 검색, 설치, 업데이트, 제거 등의 작업을 수행할 수 있는 커맨드 라인 도구이며, Node.js를 설치하면 함께 제공됩니다.

  - package.json 파일은 npm에서 사용되는 패키지 메타데이터를 담고 있는 파일입니다. package.json 파일은 Node.js 프로젝트의 루트 디렉토리에 위치하며, 해당 프로젝트의 이름, 버전, 의존성 패키지 정보 등을 정의할 수 있습니다. 일반적으로 Node.js 프로젝트를 시작하면, package.json 파일을 생성하여 필요한 정보를 입력한 후 npm init 명령어를 사용하여 생성합니다.

* npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?
  - npx는 npm 패키지를 실행하기 위한 도구입니다.
  npx를 사용하면 로컬에 설치된 패키지를 실행하거나, 패키지를 다운로드하지 않고 바로 실행할 수 있습니다.

  - npm 패키지를 -g 옵션을 통해 글로벌로 설치하면 해당 패키지를 시스템 전역에 설치하게 됩니다. 이렇게 설치한 패키지는 어디서든 실행할 수 있으며, 모든 사용자가 접근할 수 있습니다. 그러나 글로벌로 설치한 패키지는 버전 업그레이드나 업데이트를 수동으로 관리해야 하며, 시스템에 불필요한 파일들이 남을 수 있습니다.

  - 반면에, 로컬에 패키지를 설치하면 해당 패키지는 프로젝트 내부에만 설치되며, 프로젝트에서만 사용할 수 있습니다. 이렇게 설치한 패키지는 프로젝트를 삭제할 때 함께 삭제됩니다. 따라서 로컬 설치를 사용하면 패키지 버전을 더욱 관리하기 쉽고, 프로젝트의 의존성을 관리하는 데 더욱 유용합니다.

* 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?
  - 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 크게 두 가지로 나눌 수 있습니다: CommonJS와 ES Modules입니다.

  - CommonJS는 Node.js에서 처음 등장한 모듈 시스템입니다. 이 시스템은 require()와 module.exports를 사용하여 다른 파일에서 작성한 코드를 불러오거나 내보내는 방식으로 동작합니다. CommonJS는 동기적인 방식으로 모듈을 로딩하며, 브라우저 환경에서 사용할 경우에는 번들러(bundler)를 사용하여 모듈을 묶어서 전달해야 하는 불편함이 있습니다.

  - ES Modules는 ECMAScript 2015(ES6)에서 도입된 모듈 시스템입니다. 이 시스템은 import와 export 구문을 사용하여 다른 파일에서 작성한 코드를 불러오거나 내보내는 방식으로 동작합니다. ES Modules는 비동기적인 방식으로 모듈을 로딩하며, 브라우저 환경에서도 네이티브하게 지원하기 때문에 번들러 없이도 사용이 가능합니다.

  - CommonJS와 ES Modules의 가장 큰 차이점은 모듈 로딩 방식과 동기/비동기 방식입니다. CommonJS는 동기적으로 로딩되며, ES Modules는 비동기적으로 로딩됩니다. 이러한 차이점으로 인해 ES Modules는 브라우저에서의 모듈 로딩이 더욱 빠르고 유연하며, 더 많은 기능을 제공합니다. 이러한 이유로, 현재는 대부분의 프로젝트에서 ES Modules를 사용하고 있습니다
* ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?
  - CommonJS에서 require()는 동기적으로 동작하며 promise나 콜백 호출을 반환하지 않습니다. 반면에 ES modules는 비동기 환경에서 동작하며, Top-level Await를 지원합니다. ESM에서 CJS를 import할 수는 있지만 CJS에서 ESM을 require할 수는 없습니다. 왜냐하면 CJS는 Top-level-Await을 지원하지 않기 때문입니다.

* node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?
  - `.js` 파일의 모듈 시스템은 `package.json`의 type 필드에 따라 결정됩니다. type 필드의 값이 commonjs이면 `.js`는 CJS로 해석되고, 값이 module이면 `.js`는 ESM으로 으로 해석됩니다. `.cjs`와 `.mjs`는 항상 CJS와 ESM으로 해석됩니다. 타입스크립트도 `tsconfig.json`의 moduleResolution이 nodenext 또는 node16으로 설정된 경우, 위 규칙이 똑같이 적용됩니다.

## Quest
* 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  * `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  * `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
* 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced
* node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?
