import React, {useContext} from 'react';
import {IntlProvider} from 'react-intl';

import AppLocale from '../../shared/localization';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

const LocaleProvider = (props) => {
  const {locale} = useContext(AppContext);
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}>
      {props.children}
    </IntlProvider>
  );
};

export default LocaleProvider;

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
