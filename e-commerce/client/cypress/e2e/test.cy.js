// describe('Home Page Tests', () => {
//   beforeEach(() => {
//     cy.visit('https://main.danbnq0rl8ld5.amplifyapp.com/');
//   });

//   it('should load the page successfully', () => {
//     cy.contains('JDM, which stands for Japanese Domestic Market');
//     cy.get('img[name="slide"]').should('be.visible');
//     cy.get('video').should('be.visible');
//   });

//   it('should change images in the slider', () => {
//     const images = [
//       '/images/AAA.jpg',
//       '/images/BBB.jpg',
//       '/images/CCC.jpg'
//     ];

//     cy.get('img[name="slide"]').as('slide');

//     for (let i = 0; i < images.length; i++) {
//       cy.get('@slide').should('have.attr', 'src', images[i]);
//       cy.wait(3000); // Wait for the image to change (adjust the timing if needed)
//     }
//   });

//   it('should display the first paragraph', () => {
//     cy.contains('JDM cars are known for their exceptional reliability and durability.');
//   });

//   it('should display the second paragraph', () => {
//     cy.contains('The culture encompasses not only the cars themselves but also the vibrant community of enthusiasts, events, and gatherings.');
//   });

//   it('should have the "products" div', () => {
//     cy.get('.products').should('exist');
//   });
// });
