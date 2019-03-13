# Portal BPO Montreal

- PORTAL Montreal
	Pré Requisitos 
	Projeto pre configurado para CentOS
	 JAVA 1.8 
	 Apache Maven 3.6 
	 
	 Conexão com banco de dados SQL Server  port :52042
	 
	 SAIDA
	 Porta de http 8100

####Rodando com Docker
    FROM openjdk:8-jdk-alpine
    VOLUME /tmp
    COPY /*.jar portal.jar
    EXPOSE 8100
    ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/portal.jar"]
    mci/portal:latest
    

    
    docker run -dit -p 8100:8100 mci/portal:latest



*CHAMADAS REST
	
-LOCALHOST:8100  ou 10.6.5.99:8100 

POST 10.6.5.99:8100/api/user/usuario
GET 10.6.5.99:8100/api/user/usuarios
GET 10.6.5.99:8100/api/user/roles
POST 10.6.5.99:8100/api/user/username

GET 10.6.5.99:8100/api/analises
PUT 10.6.5.99:8100/api/analise/{id}

POST  10.6.5.99:8100/api/cadastro
PUT 10.6.5.99:8100/api/cadastro
GET 10.6.5.99:8100/api/cadastros
GET 10.6.5.99:8100/api/cadastro/{cod}

GET 10.6.5.99:8100/api/clientes
POST 10.6.5.99:8100/api/cliente
PUT 10.6.5.99:8100/api/cliente/{cpf}

GET 10.6.5.99:8100/api/contatoclientes
POST 10.6.5.99:8100/api/contatocliente

GET 10.6.5.99:8100/api/empreendimentos
POST 10.6.5.99:8100/api/empreendimento

GET 10.6.5.99:8100/api/estadocivil
POST 10.6.5.99:8100/api/estadocivil

GET 10.6.5.99:8100/api/historicos
POST 10.6.5.99:8100/api/historico

GET 10.6.5.99:8100/api/instituicoesfinanceiras
POST 10.6.5.99:8100/api/instituicaofinanceira

GET 10.6.5.99:8100/api/modalidadesimulacoes
POST 10.6.5.99:8100/api/modalidadesimulacao

GET 10.6.5.99:8100/api/originacoes
POST 10.6.5.99:8100/api/originacao

GET 10.6.5.99:8100/api/sicaq
POST 10.6.5.99:8100/api/sicaq

GET 10.6.5.99:8100/api/simulacoes
POST 10.6.5.99:8100/api/simulacao

GET 10.6.5.99:8100/api/spe
POST 10.6.5.99:8100/api/spe

GET 10.6.5.99:8100/api/statusanalises
POST 10.6.5.99:8100/api/statusanalise

GET 10.6.5.99:8100/api/statussimulacao
POST 10.6.5.99:8100/api/statussimulacao

GET 10.6.5.99:8100/api/substatusanalise
POST 10.6.5.99:8100/api/substatusanalise

GET 10.6.5.99:8100/api/tipoamortizacao
POST 10.6.5.99:8100/api/tipoamortizacao

GET 10.6.5.99:8100/api/tipocontatos
POST 10.6.5.99:8100/api/tipocontato

GET 10.6.5.99:8100/api/tipoclientes
POST 10.6.5.99:8100/api/tipocliente
