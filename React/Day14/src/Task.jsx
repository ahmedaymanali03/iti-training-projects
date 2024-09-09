import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    handleSubmit = (formData) => {
        this.setState(prevState => ({
            data: [...prevState.data, formData]
        }));
    }

    render() {
        return (
            <div>
                <Form handleSubmit={this.handleSubmit} />
            
                {this.state.data.length > 0 && <Table data={this.state.data} />}
            </div>
        );
    }
}

export default Parent;
