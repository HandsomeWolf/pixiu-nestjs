export interface JwtPayloadUser extends Request {
  user: {
    userId: number;
    username: string;
  };
}
