import React, { useState } from "react";
import "./style.scss";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";
import { PlayBtn } from "../PlayBtn";
import VideoPopup from "../../../Components/videoPopup/VideoPopup";
import Img from "../../../Components/lazyLoadImage/Img";
import posterFallback from "../../../assets/no-poster.png";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  // Check if there are videos available
  const hasVideos = data && data.results && data.results.length > 0;

  return (
    <div className="videosSection">
      <ContentWrapper>
        {/* Render the section heading only if there are videos available */}
        {hasVideos && <div className="sectionHeading">Official Videos</div>}
        {!loading ? (
          <div className="videos">
            {data?.results
              ?.filter((video) => video.key && video.key.length > 0)
              .map((video) => (
                <div
                  className="videoItem"
                  key={video.id}
                  onClick={() => {
                    setVideoId(video.key);
                    setShow(true);
                  }}
                >
                  <div className="videoThumbnail">
                    <Img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    />
                    <PlayBtn />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
