import React, { Component } from 'react';
import Contact from "./Contact"
import ContactCreate from "./ContactCreate"
class ContactTemplate extends Component {
    id = 2

    state={
        contactData: [{
            id: 0,
            name: 'Abet',
            phone: '010-0000-0001'
        },
        {
            id: 1,
            name: 'juseong',
            phone: '010-7709-7011'
        }]
    }
    handleCreate = data => {
        this.setState({
            contactData: [...this.state.contactData, data, ]
        })  
    }
    handleRemove = (id) => {
        const { contactData } = this.state
        this.setState({
            contactData: contactData.filter(info => info.id !== id)
        })
    }
    render() {
        return (
            <div>
                <Contact info={this.state.contactData} remove={this.handleRemove}/>
                <ContactCreate Create={this.handleCreate} infoid={this.id}/>
            </div>
        );
    }
}

export default ContactTemplate;