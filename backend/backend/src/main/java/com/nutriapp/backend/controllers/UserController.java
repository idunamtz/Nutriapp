package com.nutriapp.backend.controllers;

import com.nutriapp.backend.entities.UserEntity;
import com.nutriapp.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserEntity> insertUser(@RequestBody UserEntity userEntity){
        UserEntity result = userService.insertUser(userEntity);
        return ResponseEntity.ok(result);
    }

    @GetMapping
    public ResponseEntity<String> userExists(
            @RequestParam(value = "email") String email,
            @RequestParam(value = "password") String password){
        Optional<UserEntity> optional = userService.userExist(email, password);
        return ResponseEntity.ok(optional.isPresent() ? "TRUE" : "FALSE");
    }
}
