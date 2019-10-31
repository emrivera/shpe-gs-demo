import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import { Select } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from 'prop-types';

function getStyles(id, array) {
  return {
    fontWeight: array.indexOf(id) === -1 ? 'bold' : ''
  }
}

/**
 * @param title - title to display
 * @param selectedValues - prop to keep track of selected values from parent component
 * @param options - available options
 * @param onChange - callback to notify parent with new selectedValues
 * @param labelGetter - function to transform an object from options/selected values into a display label
 * @returns MultiSelect component
 */
function MultiSelect({ title, selectedValues, options, onChange, labelGetter }) {
  return (
    <FormControl>
      <InputLabel id="multiple-people-select">{title}</InputLabel>
      <Select
        labelId="multiple-people-select"
        multiple
        required
        value={selectedValues}
        onChange={onChange}
        input={<Input id="multiple-people-select-input" />}
        renderValue={selected => (
          <div style={{ margin: 2, display: 'flex', flexWrap: 'wrap' }}>
            {selected.map(val => <Chip key={val.id} label={labelGetter(val)} style={{ margin: 2 }} />)}
          </div>
        )}
      >
        {options.map(val => (
          <MenuItem key={val.id} value={val} style={getStyles(val, options)}>
            {labelGetter(val)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}


MultiSelect.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.shape({})),
  options: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func,
  labelGetter: PropTypes.func.isRequired
};

MultiSelect.defaultProps = {
  value: [],
  onChange: () => {
  }
};

export default MultiSelect;