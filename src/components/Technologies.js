import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function Technologies() {
  return (
    <div className='technologies'>
      <p>Technologies</p>
      <div className='row1'>
        <Icon name='react' size='massive' className='mx-5' />
        <Icon name='js' size='massive' className='mx-5' />
        <Icon name='npm' size='massive' className='mx-5' />
        <Icon name='git' size='massive' className='mx-5' />
      </div>
      <div className='row2'>
      <Icon name='github' size='massive' className='mx-5' />
      <Icon name='database' size='massive' className='mx-5' />
      <Icon name='sass' size='massive' className='mx-5' />
      <Icon name='css3 alternate' size='massive' className='mx-5' />
      <Icon name='html5' size='massive' className='mx-5' />
      </div>
    </div>
  );
}
