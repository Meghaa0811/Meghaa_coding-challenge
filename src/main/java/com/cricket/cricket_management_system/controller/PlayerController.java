package com.cricket.cricket_management_system.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.cricket.cricket_management_system.dto.PlayerRequest;
import com.cricket.cricket_management_system.entity.Player;
import com.cricket.cricket_management_system.service.PlayerService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/players")
@RequiredArgsConstructor
@Validated
public class PlayerController {

    private final PlayerService playerService;

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public Player getPlayerById(
            @PathVariable Long id) {

        return playerService.getPlayerById(id);
    }

    @PostMapping
    public ResponseEntity<Player> createPlayer(
            @Valid @RequestBody PlayerRequest request) {

        Player player =
                playerService.createPlayer(request);

        return new ResponseEntity<>(
                player,
                HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(
            @PathVariable Long id,
            @Valid @RequestBody PlayerRequest request) {

        return playerService.updatePlayer(
                id,
                request);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePlayer(
            @PathVariable Long id) {

        playerService.deletePlayer(id);

        return ResponseEntity.ok(
                "Player deleted successfully");
    }
}
