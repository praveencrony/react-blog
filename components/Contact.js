import React from 'react';

class Contact extends React.Component {

        constructor(props)
        {
            super(props);

            this.state = {
                fname: '',
                email: '',
                msg: '',
                error: '',
                success: ''
            };

            this.onChange       = this.onChange.bind(this);
            this.handleSubmit   = this.handleSubmit.bind(this);
        }

        onChange(e) {
            this.setState({[e.target.name]: e.target.value})
        }

		handleSubmit(e)
		{

			e.preventDefault();

            var name    = this.state.fname
            var email   = this.state.email
            var msg     = this.state.msg

            if(name == '')
                this.setState({error: 'Please Enter Name'});

            else if(email == '')
                this.setState({error: 'Please Enter Email'});

            else if(msg == '')
                this.setState({error: 'Please Enter Message'});
            else{
                 this.setState({
                     fname: '',
                     email: '',
                     msg: '',
                     error: '',
                     success:'Mail Sent we will Contact Soon'
                    });
            }

    }
   render(props) {
      return (
            <div className="col-md-8">
            <div><h1>{this.props.route.page}</h1>
			<div className="content">

            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" name="fname" value={this.state.fname} className="form-control" id="fname" onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={this.state.email} className="form-control" id="email" onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label>Message:</label>
                <textarea type="text" value={this.state.msg} name="msg" cols="40" rows="6" className="form-control" id="msg" onChange={this.onChange}></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>

            {this.state.error != '' ? (
                <div className="alert alert-danger">
                     {this.state.error}
                </div>
            ) : null}

            {this.state.success != '' ? (
                <div className="alert alert-success">
                    {this.state.success}
                </div>
            ) : null}


            </form>

			</div>
			</div>
            </div>
      );
   }


}

export default Contact;
