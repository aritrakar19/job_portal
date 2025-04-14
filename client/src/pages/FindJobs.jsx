import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FindJobs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showJobTypes, setShowJobTypes] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const navigate = useNavigate();

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const jobTypes = [
    "Full Time",
    "Part Time",
    "Contract",
    "Freelance",
    "Internship",
    "Temporary",
  ];

  const locations = [
    "New York",
    "London",
    "San Francisco",
    "Berlin",
    "Tokyo",
    "Remote",
    "Bangalore",
    "Sydney",
  ];

  const handleFindJob = () => {
    if (selectedJobType || selectedLocation) {
      const params = new URLSearchParams();
      if (selectedJobType) params.append("type", selectedJobType);
      if (selectedLocation) params.append("location", selectedLocation);
      navigate(`/jobs?${params.toString()}`);
    }
  };

  return (
    <section
      style={{
        backgroundImage:
          'url("https://prium.github.io/Posh/v2.0.0/assets/images/about-team-header.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: isMobile ? "60px 16px" : "100px 20px",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        backgroundColor: "#eef0ff",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "2rem" : "3rem",
          fontWeight: "600",
          color: "#fff",
          marginBottom: "100px",
          textShadow: "1px 2px 3px rgba(0, 0, 0, 0.7)",
        }}
      >
        Find a Job
      </h1>

      <div
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          padding: isMobile ? "16px" : "20px",
          width: isMobile ? "100%" : "700px",
          maxWidth: "100%",
          gap: isMobile ? "12px" : "0",
          position: "relative",
        }}
      >
        {/* Job Type Dropdown */}
        <div style={{ flex: 1, position: "relative",  width: isMobile ? "100%" : "auto" }}>
          <div
            onClick={() => {
              setShowJobTypes(!showJobTypes);
              setShowLocations(false);
            }}
            style={{
              padding: "12px 16px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "transparent",
              textAlign: "left",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            {selectedJobType || "Job Type"}
          </div>
          {showJobTypes && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 1000,
                marginTop: "4px",
              }}
            >
              {jobTypes.map((type, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedJobType(type);
                    setShowJobTypes(false);
                  }}
                  style={{
                    padding: "10px 16px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                    backgroundColor:
                      selectedJobType === type ? "#f8f9fa" : "white",
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {!isMobile && (
          <div
            style={{
              width: "1px",
              backgroundColor: "#d8d8d8",
              height: "30px",
              margin: "0 16px",
            }}
          ></div>
        )}

        {/* Location Dropdown */}
        <div style={{ flex: 1, position: "relative" , width: isMobile ? "100%" : "auto"}}>
          <div
            onClick={() => {
              setShowLocations(!showLocations);
              setShowJobTypes(false);
            }}
            style={{
              padding: "12px 16px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "transparent",
              textAlign: "left",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            {selectedLocation || "Location"}
          </div>
          {showLocations && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 1000,
                marginTop: "4px",
              }}
            >
              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedLocation(location);
                    setShowLocations(false);
                  }}
                  style={{
                    padding: "10px 16px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                    backgroundColor:
                      selectedLocation === location ? "#f8f9fa" : "white",
                  }}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleFindJob}
          style={{
            backgroundColor: "#ff2b7b",
            color: "#fff",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            marginLeft: isMobile ? "0" : "16px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            width: isMobile ? "100%" : "auto",
          }}
        >
          Find Job
        </button>
      </div>
    </section>
  );
};

export default FindJobs;