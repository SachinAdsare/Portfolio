// Hacker/Machine Sound Effects Generator
class HackerSoundSystem {
  constructor() {
    this.audioContext = null;
    this.masterGain = null;
    this.isEnabled = true;
    this.initialize();
  }

  initialize() {
    try {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      this.masterGain = this.audioContext.createGain();
      this.masterGain.gain.value = 0.2; // Master volume
      this.masterGain.connect(this.audioContext.destination);
    } catch (error) {
      console.warn("Web Audio API not supported", error);
    }
  }

  resume() {
    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
    return this.isEnabled;
  }

  setVolume(volume) {
    if (this.masterGain) {
      this.masterGain.gain.value = Math.max(0, Math.min(1, volume));
    }
  }

  // Keyboard typing sound - mechanical
  playKeyPress() {
    if (!this.isEnabled || !this.audioContext) return;

    this.resume();
    const noiseBuffer = this.audioContext.createBuffer(
      1,
      4096,
      this.audioContext.sampleRate
    );
    const noiseData = noiseBuffer.getChannelData(0);

    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioContext.createBufferSource();
    noise.buffer = noiseBuffer;

    const filter = this.audioContext.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2000 + Math.random() * 1000;
    filter.Q.value = 5;

    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.05
    );

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    noise.start(this.audioContext.currentTime);
    noise.stop(this.audioContext.currentTime + 0.05);
  }

  // Click sound - digital beep
  playClick() {
    if (!this.isEnabled || !this.audioContext) return;

    this.resume();
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.masterGain);

    oscillator.frequency.value = 800;
    oscillator.type = "square";

    gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.03
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.03);
  }

  // Data processing sound
  playDataProcess() {
    if (!this.isEnabled || !this.audioContext) return;

    this.resume();
    const oscillator1 = this.audioContext.createOscillator();
    const oscillator2 = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(this.masterGain);

    oscillator1.frequency.setValueAtTime(300, this.audioContext.currentTime);
    oscillator1.frequency.linearRampToValueAtTime(
      600,
      this.audioContext.currentTime + 0.1
    );
    oscillator2.frequency.setValueAtTime(450, this.audioContext.currentTime);
    oscillator2.frequency.linearRampToValueAtTime(
      900,
      this.audioContext.currentTime + 0.1
    );

    oscillator1.type = "sawtooth";
    oscillator2.type = "sawtooth";

    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.1
    );

    oscillator1.start(this.audioContext.currentTime);
    oscillator2.start(this.audioContext.currentTime);
    oscillator1.stop(this.audioContext.currentTime + 0.1);
    oscillator2.stop(this.audioContext.currentTime + 0.1);
  }

  // Scanner/scroll sound
  playScanner() {
    if (!this.isEnabled || !this.audioContext) return;

    this.resume();
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      100,
      this.audioContext.currentTime + 0.15
    );
    oscillator.type = "sawtooth";

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(2000, this.audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(
      400,
      this.audioContext.currentTime + 0.15
    );

    gainNode.gain.setValueAtTime(0.12, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.15
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.15);
  }

  // Hover/scan sound - subtle
  playHover() {
    if (!this.isEnabled || !this.audioContext) return;

    this.resume();
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.masterGain);

    oscillator.frequency.value = 1200;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.08, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.04
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.04);
  }

  // Matrix-style digital rain sound
  playMatrixRain() {
    if (!this.isEnabled || !this.audioContext) return;

    this.resume();
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    const freq = 400 + Math.random() * 800;
    oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      freq * 0.5,
      this.audioContext.currentTime + 0.3
    );
    oscillator.type = "square";

    filter.type = "lowpass";
    filter.frequency.value = 1500;
    filter.Q.value = 1;

    gainNode.gain.setValueAtTime(0.06, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.3
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }

  // System boot/power up sound
  playSystemBoot() {
    if (!this.isEnabled || !this.audioContext) return;

    this.resume();
    const oscillator1 = this.audioContext.createOscillator();
    const oscillator2 = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    oscillator1.connect(filter);
    oscillator2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    oscillator1.frequency.setValueAtTime(100, this.audioContext.currentTime);
    oscillator1.frequency.exponentialRampToValueAtTime(
      400,
      this.audioContext.currentTime + 0.4
    );
    oscillator2.frequency.setValueAtTime(150, this.audioContext.currentTime);
    oscillator2.frequency.exponentialRampToValueAtTime(
      600,
      this.audioContext.currentTime + 0.4
    );

    oscillator1.type = "sawtooth";
    oscillator2.type = "triangle";

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(500, this.audioContext.currentTime);
    filter.frequency.linearRampToValueAtTime(
      2000,
      this.audioContext.currentTime + 0.4
    );

    gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.4
    );

    oscillator1.start(this.audioContext.currentTime);
    oscillator2.start(this.audioContext.currentTime);
    oscillator1.stop(this.audioContext.currentTime + 0.4);
    oscillator2.stop(this.audioContext.currentTime + 0.4);
  }

  // Access granted/button confirmation
  playAccessGranted() {
    if (!this.isEnabled || !this.audioContext) return;

    this.resume();
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.masterGain);

    oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
    oscillator.frequency.setValueAtTime(
      800,
      this.audioContext.currentTime + 0.05
    );
    oscillator.type = "square";

    gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.12
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.12);
  }

  // Glitch/error sound
  playGlitch() {
    if (!this.isEnabled || !this.audioContext) return;

    this.resume();
    const noiseBuffer = this.audioContext.createBuffer(
      1,
      2048,
      this.audioContext.sampleRate
    );
    const noiseData = noiseBuffer.getChannelData(0);

    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioContext.createBufferSource();
    noise.buffer = noiseBuffer;

    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.08
    );

    noise.connect(gainNode);
    gainNode.connect(this.masterGain);

    noise.start(this.audioContext.currentTime);
    noise.stop(this.audioContext.currentTime + 0.08);
  }
}

// Create singleton instance
const hackerSounds = new HackerSoundSystem();

export default hackerSounds;
