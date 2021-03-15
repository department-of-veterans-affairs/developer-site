import * as React from 'react';
import './AppVersion.scss';

const currentAppVersion = process.env.REACT_APP_COMMIT_HASH ?? 'undefined';

const AppVersion = (): JSX.Element => (
  <p className="app-version">{currentAppVersion}</p>
);

export { AppVersion };