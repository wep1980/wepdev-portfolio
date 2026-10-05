import { ImageResponse } from "next/og";

export const alt = "Waldir Escouto Pereira | Engenheiro de Software Sênior (Java)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ImagemOpenGraph() {
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
          background: "#f7f5f1",
          color: "#17181a",
        }}
      >
        <div style={{ fontSize: 28, color: "#92400e", letterSpacing: 4 }}>WEPDEV</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24 }}>Waldir Escouto Pereira</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#55585f" }}>
          Engenheiro de Software Sênior (Java)
        </div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#55585f" }}>
          Spring Boot · Quarkus · Microsserviços · Kafka · AWS · Kubernetes
        </div>
      </div>
    ),
    size,
  );
}
