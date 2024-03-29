const Profile = ({ profile, totalPosts }) => (
  <div className="flex flex-warp">
    <div className="lg:w-4/12 w-3/12 md:py-10 ml-3 md:ml-0 lg:px-20 md:px-10">
      <img
        loading="lazy"
        alt={profile.display_name}
        src={profile.avatar}
        className="w-full rounded-full mx-auto border bg-neutral-100 border-gray-200 p-1 dark:border-neutral-800 dark:bg-black"
      />
    </div>
    <div className="lg:w-9/12 md:w-10/12 mb-5 md:p-5 ml-5">
      <div className="md:flex items-center">
        <h2 className="text-2xl font-semibold">{profile.username}</h2>
        <div className="md:ml-4 my-4">
          <a
            className="rounded-md bg-gray-100 px-5 font-semibold py-2 md:ml-2 text-sm leading-relaxed dark:bg-neutral-800 hover:opacity-70"
            href={profile.follow_url}
          >
            Follow
          </a>
          <a
            className="rounded-md bg-gray-100 px-5 font-semibold py-2 ml-2 text-sm leading-relaxed dark:bg-neutral-800 hover:opacity-70"
            href={profile.message_url}
          >
            Message
          </a>
        </div>
      </div>
      <div className="md:my-5 my-3 font-bold text-sm">
        <p>{totalPosts} posts</p>
      </div>
      <p className="font-bold mb-1">{profile.display_name}</p>
      <p>{profile.about}</p>
      <p className="leading-loose font-semibold text-blue-900 dark:text-blue-200">
        <a
          target="_blank"
          className="hover:underline"
          rel="noopener noreferer"
          href={`https://${profile.link}`}
        >
          {profile.link}
        </a>
      </p>
    </div>
  </div>
);

export default Profile;
