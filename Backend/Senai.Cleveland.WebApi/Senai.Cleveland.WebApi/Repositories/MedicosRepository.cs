using Microsoft.EntityFrameworkCore;
using Senai.Cleveland.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Cleveland.WebApi.Repositories {
    public class MedicosRepository {
        public List<Medicos> ListarMedicos () {
            using (ClevelandContext ctx = new ClevelandContext()) {
                return ctx.Medicos.Include(x => x.IdEspecialidadeNavigation).ToList();
            };
        }

        public void CadastrarMedico (Medicos doc) {
            using (ClevelandContext ctx = new ClevelandContext()) {
                ctx.Medicos.Add(doc);
                ctx.SaveChanges();
            };
        }
    }
}
