import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {Username: '', Password: '', isLogedin: false}
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = e.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onLogin = (e) => {
        e.preventDefault();
        var {Username, Password} = this.state;
        if(Username === 'admin' && Password === 'admin'){
            this.setState({isLogedin: true});
        }
        // console.log(this.state);
    }
    render() {
        var {Username, Password, isLogedin} = this.state;
         
        if(isLogedin){
            return <Redirect to={{
                pathname: 'products',
                state: {
                    from: this.props.location
                }
            }}/> 
        } else {
            console.log('wrong username or password!')
        }
        console.log(this.props.location);
        return (
            
            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    
                    <form onSubmit={this.onLogin}>
                        <legend>Đăng Nhập</legend>
                    
                        <div className="form-group">
                            <label>Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Input field" 
                                name='Username'
                                value={Username}
                                onChange={this.onChange}
                                />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Input field" 
                                name='Password'
                                value={Password}
                                onChange={this.onChange}
                                />
                        </div>
                    
                        
                    
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    
                </div>
            </div>
            
        );
    }
}

export default Login;