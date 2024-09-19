namespace GymLog.Models
{
    public class Routine
    {
        public Guid RoutineId { get; set; }
        public string Title { get; set; }
        public long FolderId { get; set; }
        public string Exercises { get; set; }
    }
}
