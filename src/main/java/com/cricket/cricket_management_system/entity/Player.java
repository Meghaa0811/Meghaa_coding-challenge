package com.cricket.cricket_management_system.entity;

import jakarta.persistence.*;
import lombok.*;

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

    @Column(nullable = false)
    private String role;

    private Integer totalMatches;

    @Column(nullable = false)
    private String teamName;

    @Column(nullable = false)
    private String countryStateName;

    private String description;
}
