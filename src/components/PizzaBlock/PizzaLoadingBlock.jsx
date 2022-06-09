import React from "react";

import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="140" r="140" />
      <rect x="2" y="298" rx="3" ry="3" width="285" height="28" />
      <rect x="1" y="338" rx="2" ry="2" width="279" height="64" />
      <rect x="152" y="415" rx="0" ry="0" width="125" height="30" />
      <rect x="0" y="415" rx="0" ry="0" width="85" height="30" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
