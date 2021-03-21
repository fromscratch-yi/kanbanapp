import store from '../store'

export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // マッチしたルートにおいて、メタフィールドにrequiresAuthが付与されていれば
    // 絵ログインした際に付与されるトークンがあるかどうかチェックする
    // このアプリでは簡略化のため auth.token があるかどうかのみで
    // ログイン済みかどうかチェックしているが、本来なら付与された認証トークンをバックエンドAPI経由で検証すべき
    if (!store.state.auth || !store.state.auth.token) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
}
