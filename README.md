# perfect-sliding
자유롭게 설정할 수 있는 슬라이더
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

### 설명
1. Configuration : 설정 정보를 모두 모아서 dynamic하게 변경할 수 있다. 이를 통해 다음과 같은 효과를 기대할 수 있다
    + 서버로부터 받을 데이터의 개수와 종류를 정할 수 있다
    + 레이아웃을 전략 패턴의 형식으로 자유롭게 바꿀 수 있다
2. Constructor : 생성에 관한 코드를 분리하여 여러개를 생성할 수 있다 - 이때, 설정 파일을 새롭게 만들어 줘야 한다
3. Layout : 코드를 분리하여 자유롭게 변경할 수 있다
4. Operation : 로직에 대한 코드를 저장한다.
5. CSS : Layout코드에 대해 적용이 바뀌는 코드
8. data : Front End로, 결합성을 매우 낮추기 위해 서버로부터 받는 JSON 데이터만 따로 구현
