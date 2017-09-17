using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GoodNewsProj.Interface;
using GoodNewsProj.Models;

namespace GoodNewsProj.Repositories
{
    public class JournalistRepository : IJournalistRepository
    {
        GoodNewsDBEntities GoodNewsDB = new GoodNewsDBEntities();

        Journalist IJournalistRepository.Add(Journalist item)
        {
            if (item == null) { throw new ArgumentNullException("item"); }
            // TO DO : Code to save record into database
            GoodNewsDB.Journalists.Add(item);
            GoodNewsDB.SaveChanges();
            return item;
        }

        bool IJournalistRepository.Delete(int id)
        {
            Journalist Journalist = GoodNewsDB.Journalists.Find(id);
            GoodNewsDB.Journalists.Remove(Journalist);
            GoodNewsDB.SaveChanges();
            return true;
        }

        Journalist IJournalistRepository.Get(int id)
        {
            return GoodNewsDB.Journalists.Find(id);
        }

        IEnumerable<Journalist> IJournalistRepository.GetAll()
        {
            return GoodNewsDB.Journalists;
        }

        bool IJournalistRepository.Update(Journalist item)
        {
            if (item == null) { throw new ArgumentNullException("item"); }
            
            // TO DO : Code to update record into database
            var Journalist = GoodNewsDB.Journalists.Single(a => a.JournalistId == item.JournalistId);
            Journalist.FullName = item.FullName;
            Journalist.PhoneNumber = item.PhoneNumber;
            Journalist.Address = item.Address;
            Journalist.Email = item.Email;
            Journalist.ImageUrl = item.ImageUrl;

            GoodNewsDB.SaveChanges();
            return true;
        }
    }
}