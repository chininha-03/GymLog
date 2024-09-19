namespace GymLog.Models
{
    public class RoutinesExercises
    {
        public Guid RoutinesExercisesId { get; set; }
        public string NotesExercises { get; set; }
        public int RestSeconds { get; set; }
        public Guid RoutinesSetsId { get; set; }
        public RoutinesSets RoutinesSets { get; set; }
    }
}
