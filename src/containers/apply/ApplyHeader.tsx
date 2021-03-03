import * as React from 'react';
import Helmet from 'react-helmet';
import { PageHeader } from '../../components';

const headerText = 'Apply for VA Lighthouse Developer Access';
const ApplyHeader = (): JSX.Element => (
  <div>
    <Helmet>
      <title>{headerText}</title>
    </Helmet>
    <PageHeader header={headerText} />
  </div>
);

export default ApplyHeader;
