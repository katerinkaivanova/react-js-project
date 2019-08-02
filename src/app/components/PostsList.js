import React, {Component} from 'react';
import axios from 'axios';

import PostBody from "./PostBody";

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        if (!this.state.posts) {
            return null
        }

        const posts = this.state.posts.map(post => {
            return <PostBody key={post.id} {...post}/>
        });

        return (
            <div>
                <h1>Посты</h1>
                {posts}
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
            this.setState({posts: response.data});
        });
    }
}

export default PostsList;