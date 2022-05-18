import './reset.css';
import Api from './modules/Api.js';

const ApiCalls = new Api();
ApiCalls.GetMeals();

const saveComment = (data) => {
  ApiCalls.AddComment(data);
};
export default saveComment;
