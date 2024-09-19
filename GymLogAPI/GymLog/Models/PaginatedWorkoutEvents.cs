namespace GymLog.Models
{
    public class PaginatedWorkoutEvents
    {
        public Guid PaginatedWorkoutEventsId { get; set; }
        public int Page { get; set; }
        public int PageCount { get; set; }
        public string Events { get; set; }
    }
}
