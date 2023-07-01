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
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace CreatePost
{
    public partial class CreateFile : Form
    {
        private string fileName = "", fileId = "";

        public CreateFile()
        {
            InitializeComponent();
            txFileName.KeyPress += TextBox1_KeyPress;
            Shown += Formulario_Shown;
        }

        private void TextBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == (char)Keys.Enter)
            {
                createFile();
                e.Handled = true; // Evita que se genere el sonido de Windows al presionar Enter
            }
        }
        private void Formulario_Shown(object sender, EventArgs e)
        {
            txFileName.Focus();
        }


        private void btn_save_Click(object sender, EventArgs e)
        {
            createFile();
        }

        private void createFile()
        {
            string fileText = txFileName.Text.Trim();
            if (!string.IsNullOrEmpty(fileText))
            {
                fileName = fileText;
                fileId = fileText.Replace(" ", "_");

                this.DialogResult = DialogResult.OK;
                this.Close();
            }
            else
            {
                MessageBox.Show("Ingresa un nombre de archivo válido.");
            }
        }

        public string ObtenerFileName()
        {
            return fileName;
        }

        public string ObtenerFileId()
        {
            return fileId;
        }
    }
}
