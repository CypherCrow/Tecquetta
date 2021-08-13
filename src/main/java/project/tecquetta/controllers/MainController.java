package project.tecquetta.controllers;

/*
    This is a test RestContoller class for debugging
*/

//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/messages/")
public class MainController {

    @GetMapping("/hello")
    public String hello(){
        return "Elen sila lumenn' omentielvo!";
    }

}
