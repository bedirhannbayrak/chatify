import React from 'react'
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react'
import styles from './signup.module.css'
import {Link} from 'react-router-dom'
const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Grid textAlign='center' verticalAlign='middle' className={styles.container} >
            <Grid.Column style={{ maxWidth: 450 }} >
                <h1 className={styles.formHeader}> Chatify </h1>
                <Form
                    size='large'
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <Segment>
                    <Form.Input 
                        fluid 
                        icon='user' 
                        iconPosition='left' 
                        name='username' 
                        placeholder='Username'
                        type='text'
                        />
                        <Form.Input 
                        fluid icon='mail' 
                        iconPosition='left' 
                        name='email' 
                        placeholder='Email Adress'
                        type='email'
                        />
                        <Form.Input 
                        fluid icon='lock' 
                        iconPosition='left' 
                        name='password' 
                        placeholder='Password'
                        type='password' 
                        />
                        <Button fluid color='brown' size='large' >Sign Up</Button>
                    </Segment>
                </Form>
                <Message>
                    Do you have already an account <Link to='/Login'> Login </Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default Login
