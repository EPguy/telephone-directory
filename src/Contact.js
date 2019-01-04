import React, { Component } from 'react';

class Contact extends Component {
    state={
        keyword: ''
    }
    handleRemove = index => {
        console.log(index)
        this.props.remove(index)
    }
    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                />
                 {
                     this.props.info.map((v, i) => <div key={i}>
                                                    <span>{v.name} {v.phone}</span>
                                                     <button onClick={() => this.handleRemove(v.id)}>삭제</button>
                                                     </div>)
                 }
            </div>
        );
    }
}

export default Contact;