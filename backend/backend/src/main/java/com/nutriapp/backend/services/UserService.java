package com.nutriapp.backend.services;

import com.nutriapp.backend.entities.UserEntity;
import com.nutriapp.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public UserEntity insertUser(UserEntity userEntity){
        return userRepository.save(userEntity);
    }

    public Optional<UserEntity> userExist(String email, String password){
        return userRepository.findByEmailAndPassword(email, password);
    }
}
