using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;

namespace Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpdateImageController : ControllerBase
    {
        private FileStream fileStream;

        [HttpPost, DisableRequestSizeLimit]
        public async Task<ActionResult> UpdateImage(IFormFile image)
        {
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            if (image.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(image.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(folderName, fileName);

                using (fileStream = new FileStream(fullPath, FileMode.Create))
                {
                    await image.CopyToAsync(fileStream);
                }
                return Ok(new { dbPath });
            }
            else
                return BadRequest();
            //return StatusCode(500, $"Error interno del servidor {ex}");
        }

        [HttpGet]
        public IActionResult GetImage()
        {

        }
    }
}