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
    public class RoutinesExercisesBodiesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RoutinesExercisesBodiesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/RoutinesExercisesBodies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoutinesExercisesBody>>> GetRoutinesExercisesBody()
        {
            return await _context.RoutinesExercisesBody.ToListAsync();
        }

        // GET: api/RoutinesExercisesBodies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoutinesExercisesBody>> GetRoutinesExercisesBody(long id)
        {
            var routinesExercisesBody = await _context.RoutinesExercisesBody.FindAsync(id);

            if (routinesExercisesBody == null)
            {
                return NotFound();
            }

            return routinesExercisesBody;
        }

        // PUT: api/RoutinesExercisesBodies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoutinesExercisesBody(long id, RoutinesExercisesBody routinesExercisesBody)
        {
            if (id != routinesExercisesBody.Id)
            {
                return BadRequest();
            }

            _context.Entry(routinesExercisesBody).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoutinesExercisesBodyExists(id))
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

        // POST: api/RoutinesExercisesBodies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RoutinesExercisesBody>> PostRoutinesExercisesBody(RoutinesExercisesBody routinesExercisesBody)
        {
            _context.RoutinesExercisesBody.Add(routinesExercisesBody);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoutinesExercisesBody", new { id = routinesExercisesBody.Id }, routinesExercisesBody);
        }

        // DELETE: api/RoutinesExercisesBodies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoutinesExercisesBody(long id)
        {
            var routinesExercisesBody = await _context.RoutinesExercisesBody.FindAsync(id);
            if (routinesExercisesBody == null)
            {
                return NotFound();
            }

            _context.RoutinesExercisesBody.Remove(routinesExercisesBody);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RoutinesExercisesBodyExists(long id)
        {
            return _context.RoutinesExercisesBody.Any(e => e.Id == id);
        }
    }
}
