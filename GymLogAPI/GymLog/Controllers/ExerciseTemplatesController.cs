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
        public async Task<ActionResult<ExerciseTemplate>> GetExerciseTemplate(Guid id)
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
        public async Task<IActionResult> PutExerciseTemplate(Guid id, ExerciseTemplate exerciseTemplate)
        {
            if (id != exerciseTemplate.ExerciseTemplateId)
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

            return CreatedAtAction("GetExerciseTemplate", new { id = exerciseTemplate.ExerciseTemplateId }, exerciseTemplate);
        }

        // DELETE: api/ExerciseTemplates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExerciseTemplate(Guid id)
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

        private bool ExerciseTemplateExists(Guid id)
        {
            return _context.ExerciseTemplate.Any(e => e.ExerciseTemplateId == id);
        }
    }
}
