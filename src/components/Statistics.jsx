export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <h4>Good: {good}</h4>
      <h4>Neutral: {neutral}</h4>
      <h4>Bad: {bad}</h4>
      <h4>Total: {total}</h4>
      <h4>
        Positive feedback: {positivePercentage > 0 ? positivePercentage : '0'}%
      </h4>
    </div>
  );
};
