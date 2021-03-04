import * as React from 'react';

import { FormField } from '../../components';

const OAuthAppInfo: React.FunctionComponent = (): JSX.Element => (
  <>
    <div className="vads-u-margin-top--4">
      Please specify whether your app can securely hide a client secret. Apps that can hide a
      secret will use the&nbsp;
      <a
        href="https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/"
        target="_blank"
        rel="noreferrer"
      >
        authorization code flow
      </a>, and apps that cannot will use the&nbsp;
      <a href="https://www.oauth.com/oauth2-servers/pkce/" target="_blank" rel="noreferrer">
        PKCE flow
      </a>.
    </div>
    <fieldset className="vads-u-margin-top--1">
      <legend className="vads-u-margin-top--0 legend-label">Can your application securely hide a client secret?</legend>
      <FormField
        type="radio"
        label="Yes"
        value="web"
        name="oAuthApplicationType"
        required
      />
      <FormField
        type="radio"
        label="No"
        value="native"
        name="oAuthApplicationType"
        required
      />
    </fieldset>

    <FormField type="text" label="OAuth Redirect URI" name="oAuthRedirectURI" required />
  </>
);

export { OAuthAppInfo };
