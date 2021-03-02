import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { Button, Form, Modal } from "semantic-ui-react";

const CreateChannelForm = ({ open, onOpen, onClose }) => {

    const firebase = useFirebase();
    const profile = useSelector((state) => state.firebase.profile)
    const { register, errors, handleSubmit, setValue } = useForm();



    useEffect(() => {
        register({ name: "name" }, { required: true });
        register({ name: "description" }, { required: true, minLength: 10 });
    }, [])

    const onSubmit = ({ name, description }) => {
        firebase.push("channels", {
            name,
            description,
            createdBy: {
                name: profile.name,
                avatar: profile.avatar
            },
        });
        onClose();
    };

    return (
        <Modal open={open}
            onOpen={onOpen}
            onClose={onClose}
        >
            <Modal.Header >
                Create New Channel
            </Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Input
                        fluid
                        icon="hashtag"
                        iconPosition="left"
                        name="name"
                        placeholder="#General"
                        onChange={(e, { name, value }) => {
                            setValue(name, value);
                        }}
                        error={errors.name ? true : false}
                    />
                    <Form.Input
                        fluid
                        icon="hashtag"
                        iconPosition="left"
                        name="description"
                        placeholder="#General is channel that whatever u want to talk"
                        onChange={(e, { name, value }) => {
                            setValue(name, value);
                        }}
                        error={errors.description ? true : false}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions >
                <Button color="black" onClick={() => onClose()} >
                    Cancel
                </Button>
                <Button 
                icon="checkmark" 
                content="create" 
                labelPosition="right"
                positive color="black" 
                onClick={() => handleSubmit(onSubmit)()} />
            </Modal.Actions>
        </Modal>
    )
}

export default CreateChannelForm
