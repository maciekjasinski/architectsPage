import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Title } from '../AboutUs/AboutUs.styles';
import { Button } from '../Gallery/Gallery.styles';
import { Wrapper, StyledTextField, FormInfo } from './Contact.styles';

const validationSchema = yup.object().shape({
    phone: yup
        .number()
        .min(9)
        .max(9)
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    message: yup
        .string()
        .required()
})

export function Contact() {
    return (
        <>
            <Title>Contact</Title>
            <Wrapper>
                <Formik
                    //validationSchema={validationSchema}
                    initialValues={{
                        name: '',
                        phone: '',
                        email: '',
                        message: ''
                    }}
                    onSubmit={(values) => console.log(values)}
                >
                    <Form>
                        <StyledTextField 
                            id="name"
                            name="name"
                            variant="outlined"
                            placeholder="Name"
                            fullWidth
                        />
                        <StyledTextField 
                            name="phone"
                            variant="outlined"
                            placeholder="Phone"
                            type="number"
                            fullWidth
                        />
                        <StyledTextField 
                            name="email"
                            variant="outlined"
                            placeholder="Name"
                            fullWidth
                        />
                        <StyledTextField 
                            name="message"
                            variant="outlined"
                            placeholder="Message"
                            multiline
                            rows="3"
                            fullWidth
                        />
                        <FormInfo>By submitting an application you agree to the privacy policy</FormInfo>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Formik>
                <div>Image</div>
            </Wrapper>
        </>
    )
}
