import ActionType from "./ActionType";
import ActionPostRequest from "./ActionPostRequest";

const PostTest = async () => {
    await ActionPostRequest('Test', ActionType.Test);
}

export default PostTest;