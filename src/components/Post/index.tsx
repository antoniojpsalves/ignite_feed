import { ChangeEvent, FormEvent, InvalidEvent } from 'react';
import { Comment } from '../Comment';
import { Avatar } from '../avatar';
import styles from './style.module.css';
import { format, formatDistanceToNow, getDate, getTime } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useState } from 'react';

interface Props {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: { type: string; content: string; }[];
  publishedAt: Date;
}


interface ContentProps {
  type: string;
  content: string[];
}


export function Post({ author, content, publishedAt }: Props) {

  const [comments, setComments] = useState([
    {
      id: 1,
      comment: 'post muito legal !'
    },
    {
      id: 2,
      comment: 'caraca, maneiro !'
    }
  ])


  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {

    event.preventDefault()

    const lastComment = comments.reduce((prev, current) => {
      return prev.id > current.id ? prev : current;
    })

    // console.log(lastComment)

    const newComment = {
      id: lastComment.id + 1,
      comment: newCommentText
    }

    // console.log(event.target.commentArea.value);
    setComments([...comments, newComment])
    setNewCommentText('')
  }

  function deleteComment(commentToDelet: string) {

    const commentsWithOutDeletedOne = comments.filter(comment => comment.comment !== commentToDelet)
    setComments(commentsWithOutDeletedOne);

  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    //Preciso redefinir como vazio, para que ele não execute como erro, ao modificar o estado.
    event.target.setCustomValidity("");
    setNewCommentText(event?.target?.value)
  }

  //Método que usarei para trocar a mensagem default
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const { avatarUrl, name, role } = author


  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar search={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {

            const temp_id = Math.random();

            // console.log(temp_id);
            if (line.type === 'paragraph') {
              return <p key={temp_id}> {line.content} </p>
            }
            return <p><a href={line.content} key={temp_id} target='_blank'>{line.content}</a></p>
          })
        }
      </div>

      <form onSubmit={event => handleCreateNewComment(event)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="commentArea"
          placeholder='Deixe um comentário...'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comentario => (<Comment key={comentario.id} content={comentario.comment} onDeleteComment={deleteComment} />))
        }
      </div>
    </article>
  );
}