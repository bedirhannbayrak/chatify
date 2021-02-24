import React, { useState, useEffect } from 'react'
import { useFirebase } from "react-redux-firebase";
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react'
import styles from './signup.module.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SignUp = () => {

    const firebase = useFirebase();
    const { register, errors, handleSubmit, setValue } = useForm();
    const [fbErrors, setFbErrors] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        register({ name: "username" }, { required: true });
        register({ name: "email" }, { required: true });
        register({ name: "password" }, { required: true, minLength: 6 });

    }, [])

    const onSubmit = ({ username, email, password }, e) => {
        setSubmitting(true);
        setFbErrors([]);
        const [first, last] = username.split(" ");
        firebase.createUser(
            { email, password },
            {
                name: username,
                avatar: `http://ui-avatars.com/api/?name=${first}+${last}&background=random&color=fff`,

            }
        ).then((user) => {
            console.log(user);
        }).catch((error) => {
            console.log(error.message);
            setFbErrors([{message : error.message }]);           
        })
        .finally(()=> {
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
                            fluid
                            icon='user'
                            iconPosition='left'
                            name='username'
                            onChange={(event, { name, value }) => {
                                setValue(name, value);
                            }}
                            error={errors.username ? true : false}
                            placeholder='Username'
                            type='text'
                        />
                        <Form.Input
                            fluid icon='mail'
                            iconPosition='left'
                            name='email'
                            onChange={(event, { name, value }) => {
                                setValue(name, value);
                            }}
                            error={errors.email ? true : false}
                            placeholder='Email Adress'
                            type='email'
                        />
                        <Form.Input
                            fluid icon='lock'
                            iconPosition='left'
                            name='password'
                            onChange={(event, { name, value }) => {
                                setValue(name, value);
                            }}
                            error={errors.password ? true : false}
                            placeholder='Password'
                            type='password'
                        />
                        <Button fluid color='brown' size='large' disabled={submitting} >Sign Up</Button>
                    </Segment>
                </Form>
                {
                    fbErrors.length > 0 && (
                        <Message error >{displayErrors()}</Message>
                    )
                }
                <Message>
                    Do you have already an account <Link to='/Login'> Login </Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default SignUp
