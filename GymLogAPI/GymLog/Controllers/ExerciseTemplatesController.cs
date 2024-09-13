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
    public class ExerciseTemplatesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ExerciseTemplatesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ExerciseTemplates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExerciseTemplate>>> GetExerciseTemplate()
        {
            return await _context.ExerciseTemplate.ToListAsync();
        }

        // GET: api/ExerciseTemplates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExerciseTemplate>> GetExerciseTemplate(long id)
        {
            var exerciseTemplate = await _context.ExerciseTemplate.FindAsync(id);

            if (exerciseTemplate == null)
            {
                return NotFound();
            }

            return exerciseTemplate;
        }

        // PUT: api/ExerciseTemplates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExerciseTemplate(long id, ExerciseTemplate exerciseTemplate)
        {
            if (id != exerciseTemplate.Id)
            {
                return BadRequest();
            }

            _context.Entry(exerciseTemplate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExerciseTemplateExists(id))
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

        // POST: api/ExerciseTemplates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExerciseTemplate>> PostExerciseTemplate(ExerciseTemplate exerciseTemplate)
        {
            _context.ExerciseTemplate.Add(exerciseTemplate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExerciseTemplate", new { id = exerciseTemplate.Id }, exerciseTemplate);
        }

        // DELETE: api/ExerciseTemplates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExerciseTemplate(long id)
        {
            var exerciseTemplate = await _context.ExerciseTemplate.FindAsync(id);
            if (exerciseTemplate == null)
            {
                return NotFound();
            }

            _context.ExerciseTemplate.Remove(exerciseTemplate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("filtrar/{nome}")]
        public async Task<IActionResult> BuscarNome(string nome)
        {
            // Criar um filtro por nome na tabela Clientes
            var listaExer = _context.ExerciseTemplate.Where(c => c.Title.Contains(nome)).ToList();
            if (listaExer.Count > 0)
            {
                return Ok(listaExer);
            }
            return NotFound(nome);
        }


        private bool ExerciseTemplateExists(long id)
        {
            return _context.ExerciseTemplate.Any(e => e.Id == id);
        }
    }
}
