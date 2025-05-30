# 계산기

HTML, CSS, JS 기초 연습용

## 기능

- 기본적인 사칙연산
- 연산자 중복 입력 방지
- `C` 버튼으로 초기화
- 키보드 입력 지원

## 업데이트 이력

### v3 (2025-05-29)

- 렌더링 함수 분리
- 키보드 입력 기능 추가
- 연산자 중복 입력 방지 개선
- `new Function`으로 계산 처리

### v2 (2025-05-27)

- 전체 HTML, CSS, JS 리팩토링
  - 시맨틱 태그 중심으로 스타일 적용
  - `forEach`로 버튼 클릭 이벤트 코드 축약

## TODO

### style.css

- [ ] 버튼 크기 유동화 (반응형 대응)

### script.js

- [x] `forEach`를 사용하여 `buttons[0]`~`buttons[15]` 반복 제거
- [ ] `new Function` 함수 제거 및 자체 파서(괄호는 미지원) 구현
- [ ] 상태값을 도입하여 UX 개선 (lastInputType, isEvaluated)
