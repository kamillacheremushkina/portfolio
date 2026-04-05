import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import Home from "./pages/Home";
import Cases from "./pages/Cases";
import treeImage from './assets/tree.svg'
import './App.css'

function Header() {
  const location = useLocation();

  return (
    <header className="global-header">
      <div className="global-meta">
        <p className="meta-name">Черемушкина Камилла</p>
        <p className="meta-role">Junior UX-researcher</p>
        <a href="https://t.me/kindaoblomov" target="_blank" rel="noreferrer">tg: @kindaoblomov</a>
        <a href="/resume_ru.pdf" target="_blank" rel="noreferrer">Резюме</a>
      </div>

      <nav className="global-nav">
        <Link to="/" className={location.pathname === '/' ? 'is-active' : ''}>Обо мне</Link>
        <Link to="/cases" className={location.pathname === '/cases' ? 'is-active' : ''}>Кейсы</Link>
        <a href="/#research">Исследования</a>
        <a href="/#creative">Творческое портфолио</a>
      </nav>
    </header>
  )
}

function AppLayout() {
  const location = useLocation()

  const pageClass =
    location.pathname === '/cases'
      ? 'page-wrapper page-wrapper--cases'
      : 'page-wrapper page-wrapper--home'

  return (
    <main className={pageClass}>
      <Header />

      <div className="global-tree-layer">
        <img src={treeImage} alt="Дерево" className="global-tree" />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<Cases />} />
      </Routes>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App