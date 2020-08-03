using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Final.Models
{
    public class Products
    {
        [Key]
        public int ID { get; set; }

        public string Nombre_Produts { get; set; }

        public double Precio_Produts { get; set; }

        public byte[] Imagen_Produts { get; set; }

        public int Num_Products { get; set; }
    }
}
