import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { PAGE_HEADER_ID } from '../../types/constants';
import { ApplySuccessResult } from '../../types';
import { ApplyForm } from './ApplyForm';
import ApplyHeader from './ApplyHeader';
import { ApplySuccess } from './ApplySuccess';

export const Apply: FC = () => {
  const [successResults, setSuccessResults] = useState<ApplySuccessResult>();

  return (
    <div role="region" aria-labelledby={PAGE_HEADER_ID} className={classNames('vads-l-grid-container', 'vads-u-padding--4')}>
      <ApplyHeader />
      {
        successResults ?
          <ApplySuccess result={successResults} /> :
          <ApplyForm onSuccess={setSuccessResults} />
      }
    </div>
  );
};
