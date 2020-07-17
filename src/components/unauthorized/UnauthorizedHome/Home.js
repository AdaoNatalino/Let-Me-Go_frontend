import withRoot from './modules/withRoot';

import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductHero from './modules/views/ProductHero';

function Index({ user }) {
  return (
    <React.Fragment>
      <ProductHero />
      { user  ? <ProductCategories /> : null }
    </React.Fragment>
  );
}

export default withRoot(Index);
