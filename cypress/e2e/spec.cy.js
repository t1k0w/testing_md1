import SelectablePage from '../pageObjects/SelectablePage';

describe('Selectable item tests', () => {
  before(() => {
    SelectablePage.visit();
  });

  it('should highlight correct items and not highlight others', () => {
    SelectablePage.clickTab('Grid');
    SelectablePage.clickItems(['Two', 'Four', 'Six', 'Eight']);
    SelectablePage.validateHighlighted(['Two', 'Four', 'Six', 'Eight']);
    SelectablePage.validateNotHighlighted(['One', 'Three', 'Five', 'Seven', 'Nine']);
  });
});