import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './style.module.css';
import { Avatar } from '../avatar';
import { useState } from 'react';


interface CommentProps {
  content: string
  onDeleteComment: (comment: any) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {


  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    // console.log('tentando deletar o comentário: ')
    onDeleteComment(content)
  }

  function handleChangeLikeCount() {
    setLikeCount(state => state + 1)
  }



  return (
    <div className={styles.comment}>
      <Avatar search="https://github.com/antoniojpsalves.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Antonio Alves</strong>
              <time title="17 de Julho às 22:23" dateTime="2023-07-17" >Certa de 1 hora atrás</time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleChangeLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}