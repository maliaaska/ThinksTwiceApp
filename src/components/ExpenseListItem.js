import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>   
    <p>{amount} - {createdAt}</p>
    <button value={id}
            onClick={() => {dispatch(removeExpense({ id }))}}
    >Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
