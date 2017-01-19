import React from 'react';
import { Link } from 'react-router';

class Blog extends React.Component {
   constructor(props){

        super(props);

        this.state = {

            blogs: []
        };
    }

    componentDidMount(){
        // Static data
        const data = [
            {
                id: 1,
                title: `AngularJS 2 reaches release candidate`,
                content: `Google engineer Brad Green, who has worked on the project, said Angular 2 will have support for offline compilation.
                "This improves the first-time render performance of Angular 2 by about 2x and allows us to drop much of our framework size
                when you build for production," he said`,
            },
            {
                id: 2,
                title: `Understanding AngularJS $q service and promises`,
                content: `What is a promise?A promise in the Javascript and AngularJS world is an assurance that we will get a result from an
                action at some point in the future, let’s see the two possible results of a promise:A promise is said to be fulfilled when we
                get a result from that action (meaning that we get a response, regardless of whether the response is good or bad)A promise
                is said to be rejected when we don’t get a response(for instance if we were retrieving some data from an API and for some
                reason we never got a response because the API endpoint was down etc.)Why do we need promises?We need promises because
                we need to make decisions based on the possible results of our call (or the possibility that we don’t get a response from
                that call at all), probably an example will better help describe this:Our program contacts an external API to get the list
                of clientswhile the response is received the program works on something elseOnce the response is received (if received) the
                program displays the client info on the screenIf the response was not received (the API was down) then we display a
                message to the end user.Here is a really good example of what promises are and it’s explained as cartoonUsing Angular’s
                $q service to deal with promisesAngular JS provides a service called $q which allows you to work with asynchronous
                functions and user their return values when the execution has been completed, and what its really cool about it is
                that it will let you write your custom promises as well (so you can resolve or reject a promise when appropriate)`,
            },
            {
                id: 3,
                title: 'React is extremely efficient',
                content: 'React creates its own virtual DOM where your components actually live. This approach gives you enormous flexibility and amazing gains in performance because React calculates what changes need to be made in the DOM beforehand and updates the DOM tree accordingly. This way, React avoids costly DOM operations and makes updates in a very efficient manner',
            },
            {
                id: 4,
                title: 'React awesome for SEO',
                content: `One of the biggest issues with JavaScript frameworks is that they are not exactly search engine friendly. Although there have been some improvements in this area, search engines generally have trouble reading JavaScript-heavy applications.React stands out from the crowd because you can run React on the server, and the virtual DOM will be rendered and returned to the browser as a regular web page. No need for PhantomJS and other tricks!`,
            },
              {
                id: 5,
                title: `AngularJS 2 reaches release candidate`,
                content: `Google engineer Brad Green, who has worked on the project, said Angular 2 will have support for offline compilation.
                "This improves the first-time render performance of Angular 2 by about 2x and allows us to drop much of our framework size
                when you build for production," he said`,
            },
            {
                id: 6,
                title: `Understanding AngularJS $q service and promises`,
                content: `What is a promise?A promise in the Javascript and AngularJS world is an assurance that we will get a result from an
                action at some point in the future, let’s see the two possible results of a promise:A promise is said to be fulfilled when we
                get a result from that action (meaning that we get a response, regardless of whether the response is good or bad)A promise
                is said to be rejected when we don’t get a response(for instance if we were retrieving some data from an API and for some
                reason we never got a response because the API endpoint was down etc.)Why do we need promises?We need promises because
                we need to make decisions based on the possible results of our call (or the possibility that we don’t get a response from
                that call at all), probably an example will better help describe this:Our program contacts an external API to get the list
                of clientswhile the response is received the program works on something elseOnce the response is received (if received) the
                program displays the client info on the screenIf the response was not received (the API was down) then we display a
                message to the end user.Here is a really good example of what promises are and it’s explained as cartoonUsing Angular’s
                $q service to deal with promisesAngular JS provides a service called $q which allows you to work with asynchronous
                functions and user their return values when the execution has been completed, and what its really cool about it is
                that it will let you write your custom promises as well (so you can resolve or reject a promise when appropriate)`,
            },
            {
                id: 7,
                title: 'React is extremely efficient',
                content: 'React creates its own virtual DOM where your components actually live. This approach gives you enormous flexibility and amazing gains in performance because React calculates what changes need to be made in the DOM beforehand and updates the DOM tree accordingly. This way, React avoids costly DOM operations and makes updates in a very efficient manner',
            },
            {
                id: 8,
                title: 'React awesome for SEO',
                content: `One of the biggest issues with JavaScript frameworks is that they are not exactly search engine friendly. Although there have been some improvements in this area, search engines generally have trouble reading JavaScript-heavy applications.React stands out from the crowd because you can run React on the server, and the virtual DOM will be rendered and returned to the browser as a regular web page. No need for PhantomJS and other tricks!`,
            }


        ];
        // Update state
        this.setState({blogs: data});
    }

    render(props){
        // Map through blogs and return linked blogs
        const blogNode = this.state.blogs.map((blog) => {

            var blog_content = blog.content;

            blog_content = blog_content.substring(0,500);
            return (


                <li className="blog" key={blog.id}>
	                <h2>
	                    <Link to={"blog/"+blog.id}>{blog.title}</Link>
                    </h2>
	                <p>{blog_content}</p>
                </li>
            )
        });
        return (

                <div className="col-md-8">
                    {blogNode}

                </div>
        );
    }
}

export default Blog;
