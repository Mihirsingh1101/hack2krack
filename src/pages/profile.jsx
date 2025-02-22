import React from 'react';

const TimeCapsuleDashboard = () => {
  const capsuleData = [
    { type: 'STORIES', imgSrc: 'https://placehold.co/231x150?text=Stories' },
    { type: 'IMAGE', imgSrc: 'https://placehold.co/231x150?text=Image' },
    { type: 'VIDEO', imgSrc: 'https://placehold.co/231x150?text=Video' },
    { type: 'AUDIO', imgSrc: 'https://placehold.co/231x150?text=Audio' },
    { type: 'COLLAB', imgSrc: 'https://placehold.co/231x150?text=Collab' },
  ];

  const positions = [
    [118, 500],
    [604, 500],
    [1087, 500],
    [120, 850],
    [612, 850],
  ];

  return (
    <div style={{ width: 1437, height: 1024, position: 'relative', background: 'white' }}>
      <div
        style={{
          width: 1240,
          height: 57,
          left: 100,
          top: 54,
          position: 'absolute',
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            width: 205,
            height: 42,
            color: 'black',
            fontSize: 36,
            fontFamily: 'Italiana',
            fontWeight: '400',
            lineHeight: '40px',
          }}
        >
          Time capsule
        </div>
        <div
          style={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Inter',
            fontWeight: '700',
          }}
        >
          Dashboard
        </div>
        <div
          style={{
            width: 137,
            height: 43,
            padding: 12,
            background: '#2E9C5D',
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: 'Inter',
              fontWeight: '500',
            }}
          >
            Sign up/Log in
          </div>
        </div>
      </div>
      <div
        style={{
          width: 711,
          height: 79,
          left: 100,
          top: 200,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          alignItems: 'flex-start',
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <span
            style={{
              color: 'black',
              fontSize: 48,
              fontFamily: 'Karla',
              fontWeight: '700',
            }}
          >
            Hi, John<br />
          </span>
          <span
            style={{
              color: 'black',
              fontSize: 30,
              fontFamily: 'Karla',
              fontWeight: '700',
            }}
          >
            What brings you here today.....
          </span>
        </div>
      </div>
      <div
        style={{
          width: '200%',
          height: '200%',
          left: '50%',
          top: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #54BE96 0%, rgba(255,255,255,1) 100%)',
          opacity: 0.3,
        }}
      ></div>
      {capsuleData.map((capsule, idx) => (
        <div key={capsule.type} style={{ position: 'absolute', left: positions[idx][0], top: positions[idx][1] }}>
          <img src={capsule.imgSrc} alt={`${capsule.type} capsule`} style={{ width: 231, height: 150, borderRadius: 8 }} />
          <div
            style={{
              width: 231,
              height: 39,
              textAlign: 'center',
              color: 'black',
              fontSize: 27,
              fontFamily: 'Karla',
              fontWeight: '600',
              lineHeight: '40px',
              marginTop: 10,
            }}
          >
            {capsule.type} CAPSULE
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeCapsuleDashboard;
