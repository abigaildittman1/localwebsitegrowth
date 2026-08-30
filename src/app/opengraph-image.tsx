import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1b1712",
          color: "#faf4e8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#f0dcb8",
            display: "flex",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            display: "flex",
            maxWidth: 900,
          }}
        >
          Grow roots. Grow large.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "rgba(250,244,232,0.75)",
            display: "flex",
            maxWidth: 850,
          }}
        >
          Consulting, content &amp; automation for small businesses &amp; franchises.
        </div>
      </div>
    ),
    { ...size },
  );
}
