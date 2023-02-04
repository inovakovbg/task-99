//implement the styled-components logic here.
import React from 'react';
import styled from "styled-components";

const Card = styled.div`
box-sizing: border-box;
max-width: 410px;
margin: 0 auto;
padding: 0 2rem;
display: flex;
flex-direction: column;
align-items: center;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
`;
const Input = styled.input`
padding: 1rem;
border: 1px solid #999;
margin-bottom: 1rem;
font-size: 0.8rem;
`;
const Button = styled.button`
background: linear-gradient(to bottom, #6371c7, #5563c1);
border-color: #3f4eae;
border-radius: 3px;
padding: 1rem;
color: white;
font-weight: 700;
width: 100%;
margin-bottom: 1rem;
font-size: 0.8rem;
cursor: pointer;
`;




function LoginForm() {
    return (
        <Card>
            <Form>
                <Input id='email' type="email" placeholder="E-mail" />
                <Input id='password' type="password" placeholder="password" />
                <Button>login</Button>
            </Form>
        </Card>

    );
}

export default LoginForm;