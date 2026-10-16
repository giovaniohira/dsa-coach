import { TitleBar } from './TitleBar'

interface Props {
  error: string | null
  onLogin: () => void
}

export function LoginScreen({ error, onLogin }: Props) {
  return (
    <div className="screen screen-chrome">
      <TitleBar minimal>
        <div className="titlebar-brand">
          <div className="brand-mark">DC</div>
          <span className="brand-name">DSA Coach</span>
        </div>
      </TitleBar>
      <div className="screen-body center">
        <div className="login-card">
          <div className="brand-mark" style={{ margin: '0 auto 16px' }}>DC</div>
          <h1>DSA Coach</h1>
          <p>Coach pessoal para preparação em entrevistas técnicas.</p>
          <p className="muted">Faça login com sua conta LeetCode para começar.</p>
          {error && <p className="error">{error}</p>}
          <button className="btn btn-submit wide" onClick={onLogin}>
            Entrar com LeetCode
          </button>
        </div>
      </div>
    </div>
  )
}
