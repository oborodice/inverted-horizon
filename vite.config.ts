import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pagesのプロジェクトページ(https://oborodice.github.io/inverted-horizon/)配下で
  // 公開するため、アセットの参照パスをリポジトリ名のサブパスに合わせる
  base: '/inverted-horizon/',
})
