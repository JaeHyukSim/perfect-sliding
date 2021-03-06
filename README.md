# perfect-sliding
자유롭게 설정할 수 있는 슬라이더(Ver 1)

----------

Flex Slider를 구현하는데 다양한 상황을 고려해서 좀 더 일반적으로 만드는 프로젝트이다. 주요 차별점으로는 Layout을 동적으로 조정할 수 있다는 것, 설정 파일을 통해 소스 코드의 수정이 훨씬 간편하다는 것으로 볼 수 있다

----------

### 논리적인 폴더 구조
1. Configuration
2. Constructor
3. Layout
4. Operation
5. CSS
6. HTML
7. img
8. data

-----------

### 설명
1. Configuration : 설정 정보를 모두 모아서 dynamic하게 변경할 수 있다. 이를 통해 다음과 같은 효과를 기대할 수 있다
    + 서버로부터 받을 데이터의 개수와 종류를 정할 수 있다
    + 레이아웃을 전략 패턴의 형식으로 자유롭게 바꿀 수 있다
    + 새로운 slider를 여러개 만들 수 있다
2. Constructor : 생성에 관한 코드를 분리하여 여러개를 생성할 수 있다 - 이때, 설정 파일을 새롭게 만들어 줘야 한다
3. Layout : 코드를 분리하여 자유롭게 변경할 수 있다
4. Operation : 로직에 대한 코드를 저장한다.
5. CSS : Layout코드에 대해 적용이 바뀌는 코드
8. data : Front End로, 결합성을 매우 낮추기 위해 서버로부터 받는 JSON 데이터만 따로 구현

------------

### 과정
1. main.html에 sliding.html을 AJAX로 html을 가져온다. 즉, main의 sliding-area에 child로 html코드를 append한다
2. 설정 정보를 mapping한다. 설정 정보는 default가 존재한다. sliding-id를 유일하게 준다. 중요한 것은 CSS 파일이 각 슬라이더에 1:1매칭되어야 한다는 것이다

------------

### 대표적인 기대효과
1. 레이아웃 동적으로 바꾸기
2. 여러개 sliding 
3. 코드 재사용하기

---------------

### 버전 1 ISSUE
1. 슬라이더의 크기를 조정할 때, 슬라이더가 전환되는 뷰가 부자연스럽다
2. 애니메이션의 속도, 방향 등을 새롭게 수정할 수 있도록 만들고 싶다.

---------------

### 사용 기술과 도구
- vanilla JS, HTML CSS
-VS code

---------------

### 실행 방법
1. 파일을 pull받고 vs code의 live server로 동작시킨다

--------------

### 시연 영상

-------------

[보러가기!][link]

[link]: https://www.youtube.com/watch?v=585NI8dSN0M "Go perfect-sliding"
