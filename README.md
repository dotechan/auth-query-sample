## 概要

エクリパラメータにtokenが付与されていた場合は認証済と判定するサンプル

## 確認方法

### 未認証

localhost:8080/
にアクセスする

### 認証済

localhost:8080/token=abc.def.ghi
にアクセスする

## 責務

| ファイル名 | 説明 |
| ---- | ---- |
| AuthContext.ts | 認証情報（ユーザ名）を保持するReactのContext |
| AuthProvider.tsx | 認証情報を子コンポーネントにレンダープロップとして提供するコンポーネント。認証状態の判定、認証状態の更新行っている（認証処理を隠蔽） |
| useAuth.ts | AuthContextから取得した認証情報を提供するカスタムフック |
| AuthContents.tsx | 認証状態によってレンダリングするコンポーネントを切り替えるコンポーネント |

## 流れ

1. クエリパラメータにtokenが含まれている場合、AuthProviderの副作用フックによってAuthProviderで宣言した認証状態のstateを更新する
1. 認証状態のstateを参照しているAuthContextが更新される
1. useAuthをとおしてAuthContextを参照しているAntuContentsが再度レンダリングされる

## 参考

https://usehooks.com/useAuth/
