import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{

    buttons = [
        this.constructor.createButton('all', 'All'),
        this.constructor.createButton('active', 'Activ'),
        this.constructor.createButton('done', 'Done'),
    ];

    static createButton(name, label) {
        return {
            label,
            name,
        }
    }

    render() {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {

            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterChange(name) }
                >{label}</button>
            );
        });

        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    }
}

