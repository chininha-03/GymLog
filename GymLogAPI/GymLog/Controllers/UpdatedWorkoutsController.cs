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
    public class UpdatedWorkoutsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UpdatedWorkoutsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/UpdatedWorkouts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UpdatedWorkout>>> GetUpdatedWorkout()
        {
            return await _context.UpdatedWorkout.ToListAsync();
        }

        // GET: api/UpdatedWorkouts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UpdatedWorkout>> GetUpdatedWorkout(long id)
        {
            var updatedWorkout = await _context.UpdatedWorkout.FindAsync(id);

            if (updatedWorkout == null)
            {
                return NotFound();
            }

            return updatedWorkout;
        }

        // PUT: api/UpdatedWorkouts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUpdatedWorkout(long id, UpdatedWorkout updatedWorkout)
        {
            if (id != updatedWorkout.Id)
            {
                return BadRequest();
            }

            _context.Entry(updatedWorkout).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UpdatedWorkoutExists(id))
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

        // POST: api/UpdatedWorkouts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UpdatedWorkout>> PostUpdatedWorkout(UpdatedWorkout updatedWorkout)
        {
            _context.UpdatedWorkout.Add(updatedWorkout);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUpdatedWorkout", new { id = updatedWorkout.Id }, updatedWorkout);
        }

        // DELETE: api/UpdatedWorkouts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUpdatedWorkout(long id)
        {
            var updatedWorkout = await _context.UpdatedWorkout.FindAsync(id);
            if (updatedWorkout == null)
            {
                return NotFound();
            }

            _context.UpdatedWorkout.Remove(updatedWorkout);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UpdatedWorkoutExists(long id)
        {
            return _context.UpdatedWorkout.Any(e => e.Id == id);
        }
    }
}
