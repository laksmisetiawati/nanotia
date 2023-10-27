import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PostsPage extends Component {
    state = {
        posts: []
    }
  
    componentDidMount() {
        axios.get("https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1")
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
        })
    }

    render() {
        const statePosts = this.state.posts;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Latest Stories</h3>
                        
                        {statePosts.posts?.map(post => (
                            <article className="row post-home">
                                <div className="col-4">
                                    <Link to={ `/${post.slug}` } className="d-block">
                                        <picture>
                                            <img src={ post.featured_image.source } />
                                        </picture>
                                    </Link>
                                </div>
                                <div className="col-8 short-article">
                                    <Link to={ "/"+post.slug }>
                                        <h4>{ post.title }</h4>
                                    </Link>
                                    <div>{ post.excerpt }</div>
                                    <div className="author">
                                        <img src={ post.author.avatar_url } />
                                        <span>{ post.author.display_name }</span> · 
                                        <span>{ post.read_time } min read</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PostsPage;