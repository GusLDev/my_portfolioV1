import styles from './page.module.css'
import Header from './components/Header'
import HomeSection from './components/Home'
import Work from './components/Work'
import Skills from './components/Skills'
export default function Home() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main className={styles.container}>
        <HomeSection/>
        <Work/>
        <Skills/>
      </main>
    </div>
  )
}