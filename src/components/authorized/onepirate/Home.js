import withRoot from './modules/withRoot';

import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
    </React.Fragment>
  );
}

export default withRoot(Index);
