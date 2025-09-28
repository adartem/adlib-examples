import '@testing-library/jest-dom';

// 👉 Tu peux ajouter ici des mocks ou des helpers globaux si besoin
// Exemple : mock de console.error pour éviter le bruit pendant les tests
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
});
