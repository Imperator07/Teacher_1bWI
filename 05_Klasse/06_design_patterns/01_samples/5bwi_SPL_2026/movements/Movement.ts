export interface Movement {
  update(deltaTime: number): void;
  getPosition(): { x: number; y: number };
}
