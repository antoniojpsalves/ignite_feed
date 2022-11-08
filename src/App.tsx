import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="aasdasd" post = "asdasd"/>
          <Post author='asdasdasda ' post='asdadasd' />
        </main>
      </div>
    </>
  )
}

export default App;
