using RemoteActionsServer.Models;

namespace RemoteActionsServer
{
    public class ActionExecutor
    {
        public static int Execute(ActionType action)
        {
            switch(action)
            {
                case ActionType.Test: return Test();
                case ActionType.Shutdown: return ShutdownPC();

                default: return StatusCodes.Status418ImATeapot;
            }
        }

        private static int Test()
        {
            return StatusCodes.Status200OK;
        }

        private static int ShutdownPC()
        {
            //shutdown the pc after 15 seconds
            string strCmdText = "/C shutdown /s /t 15 /c \"Remote Action Shutdown.\"";
            System.Diagnostics.Process.Start("CMD.exe", strCmdText);

            return StatusCodes.Status200OK;
        }
    }
}
