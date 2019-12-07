import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const CreateExpensePage = (props) => (
    <div>
        <h2>Create Expense</h2>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense));
            props.history.push('/');
        }} />
    </div>
);

export default connect()(CreateExpensePage);