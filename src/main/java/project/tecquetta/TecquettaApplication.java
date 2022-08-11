package project.tecquetta;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
public class TecquettaApplication {
    
    public static void main(String[] args) throws IOException {
        SpringApplication.run(TecquettaApplication.class, args); 
    }

}
