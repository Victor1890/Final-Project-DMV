using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final.Models
{
    public class Database_Context : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            var connectionbuilder = new SqliteConnectionStringBuilder { DataSource = "Db.db" };
            var connectionString = connectionbuilder.ToString();
            var connection = new SqliteConnection(connectionString);

            builder.UseSqlite(connection);
        }

        public DbSet<Products> Products { get; set; }
        public DbSet<User> Usuarios { get; set; }
    }
}
