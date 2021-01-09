import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import TodoList from '../components/TodoList';

function Main({ pageTitle }) {
  return (
    <div className="row main">
      <div className="col-12">
        <PageTitle pageTitle={pageTitle} />
        <TodoList />
      </div>
    </div>
  );
}

Main.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Main;
