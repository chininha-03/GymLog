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
    public class PaginatedWorkoutEventsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PaginatedWorkoutEventsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/PaginatedWorkoutEvents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaginatedWorkoutEvents>>> GetPaginatedWorkoutEvents()
        {
            return await _context.PaginatedWorkoutEvents.ToListAsync();
        }

        // GET: api/PaginatedWorkoutEvents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PaginatedWorkoutEvents>> GetPaginatedWorkoutEvents(Guid id)
        {
            var paginatedWorkoutEvents = await _context.PaginatedWorkoutEvents.FindAsync(id);

            if (paginatedWorkoutEvents == null)
            {
                return NotFound();
            }

            return paginatedWorkoutEvents;
        }

        // PUT: api/PaginatedWorkoutEvents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaginatedWorkoutEvents(Guid id, PaginatedWorkoutEvents paginatedWorkoutEvents)
        {
            if (id != paginatedWorkoutEvents.PaginatedWorkoutEventsId)
            {
                return BadRequest();
            }

            _context.Entry(paginatedWorkoutEvents).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaginatedWorkoutEventsExists(id))
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

        // POST: api/PaginatedWorkoutEvents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PaginatedWorkoutEvents>> PostPaginatedWorkoutEvents(PaginatedWorkoutEvents paginatedWorkoutEvents)
        {
            _context.PaginatedWorkoutEvents.Add(paginatedWorkoutEvents);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPaginatedWorkoutEvents", new { id = paginatedWorkoutEvents.PaginatedWorkoutEventsId }, paginatedWorkoutEvents);
        }

        // DELETE: api/PaginatedWorkoutEvents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaginatedWorkoutEvents(Guid id)
        {
            var paginatedWorkoutEvents = await _context.PaginatedWorkoutEvents.FindAsync(id);
            if (paginatedWorkoutEvents == null)
            {
                return NotFound();
            }

            _context.PaginatedWorkoutEvents.Remove(paginatedWorkoutEvents);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaginatedWorkoutEventsExists(Guid id)
        {
            return _context.PaginatedWorkoutEvents.Any(e => e.PaginatedWorkoutEventsId == id);
        }
    }
}
