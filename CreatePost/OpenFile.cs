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
    public partial class OpenFile : Form
    {
        private readonly string projectFolderPath = Path.Combine(Directory.GetCurrentDirectory(), @"..\..\..\..\ElelisPage\docs\src\_content\");
        public string selectedFilePath = "";

        public OpenFile()
        {
            InitializeComponent();
            comboBox1.KeyPress += comboBox1_keypress;
        }

        private void OpenFile_Load(object sender, EventArgs e)
        {
            try
            {
                string[] archivos = Directory.GetFiles(projectFolderPath);

                /*comboBox1.Items.AddRange(archivos);*/
                foreach (string archivo in archivos)
                {
                    string nombreArchivo = Path.GetFileName(archivo);
                    comboBox1.Items.Add(nombreArchivo);
                }

                comboBox1.SelectedIndex = 0;
            }
            catch (DirectoryNotFoundException)
            {
                Console.WriteLine("El directorio no existe.");
            }
            catch (UnauthorizedAccessException)
            {
                Console.WriteLine("No tienes permisos para acceder al directorio.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error al listar los archivos: " + ex.Message);
            }
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            /*selectedFilePath = $"{projectFolderPath}\\{comboBox1.SelectedItem?.ToString()}";*/
            selectedFilePath = Path.Combine(projectFolderPath, comboBox1.SelectedItem?.ToString());
            txbSelectedFile.Text = selectedFilePath;
        }

        private void comboBox1_keypress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == (char)Keys.Enter)
            {
                openFile();
                e.Handled = true; // Evita que se genere el sonido de Windows al presionar Enter
            }
        }

        private void btn_open_Click(object sender, EventArgs e)
        {
            openFile();
        }

        private void openFile()
        {
            if (!string.IsNullOrEmpty(selectedFilePath))
            {
                this.DialogResult = DialogResult.OK;
            }
            this.Close();
        }

        public string ObtenerFilePath()
        {
            return selectedFilePath;
        }
    }
}
