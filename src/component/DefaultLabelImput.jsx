import React from "react";

export const DefaultLabelImput = ({ label, type = "text", onChange }) => {
  const id = label.toLowerCase() + "Input";

  return (
    <div class="mb-3">
      <label for={id} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" onChange={onChange} id={id} />
    </div>
  );
};
