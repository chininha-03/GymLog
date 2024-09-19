namespace GymLog.Models
{
    public class RoutinesExercisesBody
    {
        public Guid RoutinesExercisesBodyId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public bool IsPrivate { get; set; }
        public Guid RoutinesSetId { get; set; }
        public RoutinesSets RoutinesSets { get; set; }
        public Guid RoutinesExercisesId { get; set; }
        public RoutinesExercises RoutinesExercises { get; set; }
    }
}
