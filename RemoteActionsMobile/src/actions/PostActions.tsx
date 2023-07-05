import ActionType from "./ActionType";
import ActionPostRequest from "./ActionPostRequest";


export const PostTest = async () => {
    await ActionPostRequest('Test', ActionType.Test);
}

export const TeapotPost = async () => {
    await ActionPostRequest('Teapot', ActionType.Teapot);
}

export const ShutdownPC = async () => {
    await ActionPostRequest('Shutdown', ActionType.Shutdown);
}

export const RestartPC = async () => {
    await ActionPostRequest('Restart', ActionType.Restart);
}