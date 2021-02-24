import React, { useEffect } from 'react'
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react'
import styles from './signup.module.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SignUp = () => {

    const {register, errors, handleSubmit , setValue} = useForm();

    useEffect(() => {
        register({name : "username" }, {required:true});
        register({name : "email" }, {required:true});
        register({name : "password" } ,  {required:true , minLength:6});
        
   }, [])

    const onSubmit = (data , e) => {
        console.log(data)

    }

    return (
        <Grid textAlign='center' verticalAlign='middle' className={styles.container} >
            <Grid.Column style={{ maxWidth: 450 }} >
                <h1 className={styles.formHeader}> Chatify </h1>
                <Form
                    size='large'
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Segment>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            name='username'
                            onChange={(event , {name,value}) => {
                                setValue(name,value);
                            }}
                            error = {errors.username ? true : false}
                            placeholder='Username'
                            type='text'
                        />
                        <Form.Input
                            fluid icon='mail'
                            iconPosition='left'
                            name='email'
                            onChange={(event , {name,value}) => {
                                setValue(name,value);
                            }}
                            error = {errors.email ? true : false}
                            placeholder='Email Adress'
                            type='email'
                        />
                        <Form.Input
                            fluid icon='lock'
                            iconPosition='left'
                            name='password'
                            onChange={(event , {name,value}) => {
                                setValue(name,value);
                            }}
                            error = {errors.password ? true : false}
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

export default SignUp
