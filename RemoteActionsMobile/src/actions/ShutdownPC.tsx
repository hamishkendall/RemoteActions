import ActionType from "./ActionType";
import ActionPostRequest from "./ActionPostRequest";


const ShutdownPC = async () => {
    await ActionPostRequest('Shutdown', ActionType.Shutdown);
}

export default ShutdownPC;