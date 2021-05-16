import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={image} alt="" />
      <div className="videoCard_info">
        <Avatar
          className="videoCard_avatar"
          alt="Remy Sharp"
          src="https://yt3.ggpht.com/yti/ANoDKi4rQgwf52nxX5QQRJATf6f1FHY7oGg141KrPOtR5Q=s88-c-k-c0x00ffffff-no-rj-mo"
        />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}.{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
