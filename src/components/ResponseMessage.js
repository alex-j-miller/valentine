function ResponseMessage({ accepted }) {
  return (
    <div className={`response ${accepted ? 'response--show' : ''}`} aria-live="polite">
      {accepted ? 'Yay! You just made my day.' : ''}
    </div>
  );
}

export default ResponseMessage;
