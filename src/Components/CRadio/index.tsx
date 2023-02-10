import React, { Suspense } from 'react';
const RRadio = React.lazy(() => import(/* webpackChunkName: "radio" */ './RRadio'));

export function CRadio() {
  console.log("---------------")
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <RRadio />
      </Suspense>
    </div>
  );
}