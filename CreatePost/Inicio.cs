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
    public partial class Inicio : Form
    {
        private Boolean created = false, opened = false;
        private readonly string projectFolderPath = Path.Combine(Directory.GetCurrentDirectory(), @"..\..\..\..\ElelisPage\docs\src\_content");
        private string fileName = "", filePath = "";

        public Inicio()
        {
            InitializeComponent();
        }

        private void Inicio_Load(object sender, EventArgs e)
        {
            richTextBox1.Enabled = false;

            for (int i = 8; i <= 60; i += 2)
            {
                cBox_fontSize.Items.Add(i);
            }

            cBox_fontSize.SelectedItem = 10;
        }

        private void CreatePost()
        {
            CreateFile createFileWindow = new CreateFile();

            if (createFileWindow.ShowDialog() == DialogResult.OK)
            {
                created = true;
                opened = false;
                richTextBox1.Enabled = true;

                string fileId = createFileWindow.fileId;
                fileName = createFileWindow.fileName;
                DateTime thisDay = DateTime.Now;
                string description = createFileWindow.fileDescription;

                string categories = string.Join(", ", createFileWindow.selectedCategories);

                filePath = Path.Combine(projectFolderPath, $"{fileId}.md");
                richTextBox1.Text = $"---\nid: {fileId}\ntitle: {fileName}\ndescription: {description}\ndate: {thisDay.ToString("MMMMM dd, yyyy HH:mm")}\ncategories: [{categories}]\n---\n\n# {fileName}\n\n";

                richTextBox1.Focus();
                richTextBox1.SelectionStart = richTextBox1.Text.Length;
                richTextBox1.SelectionLength = 0;
                richTextBox1.ScrollToCaret();
            }
        }

        private void OpenFile()
        {
            OpenFile openFileWindow = new OpenFile();

            if (openFileWindow.ShowDialog() == DialogResult.OK)
            {
                created = false;
                opened = true;
                richTextBox1.Enabled = true;

                filePath = openFileWindow.ObtenerFilePath();
                StreamReader stream = new StreamReader(filePath);
                string fileData = stream.ReadToEnd();
                richTextBox1.Text = fileData.ToString();

                richTextBox1.Focus();
                richTextBox1.SelectionStart = richTextBox1.Text.Length;
                richTextBox1.SelectionLength = 0;
                richTextBox1.ScrollToCaret();

                stream.Close();
            }
        }

        private void addText(string text, int textStartSelected, int textEndSelected)
        {
            if (!string.IsNullOrEmpty(fileName) || !string.IsNullOrEmpty(filePath))
            {
                int posicion = richTextBox1.SelectionStart;
                /*richTextBox1.AppendText(text);*/
                richTextBox1.Text = richTextBox1.Text.Insert(posicion, text);

                richTextBox1.Focus();
                richTextBox1.SelectionStart = posicion + textStartSelected;
                richTextBox1.SelectionLength = textEndSelected;
                richTextBox1.ScrollToCaret();
            }
        }

        private void cSSToolStripMenuItem_Click(object sender, EventArgs e)
        {
            insertCode("css");
        }

        private void saveFile()
        {
            if (!string.IsNullOrEmpty(fileName) || !string.IsNullOrEmpty(filePath))
            {
                try
                {
                    using (StreamWriter writer = new StreamWriter(filePath))
                    {
                        writer.Write(richTextBox1.Text);
                    }

                    MessageBox.Show("Archivo guardado exitosamente!");

                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error al guardar el archivo: " + ex.Message);
                }
            }
            else
            {
                MessageBox.Show("No hay ningún archivo seleccionado");
            }
        }

        private void insertCode(string languaje)
        {
            if (!string.IsNullOrEmpty(fileName) || !string.IsNullOrEmpty(filePath))
            {
                if (!string.IsNullOrEmpty(languaje))
                {
                    int posicion = richTextBox1.SelectionStart;
                    string text = $"´´´{languaje}\n\n´´´\n";
                    richTextBox1.Text = richTextBox1.Text.Insert(posicion, text);

                    richTextBox1.Focus();
                    richTextBox1.SelectionStart = posicion + 3 + languaje.Length + 1; // ´´´ + languaje length + \n
                    richTextBox1.SelectionLength = 0;
                    richTextBox1.ScrollToCaret();
                }

            }
        }


        private void Inicio_KeyDown(object sender, KeyEventArgs e)
        {
        }

        private void crearToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(fileName) || !string.IsNullOrEmpty(filePath))
            {
                DialogResult dialogResult = MessageBox.Show("Guarda el archivo actual antes de abrir uno nuevo", "Alerta", MessageBoxButtons.OKCancel);
                if (dialogResult == DialogResult.Cancel)
                {
                    return;
                }
            }

            CreatePost();
        }

        private void abrirToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(fileName) || !string.IsNullOrEmpty(filePath))
            {
                DialogResult dialogResult = MessageBox.Show("Guarda el archivo actual antes de abrir uno nuevo", "Alerta", MessageBoxButtons.OKCancel);
                if (dialogResult == DialogResult.Cancel)
                {
                    return;
                }
            }

            OpenFile();

        }

        private void btn_addTitle_Click(object sender, EventArgs e)
        {
            string text = "# Titulo";
            addText(text, 2, text.Length - 2);
        }

        private void btn_addSubtitle_Click(object sender, EventArgs e)
        {
            string text = "## Subtitulo";
            addText(text, 3, text.Length - 3);
        }

        private void btn_addNewPage_Click(object sender, EventArgs e)
        {
            addText("--Page", 6, 0);
        }

        private void cBox_fontSize_SelectedIndexChanged(object sender, EventArgs e)
        {
            int fontSize = int.Parse(cBox_fontSize.SelectedItem.ToString());
            richTextBox1.Font = new Font(richTextBox1.Font.FontFamily, fontSize);
        }

        private void btn_addLink_Click(object sender, EventArgs e)
        {
            string text = "[](url)";
            addText(text, 3, 3);
        }

        private void btn_addImage_Click(object sender, EventArgs e)
        {
            string text = "![](imagenUrl)";
            addText(text, 4, 9);
        }

        private void btn_addCode_Click(object sender, EventArgs e)
        {
            //contextMenuStrip1.Show(btn_addCode, new Point(0, btn_addCode.Height));
        }

        private void guardarToolStripMenuItem_Click(object sender, EventArgs e)
        {
            saveFile();
        }

        private void guardarYSalirToolStripMenuItem_Click(object sender, EventArgs e)
        {
            saveFile();
            richTextBox1.Text = "";
            fileName = "";
            filePath = "";
            opened = false;
            created = false;
            richTextBox1.Enabled = false;
        }

        private void cabeceraToolStripMenuItem_Click(object sender, EventArgs e)
        {
            string text = "---\r\nid: title_post\r\ntitle: Title Post\r\ndescription: desc\r\ndate: Month day, year hour\r\ncategories: ['CAT1', 'CAT2']\r\nmodified_date: Month day, year hour\r\n---";
            addText(text, text.Length - 7, 0); // 7 cantidad de \n
        }

        private void salirToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void bashToolStripMenuItem_Click(object sender, EventArgs e)
        {
            insertCode("sh");
        }

        private void bloqueToolStripMenuItem_Click(object sender, EventArgs e)
        {
            string text = "```Content```";
            addText(text, 3, 7);
        }

        private void tituloToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            string text = "# Titulo";
            addText(text, 2, text.Length - 2);
        }

        private void subTituloToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            string text = "## Subtitulo";
            addText(text, 3, text.Length - 3);
        }

        private void imagenToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            string text = "![](imagenUrl)";
            addText(text, 4, 9);
        }

        private void linkToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            string text = "[](url)";
            addText(text, 3, 3);
        }

        private void paginaNuevaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            addText("--Page", 6, 0);
        }

        private void javascriptToolStripMenuItem_Click(object sender, EventArgs e)
        {
            insertCode("js");
        }

        private void typescriptToolStripMenuItem_Click(object sender, EventArgs e)
        {
            insertCode("ts");
        }

        private void javaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            insertCode("java");
        }

        private void cToolStripMenuItem_Click(object sender, EventArgs e)
        {
            insertCode("cs");
        }

        private void jSONToolStripMenuItem_Click(object sender, EventArgs e)
        {
            insertCode("json");
        }

        private void pytonToolStripMenuItem_Click(object sender, EventArgs e)
        {
            insertCode("py");
        }

        private void hTMLToolStripMenuItem_Click(object sender, EventArgs e)
        {
            insertCode("html");
        }
    }
}