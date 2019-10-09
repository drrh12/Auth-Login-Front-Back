import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import Header from '../components/Header'

export default class Login extends Component {
    
    constructor(){
        super();
        this.state = {
            message: 'Invalid data'
        }
    }


     signIn = () => {
        const data = { email: this.email, password: this.password };
        console.log(data)
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'no-cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        };
        console.log(requestInfo)
        fetch('http://localhost:5000/api/user/login', requestInfo)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        })
        .then(token => {
            localStorage.setItem('token', token);
        })
        .catch(e => {
            this.setState({ message: e.message });
        }); 
    }

    render(){
        return(
            <div className="col-md-6">

                <Header title="ReactJS Login" />
                <hr  className="my-3"/>
                {
                    this.state.message !== ''? (
                        <Alert color="danger" className="text-center"> {this.state.message} </Alert>
                    ) : ''
                }
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" onChange={e => this.email = e.target.value} placeholder="Inform the email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Senha</Label>
                        <Input type="password" name="password" id="password" onChange={e => this.password = e.target.value} placeholder="Inform the password" />
                    </FormGroup>
                    <Button color="primary" block onClick={this.signIn}> Entrar </Button>
                </Form>
            </div>
        )
    }
}