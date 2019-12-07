import moment from 'moment';

// Filters Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate:  moment().endOf('month')
};

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            console.log('sort by amount');
            
            return {
                ...state,
                sortBy: 'amount'
            }            
        case 'SORT_BY_DATE':
            console.log('sort by date');
            
            return {
                ...state,
                sortBy: 'date'
            }      
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};