import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotFoundImage from '../../assets/images/notFound.png'


const NotFound = () => {
  return (
    <div className={'container p-5 d-flex justify-content-center align-items-center text-center'} style={{
      height: '100vh'
  }}>
      <div>
          <img src={NotFoundImage} alt="" style={{
              height: '300px',
              width: 'auto'
          }}/>

          <h1 className={'  font-weight-bolder text-center'}>
              Sorry, the page does not exist.
          </h1>

          <Link to={'/'}>
              <button className='btn antelope-green-bg white-text btn-sm'>Go Back to Home</button>
            </Link>
      </div>

  </div>
  );
};

export default withRouter(NotFound);
