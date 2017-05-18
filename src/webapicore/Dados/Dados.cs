using System.Collections.Generic;

namespace webapicore
{
    public static class Dados
    {
        public static List<ClienteDto> lista = new List<ClienteDto>()
            {
                new ClienteDto{id=1,nome="cliente1", email="cliente1@email.com", senha="123456"},
                new ClienteDto{id=2,nome="cliente2", email="cliente2@email.com", senha="123456"},
                new ClienteDto{id=3,nome="cliente3", email="cliente3@email.com", senha="123456"},
                new ClienteDto{id=4,nome="cliente4", email="cliente4@email.com", senha="123456"},
                new ClienteDto{id=5,nome="cliente5", email="cliente5@email.com", senha="123456"},
                new ClienteDto{id=6,nome="cliente6", email="cliente6@email.com", senha="123456"},
                new ClienteDto{id=7,nome="cliente7", email="cliente7@email.com", senha="123456"}
            };

        
        public static List<ClienteDto> GetClientes()
        {
            return lista;
        }
    }
}