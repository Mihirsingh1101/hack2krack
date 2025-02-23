import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";

function App() {
  const [videosList, setvideosList] = useState([]);
  const [unlockDate, setUnlockDate] = useState("");

  useEffect(() => {
    fetchvideoss();
  }, []);

  const fetchvideoss = async () => {
    const { data, error } = await supabase.from("videos").select("*");
    if (error) {
      console.log("Error fetching videos: ", error);
    } else {
      setvideosList(data);
    }
  };

  const uploadvideos = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      console.error("No file selected!");
      return;
    }

    const file = event.target.files[0];
    const filePath = `videos/${file.name}`;
    const { data, error } = await supabase.storage.from("videos").upload(filePath, file);

    if (error) {
      console.log("Error uploading videos: ", error);
      return;
    }

    const { data: publicURLData, error: urlError } = await supabase.storage
      .from("videos")
      .getPublicUrl(filePath);

    if (urlError) {
      console.log("Error getting public URL: ", urlError);
      return;
    }

    const publicURL = publicURLData.publicUrl;
    savevideosMetadata(publicURL, unlockDate);
  };

  const savevideosMetadata = async (videosUrl, unlockDate) => {
    const { data, error } = await supabase.from("videos").insert([
      { url: videosUrl, unlock_date: unlockDate },
    ]);
    if (error) {
      console.log("Error saving metadata: ", error);
    } else {
      setvideosList((prev) => [...prev, { url: videosUrl, unlock_date: unlockDate }]);
    }
  };

  const lockedvideoss = videosList.filter(videos => new Date(videos.unlock_date) > new Date());
  const unlockedvideoss = videosList.filter(videos => new Date(videos.unlock_date) <= new Date());

  return (
    <div>
      <h1>videos Time Capsule</h1>
      <div>
        <input type="file" accept="video/*" onChange={uploadvideos} />
        <input
          type="datetime-local"
          value={unlockDate}
          onChange={(e) => setUnlockDate(e.target.value)}
        />
        <button>Upload videos</button>
      </div>
      <h2>Unlocked videoss</h2>
      <ul>
        {unlockedvideoss.map((videos, index) => (
          <li key={index}>
            <video src={videos.url} controls width="200" />
          </li>
        ))}
      </ul>
      <h2>Locked videoss</h2>
      <ul>
        {lockedvideoss.map((videos, index) => (
          <li key={index}>
            <p>Locked until: {new Date(videos.unlock_date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;