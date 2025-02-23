import { useEffect, useState, useRef } from "react";
import supabase from "../supabase/supabase";

function App() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [unlockDate, setUnlockDate] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const storyRefs = useRef({});

  useEffect(() => {
    fetchVideos();
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchVideos = async () => {
    const { data, error } = await supabase.from("videos").select("*");
    if (error) {
      console.log("Error fetching videos: ", error);
    } else {
      setVideoList(data);
    }
  };

  const uploadVideo = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const filePath = `videos/${file.name}`;
    const { data, error } = await supabase.storage
      .from("videos")
      .upload(filePath, file);

    if (error) {
      console.log("Error uploading video: ", error);
      return;
    }

    const { data: publicURLData } = await supabase.storage.from("videos").getPublicUrl(filePath);
    const publicURL = publicURLData.publicUrl;
    saveVideoMetadata(publicURL, unlockDate);
  };

  const saveVideoMetadata = async (videoUrl, unlockDate) => {
    const { data, error } = await supabase.from("videos").insert([
      { url: videoUrl, unlock_date: unlockDate },
    ]);
    if (error) {
      console.log("Error saving metadata: ", error);
    } else {
      setVideoList((prev) => [...prev, { url: videoUrl, unlock_date: unlockDate }]);
    }
  };

  return (
    <div>
      <h1>Time Capsule</h1>

      {/* Video Upload Section */}
      <h2>Upload a Video</h2>
      <input type="file" accept="video/*" onChange={uploadVideo} />
      <input type="datetime-local" value={unlockDate} onChange={(e) => setUnlockDate(e.target.value)} />
      <button>Upload Video</button>

      {/* Locked and Unlocked Videos */}
      <h2>Videos</h2>
      <ul>
        {videoList.map((video, index) => (
          <li key={index}>
            {new Date(video.unlock_date) <= currentTime ? (
              <video controls width="200" src={video.url} />
            ) : (
              <p>Locked until: {new Date(video.unlock_date).toLocaleString()}</p>
            )}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
