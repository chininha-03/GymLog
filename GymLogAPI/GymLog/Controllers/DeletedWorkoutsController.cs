using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GymLog.Data;
using GymLog.Models;

namespace GymLog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeletedWorkoutsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DeletedWorkoutsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/DeletedWorkouts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeletedWorkout>>> GetDeletedWorkout()
        {
            return await _context.DeletedWorkout.ToListAsync();
        }

        // GET: api/DeletedWorkouts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeletedWorkout>> GetDeletedWorkout(long id)
        {
            var deletedWorkout = await _context.DeletedWorkout.FindAsync(id);

            if (deletedWorkout == null)
            {
                return NotFound();
            }

            return deletedWorkout;
        }

        // PUT: api/DeletedWorkouts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeletedWorkout(long id, DeletedWorkout deletedWorkout)
        {
            if (id != deletedWorkout.Id)
            {
                return BadRequest();
            }

            _context.Entry(deletedWorkout).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeletedWorkoutExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DeletedWorkouts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DeletedWorkout>> PostDeletedWorkout(DeletedWorkout deletedWorkout)
        {
            _context.DeletedWorkout.Add(deletedWorkout);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeletedWorkout", new { id = deletedWorkout.Id }, deletedWorkout);
        }

        // DELETE: api/DeletedWorkouts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeletedWorkout(long id)
        {
            var deletedWorkout = await _context.DeletedWorkout.FindAsync(id);
            if (deletedWorkout == null)
            {
                return NotFound();
            }

            _context.DeletedWorkout.Remove(deletedWorkout);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeletedWorkoutExists(long id)
        {
            return _context.DeletedWorkout.Any(e => e.Id == id);
        }
    }
}
