function Activity(props) {
  const { activity, count } = props
  return (
    <div>
      <h1>{activity}</h1>
      <h6>{count}</h6>
    </div>
  )
}

export default Activity
