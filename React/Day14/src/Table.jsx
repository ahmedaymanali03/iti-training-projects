import React, { Component } from 'react';
import './Table.css';  

class Table extends Component {
    render() {
        return (
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.job}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;
