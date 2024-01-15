# Quest 13. 웹 API의 응용과 GraphQL

## Introduction
* 이번 퀘스트에서는 차세대 웹 API의 대세로 각광받고 있는 GraphQL에 대해 알아보겠습니다.

## Topics
* GraphQL
  * Schema
  * Resolver
  * DataLoader
* Apollo

## Resources
* [GraphQL](https://graphql.org/)
* [GraphQL.js](http://graphql.org/graphql-js/)
* [DataLoader](https://github.com/facebook/dataloader)
* [Apollo](https://www.apollographql.com/)

## Checklist
* GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?
  - GraphQL은 페이스북(현 메타)이 2012년에 개발하여 2015년에 공개적으로 발표한 데이터 질의어입니다. GraphQL은 사용자가 어떤 데이터를 필요로 하는지 명시하기 때문에 불필요한 데이터를 받는 Over Fetching 문제나 필요한 데이터를 받지 못하는 Under Fetching 문제를 피할 수 있습니다. REST API를 사용할 때에는 여러 엔드포인트(URL, 무엇에 접근할 것인지에 집중)와 요청 메소드 방식(get/post/put 등, 데이터에 어떤 요청을 할 것인지에 집중)을 조합하여 정의됩니다. GraphQL은 단 하나의 엔드포인트만 존재하며 Query, Mutaion, Subscription 타입을 통해 클라이언트의 어떤 요청을 할 것인지 명시합니다.

* GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?
  - GraphQL의 스키마는 어떤 데이터를 제공하고 어떤 데이터를 요청할 수 있는지 정의합니다. 스키마는 GraphQL API의 계약서라고 생각할 수 있습니다.

  - 스키마는 객체 타입(Object Type), 인터페이스(Interface), 스칼라 타입(Scalar Type), 열거형(Enum Type) 등을 정의할 수 있습니다. 객체 타입은 GraphQL의 핵심 단위로 객체의 필드를 정의하며, 각 필드는 다른 객체 타입이나 스칼라 타입을 반환할 수 있습니다. 인터페이스는 공통 필드와 메소드를 가진 여러 객체 타입을 정의하는데 사용됩니다. 스칼라 타입은 GraphQL API가 반환할 수 있는 기본 데이터 유형을 정의하며, 열거형은 특정한 값을 가지는 상수 집합을 정의합니다.

  - GraphQL 클라이언트는 스키마를 사용하여 서버에서 어떤 데이터를 요청할 수 있는지 이해할 수 있습니다.

  - GraphQL의 스키마는 코드에서 문자열로 정의되거나, raw 객체를 통해 정의되거나, .graphql 파일을 통해 정의합니다.

* GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?
  - GraphQL 리졸버(Resolver)는 클라이언트의 쿼리에 응답하기 위해 데이터를 제공하는 함수입니다. 리졸버는 스키마에서 정의한 필드의 값 또는 데이터를 반환합니다.

  - GraphQL API에서 리졸버는 각각의 필드에 대해 정의됩니다. User 객체에 "id", "name", "email" 필드가 정의되어 있다면, "User" 객체 타입의 각 필드마다 해당 필드를 해결하기 위한 리졸버가 정의됩니다.

  - 리졸버는 첫 번째 인수로 부모 객체, 두 번째 인수로는 인자, 세번째 인수로는 컨텍스트를 받습니다. 부모 객체는 현재 필드의 상위 객체를 나타내고, 인자는 현재 필드에 전달된 인자를 나타냅니다. 컨텍스트는 모든 리졸버에서 공유하는 객체로, 인증 정보나 데이터베이스 연결과 같은 전역적인 정보를 저장할 수 있습니다.

  - 리졸버는 데이터를 반환하는 역할을 하며, 데이터를 가져오기 위해 외부 API나 데이터베이스와 연결될 수 있습니다. 여러 리졸버가 함께 동작하여 복잡한 데이터를 반환하기도 합니다.
* GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?
  - GraphQL 리졸버에서 DataLoader는 데이터를 효율적으로 로드하고 캐싱하는 유틸리티 라이브러리입니다. DataLoader는 반복해서 요청되는 데이터를 캐시하고, 요청된 데이터를 배치 처리하여 성능을 높입니다.

  - DataLoader는 GraphQL API에서 N+1 문제를 해결하는데도 사용합니다. N+1 문제란 여러 개의 객체를 가져올 때 각 객체마다 새로운 데이터베이스 쿼리를 발생시켜야 하는 상황에서 발생하는 성능 문제입니다.

* 클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?
  - Fetch API or Axios를 이용한 원시 HTTP 요청: 이 방법은 별도의 GraphQL 클라이언트 라이브러리 없이도 GraphQL 요청을 보낼 수 있습니다. 예를 들어, JavaScript에서 Fetch API와 함께 사용하는 경우 아래와 같은 코드를 작성할 수 있습니다.
  ```
  fetch('your-graphql-endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          yourQuery {
            field1
            field2
          }
        }
      `,
    }),
  })
  .then(res => res.json())
  .then(res => console.log(res.data));
  ```
  - GraphQL 클라이언트 라이브러리 이용: Apollo Client나 Relay와 같은 클라이언트 라이브러리를 사용하면, 요청을 보내는 데 필요한 복잡한 작업들을 좀 더 쉽게 처리할 수 있습니다. 이들 라이브러리는 캐싱, 요청 상태 관리 등의 기능을 제공합니다.
  ```
  import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

  const client = new ApolloClient({
    uri: 'your-graphql-endpoint',
    cache: new InMemoryCache()
  });

  client
    .query({
      query: gql`
        query {
          yourQuery {
            field1
            field2
          }
        }
      `,
    })
    .then(result => console.log(result));
  ```
* Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?
  - Apollo 서버의 장점:

    1. 통합성: Apollo 서버는 다양한 종류의 데이터베이스 및 서버 사이드 기술과 잘 통합됩니다. RESTful API, SQL, NoSQL 등 다양한 데이터 소스와 연결할 수 있습니다.
    2. 유연성: Apollo 서버는 기존 코드와의 통합이 간편하며, 서버 사이드에서 GraphQL 스키마를 쉽게 작성하고 유지 관리할 수 있게 합니다.
    3. 프로덕션 레디: Apollo 서버는 성능 최적화 기능, 에러 핸들링, 보안 기능 등을 기본적으로 제공하여 프로덕션 환경에서 사용하기에 적합합니다.

  - Apollo 클라이언트의 장점:

    1. 캐싱: Apollo 클라이언트는 자동으로 요청 결과를 캐시하고, 이를 통해 네트워크 요청을 줄이고 애플리케이션의 응답성을 향상시킵니다.
    2. 상태 관리: Apollo 클라이언트는 데이터 상태 관리를 위해 Redux 등의 별도의 상태 관리 라이브러리를 사용할 필요가 없습니다. Apollo 자체가 상태 관리 기능을 제공합니다.
    3. 개발 도구: Apollo는 GraphQL을 사용하는 개발자들을 위해 강력한 개발 도구를 제공합니다. Apollo Client Developer Tools는 캐시된 데이터를 검사하고, 쿼리를 테스트하고, 성능을 모니터링하는 등의 기능을 제공합니다.
    4. 커뮤니티와 지원: Apollo는 활발한 커뮤니티를 가지고 있으며, 풍부한 문서와 튜토리얼, Q&A 등의 지원이 있습니다.

* Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?
  - HTTP 클라이언트 라이브러리 (Fetch, Axios 등)를 사용하여 GraphQL 서버에 요청을 보냅니다.
  ```
  fetch("https://api.example.com/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "{ user(id: 1) { name email } }" }),
  })
  .then((res) => res.json())
  .then((data) => console.log(data));
  ```

* GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?
  - GraphQL은 보통 최소한의 상태 코드만 사용합니다.

  - 200 : 요청 성공
  - 400 : 요청에 문제가 있음 (문법 오류, 유효성 오류 등)
  - 500 : 서버에 문제가 있음 GraphQL에서는 두 개의 리소스를 요청했는데 하나만 없거나, 두 개의 Mutation을 실행하는데 하나는 생성, 하나는 수정과 같이 여러 유형의 결과가 동시에 일어날 수 있기 때문입니다

## Quest
* 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.

## Advanced
* GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?
* GraphQL의 경쟁자에는 어떤 것이 있을까요?
