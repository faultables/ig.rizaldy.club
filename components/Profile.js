const Profile = ({ profile, totalPosts }) => (
  <div className="flex flex-warp">
    <div className="lg:w-4/12 w-3/12 md:py-10 lg:px-20 md:px-10">
      <img
        alt={profile.display_name}
        src={profile.avatar}
        className="w-100 rounded-full mx-auto border border-gray-200 p-1"
      />
    </div>
    <div className="lg:w-9/12 md:w-10/12 px-10 mb-5 md:p-5">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">{profile.username}</h2>
        <div className="ml-4">
          <a
            className="rounded-md bg-gray-100 px-5 font-semibold py-2 ml-2 text-sm leading-relaxed"
            href={profile.follow_url}
          >
            Follow
          </a>
          <a
            className="rounded-md bg-gray-100 px-5 font-semibold py-2 ml-2 text-sm leading-relaxed"
            href={profile.message_url}
          >
            Message
          </a>
        </div>
      </div>
      <div className="my-5 font-bold text-sm">
        <p>{totalPosts} posts</p>
      </div>
      <p className="font-bold mb-1">{profile.display_name}</p>
      <p>{profile.about}</p>
      <p className="leading-loose font-semibold text-blue-900">
        <a
          target="_blank"
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
