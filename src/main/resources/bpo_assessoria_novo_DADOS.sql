USE [bpo_assessoria_novo]
GO
INSERT [dbo].[tb_tipo_clientes] ([cod_tipo_cliente], [desc_tipo_cliente]) VALUES (1, N'Pessoa Física')
INSERT [dbo].[tb_tipo_clientes] ([cod_tipo_cliente], [desc_tipo_cliente]) VALUES (2, N'Pessoa Jurídica')
INSERT [dbo].[tb_estado_civil] ([cod_estado_civil], [desc_estado_civil]) VALUES (1, N'Solteiro')
INSERT [dbo].[tb_estado_civil] ([cod_estado_civil], [desc_estado_civil]) VALUES (2, N'Casado')
INSERT [dbo].[tb_estado_civil] ([cod_estado_civil], [desc_estado_civil]) VALUES (3, N'Viuvo')
INSERT [dbo].[tb_estado_civil] ([cod_estado_civil], [desc_estado_civil]) VALUES (4, N'União Estável')
SET IDENTITY_INSERT [dbo].[TB_USUARIOS_WEB] ON 

INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [sobrenome], [password], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(1 AS Numeric(18, 0)), 10001, N'admin', N'Cleiton', N'Dantas', N'$2a$10$0m5T18wht6eBSsO1kb9EN.83GWJ3Vt0JQVLP.Sk78d9RBbt0YzHYy', N'967762182', N'33590760877', N'cleiton.anjos@montreal.com.br', 1)
INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [sobrenome], [password], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(2 AS Numeric(18, 0)), 10002, N'matheus.m_c', N'Matheus', N'Mendes', N'$2a$10$cbgy31BYX5RUt5bZv3z8N.rf6resxHpQ5NYt5BsN9xgm/0LRX3wqy', N'9212', N'33590760878', N'matheus.m_c@hotmail.com', 1)
INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [sobrenome], [password], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(4 AS Numeric(18, 0)), 10003, N'teste', N'teste', N'teste', N'$2a$10$GGtXwHkepUXlwxwcAteNYegbT6ESD4HdOGhkQrUiHQOiONCzxH03e', N'123311233', N'33590760841', N'teste@teste.com', 1)
INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [sobrenome], [password], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(5 AS Numeric(18, 0)), 10004, N'andre.basso', N'andre', N'basso', N'$2a$10$Mr4D2dKQhwPv8nC/gRpERObrAh1bxswgorr0ZqYLZhuJPy67RywHS', N'2226', N'0000000000', N'andre.basso@montreal.com.br', NULL)
INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [sobrenome], [password], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(6 AS Numeric(18, 0)), 10005, N'katia.paiva', N'katia', N'paiva', N'$2a$10$NTZClK8AntvO2IOPGB4YYOdkEkWT5YcIkV/MFj9RRzUw9UkryQmqK', N'2226', N'0000000000', N'katia.paiva@montreal.com.br', 1)
INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [sobrenome], [password], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(7 AS Numeric(18, 0)), 10006, N'laisy.myer', N'Laisy', N'Myer', N'$2a$10$wESSdeQFjsbIxTmGnuTmA.J/dF2Uq0lXlKELgPDTBrIs3zXhaj74q', N'77354', NULL, N'laisy.myer@montreal.com.br', 1)
INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [sobrenome], [password], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(8 AS Numeric(18, 0)), 10007, N'brunoarj', N'Bruno', N'Araujo', N'$2a$10$uvR83Y8tlDXwHOoC3b2Yi.AvEtAC4YyhIAYkF3gmicnWhgM5xzgQG', N'11949329434', N'10834614197', N'brunoarj@gmail.com', 0)
INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [sobrenome], [password], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(9 AS Numeric(18, 0)), 10008, N'ramon.paduanello', N'ramon', N'paduanello', N'$2a$10$qnRpAwynNaxd5OqsVVKrIug93XBWlXrYet3pQncr82XsMCQ0pwEr.', N'00000', N'30695571044', N'ramon.paduanello@montreal.com.br', 1)
INSERT [dbo].[TB_USUARIOS_WEB] ([id], [cod_usuario], [login], [nome], [sobrenome], [password], [telefone], [cpf], [email_contato], [is_ativo]) VALUES (CAST(10 AS Numeric(18, 0)), 10009, N'marcos.theus', N'Marcos', N'Theus', N'$2a$10$TG2wMOPLcAkzuTTA.ojVtODbRSwe9IjzBjJOnlkE/RY/ea8Kq2ua6', N'123456', N'33590760877', N'marcos.theus@montreal.com.br', 1)
SET IDENTITY_INSERT [dbo].[TB_USUARIOS_WEB] OFF
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

INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (1, N'11630309000181', N'Bella Toscana', N'Avenida Presidente Tanvredo Neves', N'1311', N'Belo Horizonte', N'Castelo', N'31330-430')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (2, N'11630309000181', N'Bella Verona', N'Rua Maria Pereira de Araújo', N'15', N'Belo Horizonte', N'Castelo', N'30840-320')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (3, N'10339842000126', N'Boulevard Esplanada', N'Rua Belém', N'116', N'Belo Horizonte', N'Pompéia', N'30285-010')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (4, N'12594510000385', N'Conquista Monte Castelo', N'Rua Rio Comprido', N'4300', N'Contagem', N'Monte Castelo', N'31575-640')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (5, N'13457942000145', N'Origem Oasis', N'Avenida Marechal Castelo Braco', N'265', N'Contagem', N'Cidade Industrial', N'32310-010')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (6, N'13457942000145', N'Ferroeste', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (7, N'09186951000171', N'Gran Felicità ', N'Rua Gustavo Ladeira', N'11', N'Belo Horizonte', N'Jardim Paquetá', N'31330-472')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (8, N'13448383000107', N'Gran Ville São Bernardo', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (9, N'10343519000133', N'Monterey Office', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (10, N'09247189000196', N'Portal Vistas Do Horizonte', N'Rua Alga Vermelha', N'120', N'Belo Horizonte', N'Floramar', N'31742-260')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (11, N'12085317000157', N'Prime Lagoa Residence', N'Rua Deputado Salim Nacur', N'173', N'Belo Horizonte', N'Santa Amélia', N'31155-190')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (12, N'19330054000136', N'Reservas Do Bosque', N'Rua Senhora do Porto', N'1600', N'Belo Horizonte', N'Palmeiras', N'30575-590')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (13, N'15315004000150', N'Splendido Residence', N'Rua Zilah Correa de Araújo', N'345', N'Belo Horizonte', N'Ouro Preto', N'31310-450')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (14, N'13457942000145', N'Sublime Oásis', N'Rua Marechal Castelo Branco', N'445', N'Contagem
', N'Cidade Industrial', N'32010-310')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (15, N'15709335000150', N'Supremo Residence', N'Rua Zilah Correa de Araújo', N'461', N'Belo Horizonte', N'Ouro Preto', N'31310-450')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (16, N'09247189000196', N'Terraço Vistas Do Horizonte', N'Rua Ana Dias Duarte', N'191', N'Belo Horizonte', N'Floramar', N'31742-273')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (17, N'13466028000160', N'Unique Residence', N'Avenida Professor Magalhães Penido', N'420', N'Belo Horizonte', N'São Luiz', N'31270-700')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (18, N'09247189000196', N'Veredas Vistas Do Horizonte', N'Rua Alga Verde', N'130', N'Belo Horizonte', N'Jardim Guanabara', N'31742-254')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (19, N'11630367000105', N'Vila Verde Betânia', N'Rua Júlio de Castilho', N'133', N'Belo Horizonte', N'Cinquentenário', N'30570-080')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (20, N'12082337000196', N'Way Planalto Residence', N'Rua Francisco Augusto Rocha', N'101', N'Belo Horizonte', N'Planalto', N'31720-260')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (21, N'12082337000196', N'Way Planalto Residence Torre I', N'Rua Francisco Augusto Rocha', N'101', N'Belo Horizonte', N'Planalto', N'31720-260')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (22, N'12082337000196', N'Way Planalto Residence Torre II', N'Rua Francisco Augusto Rocha', N'101', N'Belo Horizonte', N'Planalto', N'31720-260')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (23, N'12082337000196', N'Way Planalto Residence Torre III', N'Rua Francisco Augusto Rocha', N'101', N'Belo Horizonte', N'Planalto
', N'31720-260')
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (24, N'08856878000135', N'Ecoway Carrão', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (25, N'08240085000197', N'Condomínio Maxhaus AF', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[tb_empreendimentos] ([cod_empreendimento], [cnpj_spe], [desc_empreendimento], [rua], [num], [cidade], [bairro], [cep]) VALUES (26, N'09605167000150', N'Ecoway Mansões Santo Antônio', NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[tb_empreendimentos] OFF
SET IDENTITY_INSERT [dbo].[tb_roles] ON 

INSERT [dbo].[tb_roles] ([id], [nivel], [profile]) VALUES (1, 1, N'ROLE_ADMIN')
INSERT [dbo].[tb_roles] ([id], [nivel], [profile]) VALUES (2, 2, N'ROLE_ANALISTA')
INSERT [dbo].[tb_roles] ([id], [nivel], [profile]) VALUES (3, 3, N'ROLE_TECNICO')
SET IDENTITY_INSERT [dbo].[tb_roles] OFF
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (1, 1)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (1, 2)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (1, 3)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (2, 1)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (4, 1)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (4, 2)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (4, 3)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (5, 1)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (5, 2)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (5, 3)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (6, 1)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (6, 2)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (6, 3)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (7, 1)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (7, 2)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (7, 3)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (8, 2)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (8, 3)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (9, 1)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (9, 2)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (9, 3)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (10, 1)
INSERT [dbo].[tb_relac_usuario_roles] ([id_usuario], [id_role]) VALUES (10, 2)
SET IDENTITY_INSERT [dbo].[tb_fases] ON 

INSERT [dbo].[tb_fases] ([id], [fase], [num_fase]) VALUES (1, N'ENTREVISTA', 1)
INSERT [dbo].[tb_fases] ([id], [fase], [num_fase]) VALUES (2, N'PRÉ ANÁLISE', 2)
INSERT [dbo].[tb_fases] ([id], [fase], [num_fase]) VALUES (3, N'CRÉDITO', 3)
INSERT [dbo].[tb_fases] ([id], [fase], [num_fase]) VALUES (4, N'ANÁLISE JURÍDICA', 4)
INSERT [dbo].[tb_fases] ([id], [fase], [num_fase]) VALUES (5, N'ASSINATURA', 5)
INSERT [dbo].[tb_fases] ([id], [fase], [num_fase]) VALUES (6, N'REGISTRO', 6)
INSERT [dbo].[tb_fases] ([id], [fase], [num_fase]) VALUES (7, N'FATURAMENTO', 7)
SET IDENTITY_INSERT [dbo].[tb_fases] OFF
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
SET IDENTITY_INSERT [dbo].[tb_relac_analise_simulacao] ON 

INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (12, 19, 10)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (13, 19, 11)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (14, 23, 12)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (15, 23, 13)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (16, 24, 14)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (17, 24, 15)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (18, 25, 16)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (19, 25, 17)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (22, 27, 20)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (23, 27, 21)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (24, 28, 22)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (25, 28, 23)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (82, 30, 26)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (83, 30, 27)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (94, 31, 28)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (95, 31, 29)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (96, 32, 30)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (97, 32, 31)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (98, 33, 32)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (99, 33, 33)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (101, 34, 34)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (102, 34, 35)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (103, 35, 36)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (104, 35, 37)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (105, 36, 38)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (106, 36, 39)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (107, 37, 40)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (108, 37, 41)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (109, 38, 42)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (110, 38, 43)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (111, 39, 44)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (112, 39, 45)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (113, 40, 46)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (114, 40, 47)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (115, 41, 48)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (116, 41, 49)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (120, 16, 9)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (121, 42, 50)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (122, 42, 51)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (123, 43, 52)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (124, 43, 53)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (130, 46, 56)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (223, 44, 54)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (224, 44, 55)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (245, 48, 62)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (252, 29, 24)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (253, 29, 25)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (254, 47, 57)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (255, 47, 58)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (256, 47, 59)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (259, 50, 64)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (279, 51, 65)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (280, 51, 66)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (281, 26, 18)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (282, 26, 61)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (287, 54, 69)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (288, 54, 70)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (289, 53, 68)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (308, 55, 71)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (309, 55, 72)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (312, 56, 74)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (313, 56, 75)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (314, 57, 76)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (316, 58, 77)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (317, 59, 78)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (318, 60, 79)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (319, 61, 80)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (320, 62, 81)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (324, 64, 84)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (325, 65, 85)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (326, 66, 86)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (327, 63, 82)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (328, 63, 83)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (329, 67, 87)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (330, 67, 88)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (332, 69, 89)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (333, 70, 90)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (338, 71, 91)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (339, 71, 92)
INSERT [dbo].[tb_relac_analise_simulacao] ([ID], [cod_analise], [cod_simulacao]) VALUES (340, 72, 93)
SET IDENTITY_INSERT [dbo].[tb_relac_analise_simulacao] OFF
SET IDENTITY_INSERT [dbo].[tb_sicaq] ON 

INSERT [dbo].[tb_sicaq] ([cod_sicaq], [desc_sicaq]) VALUES (1, N'Aprovado')
INSERT [dbo].[tb_sicaq] ([cod_sicaq], [desc_sicaq]) VALUES (2, N'Reprovado')
SET IDENTITY_INSERT [dbo].[tb_sicaq] OFF
SET IDENTITY_INSERT [dbo].[tb_sinteses] ON 

INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (1, N'SEM CONTATO', 1, 1)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (2, N'CLIENTE CONTATADO', 1, 2)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (3, N'CHECK LIST ENVIADO', 1, 3)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (4, N'EM PRÉ ANÁLISE', 2, 1)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (5, N'COM PENDENCIA', 2, 2)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (6, N'CONFIRMAÇÃO DE VALORES', 2, 3)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (7, N'EM ANÁLISE BANCO', 3, 1)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (8, N'COM PENDENCIA CONSTRUTORA', 3, 2)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (9, N'COM PENDENCIA CLIENTE', 3, 3)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (10, N'APROVADO', 3, 4)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (11, N'REPROVADO', 3, 5)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (12, N'APROVADO MENOR', 3, 6)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (13, N'EM ANÁLISE JURÍDICA', 4, 1)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (14, N'COM PENDENCIA CONSTRUTORA', 4, 2)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (15, N'COM PENDENCIA CLIENTE', 4, 3)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (16, N'CONFIRMAÇÃO DE VALORES', 4, 4)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (17, N'EM EMISSÃO', 4, 5)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (18, N'CONTRATO EMITIDO', 4, 6)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (19, N'EM AGENDAMENTO', 5, 1)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (20, N'EM ASSINATURA CLIENTE', 5, 2)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (21, N'EM ASSINATURA VENDEDOR', 5, 3)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (22, N'EM ASSINATURA BANCO', 5, 4)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (23, N'EM ASSINATURA INTERVENIENTE', 5, 5)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (24, N'EM RECOLHIMENTO DE IMPOSTOS', 5, 6)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (25, N'EM REGISTRO', 6, 1)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (26, N'COM PENDÊNCIA', 6, 2)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (27, N'REGISTRADO', 6, 3)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (28, N'VIAS DISTRIBUÍDAS', 6, 4)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (29, N'AUTORIZADO', 7, 1)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (30, N'NOTA ENVIADA', 7, 2)
INSERT [dbo].[tb_sinteses] ([id], [sintese], [num_fase], [num_sintese]) VALUES (31, N'RECEBIDO', 7, 3)
SET IDENTITY_INSERT [dbo].[tb_sinteses] OFF
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
