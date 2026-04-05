import './App.css'
import treeImage from './assets/tree.svg'

function App() {
  return (
    <main className="page">
      <section className="hero" id="about">
        <div className="hero__content">
          <div className="hero__top">
            <div className="hero__meta">
              <p className="meta-name">Черемушкина Камилла</p>
              <p className="meta-role">Junior UX-researcher</p>

              <a
                href="https://t.me/kindaoblomov"
                target="_blank"
                rel="noreferrer"
              >
                tg: @kindaoblomov
              </a>

              <a
                href="/public/resume_ru.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Резюме
              </a>
            </div>

            <nav className="hero__nav">
              <a href="#about" className="is-active">Обо мне</a>
              <a href="#cases">Кейсы</a>
              <a href="#research">Исследования</a>
              <a href="#creative">Творческое портфолио</a>
            </nav>
          </div>

          <div className="hero__text">
            <h1>я   —  камилла черемушкина</h1>
            <p className="hero__description">
              исследую, как люди воспринимают интерфейсы,
              принимают решения и действуют в условиях
              неопределенности
            </p>
          </div>
        </div>

        {/* Визуальная часть (фон) */}
        <div className="hero__visual">
          <img
            src={treeImage}
            alt="Исследовательское дерево"
            className="hero__tree"
          />
        </div>
      </section>
    </main>
  )
}

export default App