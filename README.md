# Github Rules

### **⭐️ Github 커밋 규칙**

| 작업 타입 | 작업내용 |
| --- | --- |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| perf | 성능 개선 |
| build | 모듈, 패키지 설치, 삭제 |
| add | 새 파일 생성 |
| move | 파일 옮김, 정리 |
| remove | 파일 삭제 |
| rename | 파일명, 폴더명, 변수명 수정 |
| refactor | 코드 리팩토링 |
| chore | 그 외 자잘한 수정 |
| comment | 주석 추가, 수정 |
| test | 테스트 코드 추가, 수정 |
| docs | readme 문서 수정 |
| gitfix | gitignore 수정 |

### **⭐️ Github 커밋 시 이슈번호 연결**

```jsx
(작업타입): (작업내용) #(이슈번호)
realted to: #(관련 이슈번호)
```

### **⭐️ 예시**

```jsx
//예시 1
Feat: 로그인 API #3

//예시 2
Add: middlewares/validators 폴더에 sign-in-validator.middleware.js 생성 #10
related to: #3

Refactor: error-handler.middleware.js #20
```

### ⭐️ Github 푸쉬 시 branch 이름

- 예시

```jsx
feat/sign-in

refactor/sign-in
```
