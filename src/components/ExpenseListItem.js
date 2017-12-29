import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>   
    <p>
      {numeral(amount / 100).format('$0,0.00')} 
      - 
      {moment(createdAt).format('Do MMMM, YYYY')}
    </p>
     
  </div>
);

export default connect()(ExpenseListItem);
