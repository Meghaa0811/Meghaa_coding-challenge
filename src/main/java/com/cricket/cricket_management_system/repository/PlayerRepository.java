package com.cricket.cricket_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cricket.cricket_management_system.entity.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

}