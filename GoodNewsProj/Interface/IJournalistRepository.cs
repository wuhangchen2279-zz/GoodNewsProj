using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoodNewsProj.Models;

namespace GoodNewsProj.Interface
{
    interface IJournalistRepository
    {
        IEnumerable<Journalist> GetAll();
        Journalist Get(int id);
        Journalist Add(Journalist item);
        bool Update(Journalist item);
        bool Delete(int id);
    }
}
