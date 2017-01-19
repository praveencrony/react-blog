import React from 'react';
import { Link } from 'react-router';

class BlogDetail extends React.Component {

    render(props){

        const blogs     = this.props.route.data;
        const id_blog   = this.props.params.id;
        let blogg;

          blogs.map(blog => {

            if(blog.id == id_blog) {

                blogg = blog;
            }
        });

        return (
            <div className="col-md-8">
            <h2>{blogg.title}</h2>
            <p>{blogg.content}</p>

            </div>
        );
    }
}

export default BlogDetail;
