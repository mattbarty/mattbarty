import React, { useRef, useEffect } from "react";

export default function AutoPlaySilentVideo(props: any) {
  const videoRef: any = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video
      className={props.className}
      ref={videoRef}
      loop
      autoPlay
      muted
      playsInline
      style={{ width: "100%", height: "100%" }}>
      <source src={props.video} type="video/mp4" />
    </video>
  );
}