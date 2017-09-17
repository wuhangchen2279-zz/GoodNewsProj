using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GoodNewsProj.Models;
using GoodNewsProj.Interface;

namespace GoodNewsProj.Repositories
{
    public class GoodnewsRepository : IGoodnewsRepository
    {
        GoodNewsDBEntities GoodNewsDB = new GoodNewsDBEntities();

        GoodNew IGoodnewsRepository.Add(GoodNew item)
        {
            if (item == null) { throw new ArgumentNullException("item"); }
            // TO DO : Code to save record into database
            GoodNewsDB.GoodNews.Add(item);
            GoodNewsDB.SaveChanges();
            return item;
        }

        bool IGoodnewsRepository.Delete(int id)
        {
            GoodNew GoodNew = GoodNewsDB.GoodNews.Find(id);
            GoodNewsDB.GoodNews.Remove(GoodNew);
            GoodNewsDB.SaveChanges();
            return true;
        }

        GoodNew IGoodnewsRepository.Get(int id)
        {
            return GoodNewsDB.GoodNews.Find(id);
        }

        IEnumerable<GoodNew> IGoodnewsRepository.GetAll()
        {
            return GoodNewsDB.GoodNews;
        }

        bool IGoodnewsRepository.Update(GoodNew item)
        {
            if (item == null) { throw new ArgumentNullException("item"); }

            // TO DO : Code to update record into database
            var Goodnew = GoodNewsDB.GoodNews.Single(a => a.NewsId == item.NewsId);
            Goodnew.Title = item.Title;
            Goodnew.NewsDate = item.NewsDate;
            Goodnew.JournalistId = item.JournalistId;
            Goodnew.Content = item.Content;
            Goodnew.ImageUrl = item.ImageUrl;
            Goodnew.NewsType = item.NewsType;

            GoodNewsDB.SaveChanges();
            return true;
        }
    }
}