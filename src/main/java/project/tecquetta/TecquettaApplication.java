package project.tecquetta;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class TecquettaApplication {
    
    public static void main(String[] args) throws IOException {
        SpringApplication.run(TecquettaApplication.class, args); 
        openHomePage(); 
    }

    private static void openHomePage() throws IOException {
        Runtime rt = Runtime.getRuntime(); 
        if(OSDetector.isMac()){
            String[] arguments = { "osascript", "-e", "open location \"" + "http://localhost:8080" + "\"" };
            rt.exec(arguments); 
        }
        else if (OSDetector.isWindows()){
            rt.exec("rundll32 url.dll, FileProtocolHandler " + "http://localhost:8080"); 
        }
    }

}
