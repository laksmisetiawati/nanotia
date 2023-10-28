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
};

export default ProductCard;