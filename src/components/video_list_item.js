import React from 'react';

const VideoListItem = (props) => {
const video = props.video;
const onVideoSelect = props.onVideoSelect;
const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div>
      <li onClick={() => {onVideoSelect(video)}} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} alt=""/>
          </div>
          <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default VideoListItem;