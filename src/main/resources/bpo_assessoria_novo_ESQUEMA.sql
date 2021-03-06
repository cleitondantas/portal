USE [bpo_assessoria_novo]
GO
/****** Object:  Table [dbo].[tb_analise]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_analise](
	[cod_analise] [int] IDENTITY(1,1) NOT NULL,
	[cod_cadastro] [int] NULL,
	[cod_instituicao_financeira] [int] NULL,
	[numero_cadastro_incorporadora_fid] [int] NULL,
	[cod_status_analise] [int] NULL,
	[cod_sub_status_analise] [int] NULL,
	[cod_usuario] [bigint] NULL,
	[data_assinatura] [datetime2](7) NULL,
	[data_emissao] [datetime2](7) NULL,
	[data_pasta_mae] [datetime2](7) NULL,
	[data_simulacao] [datetime2](7) NULL,
	[dt_atividade] [datetime] NULL,
 CONSTRAINT [PK__tb_anali__BC4550AE1B58D707] PRIMARY KEY CLUSTERED 
(
	[cod_analise] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tb_cadastro]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_cadastro](
	[cod_cadastro] [int] IDENTITY(1,1) NOT NULL,
	[cod_originacao] [smallint] NULL,
	[numero_cadastro_incorporadora_fid] [int] NULL,
	[cod_incorporadora] [smallint] NULL,
	[cod_empreendimento] [int] NULL,
	[cpf_cnpj] [varchar](14) NULL,
	[bloco_torre] [varchar](50) NULL,
	[unidade] [varchar](10) NULL,
	[cod_usuario] [int] NULL,
	[vaga_automovel] [varchar](50) NULL,
	[box] [varchar](50) NULL,
	[cep] [char](8) NULL,
	[numero] [varchar](10) NULL,
	[bairro] [varchar](255) NULL,
	[cidade] [varchar](255) NULL,
	[endereco] [varchar](255) NULL,
	[complemento] [varchar](255) NULL,
	[uf] [char](2) NULL,
	[dt_entrada] [datetime] NULL,
	[dt_atualizacao] [datetime] NULL,
	[dt_atividade] [datetime] NULL,
 CONSTRAINT [PK__tb_cadas__D3B97886B74E9FA8] PRIMARY KEY CLUSTERED 
(
	[cod_cadastro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_cliente_cadastro]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_cliente_cadastro](
	[cod_cadastro] [int] NULL,
	[cpf_cnpj] [varchar](14) NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_clientes]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_clientes](
	[cpf_cnpj] [varchar](14) NOT NULL,
	[cod_tipo_cliente] [smallint] NULL,
	[nome_cliente] [varchar](255) NULL,
	[n_documento] [varchar](14) NULL,
	[orgao_expedidor] [varchar](10) NULL,
	[data_expedicao] [date] NULL,
	[data_nascimento] [date] NULL,
	[cod_estado_civil] [smallint] NULL,
	[nacionalidade] [varchar](50) NULL,
	[profissao] [varchar](50) NULL,
	[cep_residencial] [char](8) NULL,
	[uf] [char](2) NULL,
	[cidade] [varchar](255) NULL,
	[bairro] [varchar](255) NULL,
	[endereco] [varchar](255) NULL,
	[complemento] [varchar](50) NULL,
	[numero_endereco] [varchar](10) NULL,
	[valor_renda] [decimal](20, 2) NULL,
	[cod_usuario] [int] NULL,
	[data_cadastro] [datetime] NULL,
 CONSTRAINT [PK__tb_clien__F9F7EECE7EB5A864] PRIMARY KEY CLUSTERED 
(
	[cpf_cnpj] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_contato_clientes]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_contato_clientes](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[cod_tipo_contato] [int] NULL,
	[cpf_cnpj] [varchar](255) NULL,
	[desc_contato] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_dados_faturamento]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_dados_faturamento](
	[cod_dados_faturamento] [int] IDENTITY(1,1) NOT NULL,
	[cod_cadastro] [int] NOT NULL,
	[cod_analise] [int] NULL,
	[cpf_cnpj] [varchar](14) NOT NULL,
	[razao_social_spe] [varchar](200) NULL,
	[parcela_1] [numeric](16, 2) NULL,
	[nota_fiscal_1] [varchar](30) NULL,
	[mes_faturamento_1] [date] NULL,
	[parcela_2] [numeric](16, 2) NULL,
	[nota_fiscal_2] [varchar](30) NULL,
	[mes_faturamento_2] [date] NULL,
	[mes_faturado] [date] NULL,
	[total_recebido_incorporadora] [numeric](16, 2) NULL,
	[recebimento_teorico_banco] [numeric](16, 2) NULL,
	[numero_nota_fiscal] [varchar](30) NULL,
	[total_recebido] [numeric](16, 2) NULL,
	[observacao] [varchar](max) NULL,
	[dt_atividade] [datetime] NOT NULL,
 CONSTRAINT [PK_tb_dados_faturamento] PRIMARY KEY CLUSTERED 
(
	[cod_dados_faturamento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_empreendimentos]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_empreendimentos](
	[cod_empreendimento] [int] IDENTITY(1,1) NOT NULL,
	[cnpj_spe] [char](14) NULL,
	[desc_empreendimento] [varchar](255) NULL,
	[rua] [varchar](255) NULL,
	[num] [varchar](10) NULL,
	[cidade] [varchar](50) NULL,
	[bairro] [varchar](50) NULL,
	[cep] [varchar](15) NULL,
 CONSTRAINT [PK__tb_empre__F90A1A8C7540EB54] PRIMARY KEY CLUSTERED 
(
	[cod_empreendimento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_estado_civil]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_estado_civil](
	[cod_estado_civil] [smallint] NOT NULL,
	[desc_estado_civil] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_estado_civil] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_fases]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_fases](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fase] [varchar](50) NULL,
	[num_fase] [int] NULL,
 CONSTRAINT [PK_tb_fases] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_historico]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_historico](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[data_historico] [datetime] NOT NULL,
	[cod_cadastro] [int] NOT NULL,
	[cod_usuario] [int] NOT NULL,
	[num_fase] [int] NULL,
	[num_sintese] [int] NULL,
	[descricao] [text] NULL,
 CONSTRAINT [PK__tb_histo__3213E83F64EF26CE] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tb_incorporadoras]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_incorporadoras](
	[cod_incorporadora] [smallint] NOT NULL,
	[desc_incorporadora] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_incorporadora] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_instituicao_financeira]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_instituicao_financeira](
	[cod_instituicao_financeira] [smallint] IDENTITY(1,1) NOT NULL,
	[desc_instituicao_financeira] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_instituicao_financeira] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_modalidade_simulacao]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_modalidade_simulacao](
	[cod_modalidade_simulacao] [smallint] IDENTITY(1,1) NOT NULL,
	[desc_modalidade_simulacao] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_modalidade_simulacao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_originacao]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_originacao](
	[cod_originacao] [smallint] NOT NULL,
	[desc_originacao] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_originacao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_relac_analise_simulacao]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_relac_analise_simulacao](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[cod_analise] [int] NOT NULL,
	[cod_simulacao] [int] NOT NULL,
 CONSTRAINT [PK_tb_relac_analise_simulacao] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tb_relac_usuario_roles]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_relac_usuario_roles](
	[id_usuario] [bigint] NOT NULL,
	[id_role] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC,
	[id_role] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tb_roles]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_roles](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[nivel] [int] NULL,
	[profile] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_sicaq]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_sicaq](
	[cod_sicaq] [smallint] IDENTITY(1,1) NOT NULL,
	[desc_sicaq] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_sicaq] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_simulacao]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_simulacao](
	[cod_simulacao] [int] IDENTITY(1,1) NOT NULL,
	[cod_cadastro] [int] NULL,
	[cod_instituicao_financeira] [int] NULL,
	[cod_modalidade_simulacao] [int] NULL,
	[cod_sicaq] [int] NULL,
	[cod_status_simulacao] [int] NULL,
	[cod_tipo_amortizacao] [int] NULL,
	[cod_usuario] [int] NULL,
	[correspondente] [varchar](255) NULL,
	[obs] [varchar](255) NULL,
	[prazo_financiamento] [int] NULL,
	[valor_avaliacao_inst_financ] [numeric](16, 2) NULL,
	[valor_despesas_financiadas] [numeric](16, 2) NULL,
	[valor_fgts] [numeric](16, 2) NULL,
	[valor_financiamento] [numeric](16, 2) NULL,
	[valor_primeira_parcela] [numeric](16, 2) NULL,
	[valor_recursos_proprios] [numeric](16, 2) NULL,
	[valor_subsidio] [numeric](16, 2) NULL,
	[valor_compra_venda] [numeric](16, 2) NULL,
	[saldo_devedor] [numeric](16, 2) NULL,
	[data_envio_banco] [date] NULL,
	[valor_credito] [numeric](16, 2) NULL,
	[taxadejuros] [numeric](8, 2) NULL,
	[valor_avaliacao] [numeric](16, 2) NULL,
	[simulacaoselecionado] [bit] NULL,
	[dt_atividade] [datetime] NULL,
 CONSTRAINT [PK__tb_simul__13F8F35B73250FA8] PRIMARY KEY CLUSTERED 
(
	[cod_simulacao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_sinteses]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_sinteses](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[sintese] [varchar](50) NULL,
	[num_fase] [int] NULL,
	[num_sintese] [int] NULL,
 CONSTRAINT [PK_tb_sinteses] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_spe]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_spe](
	[cod_incorporadora] [smallint] NULL,
	[cnpj_spe] [char](14) NOT NULL,
	[desc_spe] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cnpj_spe] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_status_analise]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_status_analise](
	[cod_status_analise] [smallint] IDENTITY(1,1) NOT NULL,
	[desc_status_analise] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_status_analise] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_status_simulacao]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_status_simulacao](
	[cod_status_simulacao] [int] IDENTITY(1,1) NOT NULL,
	[desc_status_simulacao] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_status_simulacao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_sub_status_analise]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_sub_status_analise](
	[cod_sub_status_analise] [int] IDENTITY(1,1) NOT NULL,
	[cod_status_analise] [int] NULL,
	[desc_sub_status_analise] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_sub_status_analise] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_tipo_amortizacao]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_tipo_amortizacao](
	[cod_tipo_amortizacao] [int] IDENTITY(1,1) NOT NULL,
	[desc_tipo_amortizacao] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_tipo_amortizacao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_tipo_clientes]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_tipo_clientes](
	[cod_tipo_cliente] [smallint] NOT NULL,
	[desc_tipo_cliente] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_tipo_cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_tipo_contato]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_tipo_contato](
	[cod_tipo_contato] [int] IDENTITY(1,1) NOT NULL,
	[desc_tipo_contato] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cod_tipo_contato] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tb_upload_files_alfresco]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tb_upload_files_alfresco](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt_atividade] [datetime2](7) NULL,
	[idalfresco] [varchar](255) NULL,
	[id_usuario_web] [int] NULL,
	[mimetype] [varchar](255) NULL,
	[nome_file] [varchar](255) NULL,
	[plataforma] [varchar](255) NULL,
	[sha256] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TB_USUARIOS_WEB]    Script Date: 29/05/2019 10:30:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TB_USUARIOS_WEB](
	[id] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[cod_usuario] [int] NOT NULL,
	[login] [varchar](50) NOT NULL,
	[nome] [varchar](50) NULL,
	[sobrenome] [varchar](50) NULL,
	[password] [varchar](100) NULL,
	[telefone] [varchar](15) NULL,
	[cpf] [varchar](15) NULL,
	[email_contato] [varchar](50) NULL,
	[is_ativo] [bit] NULL,
 CONSTRAINT [PK_TB_USUARIOS_WEB] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [uq_cod_usuario] UNIQUE NONCLUSTERED 
(
	[cod_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[tb_cadastro] ADD  CONSTRAINT [DF__tb_cadast__data___3A81B327]  DEFAULT (getdate()) FOR [dt_entrada]
GO
ALTER TABLE [dbo].[tb_clientes] ADD  CONSTRAINT [DF__tb_client__data___25869641]  DEFAULT (getdate()) FOR [data_cadastro]
GO
ALTER TABLE [dbo].[tb_cadastro]  WITH CHECK ADD  CONSTRAINT [fk_cod_empreendimento_cadastro] FOREIGN KEY([cod_empreendimento])
REFERENCES [dbo].[tb_empreendimentos] ([cod_empreendimento])
GO
ALTER TABLE [dbo].[tb_cadastro] CHECK CONSTRAINT [fk_cod_empreendimento_cadastro]
GO
ALTER TABLE [dbo].[tb_cadastro]  WITH CHECK ADD  CONSTRAINT [fk_cod_originacao] FOREIGN KEY([cod_originacao])
REFERENCES [dbo].[tb_originacao] ([cod_originacao])
GO
ALTER TABLE [dbo].[tb_cadastro] CHECK CONSTRAINT [fk_cod_originacao]
GO
ALTER TABLE [dbo].[tb_cliente_cadastro]  WITH CHECK ADD  CONSTRAINT [fk_cod_cadastro_cl] FOREIGN KEY([cod_cadastro])
REFERENCES [dbo].[tb_cadastro] ([cod_cadastro])
GO
ALTER TABLE [dbo].[tb_cliente_cadastro] CHECK CONSTRAINT [fk_cod_cadastro_cl]
GO
ALTER TABLE [dbo].[tb_clientes]  WITH CHECK ADD  CONSTRAINT [fk_cod_estado_civil] FOREIGN KEY([cod_estado_civil])
REFERENCES [dbo].[tb_estado_civil] ([cod_estado_civil])
GO
ALTER TABLE [dbo].[tb_clientes] CHECK CONSTRAINT [fk_cod_estado_civil]
GO
ALTER TABLE [dbo].[tb_clientes]  WITH CHECK ADD  CONSTRAINT [fk_cod_tipo_cliente] FOREIGN KEY([cod_tipo_cliente])
REFERENCES [dbo].[tb_tipo_clientes] ([cod_tipo_cliente])
GO
ALTER TABLE [dbo].[tb_clientes] CHECK CONSTRAINT [fk_cod_tipo_cliente]
GO
ALTER TABLE [dbo].[tb_clientes]  WITH CHECK ADD  CONSTRAINT [fk_login_usuario_clientes] FOREIGN KEY([cod_usuario])
REFERENCES [dbo].[TB_USUARIOS_WEB] ([cod_usuario])
GO
ALTER TABLE [dbo].[tb_clientes] CHECK CONSTRAINT [fk_login_usuario_clientes]
GO
ALTER TABLE [dbo].[tb_empreendimentos]  WITH CHECK ADD  CONSTRAINT [fk_cnpj_spe] FOREIGN KEY([cnpj_spe])
REFERENCES [dbo].[tb_spe] ([cnpj_spe])
GO
ALTER TABLE [dbo].[tb_empreendimentos] CHECK CONSTRAINT [fk_cnpj_spe]
GO
ALTER TABLE [dbo].[tb_relac_usuario_roles]  WITH CHECK ADD  CONSTRAINT [FKsjoke8mmx3rwbhpby5pva8y24] FOREIGN KEY([id_role])
REFERENCES [dbo].[tb_roles] ([id])
GO
ALTER TABLE [dbo].[tb_relac_usuario_roles] CHECK CONSTRAINT [FKsjoke8mmx3rwbhpby5pva8y24]
GO
ALTER TABLE [dbo].[tb_spe]  WITH CHECK ADD  CONSTRAINT [fk_cod_incorporadora] FOREIGN KEY([cod_incorporadora])
REFERENCES [dbo].[tb_incorporadoras] ([cod_incorporadora])
GO
ALTER TABLE [dbo].[tb_spe] CHECK CONSTRAINT [fk_cod_incorporadora]
GO
