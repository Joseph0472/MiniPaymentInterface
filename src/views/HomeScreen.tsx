import React from 'react';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { Form } from '../components/Form';

function HomeScreen() {
    return (
        <div className="App">
            <div className="container">
                <Header navto="/menu"/>
                <Content initialUserData={"Jospeh"}/>
                <Form/>
            </div>
        </div>
    );
}

export default HomeScreen;