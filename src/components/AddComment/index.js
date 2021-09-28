import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentThunk } from '../../store/modules/user/thunks';
import './styles.css';

const AddComment = () => {
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(addCommentThunk(newComment));
  };

  return (
    <div className="container">
      <div className="conteiner__content">{comment.comments}</div>
      <input type="text" onChange={(e) => setNewComment(e.target.value)} />
      <button onClick={handleClick}>New comment</button>
    </div>
  );
};

export default AddComment;
