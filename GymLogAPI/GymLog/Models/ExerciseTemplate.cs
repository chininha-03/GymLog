namespace GymLog.Models
{
    public class ExerciseTemplate
    {
        public Guid ExerciseTemplateId { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public string PrimaryMuscleGroup { get; set; }
        public string SecondaryMuscleGroups { get; set; }
        public bool IsCustom { get; set; }
    }
}
