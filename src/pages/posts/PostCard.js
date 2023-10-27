import React from "react";
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
    return (
        <article key={ data.id } className="post-home">
            <div className="row">                
                <div className="col-4">
                    <Link to={ `/${ data.slug }` } className="d-block">
                        <picture>
                            <img src={ data.featured_image.source } />
                        </picture>
                    </Link>
                </div>
                <div className="col-8 short-article">
                    <Link to={ "/"+data.slug }>
                        <h4>{ data.title }</h4>
                    </Link>
                    <div>{ data.excerpt }</div>
                    <div className="author">
                        <img src={ data.author.avatar_url } />
                        <span>{ data.author.display_name }</span> · 
                        <span>{ data.read_time } min read</span>
                    </div>
                </div>
            </div>
        </article>
    )

    // return (
    //     <div className='col-lg-4 col-md-6'>
    //         <div className='card'>
    //             <img src={data.images[0]} className='card-img-top' alt='Product Image' />
    //             <div className='card-body'>
    //                 <h5 className='card-title'>{data.title}</h5>
    //                 <p className='card-text'>{data.description}</p>
    //                 <p className='card-text price'>Rs. {data.price}</p>
    //                 <a href='#' className='btn btn-primary'>
    //                 Add to Cart
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default ProductCard;