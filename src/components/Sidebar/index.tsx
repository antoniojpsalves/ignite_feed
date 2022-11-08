import styles from './styles.module.css';

export function Sidebar() { 
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" className={styles.cover} />

            <div className={styles.profile}>
                <strong>Antonio Alves</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    );
}