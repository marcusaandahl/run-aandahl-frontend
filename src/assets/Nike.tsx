import React, { ReactElement } from 'react';

function NikeLogo({ ...props }): ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2392 848" {...props}>
      <path d="M342 0s-86 144-86 275c0 140 103 217 233 217 146 0 242-44 497-111L2392 10S1200 527 630 763c-113 47-219 85-355 85C125 848 0 758 0 608c0-114 37-199 99-304C198 136 342 0 342 0z" />
    </svg>
  );
}

export default NikeLogo;
