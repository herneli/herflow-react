import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    marginTop: 20
  }
};

class TextEditor extends Component {
  handleOnChange = event => {
    let value = event.target.value;
    if (
      this.props.schema.type === "integer" ||
      this.props.schema.type === "number"
    ) {
      value = Number(value);
      if (!isNaN(value)) {
        this.props.onChange && this.props.onChange(this.props.name, value);
      }
    } else {
      this.props.onChange && this.props.onChange(this.props.name, value);
    }
  };
  render() {
    let { value, name, schema, classes } = this.props;
    let type = "text";
    if (schema.type === "string") {
      switch (schema.format) {
        case "date":
          type = "date";
          break;
        case "email":
          type = "email";
          break;
        case "password":
          type = "password";
          break;
        default:
          type = "text";
      }
    } else if (schema.type === "number" || schema.type === "integer") {
      type = "number";
    }

    return (
      <TextField
        className={classes.root}
        fullWidth
        type={type}
        placeholder={name}
        label={name}
        value={value}
        onChange={this.handleOnChange}
        error={this.props.error}
        helperText={this.props.helperText}
        InputProps={this.props.InputProps}
      />
    );
  }
}

export default withStyles(styles)(TextEditor);
