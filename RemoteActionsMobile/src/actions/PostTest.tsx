import ActionType from "./ActionType";
import ActionPostRequest from "./ActionPostRequest";

const PostTest = () => {
    ActionPostRequest('Test', ActionType.Test);
}

export default PostTest;