//Command to run code:-
1. git clone https://github.com/Mihirsingh1101/hack2krack.git
2. cd hack2krack
3. npm install
4. npm run dev

//Repository structure:-

public
-favicon.ico
-img1.jpg
-img2.jpg
img3.jpg
index.html
logo192.png
logo512.png
manifest.json
robots.txt
src
-components
  -TimeCapsule
    -CapsuleGrid.jsx
    -Header.jsx
    -auth.jsx
-firebase
  -firebase.js
 -pages
   -AudioCapsule.jsx
   -CollabCapsule.jsx
   -MoviePage.jsx
   -StoriesCapsule.jsx
   -Textcapsule.jsx
   -TimeCapsule.jsx
   -Videocapsule.jsx
   -imagecapsule.jsx
   -landingpage.jsx
   -profile.jsx
 -supabase
   -supabase.js
 -App.css
 -App.js
 -index.css
 -index.js
 -reportWebVitals.js
 -setupTests.js
.env
.gitignore
README.md
cors.json
package-lock.json
package.json
storage.rules

//Concise summary of code:-

Time Capsule 2.0 is built using React.js and leverages Firebase for backend services including authentication, database, and storage. The application allows users to create various types of memory capsules:

Image Capsule: Upload and view photos.

Video Capsule: Store and play video memories.

Audio Capsule: Record and listen to audio messages.

Text Capsule: Write and save personal notes or journal entries.

Key functionalities include:

User Authentication: Secure login and registration managed via Firebase.

Capsule Management: Creation, timer-based locking/unlocking, and categorization of different memory capsules.

Real-Time Data Handling: Dynamic updates using Firebase Firestore and SupabaseStorage.
 
 
