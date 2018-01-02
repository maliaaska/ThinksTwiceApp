import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
    <Link className='list-item' to={`/edit/${id}`}>
    <div>
      <h3>{description}</h3>
      <span>{moment(createdAt).format('Do MMMM, YYYY')}</span>
    </div>
      <h3>{numeral(amount / 100).format('$0,0.00')} </h3>
    </Link>   
);

export default connect()(ExpenseListItem);
