import ActionType from "./ActionType";
import ActionPostRequest from "./ActionPostRequest";

const TeapotPost = async () => {
    await ActionPostRequest('Teapot', ActionType.Teapot);
}

export default TeapotPost;