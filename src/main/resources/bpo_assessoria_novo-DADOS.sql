USE [bpo_assessoria_novo]
GO
INSERT [dbo].[tb_tipo_clientes] ([cod_tipo_cliente], [desc_tipo_cliente]) VALUES (1, N'Pessoa Física')
INSERT [dbo].[tb_tipo_clientes] ([cod_tipo_cliente], [desc_tipo_cliente]) VALUES (2, N'Pessoa Jurídica')
INSERT [dbo].[tb_estado_civil] ([cod_estado_civil], [desc_estado_civil]) VALUES (1, N'Solteiro')
INSERT [dbo].[tb_estado_civil] ([cod_estado_civil], [desc_estado_civil]) VALUES (2, N'Casado')
INSERT [dbo].[tb_estado_civil] ([cod_estado_civil], [desc_estado_civil]) VALUES (3, N'Viuvo')
INSERT [dbo].[tb_estado_civil] ([cod_estado_civil], [desc_estado_civil]) VALUES (4, N'União Estável')
SET IDENTITY_INSERT [dbo].[TB_USUARIOS_WEB] ON 

INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [password], [sobrenome], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(1 AS Numeric(18, 0)), 10001, N'admin', N'Cleiton', N'$2a$10$fluCxJMH9rXbUQGeZgr8IOf8mDs5N.jVoZKDeSlZy5L2kAoHv2BN2', N'Dantas', N'9667762182', N'33590760877', N'cleiton.anjos@montreal.com.br', 1)
INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [password], [sobrenome], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(2 AS Numeric(18, 0)), 10002, N'matheus.m_c', N'Matheus', N'$2a$10$cbgy31BYX5RUt5bZv3z8N.rf6resxHpQ5NYt5BsN9xgm/0LRX3wqy', N'm_c', N'9212', N'33590760878', N'matheus.m_c@hotmail.com', 1)
SET IDENTITY_INSERT [dbo].[TB_USUARIOS_WEB] OFF
INSERT [dbo].[tb_clientes] ([cpf_cnpj], [cod_tipo_cliente], [nome_cliente], [n_documento], [orgao_expedidor], [data_expedicao], [data_nascimento], [cod_estado_civil], [nacionalidade], [profissao], [cep_residencial], [uf], [cidade], [bairro], [endereco], [complemento], [numero_endereco], [valor_renda], [cod_usuario], [data_cadastro]) VALUES (N'09876543201', 1, N'Stephanny Borges', N'098765432', N'ssp', CAST(0x0D370B00 AS Date), CAST(0x4DFD0A00 AS Date), 4, N'Brasileira', N'Dentista', N'05206010', N'SP', N'São Paulo', N'Vila Perus', N'Rua Orlando Peccicacco', N'A', N'44', CAST(8600.00 AS Decimal(20, 2)), NULL, NULL)
INSERT [dbo].[tb_clientes] ([cpf_cnpj], [cod_tipo_cliente], [nome_cliente], [n_documento], [orgao_expedidor], [data_expedicao], [data_nascimento], [cod_estado_civil], [nacionalidade], [profissao], [cep_residencial], [uf], [cidade], [bairro], [endereco], [complemento], [numero_endereco], [valor_renda], [cod_usuario], [data_cadastro]) VALUES (N'1', 1, N'1', N'1', N'1', CAST(0x233F0B00 AS Date), CAST(0x233F0B00 AS Date), 1, N'1', N'1', N'01001000', N'SP', N'São Paulo', N'se', N'Praça da Sé', N'1b', N'1', CAST(11.11 AS Decimal(20, 2)), NULL, NULL)
INSERT [dbo].[tb_clientes] ([cpf_cnpj], [cod_tipo_cliente], [nome_cliente], [n_documento], [orgao_expedidor], [data_expedicao], [data_nascimento], [cod_estado_civil], [nacionalidade], [profissao], [cep_residencial], [uf], [cidade], [bairro], [endereco], [complemento], [numero_endereco], [valor_renda], [cod_usuario], [data_cadastro]) VALUES (N'1111', 1, N'1111', N'111', N'111', CAST(0x233F0B00 AS Date), CAST(0x233F0B00 AS Date), 1, N'111', N'1111', N'01001000', N'SP', N'São Paulo', N'Sé', N'Praça da Sé', N'lado ímpar', N'11', CAST(1111.11 AS Decimal(20, 2)), NULL, NULL)
INSERT [dbo].[tb_clientes] ([cpf_cnpj], [cod_tipo_cliente], [nome_cliente], [n_documento], [orgao_expedidor], [data_expedicao], [data_nascimento], [cod_estado_civil], [nacionalidade], [profissao], [cep_residencial], [uf], [cidade], [bairro], [endereco], [complemento], [numero_endereco], [valor_renda], [cod_usuario], [data_cadastro]) VALUES (N'12345678912', 1, N'Bruno Medeiros', N'123456789', N'ssp', CAST(0x2E3D0B00 AS Date), CAST(0xE2020B00 AS Date), 2, N'Brasileira', N'Advogado', N'01004000', N'SP', N'São Paulo', N'Sé', N'Rua Barão de Paranapiacaba', N'1b', N'12', CAST(17450.00 AS Decimal(20, 2)), NULL, NULL)
INSERT [dbo].[tb_clientes] ([cpf_cnpj], [cod_tipo_cliente], [nome_cliente], [n_documento], [orgao_expedidor], [data_expedicao], [data_nascimento], [cod_estado_civil], [nacionalidade], [profissao], [cep_residencial], [uf], [cidade], [bairro], [endereco], [complemento], [numero_endereco], [valor_renda], [cod_usuario], [data_cadastro]) VALUES (N'2', 2, N'2', N'2', N'2', CAST(0x243F0B00 AS Date), CAST(0x243F0B00 AS Date), 2, N'2', N'2', N'01002000', N'BA', NULL, NULL, NULL, NULL, NULL, CAST(22.22 AS Decimal(20, 2)), NULL, NULL)
INSERT [dbo].[tb_clientes] ([cpf_cnpj], [cod_tipo_cliente], [nome_cliente], [n_documento], [orgao_expedidor], [data_expedicao], [data_nascimento], [cod_estado_civil], [nacionalidade], [profissao], [cep_residencial], [uf], [cidade], [bairro], [endereco], [complemento], [numero_endereco], [valor_renda], [cod_usuario], [data_cadastro]) VALUES (N'222', 2, N'222', N'222', N'222', CAST(0x243F0B00 AS Date), CAST(0x243F0B00 AS Date), 2, N'22', N'222', N'01002000', N'SP', N'São Paulo', N'Sé', N'Rua Direita', N'lado par', N'2', CAST(2222.22 AS Decimal(20, 2)), NULL, NULL)
INSERT [dbo].[tb_clientes] ([cpf_cnpj], [cod_tipo_cliente], [nome_cliente], [n_documento], [orgao_expedidor], [data_expedicao], [data_nascimento], [cod_estado_civil], [nacionalidade], [profissao], [cep_residencial], [uf], [cidade], [bairro], [endereco], [complemento], [numero_endereco], [valor_renda], [cod_usuario], [data_cadastro]) VALUES (N'99999999991', 1, N'XPTO', N'XX00XX00X0', N'XX', CAST(0x143F0B00 AS Date), CAST(0x143F0B00 AS Date), 1, N'XXXXXXXXXXX', N'XXXXXXXXX', N'07262270', N'XX', N'XXXXXXX', N'XXXX', N'XXXXXXX', N'XXXXX', N'XCXXX', CAST(35000.99 AS Decimal(20, 2)), 10001, CAST(0x0000A9B900A73D1A AS DateTime))
INSERT [dbo].[tb_clientes] ([cpf_cnpj], [cod_tipo_cliente], [nome_cliente], [n_documento], [orgao_expedidor], [data_expedicao], [data_nascimento], [cod_estado_civil], [nacionalidade], [profissao], [cep_residencial], [uf], [cidade], [bairro], [endereco], [complemento], [numero_endereco], [valor_renda], [cod_usuario], [data_cadastro]) VALUES (N'99999999992', 1, N'YYYYYYYYYYYYYYYYY', N'YY00YY00YY00', N'XX', CAST(0x143F0B00 AS Date), CAST(0x143F0B00 AS Date), 1, N'XXXXXXXXXXX', N'XXXXXXXXXXX', N'33333333', N'XX', N'XXXXXXXX', N'XXXX', N'XXXXXXXXXX''', N'X', N'XXX123', CAST(2000.20 AS Decimal(20, 2)), 10001, NULL)
INSERT [dbo].[tb_incorporadoras] ([cod_incorporadora], [desc_incorporadora]) VALUES (1, N'ECOESFERA')
INSERT [dbo].[tb_incorporadoras] ([cod_incorporadora], [desc_incorporadora]) VALUES (2, N'DIRECIONAL')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (1, N'08240085000197', N'MAX CASA I  EMPREENDIMENTOS IMOBILIARIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (1, N'08856878000135', N'ECOWAY CARRAO EMPREENDIMENTOS IMOBILIARIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'09186951000171', N'DIRECIONAL ESMERALDA EMPREENDIMENTOS IMOBILIÁRIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'09247189000196', N'ANDRADE VALLADARES RESIDENCIAL LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (1, N'09605167000150', N'ECOWAY MANSÕES SANTO ANTÔNIO EMP. IMOB. LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'10339842000126', N'UNA EMPREENDIMENTOS IMOBILIARIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'10343519000133', N'AZURITA EMPREENDIMENTOS IMOBILIÁRIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'11630309000181', N'SPL JORDÃO EMPREENDIMENTOS IMOBILIARIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'11630367000105', N'CAPIXABA EMPREENDIMENTOS IMOBILIARIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (1, N'12082337000196', N'ARAPIRACA EMPREENDIMENTOS IMOBILARIOS SPE LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'12085317000157', N'LAGOA EMPREENDIMENTOS IMOBILIÁRIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'12594510000385', N'CARNEIROS EMPREENDIMENTOS IMOBILIÁRIOS')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'13448383000107', N'TRINCHEIRAS EMPREENDIMENTOS IMOBILIÁRIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'13457942000145', N'JEQUIA EMPREENDIMNETOS IMOBILIÁRIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'13466028000160', N'PALMEIRA EMPREENDIMENTOS IMOBILIARIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'15315004000150', N'MIRANTE EMPREENDIMENTOS IMOBILIARIOS SPE LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'15709335000150', N'MUQUI EMPREENDIMENTOS IMOBILIARIOS LTDA')
INSERT [dbo].[tb_spe] ([cod_incorporadora], [cnpj_spe], [desc_spe]) VALUES (2, N'19330054000136', N'GUARINOS EMPREENDIMENTOS IMOBILIARIOS LTDA')
INSERT [dbo].[tb_originacao] ([cod_originacao], [desc_originacao]) VALUES (1, N'ISOLADO')
INSERT [dbo].[tb_originacao] ([cod_originacao], [desc_originacao]) VALUES (2, N'PILOTO')
INSERT [dbo].[tb_originacao] ([cod_originacao], [desc_originacao]) VALUES (3, N'REVERSÃO DE DISTRATO')
INSERT [dbo].[tb_originacao] ([cod_originacao], [desc_originacao]) VALUES (4, N'VENDAS NOVAS')
SET IDENTITY_INSERT [dbo].[tb_empreendimentos] ON 

INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (1, N'11630309000181', N'Bella Toscana')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (2, N'11630309000181', N'Bella Verona')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (3, N'10339842000126', N'Boulevard Esplanada')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (4, N'12594510000385', N'Conquista Monte Castelo')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (5, N'13457942000145', N'Origem Oasis')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (6, N'13457942000145', N'Ferroeste')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (7, N'09186951000171', N'Gran Felicità ')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (8, N'13448383000107', N'Gran Ville São Bernardo')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (9, N'10343519000133', N'Monterey Office')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (10, N'09247189000196', N'Portal Vistas Do Horizonte')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (11, N'12085317000157', N'Prime Lagoa Residence')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (12, N'19330054000136', N'Reservas Do Bosque')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (13, N'15315004000150', N'Splendido Residence')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (14, N'13457942000145', N'Sublime Oásis')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (15, N'15709335000150', N'Supremo Residence')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (16, N'09247189000196', N'Terraço Vistas Do Horizonte')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (17, N'13466028000160', N'Unique Residence')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (18, N'09247189000196', N'Veredas Vistas Do Horizonte')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (19, N'11630367000105', N'Vila Verde Betânia')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (20, N'12082337000196', N'Way Planalto Residence')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (21, N'12082337000196', N'Way Planalto Residence Torre I')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (22, N'12082337000196', N'Way Planalto Residence Torre II')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (23, N'12082337000196', N'Way Planalto Residence Torre III')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (24, N'08856878000135', N'Ecoway Carrão')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (25, N'08240085000197', N'Condomínio Maxhaus AF')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento]) VALUES (26, N'09605167000150', N'Ecoway Mansões Santo Antônio')
SET IDENTITY_INSERT [dbo].[tb_empreendimentos] OFF
SET IDENTITY_INSERT [dbo].[tb_cadastro] ON 

INSERT [dbo].[tb_cadastro] ([cod_cadastro], [cod_originacao], [numero_cadastro_incorporadora_fid], [cod_incorporadora], [cod_empreendimento], [cpf_cnpj], [bloco_torre], [unidade], [valor_venda], [saldo_devedor], [cod_usuario], [vaga_automovel], [box], [numero_apartamento], [cep], [numero], [bairro], [cidade], [endereco], [complemento], [uf], [data_entrada], [data_cadastro]) VALUES (36, 1, 11001, 1, 1, N'99999999991', N'xxxx', N'xx', CAST(100000.11 AS Decimal(20, 2)), CAST(20000.11 AS Decimal(20, 2)), 10001, N'xxxx', N'B01', N'XX123', N'07262270', N'173', N'xxxxx', N'xxxxx', N'xxxxx', N'xxxxx', N'XX', CAST(0x143F0B00 AS Date), CAST(0x0000A9B900A73D1A AS DateTime))
INSERT [dbo].[tb_cadastro] ([cod_cadastro], [cod_originacao], [numero_cadastro_incorporadora_fid], [cod_incorporadora], [cod_empreendimento], [cpf_cnpj], [bloco_torre], [unidade], [valor_venda], [saldo_devedor], [cod_usuario], [vaga_automovel], [box], [numero_apartamento], [cep], [numero], [bairro], [cidade], [endereco], [complemento], [uf], [data_entrada], [data_cadastro]) VALUES (37, 4, 123, 1, NULL, N'222', N'2', NULL, NULL, NULL, NULL, N'12', N'4', N'3', N'02001000', N'1', N'Santana', N'São Paulo', N'Parque Anhembi', N'a', N'SP', CAST(0x2C3F0B00 AS Date), NULL)
INSERT [dbo].[tb_cadastro] ([cod_cadastro], [cod_originacao], [numero_cadastro_incorporadora_fid], [cod_incorporadora], [cod_empreendimento], [cpf_cnpj], [bloco_torre], [unidade], [valor_venda], [saldo_devedor], [cod_usuario], [vaga_automovel], [box], [numero_apartamento], [cep], [numero], [bairro], [cidade], [endereco], [complemento], [uf], [data_entrada], [data_cadastro]) VALUES (38, NULL, NULL, NULL, NULL, N'2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'01002011', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[tb_cadastro] ([cod_cadastro], [cod_originacao], [numero_cadastro_incorporadora_fid], [cod_incorporadora], [cod_empreendimento], [cpf_cnpj], [bloco_torre], [unidade], [valor_venda], [saldo_devedor], [cod_usuario], [vaga_automovel], [box], [numero_apartamento], [cep], [numero], [bairro], [cidade], [endereco], [complemento], [uf], [data_entrada], [data_cadastro]) VALUES (39, 4, 11113, 1, 20, N'12345678912', N'1b', NULL, NULL, NULL, NULL, N'b22', N'43', N'33', N'01001000', N'166', N'Sé', N'São Paulo', N'Praça da Sé', N'lado ímpar', N'SP', CAST(0x253F0B00 AS Date), NULL)
SET IDENTITY_INSERT [dbo].[tb_cadastro] OFF
INSERT [dbo].[tb_cliente_cadastro] ([cod_cadastro], [cpf_cnpj]) VALUES (37, N'1111')
INSERT [dbo].[tb_cliente_cadastro] ([cod_cadastro], [cpf_cnpj]) VALUES (37, N'222')
INSERT [dbo].[tb_cliente_cadastro] ([cod_cadastro], [cpf_cnpj]) VALUES (36, N'99999999991')
INSERT [dbo].[tb_cliente_cadastro] ([cod_cadastro], [cpf_cnpj]) VALUES (36, N'99999999992')
INSERT [dbo].[tb_cliente_cadastro] ([cod_cadastro], [cpf_cnpj]) VALUES (39, N'12345678912')
INSERT [dbo].[tb_cliente_cadastro] ([cod_cadastro], [cpf_cnpj]) VALUES (39, N'09876543201')
INSERT [dbo].[tb_cliente_cadastro] ([cod_cadastro], [cpf_cnpj]) VALUES (38, N'1')
INSERT [dbo].[tb_cliente_cadastro] ([cod_cadastro], [cpf_cnpj]) VALUES (38, N'2')
SET IDENTITY_INSERT [dbo].[tb_roles] ON 

INSERT [dbo].[tb_roles] ([id], [nivel], [profile]) VALUES (1, 1, N'ROLE_ADMIN')
INSERT [dbo].[tb_roles] ([id], [nivel], [profile]) VALUES (2, 2, N'ROLE_ANALISTA')
INSERT [dbo].[tb_roles] ([id], [nivel], [profile]) VALUES (3, 3, N'ROLE_TECNICO')
SET IDENTITY_INSERT [dbo].[tb_roles] OFF
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (1, 1)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (2, 1)
SET IDENTITY_INSERT [dbo].[tb_analise] ON 

INSERT [dbo].[tb_analise] ([cod_analise], [cod_cadastro], [cod_simulacao], [cod_status_analise], [cod_sub_status_analise], [cod_usuario], [data_assinatura], [data_emissao], [data_pasta_mae], [data_simulacao], [obs]) VALUES (2, 36, 1, 1, 1, 10001, CAST(0x0770A6DE0F55143F0B AS DateTime2), CAST(0x0770A6DE0F55143F0B AS DateTime2), CAST(0x0770A6DE0F55143F0B AS DateTime2), CAST(0x0770A6DE0F55143F0B AS DateTime2), N'OBS')
SET IDENTITY_INSERT [dbo].[tb_analise] OFF
SET IDENTITY_INSERT [dbo].[tb_contato_clientes] ON 

INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (72, 1, N'99999999991', N'(XX) XXXXXXXXX')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (73, 1, N'99999999992', N'(11) 967762177')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (74, 2, N'99999999992', N'xxxxxxxx@xxxxxx.com')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (75, 1, N'1111', N'1')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (76, 2, N'1111', N'2')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (77, 3, N'1111', N'3')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (78, 1, N'222', N'4')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (79, 2, N'222', N'5')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (80, 3, N'222', N'6')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (81, 1, N'1', N'1')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (82, 2, N'1', N'2')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (83, 3, N'1', N'3')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (84, 2, N'12345678912', N'(11) 95434-3433')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (85, 3, N'12345678912', N'bruno@gmail.com')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (86, 1, N'09876543201', N'39156577')
INSERT [dbo].[tb_contato_clientes] ([id], [cod_tipo_contato], [cpf_cnpj], [desc_contato]) VALUES (87, 3, N'09876543201', N'steph@email.com')
SET IDENTITY_INSERT [dbo].[tb_contato_clientes] OFF
SET IDENTITY_INSERT [dbo].[tb_instituicao_financeira] ON 

INSERT [dbo].[tb_instituicao_financeira] ([cod_instituicao_financeira], [desc_instituicao_financeira]) VALUES (1, N'SANTANDER')
INSERT [dbo].[tb_instituicao_financeira] ([cod_instituicao_financeira], [desc_instituicao_financeira]) VALUES (2, N'BRADESCO')
INSERT [dbo].[tb_instituicao_financeira] ([cod_instituicao_financeira], [desc_instituicao_financeira]) VALUES (3, N'CAIXA')
INSERT [dbo].[tb_instituicao_financeira] ([cod_instituicao_financeira], [desc_instituicao_financeira]) VALUES (4, N'ITAÚ')
INSERT [dbo].[tb_instituicao_financeira] ([cod_instituicao_financeira], [desc_instituicao_financeira]) VALUES (5, N'BANCO DO BRASIL')
INSERT [dbo].[tb_instituicao_financeira] ([cod_instituicao_financeira], [desc_instituicao_financeira]) VALUES (6, N'CREDIPRONTO')
INSERT [dbo].[tb_instituicao_financeira] ([cod_instituicao_financeira], [desc_instituicao_financeira]) VALUES (7, N'RODOBENS')
SET IDENTITY_INSERT [dbo].[tb_instituicao_financeira] OFF
SET IDENTITY_INSERT [dbo].[tb_modalidade_simulacao] ON 

INSERT [dbo].[tb_modalidade_simulacao] ([cod_modalidade_simulacao], [desc_modalidade_simulacao]) VALUES (1, N'PMCMV')
INSERT [dbo].[tb_modalidade_simulacao] ([cod_modalidade_simulacao], [desc_modalidade_simulacao]) VALUES (2, N'PRO-COTISTA')
INSERT [dbo].[tb_modalidade_simulacao] ([cod_modalidade_simulacao], [desc_modalidade_simulacao]) VALUES (3, N'SBPE-SFH')
INSERT [dbo].[tb_modalidade_simulacao] ([cod_modalidade_simulacao], [desc_modalidade_simulacao]) VALUES (4, N'CCFGTS')
INSERT [dbo].[tb_modalidade_simulacao] ([cod_modalidade_simulacao], [desc_modalidade_simulacao]) VALUES (5, N'FGTS-TOTAL')
INSERT [dbo].[tb_modalidade_simulacao] ([cod_modalidade_simulacao], [desc_modalidade_simulacao]) VALUES (6, N'FGTS-PARCIAL')
INSERT [dbo].[tb_modalidade_simulacao] ([cod_modalidade_simulacao], [desc_modalidade_simulacao]) VALUES (7, N'SFI')
SET IDENTITY_INSERT [dbo].[tb_modalidade_simulacao] OFF
SET IDENTITY_INSERT [dbo].[tb_sicaq] ON 

INSERT [dbo].[tb_sicaq] ([cod_sicaq], [desc_sicaq]) VALUES (1, N'Aprovado')
INSERT [dbo].[tb_sicaq] ([cod_sicaq], [desc_sicaq]) VALUES (2, N'Reprovado')
SET IDENTITY_INSERT [dbo].[tb_sicaq] OFF
SET IDENTITY_INSERT [dbo].[tb_simulacao] ON 

INSERT [dbo].[tb_simulacao] ([cod_simulacao], [cod_cadastro], [cod_instituicao_financeira], [cod_modalidade_simulacao], [cod_sicaq], [cod_status_simulacao], [cod_tipo_amortizacao], [cod_usuario], [correspondente], [data_simulacao], [obs], [prazo_financiamento], [proposta_inst_financ], [valor_avaliacao_inst_financ], [valor_despesas_financiadas], [valor_fgts], [valor_financiamento], [valor_parcela], [valor_recursos_proprios], [valor_subsidio]) VALUES (1, 36, 1, 1, 1, 1, 1, 10001, NULL, CAST(0x0770A6DE0F55143F0B AS DateTime2), N'Observaçao', N'36', NULL, CAST(5000000.00 AS Numeric(16, 2)), CAST(120000.00 AS Numeric(16, 2)), CAST(450050.00 AS Numeric(16, 2)), CAST(152500.00 AS Numeric(16, 2)), CAST(3000.00 AS Numeric(16, 2)), CAST(100.00 AS Numeric(16, 2)), CAST(3500.00 AS Numeric(16, 2)))
SET IDENTITY_INSERT [dbo].[tb_simulacao] OFF
SET IDENTITY_INSERT [dbo].[tb_status_analise] ON 

INSERT [dbo].[tb_status_analise] ([cod_status_analise], [desc_status_analise]) VALUES (1, N'ENTREVISTA')
INSERT [dbo].[tb_status_analise] ([cod_status_analise], [desc_status_analise]) VALUES (2, N'PRÉ ANÁLISE')
INSERT [dbo].[tb_status_analise] ([cod_status_analise], [desc_status_analise]) VALUES (3, N'CRÉDITO')
INSERT [dbo].[tb_status_analise] ([cod_status_analise], [desc_status_analise]) VALUES (4, N'ANÁLISE JURÍDICA')
INSERT [dbo].[tb_status_analise] ([cod_status_analise], [desc_status_analise]) VALUES (5, N'ASSINATURA')
INSERT [dbo].[tb_status_analise] ([cod_status_analise], [desc_status_analise]) VALUES (6, N'REGISTRO')
INSERT [dbo].[tb_status_analise] ([cod_status_analise], [desc_status_analise]) VALUES (7, N'FATURAMENTO')
SET IDENTITY_INSERT [dbo].[tb_status_analise] OFF
SET IDENTITY_INSERT [dbo].[tb_status_simulacao] ON 

INSERT [dbo].[tb_status_simulacao] ([cod_status_simulacao], [desc_status_simulacao]) VALUES (1, N'APROVADO')
INSERT [dbo].[tb_status_simulacao] ([cod_status_simulacao], [desc_status_simulacao]) VALUES (2, N'REPROVADO')
SET IDENTITY_INSERT [dbo].[tb_status_simulacao] OFF
SET IDENTITY_INSERT [dbo].[tb_sub_status_analise] ON 

INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (1, 1, N'SEM CONTATO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (2, 1, N'CLIENTE CONTATADO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (3, 1, N'CHECK LIST ENVIADO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (4, 2, N'EM PRÉ ANÁLISE
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (5, 2, N'COM PENDENCIA
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (6, 2, N'CONFIRMAÇÃO DE VALORES
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (7, 3, N'EM ANÁLISE BANCO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (8, 3, N'COM PENDENCIA CONSTRUTORA
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (9, 3, N'COM PENDENCIA CLIENTE
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (10, 3, N'APROVADO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (11, 3, N'REPROVADO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (12, 3, N'APROVADO MENOR
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (13, 4, N'EM ANÁLISE JURÍDICA
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (14, 4, N'COM PENDENCIA CONSTRUTORA
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (15, 4, N'COM PENDENCIA CLIENTE
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (16, 4, N'CONFIRMAÇÃO DE VALORES
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (17, 4, N'EM EMISSÃO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (18, 4, N'CONTRATO EMITIDO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (19, 5, N'EM AGENDAMENTO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (20, 5, N'EM ASSINATURA CLIENTE
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (21, 5, N'EM ASSINATURA VENDEDOR
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (22, 5, N'EM ASSINATURA BANCO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (23, 5, N'EM ASSINATURA INTERVENIENTE
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (24, 5, N'EM RECOLHIMENTO DE IMPOSTOS
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (25, 6, N'EM REGISTRO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (26, 6, N'COM PENDÊNCIA
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (27, 6, N'REGISTRADO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (28, 6, N'VIAS DISTRIBUÍDAS
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (29, 7, N'AUTORIZADO
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (30, 7, N'NOTA ENVIADA
')
INSERT [dbo].[tb_sub_status_analise] ([cod_sub_status_analise], [cod_status_analise], [desc_sub_status_analise]) VALUES (31, 7, N'RECEBIDO
')
SET IDENTITY_INSERT [dbo].[tb_sub_status_analise] OFF
SET IDENTITY_INSERT [dbo].[tb_tipo_amortizacao] ON 

INSERT [dbo].[tb_tipo_amortizacao] ([cod_tipo_amortizacao], [desc_tipo_amortizacao]) VALUES (1, N'SAC')
INSERT [dbo].[tb_tipo_amortizacao] ([cod_tipo_amortizacao], [desc_tipo_amortizacao]) VALUES (2, N'PRICE')
SET IDENTITY_INSERT [dbo].[tb_tipo_amortizacao] OFF
SET IDENTITY_INSERT [dbo].[tb_tipo_contato] ON 

INSERT [dbo].[tb_tipo_contato] ([cod_tipo_contato], [desc_tipo_contato]) VALUES (1, N'Telefone')
INSERT [dbo].[tb_tipo_contato] ([cod_tipo_contato], [desc_tipo_contato]) VALUES (2, N'Celular')
INSERT [dbo].[tb_tipo_contato] ([cod_tipo_contato], [desc_tipo_contato]) VALUES (3, N'E-Mail')
SET IDENTITY_INSERT [dbo].[tb_tipo_contato] OFF
