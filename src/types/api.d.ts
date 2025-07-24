export interface User {
  id: number;
  name: string;
  email: string;
}

export interface GetUserResponse {
  user: User;
}
