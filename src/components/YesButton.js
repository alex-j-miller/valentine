function YesButton({ onClick, disabled }) {
  return (
    <button
      className="valentine-button yes-button"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      Yes
    </button>
  );
}

export default YesButton;
