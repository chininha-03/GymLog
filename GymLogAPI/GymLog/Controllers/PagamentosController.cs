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
    public class PagamentosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PagamentosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Pagamentos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pagamentos>>> GetPagamentos()
        {
            return await _context.Pagamentos.ToListAsync();
        }

        // GET: api/Pagamentos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pagamentos>> GetPagamentos(Guid id)
        {
            var pagamentos = await _context.Pagamentos.FindAsync(id);

            if (pagamentos == null)
            {
                return NotFound();
            }

            return pagamentos;
        }

        // PUT: api/Pagamentos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPagamentos(Guid id, Pagamentos pagamentos)
        {
            if (id != pagamentos.PagamentosId)
            {
                return BadRequest();
            }

            _context.Entry(pagamentos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PagamentosExists(id))
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

        // POST: api/Pagamentos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pagamentos>> PostPagamentos(Pagamentos pagamentos)
        {
            _context.Pagamentos.Add(pagamentos);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPagamentos", new { id = pagamentos.PagamentosId }, pagamentos);
        }

        // DELETE: api/Pagamentos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePagamentos(Guid id)
        {
            var pagamentos = await _context.Pagamentos.FindAsync(id);
            if (pagamentos == null)
            {
                return NotFound();
            }

            _context.Pagamentos.Remove(pagamentos);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PagamentosExists(Guid id)
        {
            return _context.Pagamentos.Any(e => e.PagamentosId == id);
        }
    }
}
