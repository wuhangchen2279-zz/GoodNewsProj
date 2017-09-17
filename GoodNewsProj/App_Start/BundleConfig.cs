using System.Web;
using System.Web.Optimization;

namespace GoodNewsProj
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {


            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Content/vendor/jquery/jquery.min.js",
                      "~/Content/vendor/popper/popper.min.js",
                "~/Content/vendor/bootstrap/js/bootstrap.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.min.js",
                      "~/Scripts/module.js",
                      "~/Scripts/team.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
              "~/Content/vendor/font-awesome/css/font-awesome.min.css",
              "~/Content/css/agency.min.css",
                "~/Content/vendor/bootstrap/css/bootstrap.min.css"));
        }
    }
}
