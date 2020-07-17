import withRoot from './modules/withRoot';

import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';

function Index({ user }) {
  return (
    <React.Fragment>
      <AppAppBar
      user={user}
      />
      <ProductHero />
      { user  ? <ProductCategories /> : null }
    </React.Fragment>
  );
}

export default withRoot(Index);
