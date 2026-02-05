import { useRef } from 'react';
import YesButton from './YesButton';
import NoButton from './NoButton';

function ButtonField({ onAccept, accepted }) {
  const containerRef = useRef(null);

  return (
    <div className="button-field" ref={containerRef}>
      <YesButton onClick={onAccept} disabled={accepted} />
      <NoButton containerRef={containerRef} disabled={accepted} />
    </div>
  );
}

export default ButtonField;
