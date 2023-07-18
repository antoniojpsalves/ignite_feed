import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Antonio Alves" post="" />
          <Post author="Antonio Alves" post="" />
        </main>
      </div>
    </>
  )
}

export default App;
