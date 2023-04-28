import SendIcon from '@mui/icons-material/Send';
import { Button, FormControl, InputLabel, FormHelperText, Input} from '@mui/material';
import './Form.style.css';

export const Form = ({ handleSubmit, value, handleChange, inputRef }) => (  
    <form onSubmit={handleSubmit}>
        <FormControl className="formName">
            <InputLabel htmlFor="my-input">Message</InputLabel>
            <Input id="my-input" value={value} onChange={handleChange} aria-describedby="my-helper-text" inputRef={inputRef}/>
            <FormHelperText id="my-helper-text">Please enter your message.</FormHelperText>
            <Button type="submit" aria-label="button" variant="contained" endIcon={<SendIcon />}>Send</Button>
        </FormControl>
    </form>  
);