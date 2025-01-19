import React from "react";

function MainContent() {
  return (
    <main>
      {/* Word 1: EDUCATE */}
      <div className="educateAnimate">
        <svg className="educate" viewBox="0 0 1000 200">
          <text x="10%" y="50%" dy=".35em" text-anchor="start">EDUCATE</text>
        </svg>
      </div>

      {/* Word 2: ENGAGE */}
      <div className="engageAnimate">
        <svg className="engage" viewBox="0 0 1000 200">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">ENGAGE</text>
        </svg>
      </div>

      {/* Word 3: EVOLVE */}
      <div className="evolveAnimate">
        <svg className="evolve" viewBox="0 0 1000 200">
          <text x="85%" y="10%" dy=".35em" text-anchor="end">EVOLVE</text>
        </svg>
      </div>
    </main>
  );
}

export default MainContent;
