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
    public class RoutineFoldersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RoutineFoldersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/RoutineFolders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoutineFolder>>> GetRoutineFolder()
        {
            return await _context.RoutineFolder.ToListAsync();
        }

        // GET: api/RoutineFolders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoutineFolder>> GetRoutineFolder(long id)
        {
            var routineFolder = await _context.RoutineFolder.FindAsync(id);

            if (routineFolder == null)
            {
                return NotFound();
            }

            return routineFolder;
        }

        // PUT: api/RoutineFolders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoutineFolder(long id, RoutineFolder routineFolder)
        {
            if (id != routineFolder.Id)
            {
                return BadRequest();
            }

            _context.Entry(routineFolder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoutineFolderExists(id))
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

        // POST: api/RoutineFolders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RoutineFolder>> PostRoutineFolder(RoutineFolder routineFolder)
        {
            _context.RoutineFolder.Add(routineFolder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoutineFolder", new { id = routineFolder.Id }, routineFolder);
        }

        // DELETE: api/RoutineFolders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoutineFolder(long id)
        {
            var routineFolder = await _context.RoutineFolder.FindAsync(id);
            if (routineFolder == null)
            {
                return NotFound();
            }

            _context.RoutineFolder.Remove(routineFolder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RoutineFolderExists(long id)
        {
            return _context.RoutineFolder.Any(e => e.Id == id);
        }
    }
}
