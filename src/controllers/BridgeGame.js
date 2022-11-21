/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  /**
   * 사용자가 게임을 시작할 때 사용하는 메서드
   */
  start() {
    this.#view.printStart();
    this.#requestBridgeSize();
  }

  #requestBridgeSize() {
    this.#view.readBridgeSize(this.#handleInputBridgeSize.bind(this));
  }

  #handleInputBridgeSize(size) {
    try {
      const bridgeSize = Number(size);
      this.#model.setBridge(bridgeSize);
    } catch (error) {
      this.#view.print(`\n${error.message}\n`);
      this.#requestBridgeSize();
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  /**
   * 사용자가 게임을 종료할 때 사용하는 메서드
   */
  quit() {}
}

module.exports = BridgeGame;
