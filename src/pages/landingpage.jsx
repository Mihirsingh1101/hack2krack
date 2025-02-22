import React from 'react';

const TimeCapsuleProfile = () => {
  return (
    <div style={{ width: '1440px', height: '1024px', backgroundColor: 'white', position: 'relative' }}>
      {/* Header Section */}
      <div style={{ width: '1240px', height: '57px', left: '100px', top: '54px', position: 'absolute', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '36px', fontFamily: 'Italiana', fontWeight: '400', lineHeight: '40px', color: 'black' }}>
          Time capsule
        </div>
        <div style={{ fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', color: 'black' }}>
          Home
        </div>
        <div style={{ width: '137px', height: '43px', padding: '12px', backgroundColor: '#2E9C5D', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: '500', color: 'white' }}>
            Sign up/Log in
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ width: '711px', height: '388px', left: '100px', top: '211px', position: 'absolute', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ fontSize: '64px', fontFamily: 'Inter', fontWeight: '700', lineHeight: '90px', color: '#191A15' }}>
          Preserving <span style={{ color: '#2E9C5D' }}>Memories</span> Forever
        </div>
        <div style={{ fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', lineHeight: '30px', color: 'black', width: '461px' }}>
          A place to remember, share, and cherish the stories of those we've loved.
        </div>
        <div style={{ display: 'flex', gap: '38px' }}>
          <div style={{ padding: '20px 30px', backgroundColor: '#2E9C5D', borderRadius: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', color: 'white' }}>
              Get started
            </div>
          </div>
        </div>
      </div>

      {/* Graphics */}
      <div style={{ left: '459px', top: '301px', position: 'absolute' }}>
        <svg width="308" height="25" viewBox="0 0 308 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 21C47.61 8.1714 168.664 -9.78864 304 21" stroke="#54BD95" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </div>

      <div style={{ width: '634px', height: '634px', left: '1076px', top: '350px', position: 'absolute', backgroundColor: '#54BE96', borderRadius: '9999px', filter: 'blur(1000px)' }}></div>
      <img src="https://placehold.co/286x284" alt="Placeholder" style={{ width: '286.5px', height: '284.25px', left: '790px', top: '553px', position: 'absolute' }} />
      <img src="https://placehold.co/272x270" alt="Placeholder" style={{ width: '272.25px', height: '270px', left: '876px', top: '170px', position: 'absolute' }} />
      <img src="https://placehold.co/301x300" alt="Placeholder" style={{ width: '301.5px', height: '300px', left: '1117px', top: '354px', position: 'absolute' }} />
    </div>
  );
};

export default TimeCapsuleProfile;
