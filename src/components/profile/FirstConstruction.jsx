import React from 'react';
import Profile from './Profile';

const ParentComponent = () => {
  const name = 'Celline Correo'; // Replace this with the actual user ID

  return (
    <div>
      {/* Other components or content */}
      <Profile name={name} />
    </div>
  );
};

export default ParentComponent;