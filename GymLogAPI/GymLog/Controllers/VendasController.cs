using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GymLog.Data;
using GymLog.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace GymLog.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    //public class VendasController : ControllerBase
    //{
    //    private readonly ApplicationDbContext _context;

    //    public VendasController(ApplicationDbContext context)
    //    {
    //        _context = context;
    //    }

    //    // GET: api/Vendas
    //    [HttpGet]
    //    public async Task<ActionResult<IEnumerable<Vendas>>> GetVendas()
    //    {
    //        return await _context.Vendas.ToListAsync();
    //    }

    //    // GET: api/Vendas/5
    //    [HttpGet("{id}")]
    //    public async Task<ActionResult<Vendas>> GetVendas(Guid id)
    //    {
    //        var Vendas = await _context.Vendas.FindAsync(id);

    //        if (Vendas == null)
    //        {
    //            return NotFound();
    //        }

    //        return Vendas;
    //    }

    //    // PUT: api/Vendas/5
    //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    //    [HttpPut("{id}")]
    //    public async Task<IActionResult> PutVendas(Guid id, Vendas Vendas)
    //    {
    //        if (id != Vendas.VendasId)
    //        {
    //            return BadRequest();
    //        }

    //        _context.Entry(Vendas).State = EntityState.Modified;

    //        try
    //        {
    //            await _context.SaveChangesAsync();
    //        }
    //        catch (DbUpdateConcurrencyException)
    //        {
    //            if (!VendasExists(id))
    //            {
    //                return NotFound();
    //            }
    //            else
    //            {
    //                throw;
    //            }
    //        }

    //        return NoContent();
    //    }

    //    // POST: api/Vendas
    //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    //    [HttpPost]
    //    public async Task<ActionResult<Vendas>> PostVendas(Vendas Vendas)
    //    {
    //        _context.Vendas.Add(Vendas);
    //        await _context.SaveChangesAsync();

    //        return CreatedAtAction("GetVendas", new { id = Vendas.VendasId }, Vendas);
    //    }

    //    // DELETE: api/Vendas/5
    //    [HttpDelete("{id}")]
    //    public async Task<IActionResult> DeleteVendas(Guid id)
    //    {
    //        var Vendas = await _context.Vendas.FindAsync(id);
    //        if (Vendas == null)
    //        {
    //            return NotFound();
    //        }

    //        _context.Vendas.Remove(Vendas);
    //        await _context.SaveChangesAsync();

    //        return NoContent();
    //    }

    //    private bool VendasExists(Guid id)
    //    {
    //        return _context.Vendas.Any(e => e.VendasId == id);
    //    }
    //}

    [Route("api/[controller]")]
    [ApiController]
    public class VendasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        public VendasController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/Vendas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vendas>>> GetVendas()
        {
            return await _context.Vendas.ToListAsync();
        }

        // GET: api/Vendas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vendas>> GetVendas(Guid id)
        {
            var venda = await _context.Vendas.FindAsync(id);

            if (venda == null)
            {
                return NotFound();
            }

            return venda;
        }

        // PUT: api/Vendas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVendas(Guid id, Vendas Vendas)
        {
            if (id != Vendas.VendasId)
            {
                return BadRequest();
            }

            _context.Entry(Vendas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VendasExists(id))
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

        [Authorize]
        // POST: api/Vendas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Vendas>> PostVendas(Vendas Vendas)
        {
            var ultimaVendas = _context.Vendas.OrderBy(v => v.DataVendas).FirstOrDefaultAsync().Result;
            if (ultimaVendas == null)
            {
                Vendas.NumeroPedido = 1;
                Vendas.TotalVendas = 0;
            }
            else
            {
                Vendas.NumeroPedido = ultimaVendas.NumeroPedido += 1;
                Vendas.TotalVendas = 0;
            }

            // Obter o ID do usuário de forma mais segura
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized("Usuário não autenticado");
            }
            Vendas.UserId = userId;

            var cliente = await _context.Clientes.FindAsync(Vendas.ClientesId);
            Vendas.Clientes = cliente;

            _context.Vendas.Add(Vendas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVendas", new { id = Vendas.VendasId }, Vendas);
        }

        // DELETE: api/Vendas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVendas(Guid id)
        {
            var Vendas = await _context.Vendas.FindAsync(id);
            if (Vendas == null)
            {
                return NotFound();
            }

            _context.Vendas.Remove(Vendas);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VendasExists(Guid id)
        {
            return _context.Vendas.Any(e => e.VendasId == id);
        }
    }
}
