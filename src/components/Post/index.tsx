interface Props {
    author: string;
    post: string;
}

export function Post({author, post}: Props) {
    return(
    <>
        <h3>{author}</h3>
        <p>{post}</p>
    </>
    );
}