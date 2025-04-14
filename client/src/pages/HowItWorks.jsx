import React from "react";

const steps = [
  {
    icon: "🔎",
    title: "1. Search a job",
    description:
      "Browse thousands of job listings from top companies tailored to your skills and interests.",
  },
  {
    icon: "📄",
    title: "2. Apply for job",
    description:
      "Easily apply to positions with your profile or resume, and track your application status.",
  },
  {
    icon: "💼",
    title: "3. Get your job",
    description:
      "Connect with employers, attend interviews, and land your dream job quickly and efficiently.",
  },
];

const HowItWorks = () => {
  return (
    <section
      style={{
        backgroundColor: "#1e2674",
        padding: "80px 20px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
          fontWeight: "700",
        }}
      >
        How it works
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#2a308e",
              padding: "40px 20px",
              borderRadius: "12px",
              width: "300px",
              maxWidth: "90vw",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
              }}
            >
              {step.icon}
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#cfd2ff",
                lineHeight: "1.6",
              }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
