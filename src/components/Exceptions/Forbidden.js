import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'antd';

const Forbidden = () => {
  return (
    <div className="page-err">
      <QueueAnim type="bottom" className="ui-animate">
        <div>
          <div className="err-container text-center">
            <div className="err-code-container">
              <div className="err-code">
                {' '}
                <h1>403</h1>{' '}
              </div>
            </div>
            <h2>Sorry, you don't have permission to access this page.</h2>
            <Link to={'/dashboard'}>
              <Button>Go Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </QueueAnim>
    </div>
  );
};

export default withRouter(Forbidden);
