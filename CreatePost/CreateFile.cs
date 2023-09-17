using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace CreatePost
{
    public partial class CreateFile : Form
    {
        public readonly string title = "Titulo", desc = "Descripción";
        private readonly string CategoriesFile = Path.Combine(Directory.GetCurrentDirectory(), @"..\..\..\..\ElelisPage\docs\src\Utils\Categories2.json");

        public string fileName { get; set; }
        public string fileId { get; set; }
        public string fileDescription { get; set; }
        public List<string> selectedCategories { get; set; }
        
        private string selectedCat;

        public CreateFile()
        {
            InitializeComponent();
        }

        private void CreateFile_Load(object sender, EventArgs e)
        {
            
            txFileName.Text = title;
            txFileName.ForeColor = Color.LightGray;

            richTextBoxDesc.Text = desc;
            richTextBoxDesc.ForeColor = Color.LightGray;

            selectedCategories = new List<string>();

            if (File.Exists(CategoriesFile))
            {
                string jsonContenido = File.ReadAllText(CategoriesFile);

                List<Categoria> jsonObject = JsonConvert.DeserializeObject<List<Categoria>>(jsonContenido);

                foreach (var categoria in jsonObject)
                {
                    comboBox_categories.Items.Add(categoria.tag);
                }

                comboBox_categories.SelectedIndex = 0;
            }
            else
            {
                MessageBox.Show("No se encontró el archivo de categorias");
            }

            txFileName.Focus();
        }

        private void btn_save_Click(object sender, EventArgs e)
        {
            if (txFileName.Text == title)
            {
                txFileName.Text = "";
            }

            if (richTextBoxDesc.Text == desc)
            {
                richTextBoxDesc.Text = "";
            }

            fileName = txFileName.Text.Trim();
            fileId = fileName.Replace(" ", "_");
            fileDescription = richTextBoxDesc.Text;
            
            foreach (string item in listBox_categories.Items)
            {
                selectedCategories.Add(item);
            }

            if (string.IsNullOrEmpty(fileName))
            {
                MessageBox.Show("Ingresa un nombre de archivo válido.");
                txFileName.Text = title;
                return;
            }

            if (selectedCategories.Count == 0)
            {
                MessageBox.Show("El post tine que tener al menos una categoria");
                return;
            }

            if (string.IsNullOrEmpty(fileDescription))
            {
                DialogResult dialogResult = MessageBox.Show("Seguro que quiere crear un post sin descripción", "Alerta", MessageBoxButtons.OKCancel);
                if (dialogResult == DialogResult.Cancel)
                {
                    richTextBoxDesc.Text = desc;
                    return;
                }
            }

            this.DialogResult = DialogResult.OK;
            this.Close();
        }

        private void txFileName_Enter(object sender, EventArgs e)
        {
            if (txFileName.Text == title)
            {
                txFileName.Text = "";
                txFileName.ForeColor = Color.Black;
            }
        }

        private void txFileName_Leave(object sender, EventArgs e)
        {
            if (txFileName.Text == "")
            {
                txFileName.Text = title;
                txFileName.ForeColor = Color.LightGray;
            }
        }

        private void btn_addTag_Click(object sender, EventArgs e)
        {
            if (!listBox_categories.Items.Contains(selectedCat))
            {
                listBox_categories.Items.Add(selectedCat);
            }
        }

        private void btn_removeAll_Click(object sender, EventArgs e)
        {
            DialogResult dialogResult = MessageBox.Show("Seguro que quiere borrar todas las categorias?", "Alerta", MessageBoxButtons.OKCancel);
            if (dialogResult == DialogResult.Cancel)
            {
                return;
            }
            listBox_categories.Items.Clear();
        }

        private void btn_removeTag_Click(object sender, EventArgs e)
        {
            if (listBox_categories.SelectedIndex == -1)
            {
                MessageBox.Show("No se ha seleccionado ninguna categoria");
                return;
            }

            listBox_categories.Items.Remove(listBox_categories.SelectedItem);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            DialogResult dialogResult = MessageBox.Show("Seguro que quiere cerrar?", "Alerta", MessageBoxButtons.OKCancel);
            if (dialogResult == DialogResult.Cancel)
            {
                return;
            }

            this.Close();
        }

        private void comboBox_categories_SelectedIndexChanged(object sender, EventArgs e)
        {
            selectedCat = comboBox_categories.SelectedItem?.ToString();
        }

        private void richTextBoxDesc_Enter(object sender, EventArgs e)
        {
            if (richTextBoxDesc.Text == desc)
            {
                richTextBoxDesc.Text = "";
                richTextBoxDesc.ForeColor = Color.Black;
            }
        }

        private void richTextBoxDesc_Leave(object sender, EventArgs e)
        {
            if (richTextBoxDesc.Text == "")
            {
                richTextBoxDesc.Text = desc;
                richTextBoxDesc.ForeColor = Color.LightGray;
            }
        }
    }
}
