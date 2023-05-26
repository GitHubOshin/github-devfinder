import Activity from './Activity'

function UserProfile(props) {
  const {
    profile_pic,
    name,
    user_id,
    joined,
    bio,
    repos,
    followers,
    following,
    location,
    blog,
    twitter,
    company
  } = props
  return (
    <section className="bg-dmBgContent text-white max-w-[730px] min-w-[327px] max-h-[463px] flex mobile:flex-col desktop:flex-row justify-between rounded-2xl mobile:px-[24px] desktop:px-[47px] desktop:py-[48px]">
      <img
        alt="Profile"
        src={profile_pic}
        className="min-w-[70px] max-w-[117px] min-h-[70px] max-h-[117px] rounded-full"
      />
      <div className="max-w-[480px] w-full flex flex-col gap-y-[30px]">
        <div className="text-white flex flex-row justify-between">
          <div>
            <b className="text-2xl">{name}</b>
            <h6 className="text-[#1064ff] mt-1">@{user_id}</h6>
          </div>
          <p className="">Joined {joined}</p>
        </div>
        <p className="text-[#B2B5BF]">
          {bio === null ? 'This profile has no bio' : bio}
        </p>
        <div className="bg-dm w-full text-white flex justify-between min-w-[279px] max-w-[480px] rounded-xl px-[32px] py-[20px]">
          <Activity activity="Repos" count={repos} />
          <Activity activity="Followers" count={followers} />
          <Activity activity="Following" count={following} />
        </div>
        <div className="text-white grid grid-cols-2 gap-5">
          <span>{location}</span>
          <span>{twitter === null ? 'Not avilable' : twitter}</span>
          <span>{blog}</span>
          <span>{company}</span>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
