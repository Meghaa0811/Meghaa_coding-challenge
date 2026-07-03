package com.cricket.cricket_management_system.service;

import java.util.List;

import com.cricket.cricket_management_system.dto.PlayerRequest;
import com.cricket.cricket_management_system.entity.Player;

public interface PlayerService {

    List<Player> getAllPlayers();

    Player getPlayerById(Long id);

    Player createPlayer(PlayerRequest request);

    Player updatePlayer(Long id, PlayerRequest request);

    void deletePlayer(Long id);
}