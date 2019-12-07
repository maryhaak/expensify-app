import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null
        }
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onCalendarFocusChange = (focused) => {        
        this.setState(() => ({ calendarFocused: focused }))
    };
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }} 
                />
                <select 
                    onChange={(e) => {
                        this.props.dispatch(e.target.value === 'Amount' ? sortByAmount() : sortByDate());
                    }}
                >
                    <option>Date</option>
                    <option>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onCalendarFocusChange}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates={false}
                />
            </div>
        )
    }
}

export default connect((store) => {    
    return {
        filters: store.filters
    }
})(ExpenseListFilters);