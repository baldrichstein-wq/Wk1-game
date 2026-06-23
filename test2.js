import { CLASSES, Player } from './player.js';
import { GameEngine } from './gameEngine.js';
import { STORY } from './story.js';

class DummyUI {
    logSystem(text) { console.log('logSystem:', text); }
    logText(text, cls) { console.log('logText:', text); }
    enableInput() {}
    disableInput() {}
    updateStats() {}
}

const ui = new DummyUI();
const engine = new GameEngine(ui);
const players = [new Player(1, "Test", "infantry")];
engine.setPlayers(players);
console.log("Starting scenario...");
engine.startScenario(STORY.de_west_recruitment);
console.log("Scenario started successfully.");
