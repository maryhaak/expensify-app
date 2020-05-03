import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            &nbsp;-&nbsp;
            {moment(createdAt).format('MMM Do, YYYY')}
        </p>
        <Link to={`/edit/${id}`}>
            <button>Edit</button>
        </Link>
    </div>
)

export default ExpenseListItem;