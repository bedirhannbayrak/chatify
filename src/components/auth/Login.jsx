import React, { useState, useEffect } from 'react'
import { useFirebase } from "react-redux-firebase";
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react'
import styles from './login.module.css'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Login = () => {

    const firebase = useFirebase();
    const [fbErrors, setFbErrors] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const {register, errors, handleSubmit , setValue} = useForm();

    useEffect(() => {
         register({name : "email" }, {required:true});
         register({name : "password" } ,  {required:true , minLength:6});
         register({name : "email" }, {required:true});
    }, [])

    const onSubmit = ({email,password}, e) => {
        setSubmitting(true);
        setFbErrors([]);

        firebase.login({
            email,
            password
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            setFbErrors([{message:error.message}])
        })
        .finally(() =>{
            setSubmitting(false);
        })
    }

    const displayErrors = () => (
        fbErrors.map((error, index) => <p key={index} >{error.message}</p>)
    )

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
                        <Button fluid color='brown' size='large' disabled={submitting} >Login</Button>
                    </Segment>
                </Form>
                {
                    fbErrors.length > 0 && (
                        <Message error >{displayErrors()}</Message>
                    )
                }
                <Message>
                    Do you want to <Link to='/signup'> Create New Account</Link> ?
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default Login
