import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1a",
          border: "2px solid #c8f542",
        }}
      >
        <div
          style={{
            width: 14,
            height: 22,
            borderRadius: 7,
            background: "#2a2a2a",
            border: "1.5px solid #525252",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
