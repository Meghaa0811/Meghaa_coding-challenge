package com.cricket.cricket_management_system.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;
import com.cricket.cricket_management_system.enums.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlayerRequest {

    @NotBlank(message = "Player name is required")
    private String playerName;

    @NotNull(message = "Jersey number is required")
    @Min(value = 1, message = "Jersey number must be greater than 0")
    @Max(value = 999, message = "Jersey number cannot exceed 999")
    private Integer jerseyNumber;

    @NotNull(message = "Role is required")
    private Role role;
   

    @NotNull(message = "Total matches is required")
    @Min(value = 0, message = "Matches cannot be negative")
    private Integer totalMatches;

    @NotBlank(message = "Team name is required")
    private String teamName;

    @NotBlank(message = "Country/State name is required")
    private String countryStateName;

    @Size(max = 500, message = "Description cannot exceed 500 characters")
    private String description;
}