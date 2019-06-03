# Portal BPO Montreal
### PORTAL Montreal 
#### Pré Requisitos 
##### LinuxOS ,Docker, JAVA 1.8, Apache Maven 3.6, GIT, Wget
####  

##Scripts

#####Install Docker
```sh
sudo yum check-update
curl -fsSL https://get.docker.com/ | sh
sudo systemctl start docker
sudo systemctl status docker
sudo systemctl enable docker
```

#####Install Java 1.8
```sh
yum -y update
yum install java-1.8.0-openjdk
```
#####Install Maven 3.6
```sh
sudo yum install maven
```

#####Install wget
```sh
sudo yum install wget
```
####Build e Deploy automatizado
```sh
wget https://raw.githubusercontent.com/cleitondantas/portal/master/install.sh && chmod +x install.sh && ./install.sh
```

###OU

#### Build e Deploy Manual
```sh
git clone https://github.com/cleitondantas/portal.git
```
```sh
mvn clean install -Pprod     #"prod" para DB de PRODUÇÂO ou "dev" para DB de DESENVOLVIMENTO Ou nada para rodar pegando o ip da maquina que está sendo realizado o build.
```
```sh
    ---------Dockerfile-----------
    FROM openjdk:8-jdk-alpine
    VOLUME /tmp
    COPY /*.jar portal.jar
    EXPOSE 8100
    ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","portal.jar"]
```
```sh    
    docker build -t mci/portal .
```
```sh
    docker run -dit -p 8100:8100 mci/portal:latest
```

```sh 
git clone https://github.com/cleitondantas/portal.git && cd portal && mvn clean install && docker build -t mci/portal . && docker stop $(docker ps -q --filter ancestor=mci/portal ); docker run -dit -p 8100:8100 mci/portal:latest && docker ps
```

##### API Rest
```js
POST localhost:8100/api/user/usuario
GET localhost:8100/api/user/usuarios
GET localhost:8100/api/user/roles
POST localhost:8100/api/user/username

GET localhost:8100/api/analises
PUT localhost:8100/api/analise/{id}

POST  localhost:8100/api/cadastro
PUT localhost:8100/api/cadastro
GET localhost:8100/api/cadastros
GET localhost:8100/api/cadastro/{cod}

GET localhost:8100/api/clientes
POST localhost:8100/api/cliente
PUT localhost:8100/api/cliente/{cpf}

GET localhost:8100/api/contatoclientes
POST localhost:8100/api/contatocliente

GET localhost:8100/api/empreendimentos
POST localhost:8100/api/empreendimento

GET localhost:8100/api/estadocivil
POST localhost:8100/api/estadocivil

GET localhost:8100/api/historicos
POST localhost:8100/api/historico

GET localhost:8100/api/instituicoesfinanceiras
POST localhost:8100/api/instituicaofinanceira

GET localhost:8100/api/modalidadesimulacoes
POST localhost:8100/api/modalidadesimulacao

GET localhost:8100/api/originacoes
POST localhost:8100/api/originacao

GET localhost:8100/api/sicaq
POST localhost:8100/api/sicaq

GET localhost:8100/api/simulacoes
POST localhost:8100/api/simulacao

GET localhost:8100/api/spe
POST localhost:8100/api/spe

GET localhost:8100/api/statusanalises
POST localhost:8100/api/statusanalise

GET localhost:8100/api/statussimulacao
POST localhost:8100/api/statussimulacao

GET localhost:8100/api/substatusanalise
POST localhost:8100/api/substatusanalise

GET localhost:8100/api/tipoamortizacao
POST localhost:8100/api/tipoamortizacao

GET localhost:8100/api/tipocontatos
POST localhost:8100/api/tipocontato

GET localhost:8100/api/tipoclientes
POST localhost:8100/api/tipocliente
GET localhost:8100/api/usuario/nome/{nome}

GET localhost:8100/usuario/login/{login}
POST localhost:8100/api/user/usuario
PUT localhost:8100/api/user/usuario
DELETE  localhost:8100/api/user/usuario
```

---
