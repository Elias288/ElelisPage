using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CreatePost
{
    public partial class CreateFile : Form
    {
        private readonly string projectFolderPath = Path.Combine(Directory.GetCurrentDirectory(), @"..\..\..\..\ElelisPage\docs\src\_content");
        private string pathFile = "";

        public CreateFile()
        {
            InitializeComponent();
        }

        private void CreateFile_Load(object sender, EventArgs e)
        {

        }

        private void btn_save_Click(object sender, EventArgs e)
        {
            string fileText = txFileName.Text.Trim();
            if (!string.IsNullOrEmpty(fileText) )
            {
                string fileName = fileText.Replace(" ", "_");
                pathFile = Path.Combine(projectFolderPath, $"{fileName}.md");

                try
                {
                    using (StreamWriter writer = new StreamWriter(pathFile))
                    {
                        writer.WriteLine($"# {fileText}");
                    }

                    MessageBox.Show("Archivo creado en: " + pathFile);

                    this.DialogResult = DialogResult.OK;
                    this.Close();
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error al guardar el archivo: " + ex.Message);
                }
            }
            else
            {
                MessageBox.Show("Ingresa un nombre de archivo válido.");
            }
        }

        public string ObtenerPath()
        {
            return pathFile;
        }
    }
}
