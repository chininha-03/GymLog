namespace GymLog.Models
{
    public class RoutinesExercisesBody
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public bool IsPrivate { get; set; }
        public long RoutinesSetId { get; set; }
        public long RoutinesExerciseId { get; set; }
    }
}
