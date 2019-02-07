FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY ./portal.jar portal.jar
EXPOSE 8100
ENTRYPOINT ["java","-jar","portal.jar"]