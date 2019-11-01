using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Cleveland.WebApi.Domains;

namespace Senai.Cleveland.WebApi.Repositories {
    [Route("api/[controller]")]
    [ApiController]


    public class MedicosController : ControllerBase {
        MedicosRepository medicoRepository = new MedicosRepository();

        [HttpGet]
        public IEnumerable<Medicos> Listar() {
            return medicoRepository.ListarMedicos();
        }

        [HttpPost]
        public IActionResult Cadastrar(Medicos doc) {
            try {
                medicoRepository.CadastrarMedico(doc);
                return Ok();
            } catch (Exception e) {
                return BadRequest(e.Message);
            }
        }
    }
}