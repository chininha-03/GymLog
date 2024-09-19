using System.Reflection.PortableExecutable;

namespace GymLog.Models
{
    public class RoutinesSets
    {
        public Guid RoutinesSetsId { get; set; }
        public int Reps { get; set; }
        public int Peso { get; set; }
        public int SetType { get; set; }
    }
}
