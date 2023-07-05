import ActionType from "./ActionType";
import ActionPostRequest from "./ActionPostRequest";

const RestartPC = async () => {
    await ActionPostRequest('Restart', ActionType.Restart);
}

export default RestartPC;