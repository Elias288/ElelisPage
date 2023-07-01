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
        private string fileName = "", fileId = "";

        public CreateFile()
        {
            InitializeComponent();
        }

        private void CreateFile_Load(object sender, EventArgs e)
        {
            txFileName.Focus();
        }

        private void btn_save_Click(object sender, EventArgs e)
        {
            string fileText = txFileName.Text.Trim();
            if (!string.IsNullOrEmpty(fileText) )
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
