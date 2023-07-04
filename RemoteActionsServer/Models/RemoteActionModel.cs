namespace RemoteActionsServer.Models
{
    public class RemoteActionModel
    {
        public string AuthToken { get; set; }
        public ActionType Action { get; set; }
    }
}
