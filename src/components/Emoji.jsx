import { useState } from 'react';

function Emoji({ mood }) {

  return (
    <div>
      <span role="img" aria-label={mood}>
        {mood === 'happy' ? '😄' : '😢'}
      </span>
    </div>
  );
}

function MoodChanger() {
  const [mood, setMood] = useState('happy');

  return (
    <>
      <button onClick={() => setMood(mood === 'happy' ? 'sad' : 'happy')}>
        Toggle mood
      </button>

      <div className="MoodChanger componentBox">
        <br />
        <Emoji mood={mood} />
      </div>
    </>
  )
}

export default MoodChanger;