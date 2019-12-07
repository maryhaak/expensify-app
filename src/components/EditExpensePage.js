import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpence, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            {console.log(props.expense)}
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpence(props.expense.id, expense));
                    props.history.push('/');
                }} />
                <button onClick={() => {
                    props.dispatch(removeExpense(props.expense));            
                    props.history.push('/');
                }}>Remove</button>    
        </div>

    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditExpensePage);
