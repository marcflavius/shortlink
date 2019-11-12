import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page non trouvée</h1>
        <p>Nous ne pouvons pas trouver cette page.</p>
        <Link to="/" className="button button--link">Allez à l'accueil</Link>
      </div>
    </div>
  );
};
