using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoodNewsProj.Models;

namespace GoodNewsProj.Interface
{
    interface IGoodnewsRepository
    {
        IEnumerable<GoodNew> GetAll();
        GoodNew Get(int id);
        GoodNew Add(GoodNew item);
        bool Update(GoodNew item);
        bool Delete(int id);
    }
}
