import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function Connect() {
  return (
    <div className='connect'>
      <a className='test' name='connectlink'></a>
      <p className='connect-head'>Connect</p>
      <a href='https://github.com/caseywalker' className='icon-link' target="blank">
        <Icon name='github' size='huge' className='mx-5' />
      </a>
      <a href='https://www.linkedin.com/in/caseytwalker/' className='icon-link' target="blank">
        <Icon name='linkedin' size='huge' className='mx-5' />
      </a>
    </div>
  );
}
