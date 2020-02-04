import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const InternalServer = () => {
  return (
    <div className="page-err">
      <QueueAnim type="bottom" className="ui-animate">
        <div>
          <div className="err-container text-center">
            <div className="err-code-container">
              <div className="err-code">
                {' '}
                <h1>500</h1>{' '}
              </div>
            </div>
            <h2>Sorry, server goes wrong.</h2>
            <Link to={'/dashboard'}>
              <Button>Go Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </QueueAnim>
    </div>
  );
};

export default withRouter(InternalServer);
