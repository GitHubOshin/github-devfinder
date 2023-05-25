function UserProfile() {
  return (
    <section className="bg-dmBgContent">
      <img alt="Profile" />
      <div>
        <div>
          <b>The Octocat</b>
          <h6>@octocat</h6>
          <p>Joined 25 Jan 2011</p>
        </div>
        <p>bio</p>
        <table className="bg-dm w-full">
          <tr>
            <th>Repos</th>
            <th>Followers</th>
            <th>Following</th>
          </tr>
          <tr>
            <td>8</td>
            <td>3938</td>
            <td>9</td>
          </tr>
        </table>
        <div>contacts</div>
      </div>
    </section>
  )
}

export default UserProfile
