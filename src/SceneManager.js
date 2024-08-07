export class SceneManager {
  constructor(app) {
    this.app = app;
    this.currentScene = null;
  }

  loadScene(scene) {
    if (this.currentScene) {
      this.unloadScene();
    }
    this.currentScene = scene;
    this.app.stage.addChild(this.currentScene);
  }

  unloadScene() {
    if (this.currentScene) {
      this.app.stage.removeChild(this.currentScene);
      this.currenScene.destroy({
        children: true,
        texture: true,
        BaseTexture: true,
      });
      this.currentScene = null;
    }
  }

  switchScene(scene) {
    this.unloadScene();
    this.loadScene(scene);
  }
}
