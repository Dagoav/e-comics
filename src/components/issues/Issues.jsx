import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getIssues } from "../../redux/actions";
import CardIssue from './CardIssue';


function Issue({ issue_number }) {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issues);

  useEffect(() => {
    dispatch(getIssues(issue_number))
  }, [dispatch, issue_number])

  return (
    <div className='container'>
      {
        issues.length > 0 && issues.map(issue => (
          <CardIssue key={issue.id} data={issue} />
        ))
      }
    </div>
  );
}

export default Issue;