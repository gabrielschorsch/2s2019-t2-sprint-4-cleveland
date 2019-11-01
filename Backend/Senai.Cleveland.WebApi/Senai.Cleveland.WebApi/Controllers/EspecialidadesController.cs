using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Cleveland.WebApi.Domains;
using Senai.Cleveland.WebApi.Repositories;

namespace Senai.Cleveland.WebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class EspecialidadesController : ControllerBase {

        EspecialidadeRepository especialidadesRepository = new EspecialidadeRepository();

        [HttpGet]
        public IEnumerable<Especialidades> Listar () {
            return especialidadesRepository.Listar();
        }

    }
}