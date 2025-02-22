import React from 'react';

const VideoCapsule = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Ellipse Background */}
      <div
        className="absolute"
        style={{
          width: '634px',
          height: '634px',
          opacity: 0.84,
          backgroundColor: '#54BE96',
          boxShadow: '1000px 1000px 1000px',
          borderRadius: '9999px',
          filter: 'blur(1000px)'
        }}
      />

      {/* Header Frame */}
      <div
        className="flex justify-between items-center w-[1240px] h-[64px]"
      >
        <div className="relative h-[64px]">
          <div className="absolute top-0 left-0">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="64" height="64" fill="url(#pattern0_0_720)" />
              <defs>
                <pattern id="pattern0_0_720" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_0_720" transform="scale(0.0015625)" />
                </pattern>
                <image
                  id="image0_0_720"
                  width="640"
                  height="640"
                  preserveAspectRatio="none"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAYAAAAMzckjAAAAAXNSR0IArs4c6QAAIABJREFUeF7s3Qd4lEX+B/Dfb+Z9391NoYRQBUTFXs6TsyCoURFExcMSCyUUPVQQEOS8O8+r3nmgqBRPERWRpmc8T0FFQDSKig272JCiIE1a2u6+ZebPhMR/xEAqkM1+93l8UNl935nPDOw3M+/MMOEFAQhAAAIQgAAEIJBUApxUtUVlIQABCEAAAhCAAAQIARCdAAIQgAAEIAABCCSZAAJgkjU4qgsBCEAAAhCAAAQQANEHIAABCEAAAhCAQJIJIAAmWYOjuhCAAAQgAAEIQAABEH0AAhCAAAQgAAEIJJkAAmCSNTiqCwEIQAACEIAABBAA0QcgAAEIQAACEIBAkgkgACZZg6O6EIAABCAAAQhAAAEQfQACEIAABCAAAQgkmQACYJI1OKoLAQhAAAIQgAAEEADRByAAAQhAAAIQgECSCSAAJlmDo7oQgAAEIAABCEAAARB9AAIQgAAEIAABCCSZAAJgkjU4qgsBCEAAAhCAAAQQANEHIAABCEAAAhCAQJIJIAAmWYOjuhCAAAQgAAEIQAABEH0AAhCAAAQgAAEIJJkAAmCSNTiqCwEIQAACEIAABBAA0QcgAAEIQAACEIBAkgkgACZZg6O6EIAABCAAAQhAAAEQfQACEIAABCAAAQgkmQACYJI1OKoLAQhAAAIQgAAEEADRByAAAQhAAAIQgECSCSAAJlmDo7oQgAAEIAABCEAAARB9AAIQgAAEIAABCCSZAAJgkjU4qgsBCEAAAhCAAAQQANEHIAABCEAAAhCAQJIJIAAmWYOjuhCAAAQgAAEIQAABEH0AAhCAAAQgAAEIJJkAAmCSNTiqCwEIQAACEIAABBAA0QcgAAEIQAACEIBAkgkgACZZg6O6EIAABCAAAQhAAAEQfQACEIAABCAAAQgkmQACYJI1OKoLAQhAAAIQgAAEEADRByAAAQhAAAIQgECSCSAAJlmDo7oQgAAEIAABCEAAARB9AAIQgAAEIAABCCSZAAJgkjU4qgsBCEAAAhCAAAQQANEHIAABCEAAAhCAQJIJIAAmWYOjuhCAAAQgAAEIQAABEH0AAhCAAAQgAAEIJJkAAmCSNTiqCwEIQAACEIAABBAA0QcgAAEIQAACEIBAkgkgACZZg6O6EIAABCAAAQhAAAEQfQACEIAABCAAAQgkmQACYJI1OKoLAQhAAAIQgAAEEADRByAAAQhAAAIQgECSCSAAJlmDo7oQgAAEIAABCEAAARB9AAIQgAAEIAABCCSZAAJgkjU4qgsBCEAAAhCAAAQQANEHIAABCEAAAhCAQJIJIAAmWYOjuhCAAAQgAAEIQAABEH0AAhCAAAQgAAEIJJkAAmCSNTiqCwEIQAACEIAABBAA0QcgAAEIQAACEIBAkgkgACZZg6O6EIAABCAAAQhAAAEQfQACEIAABCAAAQgkmQACYJI1OKoLAQhAAAIQgAAEEADRByAAAQhAAAIQgECSCSAAJlmDo7oQgAAEIAABCEAAARB9AAIQgAAEIAABCCSZAAJgkjU4qgsBCEAAAhCAAAQQANEHIAABCEAAAhCAQJIJIAAmWYOjuhCAAAQgAAEIQAABEH0AAhCAAAQgAAEIJJkAAmCSNTiqCwEIQAACEIAABBAA0QcgAAEIQAACEIBAkgkgACZZg6O6EIAABCAAAQhAAAEQfQACEIAABCAAAQgkmQACYJI1OKoLAQhAAAIQgAAEEADRByAAAQhAAAIQgECSCSAAJlmDo7oQgAAEIAABCEAAARB9AAIQgAAEIAABCCSZAA=="
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCapsule;
