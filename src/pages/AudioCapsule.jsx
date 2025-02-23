import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";

function App() {
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [unlockDate, setUnlockDate] = useState("");

  useEffect(() => {
    fetchaudio();
  }, []);

  const fetchaudio = async () => {
    const { data, error } = await supabase.from("audio").select("*");
    if (error) {
      console.log("Error fetching audio: ", error);
    } else {
      setImageList(data);
    }
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const filePath = `audio/${file.name}`;
    const { data, error } = await supabase.storage
      .from("audio")
      .upload(filePath, file);

    if (error) {
      console.log("Error uploading image: ", error);
      return;
    }

    const { data: publicURLData } = await supabase.storage.from("audio").getPublicUrl(filePath);
    const publicURL = publicURLData.publicUrl;
    saveImageMetadata(publicURL, unlockDate);
  };

  const saveImageMetadata = async (imageUrl, unlockDate) => {
    const { data, error } = await supabase.from("audio").insert([
      { url: imageUrl, unlock_date: unlockDate },
    ]);
    if (error) {
      console.log("Error saving metadata: ", error);
    } else {
      setImageList((prev) => [...prev, { url: imageUrl, unlock_date: unlockDate }]);
    }
  };

  return (
    <div>
      <h1>Image Time Capsule</h1>
      <div>
        <input type="file" accept="image/*" onChange={uploadImage} />
        <input
          type="datetime-local"
          value={unlockDate}
          onChange={(e) => setUnlockDate(e.target.value)}
        />
        <button>Upload Image</button>
      </div>
      <ul>
        {imageList.map((image, index) => (
          <li key={index}>
            {new Date(image.unlock_date) <= new Date() ? (
              <img src={image.url} alt="Uploaded" width="200" />
            ) : (
              <p>Locked until: {new Date(image.unlock_date).toLocaleString()}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
