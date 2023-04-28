import './Message.style.css';

export const Message = ({ text, author }) => {
    return (
        <div className='message'>
            <span>{author}: </span>
            <span>{text}</span>
        </div>
    );
};