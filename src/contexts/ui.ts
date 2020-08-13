// createApplicationInitialStateの獲得及変化させるために必要なプロパティやメソッドをcontextに登録させる
import React from 'react';

export enum Status {
  LOADING = 'loading', // アプリ起動時のロード処理中
  FIRST_OPEN = 'firstOpen', // 初期起動時
  UN_AUTHORIZED = 'unAuthorized', // 初期起動後で認証が住んでない状態
  AUTHORIZED = 'authorized', // 初期起動後で認証が住んでいる状態
}

export function createApplicationInitalState(): Status {
  return Status.LOADING;
}

export const Context = React.createContext({
  applicationState: createApplicationInitalState(),
  setApplicationState: (_: Status) => {},
});
