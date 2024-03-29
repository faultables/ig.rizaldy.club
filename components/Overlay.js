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
        className="md:w-6/12 w-full h-1/2"
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
          ? "bg-neutral-800/95 fixed w-full h-full left-0 top-0 cursor-pointer z-30"
          : ""
      }`}
    >
      {isOverlayOpen ? (
        <p
          onClick={closeOverlay}
          className="fixed right-0 bottom-0 md:mx-5 my-5 text-white rounded text-sm text-center w-full z-30 md:bottom-10 px-2 leading-relaxed"
        >
          Click anywhere or press "Escape" to close
          <span className="px-2">|</span>
          <a
            className="underline"
            target="_blank"
            rel="noreferer noopener"
            href={overlayContent?.url}
          >
            Click here
          </a>{" "}
          to see the raw media
        </p>
      ) : null}

      <div
        className={`flex justify-center items-center ${
          isOverlayOpen ? "h-full w-full" : "h-0 w-0"
        }`}
      >
        <OverlayContent overlayContent={overlayContent} />
      </div>
    </div>
  );
};

export default Overlay;
