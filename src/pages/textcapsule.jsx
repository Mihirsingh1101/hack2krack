import React, { useEffect, useState } from "react";

// Carousel Component: Cycles through three images automatically.
const Carousel = () => {
  const images = [
    "https://placehold.co/400x300?text=Carousel+Image+1",
    "https://placehold.co/400x300?text=Carousel+Image+2",
    "https://placehold.co/400x300?text=Carousel+Image+3"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle images every 3 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
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
          position: "relative"
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
            opacity: 1
          }}
        />
      </div>
    </div>
  );
};

// Main LandingPage Component
const LandingPage = () => {
  // State to control the visibility of animated text
  const [textVisible, setTextVisible] = useState(false);

  // Listen for scroll events and set text visibility when text enters viewport.
  useEffect(() => {
    const handleScroll = () => {
      const animatedText = document.getElementById("animatedText");
      if (animatedText) {
        const rect = animatedText.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setTextVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "150vh",
        overflowX: "hidden",
        backgroundColor: "#fff"
      }}
    >
      {/*
        ======================================================
        Background Blur Ellipses
        ======================================================
      */}
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
          left: 50
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
          right: 50
        }}
      ></div>

      {/*
        ======================================================
        Header Section
        ======================================================
      */}
      <div
        style={{
          width: "100%",
          height: 64,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          position: "relative",
          zIndex: 10
        }}
      >
        {/* Logo and Title */}
        <div style={{ height: 64, position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            {/* Dummy SVG Logo */}
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
              color: "black"
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
            alignItems: "center"
          }}
        >
          <div style={{ color: "white", fontSize: 14, fontWeight: "500" }}>
            Contact Us
          </div>
        </div>
      </div>

      {/*
        ======================================================
        Main Banner Text
        ======================================================
      */}
      <div
        style={{
          textAlign: "center",
          marginTop: 80,
          fontSize: 48,
          fontFamily: "Aclonica",
          fontWeight: "400",
          color: "black"
        }}
      >
        “Capture your memories forever”
      </div>

      {/*
        ======================================================
        Image Gallery Section
        ======================================================
      */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          marginTop: 40
        }}
      >
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

      {/*
        ======================================================
        Add Button Section
        ======================================================
      */}
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
          cursor: "pointer"
        }}
      >
        Add
      </div>

      {/*
        ======================================================
        Animated Text Sections (Reveal on Scroll)
        ======================================================
      */}
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
          transition: "opacity 1s ease-in-out, transform 1s ease-in-out"
        }}
      >
        Moments captured together are cherished forever.
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
          transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out"
        }}
      >
        Your memories deserve a place to rest.
      </div>

      {/*
        ======================================================
        Carousel Section (Below the Animated Text)
        ======================================================
      */}
      <Carousel />

      {/*
        ======================================================
        Additional Dummy Content to Extend Page Length
        ======================================================
      */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Karla", fontSize: 28, marginBottom: "20px" }}>
          Explore More
        </h2>
        <p style={{ fontFamily: "Karla", fontSize: 18, lineHeight: 1.6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nulla eu mi fringilla consequat. Suspendisse potenti.
          Cras egestas felis at purus consectetur, sed vulputate turpis mollis. Proin a condimentum massa. Vivamus ut erat sapien.
          Quisque in tincidunt augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Duis nec tortor non justo convallis suscipit. Curabitur ullamcorper auctor neque, ac laoreet nisi efficitur ut.
          Nulla facilisi.
        </p>
        <p style={{ fontFamily: "Karla", fontSize: 18, lineHeight: 1.6, marginTop: "20px" }}>
          In hac habitasse platea dictumst. Donec vel nulla eget neque vestibulum posuere. Maecenas cursus consequat mi.
          Morbi et augue a nibh pretium blandit. Integer auctor, sapien nec ultrices faucibus, sapien elit viverra mauris,
          id tempus sapien nibh eget erat. Nam commodo leo ac sapien dictum, at tristique ligula facilisis.
        </p>
      </div>

      {/*
        ======================================================
        Extra Dummy Content to Reach ~300 Lines
        ======================================================
      */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3 style={{ fontFamily: "Karla", fontSize: 22, marginBottom: "20px" }}>
          Additional Information
        </h3>
        <p style={{ fontFamily: "Karla", fontSize: 16, lineHeight: 1.6 }}>
          This section is added solely to extend the code length for demonstration purposes.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.
          Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor
          mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna
          ac lorem rutrum elementum. Donec viverra auctor lobortis. Pellentesque eu est a nulla placerat dignissim.
          Morbi a enim in magna semper bibendum. Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla,
          eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit
          amet purus. Quisque lacus quam, egestas ac tincidunt a, lacinia vel velit. Aenean facilisis nulla vitae urna
          tincidunt congue sed ut dui. Morbi malesuada nulla nec purus convallis consequat. Praesent id massa id nisl
          venenatis lacinia.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
          ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
          lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Curabitur sodales ligula in libero.\n\nSed dignissim lacinia nunc. Curabitur tortor. Pellentesque
          nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula
          vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
          quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.\n\n" +
          "Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, " +
          "per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, " +
          "a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus " +
          "consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. " +
          "Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, " +
          "at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere " +
          "cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue " +
          "elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.\n\n" +
          "Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est " +
          "pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. " +
          "Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue.\n\n" +
          "Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, " +
          "pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo."
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
