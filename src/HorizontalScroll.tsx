import { ReactChild, useState } from "react";
import "./HorizontalScroll.css";

interface HorizontalScrollProps {
  elements: ReactChild[];
}

const HorizontalScroll = ({ elements }: HorizontalScrollProps) => {
  const [numElements] = useState(elements.length);
  return (
    <div className="outer-outer-wrapper">
      <div className="outer-wrapper">
        <div
          className="inner-wrapper"
          style={{
            width: `${numElements * 100}vw`,
          }}
        >
          {elements.map((element, index) => (
            <div key={index} className="slide">
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
