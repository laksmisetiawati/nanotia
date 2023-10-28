import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./../../components/Loader";
import { connect } from 'react-redux'
import PostCard from "./PostCard";

const PostsPage = () => {    
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(2);

    useEffect(() => {
        axios.get("https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1")
            .then((res) => {
                setItems(res.data.posts);
                // console.log(res.data.posts);
            })
            .catch((err) => console.log(err));
    }, []);

    const fetchMoreData = () => {
        axios.get(`https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=${index}`)
            .then((res) => {
                setItems((prevItems) => [...prevItems, ...res.data.posts]);
                res.data.posts.length > 0 ? setHasMore(true) : setHasMore(false);
                // setHasMore(true);
                // console.log(res.data.posts.length)
                // console.log(res.data.posts);
            })
            .catch((err) => console.log(err));

        setIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Latest Stories</h3>
                    </div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={ items?.length }
                next={ fetchMoreData }
                hasMore={ hasMore }
                loader={ <Loader /> }
            >
                <div className='container'>
                    <div className='row'>
                        {items && items?.map((item) => <PostCard data={item} key={item.id} />)}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );

    // const [posts, SetPost] = useState({});

    // useEffect(() => {
    //     const fetch = async () => {
    //         try {
    //             const { data } = await axios.get(`https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1`);
    //             SetPost(data);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };
    //     fetch();
    // }, []);


    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-12">
    //                 <h3>Latest Stories</h3>
                    
    //                 {posts.posts?.map(post => (
    //                     <article key={ post.id } className="row post-home">
    //                         <div className="col-4">
    //                             <Link to={ `/${ post.slug }` } className="d-block">
    //                                 <picture>
    //                                     <img src={ post.featured_image.source } />
    //                                 </picture>
    //                             </Link>
    //                         </div>
    //                         <div className="col-8 short-article">
    //                             <Link to={ "/"+post.slug }>
    //                                 <h4>{ post.title }</h4>
    //                             </Link>
    //                             <div>{ post.excerpt }</div>
    //                             <div className="author">
    //                                 <img src={ post.author.avatar_url } />
    //                                 <span>{ post.author.display_name }</span> · 
    //                                 <span>{ post.read_time } min read</span>
    //                             </div>
    //                         </div>
    //                     </article>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default PostsPage;