import * as React from 'react';

import { FormField } from 'src/components';

const DeveloperInfo = (): JSX.Element => (
  <>
    <FormField
      label="First name"
      name="firstName"
      required
    />

    <FormField
      label="Last name"
      name="lastName"
      required
    />

    <FormField
      label="Email"
      name="email"
      required
    />

    <FormField
      label="Organization"
      name="organization"
      required
    />
  </>
);

export { DeveloperInfo };
