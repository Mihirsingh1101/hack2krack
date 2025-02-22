import React, { useEffect, useState } from "react";

// Carousel Component: cycles through three images automatically.
const Carousel = () => {
  const images = [
    "https://placehold.co/400x300?text=Carousel+Image+1",
    "https://placehold.co/400x300?text=Carousel+Image+2",
    "https://placehold.co/400x300?text=Carousel+Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle to the next image index.
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ width: "100%", textAlign: "center", marginTop: 40 }}>
      <div
        style={{
          width: 400,
          height: 300,
          margin: "auto",
          overflow: "hidden",
          borderRadius: 8,
          position: "relative",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Carousel ${currentIndex + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};

const LandingPage = () => {
  // State for controlling the visibility of animated text
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Using getBoundingClientRect on one of the text elements
      const element = document.getElementById("animatedText");
      if (element) {
        const rect = element.getBoundingClientRect();
        // When the top of the element is within 80% of viewport height, show the text.
        if (rect.top < window.innerHeight * 0.8) {
          setTextVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up on unmount.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "150vh",
        overflowX: "hidden",
      }}
    >
      {/* Background Blur Ellipses */}
      <div
        style={{
          width: 634,
          height: 634,
          opacity: 0.84,
          background: "#54BE96",
          boxShadow: "1000px 1000px 1000px",
          borderRadius: 9999,
          filter: "blur(1000px)",
          position: "absolute",
          top: 100,
          left: 50,
        }}
      ></div>
      <div
        style={{
          width: 634,
          height: 634,
          background: "#52BDAA",
          boxShadow: "1000px 1000px 1000px",
          borderRadius: 9999,
          filter: "blur(1000px)",
          position: "absolute",
          top: 200,
          right: 50,
        }}
      ></div>

      {/* Header Section */}
      <div
        style={{
          width: "100%",
          height: 64,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Logo and Title */}
        <div style={{ height: 64, position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            <svg width="64" height="64" viewBox="0 0 64 64">
              <rect width="64" height="64" fill="black" />
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              left: 70,
              top: 11,
              fontSize: 24,
              fontFamily: "Italiana",
              fontWeight: "400",
              color: "black",
            }}
          >
            LyfeIndex
          </div>
        </div>
        {/* Navbar */}
        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ color: "black", fontSize: 16, fontWeight: "500" }}>
            Home
          </div>
          <div style={{ color: "#A6A6A6", fontSize: 14, fontWeight: "500" }}>
            Product
          </div>
          <div style={{ color: "#A6A6A6", fontSize: 14, fontWeight: "500" }}>
            FAQ
          </div>
          <div style={{ color: "#A6A6A6", fontSize: 14, fontWeight: "500" }}>
            Teams
          </div>
          <div style={{ color: "#A6A6A6", fontSize: 14, fontWeight: "500" }}>
            Privacy Policy
          </div>
        </div>
        {/* Contact Us Button */}
        <div
          style={{
            width: 100,
            padding: 10,
            background: "#2E9C5D",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ color: "white", fontSize: 14, fontWeight: "500" }}>
            Contact Us
          </div>
        </div>
      </div>

      {/* Main Banner Text */}
      <div
        style={{
          textAlign: "center",
          marginTop: 80,
          fontSize: 48,
          fontFamily: "Aclonica",
          fontWeight: "400",
          color: "black",
        }}
      >
        “A letter today, a memory tomorrow.”
      </div>

      {/* Image Gallery Section */}
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 40 }}>
        <img
          style={{ width: 250, height: 250 }}
          src="https://placehold.co/250x250"
          alt="Placeholder 1"
        />
        <img
          style={{ width: 240, height: 240 }}
          src="https://placehold.co/240x240"
          alt="Placeholder 2"
        />
        <img
          style={{ width: 260, height: 260 }}
          src="https://placehold.co/260x260"
          alt="Placeholder 3"
        />
      </div>

      {/* Add Button Section */}
      <div
        style={{
          width: 120,
          height: 40,
          background: "black",
          color: "white",
          fontSize: 20,
          fontFamily: "Karla",
          fontWeight: "400",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Add
      </div>

      {/* Animated Text Section: Appears on Scroll */}
      <div
        id="animatedText"
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 24,
          fontFamily: "Karla",
          fontWeight: "400",
          color: "black",
          marginTop: 20,
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0px)" : "translateY(50px)",
          transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
        }}
      >
        Ink Your Thoughts,Seal your Memories.
      </div>
      <div
        id="animatedText2"
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 20,
          fontFamily: "Karla",
          fontWeight: "400",
          color: "black",
          marginTop: 10,
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0px)" : "translateY(50px)",
          transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out",
        }}
      >
       
      </div>

      {/* Carousel Section: Runs below the animated text */}
      <Carousel />

      {/* Additional Dummy Content for Extra Length (if needed) */}      
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Karla", fontSize: 28, marginBottom: "20px" }}>
          Explore More
        </h2>
        <p style={{ fontFamily: "Karla", fontSize: 18, lineHeight: 1.6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          nulla eu mi fringilla consequat. Suspendisse potenti. Cras egestas
          felis at purus consectetur, sed vulputate turpis mollis. Proin a
          condimentum massa. Vivamus ut erat sapien. Quisque in tincidunt
          augue. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Duis nec tortor non justo convallis
          suscipit. Curabitur ullamcorper auctor neque, ac laoreet nisi
          efficitur ut. Nulla facilisi.\n\nIn hac habitasse platea dictumst. Donec vel nulla eget neque
          vestibulum posuere. Maecenas cursus consequat mi. Morbi et augue a
          nibh pretium blandit. Integer auctor, sapien nec ultrices faucibus,
          sapien elit viverra mauris, id tempus sapien nibh eget erat. Nam
          commodo leo ac sapien dictum, at tristique ligula facilisis.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
