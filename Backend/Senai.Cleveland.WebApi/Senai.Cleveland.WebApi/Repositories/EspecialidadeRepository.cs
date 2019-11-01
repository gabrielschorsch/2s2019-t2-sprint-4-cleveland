using Senai.Cleveland.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Cleveland.WebApi.Repositories {
    public class EspecialidadeRepository {

        public List<Especialidades> Listar () {
            using (ClevelandContext ctx = new ClevelandContext()) {
                return ctx.Especialidades.ToList();
            }
        }
    }
}
