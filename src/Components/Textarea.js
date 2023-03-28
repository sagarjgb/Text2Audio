import React, { useState } from "react";
import "./Textarea.css";
import { useSpeechSynthesis } from "react-speech-kit";

function Textarea(props) {
  const [text, setText] = useState("");
  const [audioURL, setAudioURL] = useState("");

  const { speak } = useSpeechSynthesis();

  const handleEnd = (event) => {
    console.log("handleEnd called");
    const blob = new Blob([event.target.value], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    setAudioURL(url);
  };

  const generateAudio = () => {
    speak({ text, onEnd: (event) => handleEnd(event) });
    console.log("generateAudio called");
  };

  return (
    <>
      <div className="text-area-container">
        <label htmlFor={props.id}>{props.label}</label>
        <textarea
          id={props.id}
          name={props.name}
          placeholder="Type or paste here and get audio file"
          rows={props.rows}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <button className="convert-btn" onClick={generateAudio}>
        Generate audio
      </button>
      {audioURL && (
        <a href={audioURL} download="audio.mp3" className="download-audio-btn">
          Download Audio
        </a>
      )}
    </>
  );
}

export default Textarea;
