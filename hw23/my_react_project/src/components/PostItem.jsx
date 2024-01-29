const PostItem = (props) => {
    console.log(props);
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title} </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
        </div>
    );
}

export default PostItem;
/*export default function List () {
    return(
        <div>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    );
}
*/