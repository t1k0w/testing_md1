import FormPage from '../support/pageObjects/FormPage';

describe('Form Submission Test', () => {
  before(() => {
    FormPage.navigate('https://demoqa.com/automation-practice-form');
  });

  it('fills and submits the form', () => {
    FormPage.fillFirstName('Test');
    FormPage.fillLastName('Testtest');
    FormPage.setEmail('test@gmail.com');
    FormPage.selectGender('1'); // Male
    FormPage.setMobileNumber('1234567890');
    FormPage.setDateOfBirth('28 Feb 1930');
    FormPage.selectHobby('3'); // Music
    FormPage.uploadPicture('cypress/support/files/img.jpg');
    FormPage.selectState('NCR');
    FormPage.selectCity('Delhi');
  });
});
