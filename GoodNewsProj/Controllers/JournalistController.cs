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
    public class JournalistController : ApiController
    {
        static readonly IJournalistRepository repo = new JournalistRepository();

        public IEnumerable<Journalist> GetAllJournalists()
        {
            return repo.GetAll();
        }

        public Journalist PostJournalist(Journalist item)
        {
            return repo.Add(item);
        }

        public IEnumerable<Journalist> PutJournalist(int id, Journalist journalist)
        {
            journalist.JournalistId = id;
            if (repo.Update(journalist))
            {
                return repo.GetAll();
            }
            else
            {
                return null;
            }
        }

        public IEnumerable<Journalist> DeleteJournalist(int id)
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
