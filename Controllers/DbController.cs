using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Final.Controllers
{
    public class DbController : Controller{
        public IActionResult Test(){
                Console.WriteLine("prueba");
                return Redirect("/");
        }
    }
}
