interface Props {
    author: string;
    post: string;
}

import styles from './style.module.css';

export function Post({author, post}: Props) {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/antoniojpsalves.png" alt="Foto do perfil" />
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="15 de Dezembro às 18:14" dateTime="2022-11-15" >Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraaa</p>
                <p>Acabei de subir um novo projeto no meu portifólio. Comecei a estudar react no ignite!!!</p>
                <p>#novoprojeto  <a href="https://app.rocketseat.com.br/">#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário...'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    );
}