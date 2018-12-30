import React from "react";
import PropTypes from "prop-types";
import DescriptionField from "../fields/DescriptionField.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange
  } = props;
  return (
    <div className={`checkbox ${disabled || readonly ? "disabled" : ""}`}>
      {schema.description && (
        <DescriptionField description={schema.description} />
      )}
      <FormControlLabel
        control={
          <Checkbox
            checked={typeof value === "undefined" ? false : value}
            onChange={event => onChange(event.target.checked)}
            required={required}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            id={id}
          />
        }
        label={label}
      />
    </div>
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func
  };
}

export default CheckboxWidget;
