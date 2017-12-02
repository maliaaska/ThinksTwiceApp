import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should corectly render expense summary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
  expect(wrapper).toMatchSnapshot();
});

test('should corectly render expense summary with multiple expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={234567653345} />)
  expect(wrapper).toMatchSnapshot();
});