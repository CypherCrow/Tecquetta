package project.tecquetta.controllers;

//import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/messages/")
public class MainController {
    @GetMapping("/message")
    public String index(Model model){
        model.addAttribute("eventName", "Elen sila lumenn' omentielvo!");
        return "index"; 
    }

    @GetMapping("/hello")
    public String hello(){
        return "Elen sila lumenn' omentielvo!";
    }
}
