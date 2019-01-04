import React, { Component } from 'react';

class ContactCreate extends Component {
    state={
        name: "",
        phone: ""
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCreate = e => {
        e.preventDefault();
        this.props.Create({name:this.state.name,phone:this.state.phone, id:this.props.infoid})
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <h1>Contacts Create</h1>
                <input name="name" value={this.state.name} placeholder="name" onChange={this.handleChange}></input>
                <input name="phone" value={this.state.phone} placeholder="phone number" onChange={this.handleChange}></input>
                <button onClick={this.handleCreate}>Create</button>
            </form>
        );
    }
}

export default ContactCreate;