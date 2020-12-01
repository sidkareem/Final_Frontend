import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component='fieldset'>
      {/* <FormLabel component="legend">Options</FormLabel> */}
      <RadioGroup
        aria-label='options'
        name='gender1'
        value={value}
        onChange={handleChange}>
        <FormControlLabel
          value='option1'
          control={<Radio />}
          label='Full Overwrite: Make Target = Source (i.e. all target records are cleared before copy)'
        />
        <FormControlLabel
          value='option2'
          control={<Radio />}
          label='Exclude any custom record in Target: Keep any record which begins with a Z from the clear data action before copy'
        />
      </RadioGroup>
    </FormControl>
  );
}
