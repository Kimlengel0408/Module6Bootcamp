function UserInfo(props) {
  return (
    <div>
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function ComplexComment(props) {
  // complex component which displays different elements of a comment
  return (
    <div className="Comment componentBox">
      <UserInfo user={props.author} />{" "}
      {/* here we pass
the author prop down to the UserInfo component */}
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date.toLocaleString()}</div>
    </div>
  );
}

export default ComplexComment;
