namespace CreatePost
{
    partial class Inicio
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.archivoToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.abrirToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.crearToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.guardarYSalirToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.guardarToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.salirToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.herramientasToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.tItuloToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.subtituloToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.subsubTituloToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.insertarToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.imagenToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.linkToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.códigoToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.contextMenuStrip1 = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.richTextBox1 = new System.Windows.Forms.RichTextBox();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btn_addCode = new System.Windows.Forms.Button();
            this.btn_addImage = new System.Windows.Forms.Button();
            this.btn_addLink = new System.Windows.Forms.Button();
            this.btn_addNewPage = new System.Windows.Forms.Button();
            this.btn_addSubtitle = new System.Windows.Forms.Button();
            this.btn_addTitle = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.cBox_fontSize = new System.Windows.Forms.ComboBox();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.cabeceraToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuStrip1.SuspendLayout();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.Font = new System.Drawing.Font("Segoe UI", 10.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.menuStrip1.ImageScalingSize = new System.Drawing.Size(20, 20);
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.archivoToolStripMenuItem,
            this.herramientasToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Padding = new System.Windows.Forms.Padding(10, 2, 0, 2);
            this.menuStrip1.Size = new System.Drawing.Size(1392, 31);
            this.menuStrip1.TabIndex = 0;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // archivoToolStripMenuItem
            // 
            this.archivoToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.abrirToolStripMenuItem,
            this.crearToolStripMenuItem,
            this.guardarToolStripMenuItem,
            this.guardarYSalirToolStripMenuItem,
            this.salirToolStripMenuItem});
            this.archivoToolStripMenuItem.Font = new System.Drawing.Font("Segoe UI", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.archivoToolStripMenuItem.Name = "archivoToolStripMenuItem";
            this.archivoToolStripMenuItem.Size = new System.Drawing.Size(81, 27);
            this.archivoToolStripMenuItem.Text = "Archivo";
            // 
            // abrirToolStripMenuItem
            // 
            this.abrirToolStripMenuItem.Name = "abrirToolStripMenuItem";
            this.abrirToolStripMenuItem.Size = new System.Drawing.Size(224, 28);
            this.abrirToolStripMenuItem.Text = "Abrir";
            this.abrirToolStripMenuItem.Click += new System.EventHandler(this.abrirToolStripMenuItem_Click);
            // 
            // crearToolStripMenuItem
            // 
            this.crearToolStripMenuItem.Name = "crearToolStripMenuItem";
            this.crearToolStripMenuItem.Size = new System.Drawing.Size(224, 28);
            this.crearToolStripMenuItem.Text = "Nuevo";
            this.crearToolStripMenuItem.Click += new System.EventHandler(this.crearToolStripMenuItem_Click);
            // 
            // guardarYSalirToolStripMenuItem
            // 
            this.guardarYSalirToolStripMenuItem.Name = "guardarYSalirToolStripMenuItem";
            this.guardarYSalirToolStripMenuItem.Size = new System.Drawing.Size(224, 28);
            this.guardarYSalirToolStripMenuItem.Text = "Guardar y Salir";
            this.guardarYSalirToolStripMenuItem.Click += new System.EventHandler(this.guardarYSalirToolStripMenuItem_Click);
            // 
            // guardarToolStripMenuItem
            // 
            this.guardarToolStripMenuItem.Name = "guardarToolStripMenuItem";
            this.guardarToolStripMenuItem.Size = new System.Drawing.Size(224, 28);
            this.guardarToolStripMenuItem.Text = "Guardar";
            this.guardarToolStripMenuItem.Click += new System.EventHandler(this.guardarToolStripMenuItem_Click);
            // 
            // salirToolStripMenuItem
            // 
            this.salirToolStripMenuItem.Name = "salirToolStripMenuItem";
            this.salirToolStripMenuItem.Size = new System.Drawing.Size(224, 28);
            this.salirToolStripMenuItem.Text = "Salir";
            this.salirToolStripMenuItem.Click += new System.EventHandler(this.salirToolStripMenuItem_Click);
            // 
            // herramientasToolStripMenuItem
            // 
            this.herramientasToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.insertarToolStripMenuItem,
            this.toolStripMenuItem1});
            this.herramientasToolStripMenuItem.Font = new System.Drawing.Font("Segoe UI", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.herramientasToolStripMenuItem.Name = "herramientasToolStripMenuItem";
            this.herramientasToolStripMenuItem.Size = new System.Drawing.Size(126, 27);
            this.herramientasToolStripMenuItem.Text = "Herramientas";
            // 
            // toolStripMenuItem1
            // 
            this.toolStripMenuItem1.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.tItuloToolStripMenuItem,
            this.subtituloToolStripMenuItem,
            this.subsubTituloToolStripMenuItem});
            this.toolStripMenuItem1.Name = "toolStripMenuItem1";
            this.toolStripMenuItem1.Size = new System.Drawing.Size(195, 28);
            this.toolStripMenuItem1.Text = "Tipo de texto";
            // 
            // tItuloToolStripMenuItem
            // 
            this.tItuloToolStripMenuItem.Name = "tItuloToolStripMenuItem";
            this.tItuloToolStripMenuItem.Size = new System.Drawing.Size(193, 28);
            this.tItuloToolStripMenuItem.Text = "TItulo";
            // 
            // subtituloToolStripMenuItem
            // 
            this.subtituloToolStripMenuItem.Name = "subtituloToolStripMenuItem";
            this.subtituloToolStripMenuItem.Size = new System.Drawing.Size(193, 28);
            this.subtituloToolStripMenuItem.Text = "Subtitulo";
            // 
            // subsubTituloToolStripMenuItem
            // 
            this.subsubTituloToolStripMenuItem.Name = "subsubTituloToolStripMenuItem";
            this.subsubTituloToolStripMenuItem.Size = new System.Drawing.Size(193, 28);
            this.subsubTituloToolStripMenuItem.Text = "SubsubTitulo";
            // 
            // insertarToolStripMenuItem
            // 
            this.insertarToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.cabeceraToolStripMenuItem,
            this.imagenToolStripMenuItem,
            this.linkToolStripMenuItem,
            this.códigoToolStripMenuItem});
            this.insertarToolStripMenuItem.Name = "insertarToolStripMenuItem";
            this.insertarToolStripMenuItem.Size = new System.Drawing.Size(224, 28);
            this.insertarToolStripMenuItem.Text = "Insertar";
            // 
            // imagenToolStripMenuItem
            // 
            this.imagenToolStripMenuItem.Name = "imagenToolStripMenuItem";
            this.imagenToolStripMenuItem.Size = new System.Drawing.Size(152, 28);
            this.imagenToolStripMenuItem.Text = "Imagen";
            // 
            // linkToolStripMenuItem
            // 
            this.linkToolStripMenuItem.Name = "linkToolStripMenuItem";
            this.linkToolStripMenuItem.Size = new System.Drawing.Size(152, 28);
            this.linkToolStripMenuItem.Text = "Link";
            // 
            // códigoToolStripMenuItem
            // 
            this.códigoToolStripMenuItem.Name = "códigoToolStripMenuItem";
            this.códigoToolStripMenuItem.Size = new System.Drawing.Size(152, 28);
            this.códigoToolStripMenuItem.Text = "Código";
            // 
            // contextMenuStrip1
            // 
            this.contextMenuStrip1.ImageScalingSize = new System.Drawing.Size(20, 20);
            this.contextMenuStrip1.Name = "contextMenuStrip1";
            this.contextMenuStrip1.Size = new System.Drawing.Size(61, 4);
            // 
            // richTextBox1
            // 
            this.richTextBox1.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.richTextBox1.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.richTextBox1.Location = new System.Drawing.Point(43, 153);
            this.richTextBox1.Margin = new System.Windows.Forms.Padding(4);
            this.richTextBox1.Name = "richTextBox1";
            this.richTextBox1.Size = new System.Drawing.Size(1300, 497);
            this.richTextBox1.TabIndex = 2;
            this.richTextBox1.Text = "";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.btn_addCode);
            this.groupBox1.Controls.Add(this.btn_addImage);
            this.groupBox1.Controls.Add(this.btn_addLink);
            this.groupBox1.Controls.Add(this.btn_addNewPage);
            this.groupBox1.Controls.Add(this.btn_addSubtitle);
            this.groupBox1.Controls.Add(this.btn_addTitle);
            this.groupBox1.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox1.Location = new System.Drawing.Point(43, 35);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(4);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(4);
            this.groupBox1.Size = new System.Drawing.Size(709, 110);
            this.groupBox1.TabIndex = 5;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Herramientas";
            // 
            // btn_addCode
            // 
            this.btn_addCode.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_addCode.Location = new System.Drawing.Point(457, 40);
            this.btn_addCode.Margin = new System.Windows.Forms.Padding(4);
            this.btn_addCode.Name = "btn_addCode";
            this.btn_addCode.Size = new System.Drawing.Size(100, 40);
            this.btn_addCode.TabIndex = 7;
            this.btn_addCode.Text = "Código";
            this.btn_addCode.UseVisualStyleBackColor = true;
            this.btn_addCode.Click += new System.EventHandler(this.btn_addCode_Click);
            // 
            // btn_addImage
            // 
            this.btn_addImage.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_addImage.Location = new System.Drawing.Point(349, 40);
            this.btn_addImage.Margin = new System.Windows.Forms.Padding(4);
            this.btn_addImage.Name = "btn_addImage";
            this.btn_addImage.Size = new System.Drawing.Size(100, 40);
            this.btn_addImage.TabIndex = 6;
            this.btn_addImage.Text = "Imagen";
            this.btn_addImage.UseVisualStyleBackColor = true;
            this.btn_addImage.Click += new System.EventHandler(this.btn_addImage_Click);
            // 
            // btn_addLink
            // 
            this.btn_addLink.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_addLink.Location = new System.Drawing.Point(241, 40);
            this.btn_addLink.Margin = new System.Windows.Forms.Padding(4);
            this.btn_addLink.Name = "btn_addLink";
            this.btn_addLink.Size = new System.Drawing.Size(100, 40);
            this.btn_addLink.TabIndex = 5;
            this.btn_addLink.Text = "Link";
            this.btn_addLink.UseVisualStyleBackColor = true;
            this.btn_addLink.Click += new System.EventHandler(this.btn_addLink_Click);
            // 
            // btn_addNewPage
            // 
            this.btn_addNewPage.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_addNewPage.Location = new System.Drawing.Point(565, 40);
            this.btn_addNewPage.Margin = new System.Windows.Forms.Padding(4);
            this.btn_addNewPage.Name = "btn_addNewPage";
            this.btn_addNewPage.Size = new System.Drawing.Size(125, 40);
            this.btn_addNewPage.TabIndex = 2;
            this.btn_addNewPage.Text = "Nueva Pagina";
            this.btn_addNewPage.UseVisualStyleBackColor = true;
            this.btn_addNewPage.Click += new System.EventHandler(this.btn_addNewPage_Click);
            // 
            // btn_addSubtitle
            // 
            this.btn_addSubtitle.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_addSubtitle.Location = new System.Drawing.Point(133, 40);
            this.btn_addSubtitle.Margin = new System.Windows.Forms.Padding(4);
            this.btn_addSubtitle.Name = "btn_addSubtitle";
            this.btn_addSubtitle.Size = new System.Drawing.Size(100, 40);
            this.btn_addSubtitle.TabIndex = 1;
            this.btn_addSubtitle.Text = "Subtitulo";
            this.btn_addSubtitle.UseVisualStyleBackColor = true;
            this.btn_addSubtitle.Click += new System.EventHandler(this.btn_addSubtitle_Click);
            // 
            // btn_addTitle
            // 
            this.btn_addTitle.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_addTitle.Location = new System.Drawing.Point(25, 40);
            this.btn_addTitle.Margin = new System.Windows.Forms.Padding(4);
            this.btn_addTitle.Name = "btn_addTitle";
            this.btn_addTitle.Size = new System.Drawing.Size(100, 40);
            this.btn_addTitle.TabIndex = 0;
            this.btn_addTitle.Text = "Titulo";
            this.btn_addTitle.UseVisualStyleBackColor = true;
            this.btn_addTitle.Click += new System.EventHandler(this.btn_addTitle_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(28, 50);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(80, 20);
            this.label1.TabIndex = 4;
            this.label1.Text = "Font Size";
            // 
            // cBox_fontSize
            // 
            this.cBox_fontSize.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cBox_fontSize.FormattingEnabled = true;
            this.cBox_fontSize.Location = new System.Drawing.Point(116, 47);
            this.cBox_fontSize.Margin = new System.Windows.Forms.Padding(4);
            this.cBox_fontSize.Name = "cBox_fontSize";
            this.cBox_fontSize.Size = new System.Drawing.Size(148, 28);
            this.cBox_fontSize.TabIndex = 3;
            this.cBox_fontSize.SelectedIndexChanged += new System.EventHandler(this.cBox_fontSize_SelectedIndexChanged);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.label1);
            this.groupBox2.Controls.Add(this.cBox_fontSize);
            this.groupBox2.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox2.Location = new System.Drawing.Point(787, 35);
            this.groupBox2.Margin = new System.Windows.Forms.Padding(4);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Padding = new System.Windows.Forms.Padding(4);
            this.groupBox2.Size = new System.Drawing.Size(316, 110);
            this.groupBox2.TabIndex = 7;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Texto";
            // 
            // cabeceraToolStripMenuItem
            // 
            this.cabeceraToolStripMenuItem.Name = "cabeceraToolStripMenuItem";
            this.cabeceraToolStripMenuItem.Size = new System.Drawing.Size(224, 28);
            this.cabeceraToolStripMenuItem.Text = "Cabecera";
            this.cabeceraToolStripMenuItem.Click += new System.EventHandler(this.cabeceraToolStripMenuItem_Click);
            // 
            // Inicio
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.ClientSize = new System.Drawing.Size(1392, 690);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.richTextBox1);
            this.Controls.Add(this.menuStrip1);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MainMenuStrip = this.menuStrip1;
            this.Margin = new System.Windows.Forms.Padding(4);
            this.Name = "Inicio";
            this.Text = "Crear Post";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.Form1_Load);
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.groupBox1.ResumeLayout(false);
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem archivoToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem abrirToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem crearToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem salirToolStripMenuItem;
        private System.Windows.Forms.ContextMenuStrip contextMenuStrip1;
        private System.Windows.Forms.RichTextBox richTextBox1;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button btn_addTitle;
        private System.Windows.Forms.Button btn_addSubtitle;
        private System.Windows.Forms.Button btn_addNewPage;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.ComboBox cBox_fontSize;
        private System.Windows.Forms.Button btn_addLink;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.Button btn_addImage;
        private System.Windows.Forms.Button btn_addCode;
        private System.Windows.Forms.ToolStripMenuItem herramientasToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem toolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem guardarYSalirToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem guardarToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem tItuloToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem subtituloToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem subsubTituloToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem insertarToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem imagenToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem linkToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem códigoToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem cabeceraToolStripMenuItem;
    }
}

