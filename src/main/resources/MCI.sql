USE [MCI]
GO

/****** Object:  Table [dbo].[tb_relac_usuario_roles]    Script Date: 28/09/2018 11:26:46 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tb_relac_usuario_roles](
	[id_usuario] [numeric](5, 0) NULL,
	[id_role] [numeric](5, 0) NULL
) ON [PRIMARY]

GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[tb_roles](
	[id] [numeric](5, 0) IDENTITY(1,1) NOT NULL,
	[profile] [varchar](50) NULL,
	[nivel] [numeric](3, 0) NULL,
 CONSTRAINT [PK_tb_roles] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO


/****** Object:  Table [dbo].[tb_usuarios]    Script Date: 28/09/2018 11:27:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[tb_usuarios](
	[id] [numeric](5, 0) IDENTITY(1,1) NOT NULL,
	[login] [varchar](50) NULL,
	[password] [varchar](255) NULL,
	[nome] [varchar](50) NULL,
	[sobrenome] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[telefone] [varchar](50) NULL,
	[cpf] [varchar](15) NULL,
	[profile] [varchar](20) NULL,
	[is_ativo] [bit] NULL,
 CONSTRAINT [PK_tb_usuarios] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO





