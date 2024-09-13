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

namespace GymLog.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    //public class ClientesController : ControllerBase
    //{
    //    private readonly ApplicationDbContext _context;

    //    public ClientesController(ApplicationDbContext context)
    //    {
    //        _context = context;
    //    }

    //    // GET: api/Clientes
    //    [HttpGet]
    //    public async Task<ActionResult<IEnumerable<Clientes>>> GetClientes()
    //    {
    //        return await _context.Clientes.ToListAsync();
    //    }

    //    // GET: api/Clientes/5
    //    [HttpGet("{id}")]
    //    public async Task<ActionResult<Clientes>> GetClientes(Guid id)
    //    {
    //        var Clientes = await _context.Clientes.FindAsync(id);

    //        if (Clientes == null)
    //        {
    //            return NotFound();
    //        }

    //        return Clientes;
    //    }

    //    // PUT: api/Clientes/5
    //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    //    [HttpPut("{id}")]
    //    public async Task<IActionResult> PutClientes(Guid id, Clientes Clientes)
    //    {
    //        if (id != Clientes.ClientesId)
    //        {
    //            return BadRequest();
    //        }

    //        _context.Entry(Clientes).State = EntityState.Modified;

    //        try
    //        {
    //            await _context.SaveChangesAsync();
    //        }
    //        catch (DbUpdateConcurrencyException)
    //        {
    //            if (!ClientesExists(id))
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

    //    // POST: api/Clientes
    //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    //    [HttpPost]
    //    public async Task<ActionResult<Clientes>> PostClientes(Clientes Clientes)
    //    {
    //        _context.Clientes.Add(Clientes);
    //        await _context.SaveChangesAsync();

    //        return CreatedAtAction("GetClientes", new { id = Clientes.ClientesId }, Clientes);
    //    }

    //    // DELETE: api/Clientes/5
    //    [HttpDelete("{id}")]
    //    public async Task<IActionResult> DeleteClientes(Guid id)
    //    {
    //        var Clientes = await _context.Clientes.FindAsync(id);
    //        if (Clientes == null)
    //        {
    //            return NotFound();
    //        }

    //        _context.Clientes.Remove(Clientes);
    //        await _context.SaveChangesAsync();

    //        return NoContent();
    //    }

    //    private bool ClientesExists(Guid id)
    //    {
    //        return _context.Clientes.Any(e => e.ClientesId == id);
    //    }
    //}

 
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ClientesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Clientes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Clientes>>> GetClientes()
        {
            return await _context.Clientes.ToListAsync();
        }


        // GET: api/Clientes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Clientes>> GetClientes(Guid id)
        {
            var Clientes = await _context.Clientes.FindAsync(id);

            if (Clientes == null)
            {
                return NotFound();
            }

            return Clientes;
        }

        // PUT: api/Clientes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClientes(Guid id, Clientes Clientes)
        {
            if (id != Clientes.ClientesId)
            {
                return BadRequest();
            }

            _context.Entry(Clientes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientesExists(id))
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

        // POST: api/Clientes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Clientes>> PostClientes(Clientes Clientes)
        {
            _context.Clientes.Add(Clientes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClientes", new { id = Clientes.ClientesId }, Clientes);
        }

        // DELETE: api/Clientes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClientes(Guid id)
        {
            var Clientes = await _context.Clientes.FindAsync(id);
            if (Clientes == null)
            {
                return NotFound();
            }

            _context.Clientes.Remove(Clientes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("alternar/{id}")]
        public async Task<IActionResult> AlternarCadastro(Guid id)
        {
            var Clientes = await _context.Clientes.FindAsync(id);
            if (Clientes == null)
            {
                return NotFound();
            }
            Clientes.CadastroAtivo = !Clientes.CadastroAtivo;
            _context.Clientes.Update(Clientes);
            await _context.SaveChangesAsync();
            return Ok(Clientes);
        }

        private bool ClientesExists(Guid id)
        {
            return _context.Clientes.Any(e => e.ClientesId == id);
        }
    }
}
