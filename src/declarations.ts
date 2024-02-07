/** @format */

export interface TUser {
  id: string;
  username: string;
  password: string;
}

export interface TRoom {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  private: boolean;
  name: string;
  messages: Array<TMessage>;
  users: Array<{
    idUser: TUser['id'];
    permission: 'admin' | 'moderator' | 'user';
  }>;
}

export interface TMessage {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  idUser: TUser['id'];
  idRoom: TRoom['id'];
  ref: TMessage['id'];
}
