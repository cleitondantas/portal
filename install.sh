#!/bin/bash


if [ "$1" == "prod" ]; then
	echo "Iniciado instalação em modo prod"
	rm -rf portal
	git clone https://github.com/cleitondantas/portal/tree/branche_c
	cd portal        
	mvn clean install -P10.6.5.40
	docker stop $(docker ps -q --filter ancestor=mci/portal)
	docker rm $(docker ps -a -q --filter ancestor=mci/portal)
	docker build -t mci/portal .		
	docker run -dit --restart=always -p 8100:8100 mci/portal:latest
	docker ps
else
        if [ "$1" == "dev" ]; then
        	echo "Iniciado instalação em modo dev"
        	rm -rf portal
        	git clone https://github.com/cleitondantas/portal/tree/branche_c
			cd portal        
			mvn clean install -P10.6.5.99
			docker stop $(docker ps -q --filter ancestor=mci/portal)
			docker rm $(docker ps -a -q --filter ancestor=mci/portal)
			docker build -t mci/portal .		
			docker run -dit --restart=always -p 8100:8100 mci/portal:latest
			docker ps
        else
        	echo "Iniciado instalação em modo DEFALT"
			varip=$(hostname -I | awk '{print $1}')
        	echo "$varip"
        	rm -rf portal
        	git clone https://github.com/cleitondantas/portal/tree/branche_c
			cd portal        
			mvn clean install -P$varip
			docker stop $(docker ps -q --filter ancestor=mci/portal)
			docker rm $(docker ps -a -q --filter ancestor=mci/portal)
			docker build -t mci/portal .		
			docker run -dit --restart=always -p 8100:8100 mci/portal:latest
			docker ps
        fi
	echo "Para rodar em modo de desenvolvimento informe o parametro 'dev' e para rodar em modo de producao 'prod'"
fi
