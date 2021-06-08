import '../scss/timer.scss';
function Timer() {
  return (
    <>
      <div className="timer-wraper">
        Elapsed time: <span id="timer-value">0</span>{' '}
        <span className="timer-second"> s</span>
      </div>
      <div id="timeUp" className="anim_alert" style="display: none;">
        Your time is up!
      </div>
    </>
  );
}
