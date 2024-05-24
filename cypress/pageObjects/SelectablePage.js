class SelectablePage {
  constructor() {
    this.url = 'https://demoqa.com/selectable';
    this.gridTab = '#demo-tab-grid';
    this.items = '#gridContainer .list-group-item';
  }

  visit() {
    cy.visit(this.url);
  }

  clickTab(tabName) {
    cy.contains('a', tabName).click();
  }

  clickItems(itemNames) {
    itemNames.forEach(name => {
      cy.contains(this.items, name).click();
    });
  }

  validateHighlighted(itemNames) {
    itemNames.forEach(name => {
      cy.contains(this.items, name).should('have.class', 'active');
    });
  }

  validateNotHighlighted(itemNames) {
    itemNames.forEach(name => {
      cy.contains(this.items, name).should('not.have.class', 'active');
    });
  }
}

export default new SelectablePage();