export default class InfoCardView {
  createContainer() {
    const container = document.createElement("div");
    container.classList.add("infoCard");
    return container;
  }

  createInfoContainer() {
    const container = document.createElement("div");
    container.classList.add("infoCard-info");
    return container;
  }

  createTitleContainer() {
    this.titleContainer = document.createElement("div");
    this.titleContainer.classList.add("infoCard-title");
    return this.titleContainer;
  }

  createDataContainer() {
    this.dataContainer = document.createElement("div");
    this.dataContainer.classList.add("infoCard-data");
    return this.dataContainer;
  }

  createUnitContainer() {
    this.unitContainer = document.createElement("div");
    this.unitContainer.classList.add("infoCard-unit");
    return this.unitContainer;
  }

  build() {
    const container = this.createContainer();
    const infoContainer = this.createInfoContainer();
    infoContainer.append(
      this.createDataContainer(),
      this.createUnitContainer(),
    );
    container.append(this.createTitleContainer(), infoContainer);

    return container;
  }

  setTitle(title) {
    this.titleContainer.innerText = title;
  }

  setData(data) {
    this.dataContainer.innerText = data;
  }

  setUnit(unit) {
    this.unitContainer.innerText = unit;
  }

  update(title, data, unit) {
    this.setTitle(title);
    this.setData(data);
    this.setUnit(unit);
  }
}
