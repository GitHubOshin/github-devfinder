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
    <section className="bg-dmBgContent text-white">
      <img alt="Profile" src={profile_pic} />
      <div>
        <div className="text-white">
          <b>{name}</b>
          <h6>@{user_id}</h6>
          <p>Joined {joined}</p>
        </div>
        <p>{bio === null ? 'This profile has no bio' : bio}</p>
        <div className="bg-dm w-full text-white flex">
          <Activity activity="Repos" count={repos} />
          <Activity activity="Followers" count={followers} />
          <Activity activity="Following" count={following} />
        </div>
        <div className="text-white">
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
