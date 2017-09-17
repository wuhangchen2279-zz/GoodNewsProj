using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GoodNewsProj.Interface;
using GoodNewsProj.Models;
using GoodNewsProj.Repositories;

namespace GoodNewsProj.Controllers
{
    public class GoodnewsController : ApiController
    {
        static readonly IGoodnewsRepository repo = new GoodnewsRepository();

        public IEnumerable<GoodNew> GetAllGoodnews()
        {
            return repo.GetAll();
        }

        public GoodNew PostGoodnews(GoodNew item)
        {
            return repo.Add(item);
        }

        public IEnumerable<GoodNew> PutGoodnews(int id, GoodNew goodnew)
        {
            goodnew.NewsId = id;
            if (repo.Update(goodnew))
            {
                return repo.GetAll();
            }
            else
            {
                return null;
            }
        }

        public IEnumerable<GoodNew> DeleteGoodnews(int id)
        {
            if (repo.Delete(id))
            {
                return repo.GetAll();
            }
            else
            {
                return null;
            }
        }
    }
}
