import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";

function App() {
  const [imageList, setImageList] = useState([]);
  const [unlockDate, setUnlockDate] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase.from("images").select("*");
    if (error) {
      console.log("Error fetching images: ", error);
    } else {
      setImageList(data);
    }
  };

  const uploadImage = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      console.error("No file selected!");
      return;
    }

    const file = event.target.files[0];
    const filePath = `images/${file.name}`;
    const { data, error } = await supabase.storage.from("images").upload(filePath, file);

    if (error) {
      console.log("Error uploading image: ", error);
      return;
    }

    const { data: publicURLData, error: urlError } = await supabase.storage
      .from("images")
      .getPublicUrl(filePath);

    if (urlError) {
      console.log("Error getting public URL: ", urlError);
      return;
    }

    const publicURL = publicURLData.publicUrl;
    saveImageMetadata(publicURL, unlockDate);
  };

  const saveImageMetadata = async (imageUrl, unlockDate) => {
    const { data, error } = await supabase.from("images").insert([
      { url: imageUrl, unlock_date: unlockDate },
    ]);
    if (error) {
      console.log("Error saving metadata: ", error);
    } else {
      setImageList((prev) => [...prev, { url: imageUrl, unlock_date: unlockDate }]);
    }
  };

  const lockedImages = imageList.filter(image => new Date(image.unlock_date) > new Date());
  const unlockedImages = imageList.filter(image => new Date(image.unlock_date) <= new Date());

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
        <button onClick={uploadImage}>Upload Image</button>
      </div>
      <h2>Unlocked Images</h2>
      <ul>
        {unlockedImages.map((image, index) => (
          <li key={index}>
            <img src={image.url} alt="Uploaded" width="200" />
          </li>
        ))}
      </ul>
      <h2>Locked Images</h2>
      <ul>
        {lockedImages.map((image, index) => (
          <li key={index}>
            <p>Locked until: {new Date(image.unlock_date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
