import React, { useEffect, useState } from 'react';
import { 
  LoadingSpinnerBackgroundStyled,
  LoadingStyled,
  SvgStyled,
  RectStyled
} from './styled';

interface IProps {
  children?: React.ReactNode;
}

const LoadingSpinnerCommon: React.FC<IProps> = ({ children }) => {
  const [rectangles, setRectangles] = useState([false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRectangles = [...rectangles];
      const index = newRectangles.findIndex((isVisible) => !isVisible);

      if (index !== -1) {
        newRectangles[index] = true;
        setRectangles(newRectangles);
      } else {
        setRectangles([false, false, false]);
      }
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [rectangles]);
  
  return (
    <LoadingSpinnerBackgroundStyled>
      <LoadingStyled>
        <SvgStyled width="80" height="70">
          {rectangles.map((isVisible, index) => (
            <RectStyled
              key={index}
              x={index * 30}
              y={50 - index * 20}
              width="12"
              height={20 * (index + 2)}
              fill="#5385CE"
              style={{
                visibility: isVisible ? 'visible' : 'hidden',
                transition: 'visibility 0.1s ease-in-out',
              }}
            />
          ))}
        </SvgStyled>
      </LoadingStyled>
    </LoadingSpinnerBackgroundStyled>
  );
};

export default LoadingSpinnerCommon;