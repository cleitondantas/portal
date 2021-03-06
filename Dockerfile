FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY /target/*.jar portal.jar
EXPOSE 8100
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","portal.jar"]
