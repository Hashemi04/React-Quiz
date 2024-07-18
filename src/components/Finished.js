export default function Finished({
  maxPossiblePoints,
  points,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji = "";
  if (percentage < 100) emoji = "🤦‍♂️";
  if (percentage > 100 && percentage < 200) emoji = "😇";
  if (percentage > 200 && percentage < 270) emoji = "😎";

  if (percentage > 270) emoji = "🥇";
  return (
    <>
      <div className="result">
        <p>
          <span>{emoji}</span>
          You scored <strong>{points}</strong> out of {maxPossiblePoints} (
          {Math.ceil(percentage)} %)
        </p>
      </div>
      <p className="highscore">Your highest score is {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
