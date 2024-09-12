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
    //[Route("api/[controller]")]
    //[ApiController]
    //public class ItensVendasController : ControllerBase
    //{
    //    private readonly ApplicationDbContext _context;

    //    public ItensVendasController(ApplicationDbContext context)
    //    {
    //        _context = context;
    //    }

    //    // GET: api/ItensVendas
    //    [HttpGet]
    //    public async Task<ActionResult<IEnumerable<ItensVendas>>> GetItensVendas()
    //    {
    //        return await _context.ItensVendas.ToListAsync();
    //    }

    //    // GET: api/ItensVendas/5
    //    [HttpGet("{id}")]
    //    public async Task<ActionResult<ItensVendas>> GetItensVendas(Guid id)
    //    {
    //        var ItensVendas = await _context.ItensVendas.FindAsync(id);

    //        if (ItensVendas == null)
    //        {
    //            return NotFound();
    //        }

    //        return ItensVendas;
    //    }

    //    // PUT: api/ItensVendas/5
    //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    //    [HttpPut("{id}")]
    //    public async Task<IActionResult> PutItensVendas(Guid id, ItensVendas ItensVendas)
    //    {
    //        if (id != ItensVendas.ItensVendasId)
    //        {
    //            return BadRequest();
    //        }

    //        _context.Entry(ItensVendas).State = EntityState.Modified;

    //        try
    //        {
    //            await _context.SaveChangesAsync();
    //        }
    //        catch (DbUpdateConcurrencyException)
    //        {
    //            if (!ItensVendasExists(id))
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

    //    // POST: api/ItensVendas
    //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    //    [HttpPost]
    //    public async Task<ActionResult<ItensVendas>> PostItensVendas(ItensVendas ItensVendas)
    //    {
    //        _context.ItensVendas.Add(ItensVendas);
    //        await _context.SaveChangesAsync();

    //        return CreatedAtAction("GetItensVendas", new { id = ItensVendas.ItensVendasId }, ItensVendas);
    //    }

    //    // DELETE: api/ItensVendas/5
    //    [HttpDelete("{id}")]
    //    public async Task<IActionResult> DeleteItensVendas(Guid id)
    //    {
    //        var ItensVendas = await _context.ItensVendas.FindAsync(id);
    //        if (ItensVendas == null)
    //        {
    //            return NotFound();
    //        }

    //        _context.ItensVendas.Remove(ItensVendas);
    //        await _context.SaveChangesAsync();

    //        return NoContent();
    //    }

    //    private bool ItensVendasExists(Guid id)
    //    {
    //        return _context.ItensVendas.Any(e => e.ItensVendasId == id);
    //    }
    //}

    [Route("api/[controller]")]
    [ApiController]
    public class ItensVendasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ItensVendasController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ItensVendas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItensVendas>>> GetItensVendas()
        {
            return await _context.ItensVenda.ToListAsync();
        }

        // GET: api/ItensVendas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ItensVendas>> GetItensVendas(Guid id)
        {
            var ItensVendas = await _context.ItensVenda.FindAsync(id);

            if (ItensVendas == null)
            {
                return NotFound();
            }

            return ItensVendas;
        }

        // PUT: api/ItensVendas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItensVendas(Guid id, ItensVendas ItensVendas)
        {
            if (id != ItensVendas.ItensVendasId)
            {
                return BadRequest();
            }

            _context.Entry(ItensVendas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItensVendasExists(id))
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

        // POST: api/ItensVendas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ItensVendas>> PostItensVendas(ItensVendas ItensVendas)
        {
            // Busca qual produto esta sendo vendido
            var produto = _context.Produtos.Where(p => p.ProdutosId == ItensVendas.ProdutoId).FirstAsync().Result;

            //Verificar o total do item ( qtd vendida X preço unitario)
            ItensVendas.TotalItens = produto.Preco * ItensVendas.QtdadeItem;

            // Alterar na venda o valor => ValorTotalVenda + TotalItens
            var venda = _context.Vendas.Where(v => v.VendasId == ItensVendas.VendasId).FirstOrDefaultAsync().Result;
            venda.TotalVendas += ItensVendas.TotalItens;
            ItensVendas.Vendas = venda;

            _context.Vendas.Update(venda);
            _context.ItensVenda.Add(ItensVendas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItensVendas", new { id = ItensVendas.ItensVendasId }, ItensVendas);
        }

        // DELETE: api/ItensVendas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItensVendas(Guid id)
        {
            var ItensVendas = await _context.ItensVenda.FindAsync(id);
            if (ItensVendas == null)
            {
                return NotFound();
            }

            _context.ItensVenda.Remove(ItensVendas);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ItensVendasExists(Guid id)
        {
            return _context.ItensVenda.Any(e => e.ItensVendasId == id);
        }
    }
}
