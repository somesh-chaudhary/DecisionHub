# Stage 1: Build the application with Maven & OpenJDK 21
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy pom.xml and source files
COPY pom.xml .
COPY src ./src

# Build JAR package (skip tests for faster deployment)
RUN mvn clean package -DskipTests

# Stage 2: Run the application with a slim JRE 21 image
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose default port
EXPOSE 8081

# Launch the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
