using System.Reflection.PortableExecutable;

namespace GymLog.Models
{
    public class Sets
    {
        public Guid SetsId { get; set; }
        public int reps { get; set; }
        public int peso { get; set; }
        public string setType { get; set; }
    }
}
