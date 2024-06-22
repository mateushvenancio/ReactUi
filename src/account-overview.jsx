import React from 'react';
import './account-overview.css';
import Contact from './components/contact/contact';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <div>
        <div className='title'>Account Overview</div>
        <Contact />
      </div>
    </div>
  )
}

export default AccountOverview;