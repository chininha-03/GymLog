namespace GymLog.Models
{
    public class RoutineFolder
    {
        public Guid RoutineFolderId { get; set; }
        public int Index { get; set; }
        public string Title { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
