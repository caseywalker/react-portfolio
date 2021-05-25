import React from 'react';

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className="about-me-para">
        <a className='test' name='aboutlink'></a>
        <h3>Hello, I&apos;m Casey.</h3>
        <hr />
        <p>I started my Technology journey in 2015, working as Data Center Sales Manager, and more recently as a Telecommunications Account Exeuctive. I quickly found a passion for software development and currently spend my nights and weekends with the Nashville Software School.</p>
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/caseywalker/images/main/Headshot1.PNG" alt='Headshot' className='about-img' />
      </div>
    </div>
  );
}
