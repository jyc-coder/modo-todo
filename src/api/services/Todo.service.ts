import { AxiosInstance } from "axios";

export class TodoService {
  constructor(private _ajax: AxiosInstance) {}

  /** 할일 목록 조회 */
  async getTodoList(req: getTodosRequest) {
    const { params, body } = req;
    const { data } = await this._ajax.get<getTodosResponse>(`/`, {
      params,
      data: body,
    });

    return data;
  }

  /** 할일 상세 조회 */
  async getTodoDetail(req: getTodoDetailRequest) {
    const { path } = req;
    const { data } = await this._ajax.get<getTodoDetailResponse>(`/eq.${path}`);

    return data;
  }

  /** 할일 목록 추가 */
  async createTodoList(req: createTodoRequest) {
    const { params, body } = req;
    const { data } = await this._ajax.post<createTodoResponse>(`/`, body, {
      params,
    });

    return data;
  }

  /** 할일 목록 수정 */
  async updateTodoList(req: updateTodoRequest) {
    const { path, body } = req;
    const { data } = await this._ajax.patch<updateTodoResponse>(
      `/eq.${path}`,
      body
    );

    return data;
  }

  /** 할일 목록 삭제 */
  async deleteTodoList(req: deleteTodoRequest) {
    const { params } = req;
    const { data } = await this._ajax.delete<deleteTodoResponse>(`/${params}`);

    return data;
  }
}
