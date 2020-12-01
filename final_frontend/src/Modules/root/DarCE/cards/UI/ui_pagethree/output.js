import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function Output() {
  return (
    <TextareaAutosize
     
      style={
          {
              width:"100%",
              height:1000
          }
      }
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="...Output displayed here"
    />
  );
}
