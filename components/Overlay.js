import { MEDIA_TYPE } from "../constants";

const OverlayContent = ({ overlayContent }) => {
  if (overlayContent?.type === MEDIA_TYPE.PHOTOS) {
    return (
      <img
        alt={overlayContent?.url}
        src={overlayContent?.url}
        className="z-20 cursor-default"
      />
    );
  } else if (overlayContent?.type === MEDIA_TYPE.VIDEOS) {
    return (
      <iframe
        width="50%"
        height="50%"
        allow="fullscreen"
        sandbox="allow-same-origin allow-scripts allow-popups"
        src={overlayContent?.url}
      ></iframe>
    );
  }
};

const Overlay = ({ overlayContent, closeOverlay }) => {
  const isOverlayOpen = overlayContent?.type !== undefined;

  return (
    <div
      onClick={closeOverlay}
      className={`${
        isOverlayOpen
          ? "bg-neutral-800/95 fixed w-screen h-screen left-0 top-0 cursor-pointer"
          : ""
      }`}
    >
      {isOverlayOpen ? (
        <p
          onClick={closeOverlay}
          className="fixed right-0 bottom-0 m-5 text-white rounded text-sm"
        >
          Click anywhere or press "Escape" to close
        </p>
      ) : null}

      <div
        className={`flex justify-center items-center ${
          isOverlayOpen ? "h-screen w-screen" : "h-0 w-0"
        }`}
      >
        <OverlayContent overlayContent={overlayContent} />
      </div>
    </div>
  );
};

export default Overlay;
