import React from "react";
import "./style.css";

const GlowingButton = () => {
  return (
    <div>
      <button className="glowing-btn">
        <span className="glowing-txt">
          C<span className="faulty-letter">L</span>ICK
        </span>
      </button>
    </div>
  );
};

export default GlowingButton;
