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
    public class FinanceirosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FinanceirosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Financeiros
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Financeiros>>> GetFinanceiros()
        {
            return await _context.Financeiros.ToListAsync();
        }

        // GET: api/Financeiros/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Financeiros>> GetFinanceiros(Guid id)
        {
            var financeiros = await _context.Financeiros.FindAsync(id);

            if (financeiros == null)
            {
                return NotFound();
            }

            return financeiros;
        }

        // PUT: api/Financeiros/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFinanceiros(Guid id, Financeiros financeiros)
        {
            if (id != financeiros.FinanceirosId)
            {
                return BadRequest();
            }

            _context.Entry(financeiros).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FinanceirosExists(id))
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

        // POST: api/Financeiros
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Financeiros>> PostFinanceiros(Financeiros financeiros)
        {
            _context.Financeiros.Add(financeiros);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFinanceiros", new { id = financeiros.FinanceirosId }, financeiros);
        }

        // DELETE: api/Financeiros/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFinanceiros(Guid id)
        {
            var financeiros = await _context.Financeiros.FindAsync(id);
            if (financeiros == null)
            {
                return NotFound();
            }

            _context.Financeiros.Remove(financeiros);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FinanceirosExists(Guid id)
        {
            return _context.Financeiros.Any(e => e.FinanceirosId == id);
        }
    }
}
