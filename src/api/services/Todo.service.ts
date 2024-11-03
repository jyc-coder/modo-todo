import { AxiosInstance } from "axios";
import { pathToUrl } from "../../utils/util";

const TODO_ROUTES = {
  GET_TODO: "/todo",
  GET_TODO_DETAILS: "/todo/:todoId",
  CREATE_TODO: "/todo",
  UPDATE_TODO: "/todo/:todoId",
  DELETE_TODO: "/todo/:todoId",
} as const;

export class TodoService {
  constructor(private _ajax: AxiosInstance) {}

  /** 할일 목록 조회 */
  async getTodoList(req: getTodosRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getTodosResponse>(
      pathToUrl(TODO_ROUTES.GET_TODO, path),
      {
        params,
        data: body,
      }
    );

    return data;
  }

  /** 할일 상세 조회 */
  async getTodoDetail(req: getTodoDetailRequest) {
    const { path } = req;
    const supaPath = {
      todoId: `eq.${path.todoId}`,
    };

    const { data } = await this._ajax.get<getTodoDetailResponse>(
      pathToUrl(TODO_ROUTES.GET_TODO_DETAILS, supaPath)
    );

    return data;
  }

  /** 할일 목록 추가 */
  async createTodoList(req: createTodoRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.post<createTodoResponse>(
      pathToUrl(TODO_ROUTES.CREATE_TODO, path),
      body,
      {
        params,
      }
    );

    return data;
  }

  /** 할일 목록 수정 */
  async updateTodoList(req: updateTodoRequest) {
    const { path, body } = req;
    const supaPath = {
      todoId: `eq.${path.todoId}`,
    };
    const { data } = await this._ajax.patch<updateTodoResponse>(
      pathToUrl(TODO_ROUTES.UPDATE_TODO, supaPath),
      body
    );

    return data;
  }

  /** 할일 목록 삭제 */
  async deleteTodoList(req: deleteTodoRequest) {
    const { path, params, body } = req;
    const supaPath = {
      todoId: `eq.${path.todoId}`,
    };
    const { data } = await this._ajax.delete<deleteTodoResponse>(
      pathToUrl(TODO_ROUTES.DELETE_TODO, supaPath),
      {
        params,
        data: body,
      }
    );

    return data;
  }
}
