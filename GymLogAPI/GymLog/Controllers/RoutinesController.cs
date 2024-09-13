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
    public class RoutinesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RoutinesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Routines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Routine>>> GetRoutine()
        {
            return await _context.Routine.ToListAsync();
        }

        // GET: api/Routines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Routine>> GetRoutine(long id)
        {
            var routine = await _context.Routine.FindAsync(id);

            if (routine == null)
            {
                return NotFound();
            }

            return routine;
        }

        // PUT: api/Routines/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoutine(long id, Routine routine)
        {
            if (id != routine.Id)
            {
                return BadRequest();
            }

            _context.Entry(routine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoutineExists(id))
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

        // POST: api/Routines
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Routine>> PostRoutine(Routine routine)
        {
            _context.Routine.Add(routine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoutine", new { id = routine.Id }, routine);
        }

        // DELETE: api/Routines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoutine(long id)
        {
            var routine = await _context.Routine.FindAsync(id);
            if (routine == null)
            {
                return NotFound();
            }

            _context.Routine.Remove(routine);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RoutineExists(long id)
        {
            return _context.Routine.Any(e => e.Id == id);
        }
    }
}
