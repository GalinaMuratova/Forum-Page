import React, { useRef, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

interface Props {
  name: string;
  label: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput:React.FC<Props> = ({name, label, onChange}) => {
  const [fileName, setFileName]= useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName('');
    }

    onChange(e);
  };

  const activateInput = () => {
    const currentInputRef = inputRef.current;
    if (currentInputRef !== null) {
      currentInputRef.click();
    }
  };


  return (
    <>
      <input
        type='file'
        style={{display:'none'}}
        ref={inputRef}
        onChange={onFileChange}
        name={name}
      />
      <Grid container direction='row' spacing={2} alignItems='center'>
        <Grid item xs>
          <TextField
            value={fileName}
            label={label}
            disabled
          />
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={activateInput }>Find file</Button>
        </Grid>
      </Grid>
      
    </>
  );
};

export default FileInput;