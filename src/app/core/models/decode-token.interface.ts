export interface DecodeToken {
  userData: {
    id: string;
    username: string;
    role: string;
  };
  iat: number;
  exp: number;
}
