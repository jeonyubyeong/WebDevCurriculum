# Quest 05. OOP 특훈

## Introduction
* 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍을 조금 더 훈련해 보겠습니다.

## Topics
* Separation of Concerns
* 객체지향의 설계 원칙
  * SOLID 원칙
* Local Storage

## Resources
* [Separation of concerns](https://jonbellah.com/articles/separation-of-concerns/)
* [SOLID](https://en.wikipedia.org/wiki/SOLID)
* [객체지향 설계 5원칙](https://webdoli.tistory.com/210)
* [MDN - Local Storage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

## Checklist
* 관심사의 분리 원칙이란 무엇인가요? 웹에서는 이러한 원칙이 어떻게 적용되나요?
  - 특정한 관심사에 따라 기능을 나누고, 각 기능을 독립적으로 개발한 뒤 이를 조합하는 방식으로 복잡한 소프트웨어를 구성해보자는 아이디어를 관심사의 분리(Separation of concerns, SoC)라고 합니다. 웹 프론트엔드에서는 스타일 변경을 HTML이 아닌 CSS 파일에서 작성하는 것을 지향하고, JS, CSS에서 사용되는 ClassName을 하나로 통일하는 등 여러 방법을 통해 관심사를 분리합니다
* 객체지향의 SOLID 원칙이란 무엇인가요? 이 원칙을 구체적인 예를 들어 설명할 수 있나요?
   - **SRP (단일책임의 원칙 : Single Responsibility Principle)**<br>
  작성된 클래스는 하나의 기능만 가지며 클래스가 제공하는 모든 서비스는 그 하나의 책임을 수행하는 데 집중되어 있어야 한다는 원칙입니다.

    - **OCP (개방폐쇄의 원칙 : Open Close Principle)**<br>
  소프트웨어의 구성요소(클래스, 컴포넌트, 모듈, 함수 등)가 확장에는 열려있고 변경에는 닫혀있어야 한다는 뜻입니다.

    - **LSP (리스코프 치환의 원칙 : The Liskov Substition Principle)**<br>
  자식 클래스는 언제나 부모 클래스를 대체할 수 있어야 합니다.

  - **ISP (인터페이스 분리의 원칙 : Interface Segregation Principle)**<br>
  한 클래스는 자신이 사용하지 않는 인터페이스는 구현하지 않아야 합니다. 하나의 일반적인 인터페이스보다 여러 개의 구체적인 인터페이스가 더 좋습니다.

  - **DIP (의존성역전의 원칙 : Dependency Inversion Principle)**<br>
  하위 레벨 모듈의 변경이 상위 레벨 모듈의 변경을 요구하는 위계 관계를 끊는 의미의 역전입니다.

* 로컬 스토리지란 무엇인가요? 로컬 스토리지의 내용을 개발자 도구를 이용해 확인하려면 어떻게 해야 할까요?
  - 브라우저 세션 간에 공유되는 document 출처의 storage 객체입니다. 프로토콜 별로 구분하여 저장되며, session storage와는 달리 페이지를 닫을 때 사라지지 않습니다.

## Quest
* 외부 라이브러리나 프레임워크를 사용하지 않고, 자바스크립트를 이용하여 간단한 웹브라우저 기반의 텍스트 에디터를 만들어 보겠습니다.
  * 기본적으로 VSCode와 같이 탭을 이용해 여러 개의 파일을 동시에 편집할 수 있습니다.
  * 탭을 눌러 열려 있는 다른 파일을 편집할 수 있으며 탭을 언제든지 닫을 수 있습니다.
  * VSCode와 같이 새 파일, 로드, 저장, 다른 이름으로 저장 등의 기능을 가집니다. 저장은 웹 브라우저의 로컬 스토리지를 이용합니다.
  * VSCode와 같이 탭이 수정되었는데 저장되기 이전일 경우 이를 알려주는 인디케이터가 작동합니다.
  * 같은 이름의 파일을 저장할 경우 에러를 표시해야 합니다.
* 이번 퀘스트의 결과물은 앞으로의 많은 퀘스트에서 재사용되게 되니, 주의깊게 코드를 작성해 보세요!

## Advanced
* 웹 프론트엔드 개발에서 이러한 방식의 패턴을 더 일반화해서 정리할 수 있을까요? 이 퀘스트에서 각각의 클래스들이 공통적으로 수행하게 되는 일들에는 무엇이 있을까요?
