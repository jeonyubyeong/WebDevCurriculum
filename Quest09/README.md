# Quest 09. 서버와 클라이언트의 대화

## Introduction
* 이번 퀘스트에서는 서버와 클라이언트의 연동, 그리고 웹 API의 설계 방법론 중 하나인 REST에 대해 알아보겠습니다.

## Topics
* expressJS, fastify
* AJAX, `XMLHttpRequest`, `fetch()`
* REST, CRUD
* CORS

## Resources
* [Express Framework](http://expressjs.com/)
* [Fastify Framework](https://www.fastify.io/)
* [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [MDN - XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [REST API Tutorial](https://restfulapi.net/)
* [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Checklist
* 비동기 프로그래밍이란 무엇인가요?
  - 비동기 프로그래밍은 프로그램의 실행 흐름과 관련된 개념으로, 여러 작업이 동시에 실행되도록 하고 작업 완료 시 결과를 처리하는 방식을 말합니다.
  - 전통적인 동기적 프로그래밍에서는 하나의 작업을 처리할 때 해당 작업이 완료될 때까지 기다리고, 다음 작업을 처리합니다. 이러한 방식은 순차적으로 진행되기 때문에 한 작업이 오래 걸릴 경우 전체적인 실행 시간이 길어지는 단점이 있습니다.
  - 반면에 비동기 프로그래밍에서는 작업이 완료될 때까지 기다리지 않고 다른 작업을 수행할 수 있기 때문에, 여러 작업이 동시에 실행될 수 있습니다. 이를 통해 전체적인 실행 시간을 단축할 수 있습니다.
  - 비동기 프로그래밍을 구현하는 방법에는 여러가지가 있습니다. 콜백(callback), 프라미스(promise), async/await 등이 있습니다. 
* 콜백을 통해 비동기적 작업을 할 때의 불편한 점은 무엇인가요? 콜백지옥이란 무엇인가요?
  - 콜백을 통해 비동기적 작업을 처리할 때 가장 큰 불편함은 콜백 지옥(callback hell)입니다. 콜백 지옥이란, 콜백 함수를 중첩해서 사용하는 코드가 복잡해져서 가독성이 떨어지고 유지보수가 어려워지는 현상을 말합니다.
  - 예를 들어, 서버에서 파일을 읽어와서 처리하는 코드가 있다고 가정해보겠습니다. 다음과 같이 콜백 함수를 중첩해서 사용하면 콜백 지옥에 빠질 가능성이 큽니다.
  ```
    fs.readFile('file1.txt', function(err, data) {
    if (err) {
      console.error(err);
    } else {
      fs.readFile('file2.txt', function(err, data) {
        if (err) {
          console.error(err);
        } else {
          fs.readFile('file3.txt', function(err, data) {
            if (err) {
              console.error(err);
            } else {
              // 파일 처리 로직
            }
          });
        }
      });
    }
  });
  ```

  - 이러한 코드는 읽기가 어렵고 중첩된 콜백 함수가 많아져서 유지보수가 어렵습니다. 이를 개선하기 위해서는 콜백 함수 대신에 프라미스(promise)나 async/await을 사용할 수 있습니다. 이를 통해 코드의 가독성과 유지보수성을 개선할 수 있습니다.

* 자바스크립트의 Promise는 어떤 객체이고 어떤 일을 하나요?
  - 자바스크립트의 Promise는 비동기적인 작업을 처리하고 그 결과를 반환하기 위한 객체입니다. Promise는 비동기 작업이 완료되면 성공 결과나 실패 결과를 처리하기 위한 메서드를 제공합니다. Promise를 사용하면 콜백 함수를 중첩하지 않고 비동기적인 작업을 처리할 수 있어 코드의 가독성이 향상됩니다.
  - Promise는 세 가지 상태(state)를 가집니다.
    - 대기(pending): Promise 객체가 생성되고 비동기 작업이 수행 중인 상태
    - 이행(fulfilled): 비동기 작업이 성공적으로 완료된 상태
    - 거부(rejected): 비동기 작업이 실패한 상태

* 자바스크립트의 `async`와 `await` 키워드는 어떤 역할을 하며 그 정체는 무엇일까요?
  - async와 await는 ES2017(ES8)에서 추가된 자바스크립트의 키워드로, 비동기 처리를 좀 더 간결하게 작성할 수 있도록 해줍니다.

  - async 키워드는 함수 선언 앞에 붙이며, 이를 통해 해당 함수가 비동기적으로 처리됨을 나타내줍니다. async가 붙은 함수는 내부에서 Promise 객체를 반환하게 됩니다.

  - await 키워드는 async가 붙은 함수 내부에서 사용되며, Promise 객체의 결과값을 기다린 후에 다음 코드를 실행합니다. 이를 통해 콜백이나 Promise 체이닝을 사용하지 않고도 비동기 코드를 동기적으로 작성할 수 있습니다.

  - async/await를 사용하면 비동기 코드를 보다 직관적이고 가독성 높은 방법으로 작성할 수 있습니다. 이를 통해 코드의 복잡도를 낮출 수 있고, 디버깅이나 유지보수를 보다 쉽게 할 수 있습니다.
* 브라우저 내 스크립트에서 외부 리소스를 가져오려면 어떻게 해야 할까요?
  - 브라우저 내 스크립트에서 외부 리소스를 가져오기 위해서는 XMLHttpRequest 객체나 fetch API를 사용할 수 있습니다.
  - XMLHttpRequest 객체를 사용하는 방법
    ```
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://example.com/data.json');
      xhr.onload = () => {
        console.log(xhr.responseText);
      };
      xhr.send();
    ```
  - fetch API를 사용하는 방법
    ```
      fetch('https://example.com/data.json')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    ```
  - XMLHttpRequest 객체와 fetch API 모두 비동기적으로 데이터를 가져오는 기능을 제공합니다. XMLHttpRequest 객체는 콜백 함수를 사용하여 비동기적으로 처리하는 반면, fetch API는 Promise 기반으로 비동기 처리를 합니다.
  
* 브라우저의 `XMLHttpRequest` 객체는 무엇이고 어떻게 동작하나요?
  - XMLHttpRequest 객체는 브라우저에서 제공하는 네트워크 통신을 위한 JavaScript 객체입니다. 이 객체를 사용하여 서버로부터 데이터를 비동기적으로 요청하고 받아올 수 있습니다.
  - XMLHttpRequest 객체를 사용하여 데이터를 요청할 때는 비동기적으로 요청을 보내므로, onreadystatechange 이벤트나 load 이벤트 등을 사용하여 요청이 완료된 후에 처리해야 합니다. 또한, CORS (Cross-Origin Resource Sharing) 정책을 준수하여 요청을 보내야 합니다.
* `fetch` API는 무엇이고 어떻게 동작하나요?
  - Fetch API는 브라우저 내장 API로서, 네트워크를 통해 리소스를 가져오거나 전송하기 위해 사용됩니다. 이 API를 사용하면 AJAX 요청을 보내고, JSON 데이터를 가져오거나 파일 업로드 등을 할 수 있습니다.
  - Fetch API는 XMLHttpRequest 객체를 대체할 수 있는 비동기적인 HTTP 요청 처리 API로, 프로미스(Promise)를 기반으로 동작합니다. 이는 비동기적인 처리를 더욱 쉽게 다룰 수 있게 해주는 장점이 있습니다.
  - Fetch API를 사용하기 위해서는 fetch() 함수를 호출하고, 요청에 대한 정보와 옵션을 설정합니다. 그리고 이 함수는 프로미스를 반환하게 되며, 프로미스가 이행(resolve)될 때 결과를 받아올 수 있습니다.
* REST는 무엇인가요?
  - REST는 Representational State Transfer의 약자로, 웹 기반 애플리케이션에서 자주 사용되는 아키텍처 스타일입니다. REST는 클라이언트와 서버 간의 통신 방식으로, 네트워크 상에서 분산되어 있는 리소스들을 표현하고 상호작용하는 데에 적합합니다.
  - REST는 HTTP 프로토콜을 기반으로 동작하며, URI(Uniform Resource Identifier)를 통해 리소스를 식별하고, HTTP 메소드를 사용하여 해당 리소스에 대한 작업을 수행합니다. 일반적으로, HTTP 메소드 중 GET, POST, PUT, DELETE를 사용하여 리소스를 생성, 조회, 수정, 삭제하는 작업을 수행합니다.
  - REST를 따르는 웹 서비스는 다양한 클라이언트(브라우저, 앱 등)와 서버 플랫폼에서 사용될 수 있으며, 서비스의 확장성과 재사용성을 높일 수 있습니다.

* REST API는 어떤 목적을 달성하기 위해 나왔고 어떤 장점을 가지고 있나요?
  - REST API는 Representational State Transfer API의 약어로, 웹 서비스에서 자원을 정의하고 자원에 대한 주소를 지정하는 방법론입니다. REST API는 자원을 CRUD(Create, Read, Update, Delete) 기능을 통해 관리할 수 있으며, HTTP 메서드(GET, POST, PUT, DELETE)를 사용하여 이를 구현합니다.

  - REST API의 장점:
  1. 플랫폼과 언어에 독립적입니다. 
  2. 서로 다른 플랫폼이나 언어 간의 통신이 가능하며, 이는 웹 서비스의 확장성과 유연성을 높여줍니다.
  3. REST API는 캐싱을 지원하기 때문에 서버의 부하를 줄이고 성능을 향상시킬 수 있습니다.
  4. REST API는 자원에 대한 URI(Uniform Resource Identifier)를 사용하여 자원을 식별하고, HTTP 메서드를 사용하여 해당 자원에 대한 행동을 나타냅니다. 이러한 구조는 API의 가독성과 이해하기 쉬운 설계를 가능하게 합니다. 
  5. REST API는 자원의 상태를 표현하기 위해 JSON이나 XML과 같은 표준 데이터 형식을 사용합니다.
* RESTful한 API 설계의 단점은 무엇인가요?
  1. 복잡성
  2. 캐싱
  3. 보안
  4. 서버 부하
  5. 문서화
* CORS란 무엇인가요? 이러한 기능이 왜 필요할까요? CORS는 어떻게 구현될까요?
  - CORS(Cross-Origin Resource Sharing)란 웹 브라우저에서 실행되는 스크립트에서 다른 출처(origin)의 리소스에 접근할 때 발생하는 보안 정책입니다. 
  - CORS 기능을 사용하면 서버가 특정 출처의 리소스에 대한 요청을 허용할 수 있습니다. 이를 통해 API 서버에서는 특정 출처에서 요청이 왔을 때, 허용할 수 있도록 응답해줄 수 있습니다. 이를 통해 다른 출처에서 데이터를 요청하고 받아올 수 있게 됩니다.
  - CORS는 서버에서 응답 헤더를 이용해 구현됩니다. 서버에서는 Access-Control-Allow-Origin 헤더를 설정하여, 허용할 출처를 명시합니다. 이 헤더를 통해 브라우저는 해당 출처에서 온 요청에 대해 응답을 허용할지 여부를 결정하게 됩니다.

## Quest
* 이번 퀘스트는 Midterm에 해당하는 과제입니다. 분량이 제법 많으니 한 번 기능별로 세부 일정을 정해 보고, 과제 완수 후에 그 일정이 얼마나 지켜졌는지 스스로 한 번 돌아보세요.
  * 이번 퀘스트부터는 skeleton을 제공하지 않습니다!
* Quest 05에서 만든 메모장 시스템을 서버와 연동하는 어플리케이션으로 만들어 보겠습니다.
  * 클라이언트는 `fetch` API를 통해 서버와 통신합니다.
  * 서버는 8000번 포트에 REST API를 엔드포인트로 제공하여, 클라이언트의 요청에 응답합니다.
  * 클라이언트로부터 온 새 파일 저장, 삭제, 다른 이름으로 저장 등의 요청을 받아 서버의 로컬 파일시스템을 통해 저장되어야 합니다.
    * 서버에 어떤 식으로 저장하는 것이 좋을까요?
  * API 서버 외에, 클라이언트를 띄우기 위한 서버가 3000번 포트로 따로 떠서 API 서버와 서로 통신할 수 있어야 합니다.
  * Express나 Fastify 등의 프레임워크를 사용해도 무방합니다.
* 클라이언트 프로젝트와 서버 프로젝트 모두 `npm i`만으로 디펜던시를 설치하고 바로 실행될 수 있게 제출되어야 합니다.
* 이번 퀘스트부터는 앞의 퀘스트의 결과물에 의존적인 경우가 많습니다. 제출 폴더를 직접 만들어 제출해 보세요!

## Advanced
* `fetch` API는 구현할 수 없지만 `XMLHttpRequest`로는 구현할 수 있는 기능이 있을까요?
* REST 이전에는 HTTP API에 어떤 패러다임들이 있었을까요? REST의 대안으로는 어떤 것들이 제시되고 있을까요?
