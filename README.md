# Todo 리스트 프로젝트 제작

입력창에 할일을 입력후 추가하여 Todo 리스트를 관리할 수 있는 프로젝트를 제작해주세요

## 기능

- 사용자는 첫 진입시 input창에 입력하여 할일을 추가할 수 있다.
- 사용자는 할일의 완료 여부를 변경할 수 있다.
- 할일 목록의 내용을 수정 및 삭제가 가능하다.

UI 관련 내용은 https://todomvc.com/ 을 참조해서 제작해주세요!

## 과제 요구 사항

- Client, react-query 과 같이 종류별로 나눠서 개발
- client의 경우 useState를 이용하여 CRUD 기능 구현
- react-query의 경우 프로젝트에 작성된 supabase CRUD API를 사용하여 제작
- todo 입력하는 input 좌측에 전체 선택 기능 보유한 버튼 구현
- 항목 선택시 완료 처리된 경우 텍스트에 실선 처리
- 특정 todoItem 항목 hover 시에만 우측에 삭제 버튼 display
- 완료된 항목 또는 완료되지 않은 항목만 볼수 있는 기능 구현 (모두, 완료, 미완료)
- 완료된 항목을 모두 제거할 수 있는 기능 보유한 버튼 구현
- 남은 todo 갯수 표시 기능 구현

## 개발 환경

- PNPM
- Visual Studio Code

### 프론트 개발

- ReactJs
- Axios
- React-query

## 프로젝트 빌드 & 테스트 진행

```
# package.json에 정의된 모듈 다운

$ pnpm install

# 파일 빌드

$ pnpm run build

# 관리자 모드 실행

$ pnpm run dev
```

## 작업 리스트

- [ ] 할일 목록을 useState를 사용하여 CRUD 기능 구현
- [ ] 할일 목록을 React-query를 사용하여 CRUD 구현 (src/api/services 경로에 있는 index.ts를 참고하여 api/mutation 폴더에 react-query를 사용한 api 호출 코드를 작성할 것)
- [ ] todo input 좌측에 전체 선택 기능 보유한 버튼 구현
- [ ] 항목 선택시 완료 처리된 경우 텍스트에 실선 처리
- [ ] 특정 todoItem 항목 hover 시에만 우측에 삭제 버튼 display
- [ ] 완료된 항목 또는 완료되지 않은 항목만 볼수 있는 기능 구현 (모두, 완료, 미완료)
- [ ] 완료된 항목만 모두 제거할 수 있는 기능 보유한 버튼 구현
- [ ] 남은 todo 갯수 표시 기능 구현

## TODO 타입 정의

```

interface ITodo {
# 완료 여부
  completed: boolean;
# 생성 일자
  createdAt: string;
# TODO id
  id: string;

# TODO 타이틀
  title: string;
# 수정 일자
  updatedAt?: string | null;
}

```

## API 정의
| API  | 정의 | 파라미터  | 응답타  |
|---|---|---|---|
| GET /todo  | 할일 목록을 가져옵니다  | N/A  | ITodo[]  |
| GET /todo/{todoId} | 특정 할일을 가져옵니다 | todoId={string} | ITodo |
| POST /todo  | 할일을 생성합니다  | N/A  | void  |
| PATCH /todo/{todoId}  | 특정 할일을 수정합니다  | todoId={string}  | void  |
| DELETE /todo/{todoId} | 특정 할일을 삭제합니다  | todoId={string}  | void  |
