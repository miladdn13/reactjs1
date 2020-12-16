import React from 'react';
import FormInput   from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }
    handleSumbit = event => {
        event.preventDefualt();
        this.setState({ email: '', password: '' })
      
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
        
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I aleady have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSumbit}>
                    <FormInput name='email' label='email' type='email' handleChange={this.handleChange} value={this.state.email} required />
                    
                    <FormInput name='password' label='password' type='password' value={this.state.password} handleChange={this.handleChange} required />
                    
                    <CustomButton type='submit' value='Submit Form'>SignIn </CustomButton >
                </form>

            </div>
        )
    }
}

export default SignIn;