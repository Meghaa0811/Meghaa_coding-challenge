package com.cricket.cricket_management_system.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cricket.cricket_management_system.dto.PlayerRequest;
import com.cricket.cricket_management_system.entity.Player;
import com.cricket.cricket_management_system.exception.ResourceNotFoundException;
import com.cricket.cricket_management_system.repository.PlayerRepository;
import com.cricket.cricket_management_system.service.PlayerService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;

    @Override
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public Player getPlayerById(Long id) {

        return playerRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Player not found with id : " + id));
    }

    @Override
    public Player createPlayer(PlayerRequest request) {

        Player player = Player.builder()
                .playerName(request.getPlayerName())
                .jerseyNumber(request.getJerseyNumber())
                .role(request.getRole())
                .totalMatches(request.getTotalMatches())
                .teamName(request.getTeamName())
                .countryStateName(request.getCountryStateName())
                .description(request.getDescription())
                .build();

        return playerRepository.save(player);
    }

    @Override
    public Player updatePlayer(Long id,
                               PlayerRequest request) {

        Player player = getPlayerById(id);

        player.setPlayerName(request.getPlayerName());
        player.setJerseyNumber(request.getJerseyNumber());
        player.setRole(request.getRole());
        player.setTotalMatches(request.getTotalMatches());
        player.setTeamName(request.getTeamName());
        player.setCountryStateName(request.getCountryStateName());
        player.setDescription(request.getDescription());

        return playerRepository.save(player);
    }

    @Override
    public void deletePlayer(Long id) {

        Player player = getPlayerById(id);

        playerRepository.delete(player);
    }
}