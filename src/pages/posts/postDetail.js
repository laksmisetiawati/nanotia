import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import {Helmet} from "react-helmet";

const PostDetailPage = () => {
    const { slug } = useParams();
    const [detailPost, SetPost] = useState({});
    const [countView, setCount] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`https://www.techinasia.com/wp-json/techinasia/2.0/posts/${slug}`);
                SetPost(data);
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

    
    if(countView <= 5) {

        return (
            <div className="container">
                <Helmet>
                    <title>{`${detailPost.posts?.[0].title}`}</title>
                    <meta charset="utf-8" />
                    <meta name="description" content={`${detailPost.posts?.[0].seo.description}`} />
                    {/* <meta name="keywords" content={detailPost.posts?.[0].tags.map(tags => ( { tags.name } ))} /> */}
                    <meta name="Generator" content="Drupal 8 (https://www.drupal.org)" />
                    <meta name="MobileOptimized" content="width" />
                    <meta name="HandheldFriendly" content="true" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:image" content={`${detailPost.posts?.[0].featured_image.attachment_meta.sizes.medium}`} />
                    <meta name="twitter:title" content={`${detailPost.posts?.[0].seo.title}`} />
                    <meta name="twitter:description" content={`${detailPost.posts?.[0].seo.description}`} />
                    <meta property="og:site_name" content={`${detailPost.posts?.[0].seo.title}`} />
                    <meta property="og:url" content={`${detailPost.posts?.[0].slug}`} />
                    <meta property="og:title" content={`${detailPost.posts?.[0].seo.title}`} />
                    <meta property="og:description" content={`${detailPost.posts?.[0].seo.description}`} />
                    <meta property="og:updated_time" content={`${detailPost.posts?.[0].modified_gmt}`} />
                    <meta property="og:image" content={`${detailPost.posts?.[0].featured_image.attachment_meta.sizes.medium}`} />
                    <meta property="og:image:type" content="image/jpeg" />
                    <meta property="og:image:width" content="1280" />
                    <meta property="og:image:height" content="639" />
                    <meta name="article:section" content={`${detailPost.posts?.[0].seo.description}`} />
                    <meta name="article:published_time" content={`${detailPost.posts?.[0].date_gmt}`} />
                    <meta name="article:modified_time" content={`${detailPost.posts?.[0].modified_gmt}`} />
                </Helmet>

                <div className="row">
                    <div className="col-12">
                        {detailPost.posts?.map(post => (
                            <div key={ post.id } className="row post-detail">                                
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

    } else {

        return (
            <div className="container">
                <Helmet>
                    <title>NanoTIA - Connecting Asia's startup ecosystem</title>
                    <meta charset="utf-8" />
                    <meta name="description" content="NanoTIA - Connecting Asia's startup ecosystem" />
                </Helmet>

                <div>
                    {/* <div>Page View Count is:</div>
                    {countView} */}
                </div>
            </div>
        );

    }
};

export default PostDetailPage;