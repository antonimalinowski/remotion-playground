import { useCurrentFrame, AbsoluteFill, useVideoConfig } from "remotion";

export const MyComposition = () => {
  const frame = useCurrentFrame();
	const { fps, durationInFrames, width, height } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        backgroundColor: "white"
      }}
    >
      The current frame is {frame}.
			The {width}x{height}px video is {durationInFrames / fps} seconds long.
    </AbsoluteFill>
  );
};