namespace GymLog.Models
{
    public class Workout
    {
        public Guid WorkoutId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string Exercises { get; set; }
    }
}
