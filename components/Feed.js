const Feed = ({
  media,
  type,
  setOverlayContent,
  currentIndex,
  limitPerPage,
}) => (
  <main className="grid grid-cols-3 gap-1">
    {media
      .slice(currentIndex, limitPerPage)
      .map(({ id, url, previewPath, embedPath = url }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferer"
          className="hover:opacity-70"
          onClick={(e) => {
            e.preventDefault();

            setOverlayContent({
              url: embedPath,
              type,
            });
          }}
        >
          <img alt={url} loading="lazy" src={previewPath} className={`aspect-${type} bg-neutral-100 dark:bg-neutral-900`} />
        </a>
      ))}
  </main>
);

export default Feed;
