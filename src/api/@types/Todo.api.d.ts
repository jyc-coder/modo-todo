/* eslint-disable @typescript-eslint/no-empty-object-type */
type getTodosRequestPath = {};

type getTodosRequestParams = {};

type getTodosRequestBody = {};

/** 할일 목록 조회 요청 */
type getTodosRequest = {
  body?: getTodosRequestBody;
  params?: getTodosRequestParams;
  path?: getTodosRequestPath;
};

/** 할일 목록 조회 응답 */
type getTodosResponse = {
  count: number;
  prev: string | null;
  next: string | null;
  results: ITodo[];
};

type getTodoDetailRequestPath = {
  todoId: string;
};

type getTodoDetailRequestParams = {};

type getTodoDetailRequestBody = {};

/** 할일 상세 조회 요청 */
type getTodoDetailRequest = {
  body?: getTodoDetailRequestBody;
  params?: getTodoDetailRequestParams;
  path: getTodoDetailRequestPath;
};

/** 할일 상세 조회 응답 */
type getTodoDetailResponse = ITodo;

type createTodoRequestPath = {};

type createTodoRequestParams = {};

type createTodoRequestBody = {
  title: string;
};

/** 할일 생성 요청 */
type createTodoRequest = {
  body: createTodoRequestBody;
  params?: createTodoRequestParams;
  path?: createTodoRequestPath;
};

/** 할일 생성 응답 */
type createTodoResponse = ITodo;

type updateTodoRequestPath = {
  todoId: string;
};

type updateTodoRequestParams = {};

type updateTodoRequestBody = Omit<{
  title: string;
  completed: boolean;
}>;

/** 할일 수정 요청 */
type updateTodoRequest = {
  body: updateTodoRequestBody;
  params?: updateTodoRequestParams;
  path: updateTodoRequestPath;
};

/** 할일 수정 응답 */
type updateTodoResponse = void;

type deleteTodoRequestPath = {
  todoId: string;
};

type deleteTodoRequestParams = {};

type deleteTodoRequestBody = {};

/** 할일 삭제 요청 */
type deleteTodoRequest = {
  body?: deleteTodoRequestBody;
  params?: deleteTodoRequestParams;
  path: deleteTodoRequestPath;
};

/** 할일 삭제 응답 */
type deleteTodoResponse = void;
