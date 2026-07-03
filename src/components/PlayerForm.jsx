import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    addPlayer,
    updatePlayer,
    getPlayerById
} from "../services/playerService";

function PlayerForm({ isEdit = false })  {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const { playerId } = useParams();
    

    const [player, setPlayer] = useState({
        playerId: "",
        playerName: "",
        jerseyNumber: "",
        role: "",
        totalMatches: "",
        teamName: "",
        countryStateName: "",
        description: ""
    });

    const loadPlayer = async () => {

    try {
        console.log("URL Param playerId =", playerId);

const response = await getPlayerById(playerId);

console.log(response.data);

        

        setPlayer(response.data);

    } catch (error) {

        console.error(error);
        alert("Unable to load player details.");

    }

};

useEffect(() => {

    if (isEdit) {
        loadPlayer();
    }

}, [isEdit, playerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setPlayer({
    ...player,
    [name]: value
});

setErrors({
    ...errors,
    [name]: ""
});
    };

    const validateForm = () => {

    let newErrors = {};

    if (!player.playerId) {
        newErrors.playerId = "Player ID is required";
    }

    if (!player.playerName.trim()) {
    newErrors.playerName = "Player Name is required";
}
else if (!/^[A-Za-z ]+$/.test(player.playerName)) {
    newErrors.playerName = "Only alphabets are allowed";
}
else if (player.playerName.length < 3) {
    newErrors.playerName = "Minimum 3 characters required";
}

    if (!player.jerseyNumber) {
        newErrors.jerseyNumber = "Jersey Number is required";
    } else if (player.jerseyNumber < 1 || player.jerseyNumber > 999) {
        newErrors.jerseyNumber = "Jersey Number must be between 1 and 999";
    }

    if (!player.role) {
        newErrors.role = "Please select a role";
    }

    if (!player.totalMatches) {
    newErrors.totalMatches = "Total Matches is required";
}
else if (player.totalMatches < 0) {
    newErrors.totalMatches = "Total Matches cannot be negative";
}
    if (!player.teamName.trim()) {
        newErrors.teamName = "Team Name is required";
    }

    if (!player.countryStateName.trim()) {
        newErrors.countryStateName = "Country / State is required";
    }

    if (player.description.length > 250) {
        newErrors.description = "Description cannot exceed 250 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};

    const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    try {

    if (isEdit) {

        await updatePlayer(playerId, player);

        alert("Player Updated Successfully!");

    }
    else {

        await addPlayer(player);

        alert("Player Added Successfully!");

    }

    navigate("/");

}
catch (error) {

    console.error(error);

    alert("Unable to save player.");

}

};
    const handleReset = () => {

    setPlayer({
        playerId: "",
        playerName: "",
        jerseyNumber: "",
        role: "",
        totalMatches: "",
        teamName: "",
        countryStateName: "",
        description: ""
    });

    setErrors({});

};

    return (

        <div className="card shadow">

            <div className="card-header bg-success text-white">
                <h3>{isEdit ? "Edit Player" : "Add Player"}</h3>
            </div>

            <div className="card-body">

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Player ID</label>

                            <input
                                type="number"
                                className="form-control"
                                name="playerId"
                                placeholder="Enter Player ID"
                                value={player.playerId}
                                onChange={handleChange}
                                
                            />
                            {errors.playerId && (
    <small className="text-danger">
        {errors.playerId}
    </small>
)}
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Player Name</label>

                            <input
                                type="text"
                                className="form-control"
                                name="playerName"
                                placeholder="Enter Player Name"
                                value={player.playerName}
                                onChange={handleChange}
                                
                            />
                            {errors.playerName && (
    <small className="text-danger">
        {errors.playerName}
    </small>
)}
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Jersey Number</label>

                            <input
                                type="number"
                                className="form-control"
                                name="jerseyNumber"
                                placeholder="Enter Jersey Number"
                                value={player.jerseyNumber}
                                onChange={handleChange}
                                
                            />
                            {errors.jerseyNumber && (
    <small className="text-danger">
        {errors.jerseyNumber}
    </small>
)}
                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">Role</label>

                            <select
                                className="form-select"
                                name="role"
                                value={player.role}
                                onChange={handleChange}
                                
                            >

                                <option value="">Select Role</option>
<option value="BATSMAN">Batsman</option>
<option value="BOWLER">Bowler</option>
<option value="KEEPER">Keeper</option>
<option value="ALL_ROUNDER">All Rounder</option>

                            </select>
                            {errors.role && (
    <small className="text-danger">
        {errors.role}
    </small>
)}

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">Total Matches</label>

                            <input
                                type="number"
                                className="form-control"
                                name="totalMatches"
                                placeholder="Enter Total Matches"
                                value={player.totalMatches}
                                onChange={handleChange}
                                
                            />
                            {errors.totalMatches && (
    <small className="text-danger">
        {errors.totalMatches}
    </small>
)}

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">Team Name</label>

                            <input
                                type="text"
                                className="form-control"
                                name="teamName"
                                placeholder="Enter Team Name"
                                value={player.teamName}
                                onChange={handleChange}
                                
                            />
                            {errors.teamName && (
    <small className="text-danger">
        {errors.teamName}
    </small>
)}

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">Country / State</label>

                            <input
                                type="text"
                                className="form-control"
                                name="countryStateName"
                                placeholder="Enter Country / State"
                                value={player.countryStateName}
                                onChange={handleChange}
                                
                            />
                            {errors.countryStateName && (
    <small className="text-danger">
        {errors.countryStateName}
    </small>
)}

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">Description</label>

                            <textarea
                                className="form-control"
                                rows="3"
                                name="description"
                                placeholder="Enter Description"
                                value={player.description}
                                onChange={handleChange}
                            ></textarea>
                            {errors.description && (
    <small className="text-danger">
        {errors.description}
    </small>
)}

                        </div>

                    </div>

                    <div className="text-center">

                        <button
                            type="submit"
                            className="btn btn-success me-3"
                        >
                            {isEdit ? "Update" : "Save"}
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleReset}
                        >
                            Reset
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
}

export default PlayerForm;