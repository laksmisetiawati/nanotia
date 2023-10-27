import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const PostsPage = () => {
    const { slug } = useParams();
    // console.log(slug);
    const [detailPost, SetPost] = useState({});
    const [countView, setCount] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`https://www.techinasia.com/wp-json/techinasia/2.0/posts/${slug}`);
                SetPost(data);
                console.log(data.posts);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();

        // session for limit article
        var pageView = sessionStorage.getItem("pageView");
        if (pageView == null) {
            pageView = 1;
        } else {
            pageView = Number(pageView) + 1;
        }
        sessionStorage.setItem("pageView", pageView);
        setCount(pageView);
    }, []);
    

    // if(countView <= 5) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {detailPost.posts?.map(post => (
                            <div className="row post-detail">
                                
                                <div className="categories">
                                    {/* {post.categories?.map(category => (
                                        <span>
                                            { category.name } 
                                        </span> 
                                    ))} */}
                                </div>
                                
                                <div className="author">
                                    <img src={ post.author.avatar_url } />
                                    <span>{ post.author.display_name }</span> · 
                                    <span>{ post.read_time } min read</span>
                                </div>

                                <h2>{ post.title }</h2>

                                <picture>
                                    <img src={ post.featured_image.source } />
                                </picture>

                                <article className="d-block">
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                </article>

                                <div className="more-article">
                                    <Link to={ `/` } className="default-button">
                                        More Articles
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    // } else {
    //     return (
    //         <div className="container">
    //             <div>
    //                 {/* <div>Page View Count is:</div>
    //                 {countView} */}
    //             </div>
    //         </div>
    //     );
    // }
};

export default PostsPage;