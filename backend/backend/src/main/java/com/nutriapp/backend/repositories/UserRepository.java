package com.nutriapp.backend.repositories;

import com.nutriapp.backend.entities.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, BigInteger> {

    Optional<UserEntity> findByEmailAndPassword
            (String email, String password);
}
