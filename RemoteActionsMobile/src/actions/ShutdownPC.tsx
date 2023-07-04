import ActionType from "./ActionType";
import ActionPostRequest from "./ActionPostRequest";


const ShutdownPC = () => {
    ActionPostRequest('Shutdown', ActionType.Shutdown);
}

export default ShutdownPC;