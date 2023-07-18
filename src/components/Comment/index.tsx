import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './style.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/antoniojpsalves.png" alt="Foto do perfil" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Antonio Alves</strong>
              <time title="17 de Julho às 22:23" dateTime="2023-07-17" >Certa de 1 hora atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom! parabéns 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}