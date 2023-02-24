import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, AbsoluteFill, useVideoConfig, Audio, staticFile } from "remotion";
import Himalaya from "../public/Himalaya.mp3";

export const MyComposition = () => {
  const frame = useCurrentFrame();
	const { fps, durationInFrames, width, height } = useVideoConfig();
	const audioData = useAudioData(Himalaya);

	if (!audioData) {
    return null;
  }

	const visualization = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 32,
  }); // [0.22, 0.1, 0.01, 0.01, 0.01, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

	// Render a bar chart for each frequency, the higher the amplitude,
  // the longer the bar
  return (
		<div>
			
			<AbsoluteFill
				style={{
					justifyContent: "center",
					alignItems: "center",
					fontSize: 100,
					color: 'blue',
					backgroundColor: "green"
				}}
			>
				<Audio src={Himalaya} startFrom={1100} endAt={3200}/>
      
				{visualization.map((v) => {
        return (
          <div
            style={{ width: 10000 * v, height: 15, backgroundColor: "purple" }}
          />
        );
      })}
			
				The current frame is {frame}.
				The {width}x{height}px video is {durationInFrames / fps} seconds long.
				{/* <Audio src={staticFile("Himalaya.mp3")} /> */}
			</AbsoluteFill>
		</div>
  );
};