using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace webapicore.Controllers
{
    [Route("api/[controller]")]
    public class ClientesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<ClienteDto> Get()
        {
            return Dados.GetClientes();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ClienteDto Get(int id)
        {
            if (Dados.GetClientes().Any(x => x.id == id))
                return Dados.GetClientes().First(x => x.id == id);
            return new ClienteDto();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]ClienteDto value)
        {
            value.id = Dados.lista.Max(x => x.id) + 1;
            Dados.lista.Add(value);
        }

        // PUT api/values/5
        [HttpPut()]
        public void Put([FromBody]ClienteDto value)
        {
            Delete((int)value.id);
            Dados.lista.Add(value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Dados.lista.Remove(Dados.lista.First(x => x.id == id));
        }
    }
}
