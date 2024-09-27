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
    public class RoutinesExercisesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RoutinesExercisesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/RoutinesExercises
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoutinesExercises>>> GetRoutinesExercises()
        {
            return await _context.RoutinesExercises.ToListAsync();
        }

        // GET: api/RoutinesExercises/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoutinesExercises>> GetRoutinesExercises(Guid id)
        {
            var routinesExercises = await _context.RoutinesExercises.FindAsync(id);

            if (routinesExercises == null)
            {
                return NotFound();
            }

            return routinesExercises;
        }

        // PUT: api/RoutinesExercises/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoutinesExercises(Guid id, RoutinesExercises routinesExercises)
        {
            if (id != routinesExercises.RoutinesExercisesId)
            {
                return BadRequest();
            }

            _context.Entry(routinesExercises).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoutinesExercisesExists(id))
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

        // POST: api/RoutinesExercises
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RoutinesExercises>> PostRoutinesExercises(RoutinesExercises routinesExercises)
        {
            _context.RoutinesExercises.Add(routinesExercises);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoutinesExercises", new { id = routinesExercises.RoutinesExercisesId }, routinesExercises);
        }

        // DELETE: api/RoutinesExercises/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoutinesExercises(Guid id)
        {
            var routinesExercises = await _context.RoutinesExercises.FindAsync(id);
            if (routinesExercises == null)
            {
                return NotFound();
            }

            _context.RoutinesExercises.Remove(routinesExercises);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RoutinesExercisesExists(Guid id)
        {
            return _context.RoutinesExercises.Any(e => e.RoutinesExercisesId == id);
        }
    }
}
