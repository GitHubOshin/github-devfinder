function Contact(props) {
  const { contact } = props
  return (
    <span>
      {contact === null ? (
        <span className="text-gray-400">Not avilable</span>
      ) : (
        contact
      )}
    </span>
  )
}

export default Contact
