export const FormName = ({ handleSubmit, value, handleChange }) => (
    <form onSubmit={handleSubmit}>
        <input 
            value={value} 
            onChange={handleChange} 
            data-testid="input" 
            type="text" 
        />  
        <input 
            type="submit"  
        /> 
    </form>
);

