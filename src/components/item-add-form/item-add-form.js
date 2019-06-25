import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    updateLabelState = (label) => {
        this.setState({
            label: label
        });
    };

    onLabelChange = (e) => {
        this.updateLabelState(e.target.value);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        if (label) {
            this.props.onItemAdded(label);
            this.updateLabelState('');
        }
    };

    render() {

        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-todo-input"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done?"
                       value={this.state.label}
                />
                <button className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        );
    }
}