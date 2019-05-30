#!/bin/bash


if [ "$1" == "prod" ]; then
	echo "Iniciado instalação em modo prod"
	git clone https://github.com/cleitondantas/portal.git
	cd portal        
	mvn clean install -P10.6.5.40
	docker build -t mci/portal .		
	docker run -dit -p 8100:8100 mci/portal:latest
	docker ps
else
        if [ "$1" == "dev" ]; then
        	echo "Iniciado instalação em modo dev"
        	git clone https://github.com/cleitondantas/portal.git
			cd portal        
			mvn clean install -P10.6.5.99
			docker build -t mci/portal .		
			docker run -dit -p 8100:8100 mci/portal:latest
			docker ps
        else
        	echo "Iniciado instalação em modo DEFALT"
			varip=$(hostname -I | awk '{print $1}')
        	echo "$varip"
        	git clone https://github.com/cleitondantas/portal.git
			cd portal        
			mvn clean install -P$varip
			docker build -t mci/portal .		
			docker run -dit -p 8100:8100 mci/portal:latest
			docker ps
        fi
fi
