import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h2>Expenses List:</h2>
        {props.expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense} />            
        ))}
    </div>
)

export default connect((state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
})(ExpenseList);