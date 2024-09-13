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
    public class RoutinesSetsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RoutinesSetsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/RoutinesSets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoutinesSets>>> GetRoutinesSets()
        {
            return await _context.RoutinesSets.ToListAsync();
        }

        // GET: api/RoutinesSets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoutinesSets>> GetRoutinesSets(long id)
        {
            var routinesSets = await _context.RoutinesSets.FindAsync(id);

            if (routinesSets == null)
            {
                return NotFound();
            }

            return routinesSets;
        }

        // PUT: api/RoutinesSets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoutinesSets(long id, RoutinesSets routinesSets)
        {
            if (id != routinesSets.Id)
            {
                return BadRequest();
            }

            _context.Entry(routinesSets).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoutinesSetsExists(id))
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

        // POST: api/RoutinesSets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RoutinesSets>> PostRoutinesSets(RoutinesSets routinesSets)
        {
            _context.RoutinesSets.Add(routinesSets);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoutinesSets", new { id = routinesSets.Id }, routinesSets);
        }

        // DELETE: api/RoutinesSets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoutinesSets(long id)
        {
            var routinesSets = await _context.RoutinesSets.FindAsync(id);
            if (routinesSets == null)
            {
                return NotFound();
            }

            _context.RoutinesSets.Remove(routinesSets);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RoutinesSetsExists(long id)
        {
            return _context.RoutinesSets.Any(e => e.Id == id);
        }
    }
}
