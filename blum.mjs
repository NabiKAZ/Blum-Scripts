/**
 * Automatic bot script for Bloom telegram game.
 * Programmer: @NabiKAZ (https://twitter.com/NabiKAZ)
 * Channel: https://t.me/BotSorati
 * Game link: https://t.me/BlumCryptoBot/app?startapp=ref_qFCbXAVHQj
 * Manual: https://github.com/NabiKAZ/Blum-Scripts
**/

// Importing the Blum main class
import { Blum } from './blum_worker.mjs';

// Defining the token for authentication
const token = 'ey..........'; // Token of game in header
const delay = 30; // Delay between game start and claim in seconds
const points = '50'; // Points of each game

// Fetching the game play API
const resPlay = await fetch("https://game-domain.blum.codes/api/v2/game/play", {
    headers: {
        accept: "application/json",
        authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: null,
}).then(response => response.json());

// Logging the result of the start game
console.log('Play result:', resPlay);

// Getting the game ID from the result
const gameId = resPlay.gameId;
console.log('Game ID:', gameId);

// Simulating a game delay
console.log('Waiting for', delay, 'sec...');
await new Promise(r => setTimeout(r, delay * 1000));

// Getting the challenge from the Blum class
const challenge = Blum.getChallenge(gameId);
console.log('Challenge:', challenge);

// Generating a UUID challenge
const uuidChallenge = Blum.getUUID();
console.log('UUID Challenge:', uuidChallenge);

// Generating the payload for the game claim
const payload = Blum.getPayload(
    gameId,
    {
        id: uuidChallenge,
        nonce: challenge.nonce,
        hash: challenge.hash,
    },
    {
        CLOVER: {
            amount: points.toString(),
        }
    }
);
console.log('Payload:', payload);

// Fetching the game claim API
const resClaim = await fetch("https://game-domain.blum.codes/api/v2/game/claim", {
    headers: {
        accept: "application/json",
        authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ payload: payload }),
}).then(response => response.json());

// Logging the result of the game claim
console.log('Claim result:', resClaim);
