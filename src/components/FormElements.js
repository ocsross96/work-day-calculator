export const Input = (props) => {
  return (
    <div className="form-group">
      <label for="{props.label}">Start time</label>
      <input type="text" className="form-control" id="{props.id}" value={props.value} />
    </div>
  );
};