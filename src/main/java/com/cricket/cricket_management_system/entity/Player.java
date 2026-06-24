package com.cricket.cricket_management_system.entity;

import jakarta.persistence.*;
import lombok.*;
import com.cricket.cricket_management_system.enums.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

@Entity
@Table(name = "players")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long playerId;

    @Column(nullable = false)
    private String playerName;

    @Column(nullable = false)
    private Integer jerseyNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;
    private Integer totalMatches;

    @Column(nullable = false)
    private String teamName;

    @Column(nullable = false)
    private String countryStateName;

    private String description;
}
