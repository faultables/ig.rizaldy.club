import xml2json from "xml2json";

import { Client } from "minio";
import { Fragment, useState, useEffect } from "react";

import { ESCAPE_KEY, MEDIA_PER_PAGE, MEDIA_TYPE } from "../constants";

import Tab from "../components/Tab";
import Feed from "../components/Feed";
import Profile from "../components/Profile";
import Overlay from "../components/Overlay";

import config from "../config.json";

const Content = ({ activeTab, photos, videos, ...props }) => {
  if (activeTab === MEDIA_TYPE.PHOTOS) {
    return <Feed media={photos} type={activeTab} {...props} />;
  } else if (activeTab === MEDIA_TYPE.VIDEOS) {
    return <Feed media={videos} type={activeTab} {...props} />;
  } else {
    return <div className="text-center pt-10 font-bold text-2xl">nice try</div>;
  }
};

const IndexPage = ({ photos, videos, totalPosts }) => {
  const [activeTab, setActiveTab] = useState(MEDIA_TYPE.PHOTOS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlayContent, setOverlayContent] = useState(null);

  const closeOverlay = () => setOverlayContent(null);

  const handleClose = ({ keyCode }) => {
    if (keyCode === ESCAPE_KEY) {
      closeOverlay();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleClose);

    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, [handleClose]);

  return (
    <Fragment>
      <Profile profile={config.profile} totalPosts={totalPosts} />
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      <Overlay overlayContent={overlayContent} closeOverlay={closeOverlay} />
      <Content
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        limitPerPage={MEDIA_PER_PAGE}
        activeTab={activeTab}
        setOverlayContent={setOverlayContent}
        photos={photos}
        videos={videos}
      />
    </Fragment>
  );
};

export async function getStaticProps() {
  const minioEndpoint = process.env.MINIO_ENDPOINT;
  const minioBucket = process.env.MINIO_BUCKET;

  const mc = new Client({
    endPoint: minioEndpoint,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
  });

  const minioObjects = await new Promise((resolve, reject) => {
    const data = [];

    const stream = mc.listObjectsV2(minioBucket, "", true, "");

    stream.on("data", (obj) => data.push(obj.name));
    stream.on("error", reject);
    stream.on("end", () => {
      resolve(data);
    });
  });

  const photos = minioObjects.map((id) => ({
    id,
    url: `https://${minioEndpoint}/${minioBucket}/${id}`,
    previewPath: `https://${minioEndpoint}/${minioBucket}/${id}`,
  }));

  const getPeertubeFeeds = await fetch(process.env.PEERTUBE_FEED_URL);
  const peertubeFeeds = await getPeertubeFeeds.text();

  const peertubeFeedsJSON = xml2json.toJson(peertubeFeeds, { object: true });
  const peertubeItems = peertubeFeedsJSON.rss.channel.item;

  const videos = peertubeItems.map((item) => ({
    id: item.guid,
    url: item["media:embed"].url,
    previewPath: item["media:thumbnail"][0].url,
  }));

  return {
    props: {
      config,
      photos,
      videos,
      totalPosts: photos.length + videos.length,
    },
  };
}

export default IndexPage;
