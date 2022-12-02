import { User } from './userModel';

export interface LoginTokenModel{
  "accessToken": string;
  "user": User
}