import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/antoniojpsalves.png",
      name: "Antonio Alves",
      role: "Software Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa' },
      { type: 'paragraph', content: 'Acabei de subir um novo projeto no meu portifólio. Comecei a estudar react no ignite!!!' },
      { type: 'link', content: 'https://github.com/antoniojpsalves/ignite_feed' },
    ],
    publishedAt: new Date('2023-07-27 21:13:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/antoniojpsalves.png",
      name: "Antonio Alves",
      role: "Software Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa' },
      { type: 'paragraph', content: 'Acabei de subir um novo projeto no meu portifólio. Comecei a estudar react no ignite!!!' },
      { type: 'link', content: 'https://github.com/antoniojpsalves/ignite_feed' },
    ],
    publishedAt: new Date('2023-07-25 20:00:00'),
  },
]


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {

              console.log(post.content)
              return (<Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />)
            })
          }
        </main>
      </div>
    </>
  )
}

export default App;
