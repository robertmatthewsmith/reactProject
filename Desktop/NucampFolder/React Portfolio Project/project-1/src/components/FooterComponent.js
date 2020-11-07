import { Component } from 'react';
import { FormFeedback, Label, Row, Input, Button } from 'reactstrap';



class Footer extends Component {
    constructor(props) {
        super(props);
        this.state =  {
        
            email: '',
            touched: {
                email: false
            }
        };

    }







    submitHandler = (event) => {
        event.preventDefault();
        alert("Thank you for subscribing " + this.state.email);
      }
      changeHandler = (event) => {
        this.setState({email: event.target.value});
      }

      /*validate(email) {

        const errors = {
            email: ''
        };
        const validEmail = () =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test();

        //if(this.setState.touched.email && !(validEmail)) {
            //errors.email = 'Please enter a valid email';
        //}
        //return errors;
     // }*/


      handleBlur = (field) => () => {
          this.setState({
              touch: {...this.state.touched, [field]: true}
          
          });
      }

    render() {

        //const errors = this.validate(this.state.email);

    return (
        <footer className="site-footer fixed-bottom">
           <div className="container">
               <div className="row">
                    <div className="col-6 text-center">
                        <a role="button" className="btn btn-link" href="tel:+18001234567"><i className="fa fa-phone" /> 1-800-1234567</a><br />
                        <a role="button" className="btn btn-link" href="info@petmatch.com"><i className="fa fa-envelope-o" /> info@petmatch.com</a>
                    </div>
                    <div className="col-6 m-r-1 text-center">
                        <form onSubmit={this.submitHandler}>
                                <label  htmlFor="email">Subscribe to our email list!</label> <br />
                                <input type="email" placeholder="     enter email here! " onChange={this.changeHandler} onBlur={this.handleBlur("email")}/>
                                <Button className="subBut" outline>Submit</Button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

}

export default Footer;