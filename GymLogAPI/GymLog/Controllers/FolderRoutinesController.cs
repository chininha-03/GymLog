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
    public class FolderRoutinesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FolderRoutinesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/FolderRoutines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FolderRoutines>>> GetFolderRoutines()
        {
            return await _context.FolderRoutines.ToListAsync();
        }

        // GET: api/FolderRoutines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FolderRoutines>> GetFolderRoutines(long id)
        {
            var folderRoutines = await _context.FolderRoutines.FindAsync(id);

            if (folderRoutines == null)
            {
                return NotFound();
            }

            return folderRoutines;
        }

        // PUT: api/FolderRoutines/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFolderRoutines(long id, FolderRoutines folderRoutines)
        {
            if (id != folderRoutines.Id)
            {
                return BadRequest();
            }

            _context.Entry(folderRoutines).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FolderRoutinesExists(id))
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

        // POST: api/FolderRoutines
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FolderRoutines>> PostFolderRoutines(FolderRoutines folderRoutines)
        {
            _context.FolderRoutines.Add(folderRoutines);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFolderRoutines", new { id = folderRoutines.Id }, folderRoutines);
        }

        // DELETE: api/FolderRoutines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFolderRoutines(long id)
        {
            var folderRoutines = await _context.FolderRoutines.FindAsync(id);
            if (folderRoutines == null)
            {
                return NotFound();
            }

            _context.FolderRoutines.Remove(folderRoutines);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FolderRoutinesExists(long id)
        {
            return _context.FolderRoutines.Any(e => e.Id == id);
        }
    }
}
