import React from 'react'
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react'
import styles from './login.module.css'
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
                        <Button fluid color='brown' size='large' >Login</Button>
                    </Segment>
                </Form>
                <Message>
                    Do you want to <Link to='/signup'> Create New Account</Link> ?
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default Login
