import NavBar from "..//./components/header/nav.js"
import HeroSection from "../components/heroContent/heroSection.js"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar/>
      <HeroSection/>
    </div>
  )
}
