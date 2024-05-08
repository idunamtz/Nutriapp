package com.nutriapp.backend.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigInteger;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity(name = "USERS")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @JsonProperty
    private BigInteger id;

    @JsonProperty
    @Column(name = "email")
    private String email;

    @JsonProperty
    @Column(name = "name")
    private String name;

    @JsonProperty
    @Column(name = "password")
    private String password;
}
