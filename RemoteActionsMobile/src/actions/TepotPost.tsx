import ActionType from "./ActionType";
import ActionPostRequest from "./ActionPostRequest";

const TeapotPost = () => {
    ActionPostRequest('Teapot', ActionType.Teapot);
}

export default TeapotPost;