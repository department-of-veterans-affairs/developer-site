import * as React from 'react';

import { FormField } from '../../components';

const DeveloperInfo = (): JSX.Element => (
  <>
    <FormField
      label="First name"
      name="firstName"
      required
      className="vads-u-margin-top--4"
    />

    <FormField
      label="Last name"
      name="lastName"
      required
      className="vads-u-margin-top--4"
    />

    <FormField
      label="Email"
      name="email"
      required
      className="vads-u-margin-top--4"
    />

    <FormField
      label="Organization"
      name="organization"
      required
      className="vads-u-margin-top--4"
    />
  </>
);

export { DeveloperInfo };
