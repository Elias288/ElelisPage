namespace CreatePost
{
    partial class CreateFile
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btn_save = new System.Windows.Forms.Button();
            this.txFileName = new System.Windows.Forms.TextBox();
            this.richTextBoxDesc = new System.Windows.Forms.RichTextBox();
            this.listBox_categories = new System.Windows.Forms.ListBox();
            this.btn_addTag = new System.Windows.Forms.Button();
            this.btn_removeTag = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btn_removeAll = new System.Windows.Forms.Button();
            this.comboBox_categories = new System.Windows.Forms.ComboBox();
            this.button1 = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // btn_save
            // 
            this.btn_save.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_save.Location = new System.Drawing.Point(394, 343);
            this.btn_save.Margin = new System.Windows.Forms.Padding(2);
            this.btn_save.Name = "btn_save";
            this.btn_save.Size = new System.Drawing.Size(75, 32);
            this.btn_save.TabIndex = 0;
            this.btn_save.Text = "Crear";
            this.btn_save.UseVisualStyleBackColor = true;
            this.btn_save.Click += new System.EventHandler(this.btn_save_Click);
            // 
            // txFileName
            // 
            this.txFileName.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txFileName.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(224)))), ((int)(((byte)(224)))), ((int)(((byte)(224)))));
            this.txFileName.Location = new System.Drawing.Point(21, 25);
            this.txFileName.Margin = new System.Windows.Forms.Padding(2);
            this.txFileName.Name = "txFileName";
            this.txFileName.Size = new System.Drawing.Size(335, 22);
            this.txFileName.TabIndex = 1;
            this.txFileName.Text = "Titulo";
            this.txFileName.Enter += new System.EventHandler(this.txFileName_Enter);
            this.txFileName.Leave += new System.EventHandler(this.txFileName_Leave);
            // 
            // richTextBoxDesc
            // 
            this.richTextBoxDesc.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.richTextBoxDesc.ForeColor = System.Drawing.Color.Silver;
            this.richTextBoxDesc.Location = new System.Drawing.Point(21, 64);
            this.richTextBoxDesc.Name = "richTextBoxDesc";
            this.richTextBoxDesc.Size = new System.Drawing.Size(335, 264);
            this.richTextBoxDesc.TabIndex = 2;
            this.richTextBoxDesc.Text = "Descripción";
            this.richTextBoxDesc.Enter += new System.EventHandler(this.richTextBoxDesc_Enter);
            this.richTextBoxDesc.Leave += new System.EventHandler(this.richTextBoxDesc_Leave);
            // 
            // listBox_categories
            // 
            this.listBox_categories.FormattingEnabled = true;
            this.listBox_categories.Location = new System.Drawing.Point(6, 58);
            this.listBox_categories.Name = "listBox_categories";
            this.listBox_categories.Size = new System.Drawing.Size(162, 199);
            this.listBox_categories.TabIndex = 3;
            // 
            // btn_addTag
            // 
            this.btn_addTag.Location = new System.Drawing.Point(115, 19);
            this.btn_addTag.Name = "btn_addTag";
            this.btn_addTag.Size = new System.Drawing.Size(53, 33);
            this.btn_addTag.TabIndex = 4;
            this.btn_addTag.Text = "Agregar";
            this.btn_addTag.UseVisualStyleBackColor = true;
            this.btn_addTag.Click += new System.EventHandler(this.btn_addTag_Click);
            // 
            // btn_removeTag
            // 
            this.btn_removeTag.Location = new System.Drawing.Point(6, 263);
            this.btn_removeTag.Name = "btn_removeTag";
            this.btn_removeTag.Size = new System.Drawing.Size(75, 33);
            this.btn_removeTag.TabIndex = 5;
            this.btn_removeTag.Text = "Quitar";
            this.btn_removeTag.UseVisualStyleBackColor = true;
            this.btn_removeTag.Click += new System.EventHandler(this.btn_removeTag_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.btn_removeAll);
            this.groupBox1.Controls.Add(this.comboBox_categories);
            this.groupBox1.Controls.Add(this.listBox_categories);
            this.groupBox1.Controls.Add(this.btn_removeTag);
            this.groupBox1.Controls.Add(this.btn_addTag);
            this.groupBox1.Location = new System.Drawing.Point(374, 25);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(175, 303);
            this.groupBox1.TabIndex = 6;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Categorias";
            // 
            // btn_removeAll
            // 
            this.btn_removeAll.Location = new System.Drawing.Point(87, 263);
            this.btn_removeAll.Name = "btn_removeAll";
            this.btn_removeAll.Size = new System.Drawing.Size(81, 33);
            this.btn_removeAll.TabIndex = 7;
            this.btn_removeAll.Text = "Quitar todo";
            this.btn_removeAll.UseVisualStyleBackColor = true;
            this.btn_removeAll.Click += new System.EventHandler(this.btn_removeAll_Click);
            // 
            // comboBox_categories
            // 
            this.comboBox_categories.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBox_categories.FormattingEnabled = true;
            this.comboBox_categories.Location = new System.Drawing.Point(6, 26);
            this.comboBox_categories.Name = "comboBox_categories";
            this.comboBox_categories.Size = new System.Drawing.Size(103, 21);
            this.comboBox_categories.TabIndex = 6;
            this.comboBox_categories.SelectedIndexChanged += new System.EventHandler(this.comboBox_categories_SelectedIndexChanged);
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(474, 343);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 31);
            this.button1.TabIndex = 7;
            this.button1.Text = "Cancelar";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // CreateFile
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(569, 391);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.richTextBoxDesc);
            this.Controls.Add(this.txFileName);
            this.Controls.Add(this.btn_save);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "CreateFile";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "CreateFile";
            this.Load += new System.EventHandler(this.CreateFile_Load);
            this.groupBox1.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btn_save;
        private System.Windows.Forms.TextBox txFileName;
        private System.Windows.Forms.RichTextBox richTextBoxDesc;
        private System.Windows.Forms.ListBox listBox_categories;
        private System.Windows.Forms.Button btn_addTag;
        private System.Windows.Forms.Button btn_removeTag;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button btn_removeAll;
        private System.Windows.Forms.ComboBox comboBox_categories;
        private System.Windows.Forms.Button button1;
    }
}