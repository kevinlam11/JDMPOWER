import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
          <hr />  <hr />
      <div>
        <p>1234 Red Ventures Drive</p>
        <p>Charlotte, NC</p>
        <p>+1 (555-555-5555)</p>
      </div>
      <div>
        <a className='white' href='mailto:support@JDMPOWER.com'>
          support@JDMPOWER.com
        </a>
      </div>
      <p className='footerabout'>
        We sell cars that go VROOM and SKRRRT. Lorem ipsum dolor sit amet,
        consectateur adispicing elit. Fusce euismod convallis velit, eu auctor
        lacus vehicula sit amet.
      </p>
      <div className='footericons'>
        <a href='https://www.youtube.com'>
          <img src='/images/youtube.AVIF' width='25px' alt='youtube' />
        </a>
        <a href='https://www.instagram.com/'>
          <img src='/images/insta.AVIF' width='25px' alt='instagram' />
        </a>
        <a href='https://www.twitter.com'>
          <img src='/images/twitter.AVIF' width='25px' alt='twitter' />
        </a>
        <a href='https://www.facebook.com'>
          <img src='/images/FB.AVIF' width='25px' alt='facebook' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
