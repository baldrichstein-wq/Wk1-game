export class SoundEngine {
    constructor() {
        this.ctx = null;
        this.artilleryInterval = null;
        this.enabled = false;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
                this.enabled = true;
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playTypewriterTick() {
        if (!this.enabled || !this.ctx) return;
        
        // Generate a very short burst of noise for a mechanical "tick"
        const bufferSize = this.ctx.sampleRate * 0.05; // 50ms buffer
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const noiseSource = this.ctx.createBufferSource();
        noiseSource.buffer = buffer;

        // Bandpass filter to make it sound clacky
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 4000;
        filter.Q.value = 1;

        // Envelope
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);
        
        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        
        noiseSource.start();
    }

    playArtillery() {
        if (!this.enabled || !this.ctx) return;

        // Generate 3 seconds of noise
        const duration = 3;
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            // slightly brown noise
            let white = Math.random() * 2 - 1;
            data[i] = (data[i - 1] || 0) + (0.02 * white);
            data[i] /= 1.02; // normalize
        }
        
        const noiseSource = this.ctx.createBufferSource();
        noiseSource.buffer = buffer;

        // Lowpass filter for distant rumble
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 100 + Math.random() * 100; // 100-200Hz
        
        // Envelope for explosion: quick attack, long decay
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(Math.random() * 0.4 + 0.3, this.ctx.currentTime + 0.1); // Volume varies
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        
        noiseSource.start();
    }

    startArtilleryBackground() {
        if (this.artilleryInterval) return;
        this.init(); // Ensure context is running

        const scheduleNext = () => {
            // Play sound
            this.playArtillery();
            // Schedule next explosion between 8 and 25 seconds
            const nextTime = 8000 + Math.random() * 17000;
            this.artilleryInterval = setTimeout(scheduleNext, nextTime);
        };
        
        // Start first one after a short delay
        this.artilleryInterval = setTimeout(scheduleNext, 5000);
    }
}
