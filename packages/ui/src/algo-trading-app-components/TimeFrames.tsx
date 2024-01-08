import TimeFrame from "./TimeFrame";
const TIME_FRAMES = ["15m", "30m", "1h", "2h", "4h", "D", "W", "M"];
export default function TimeFrames() {
  return (
    <ul className="flex gap-1">
      {TIME_FRAMES.map((key) => {
        return <TimeFrame key={key} timeFrame={key} />;
      })}
    </ul>
  );
}
