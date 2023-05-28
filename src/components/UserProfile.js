import Activity from './Activity'
import Contact from './Contact'

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
    <section className="bg-dmBgContent text-white flex mobile:flex-col desktop:flex-row items-center justify-between rounded-2xl mobile:px-[24px] desktop:px-[47px] desktop:py-[48px] mobile:py-8">
      <img
        alt="Profile"
        src={profile_pic}
        className="min-w-[70px] max-w-[117px] min-h-[70px] max-h-[117px] rounded-full"
      />
      <div className="min-w-[279px] max-w-[480px] w-full flex flex-col gap-y-[30px]">
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
        <div className="bg-dm w-full text-white flex justify-between rounded-xl px-[32px] py-[20px]">
          <Activity activity="Repos" count={repos} />
          <Activity activity="Followers" count={followers} />
          <Activity activity="Following" count={following} />
        </div>
        <div className="text-white grid grid-cols-2 gap-5">
          <Contact contact={location} />
          <Contact contact={twitter} />
          <Contact contact={blog} />
          <Contact contact={company} />
        </div>
      </div>
    </section>
  )
}

export default UserProfile
