import {render, screen } from '@testing-library/react';
import Footer from '../Components/Footer/Footer';

describe("Test <Footer /> component", () =>{
    test('renders Footer component' , () => {
        render (<Footer />);
    })
    
    test('should renders 2 anchor tags' , () => {
        render (<Footer />);
        const Links = screen.getAllByRole('link');
        expect(Links.length).toBe(2);
    })
    
    test('should have URL about.html' , () => {
        render (<Footer />);
        const aboutLink = screen.getByRole('link' , { name: 'About Us'});
        expect(aboutLink).toHaveAttribute('href','aboutus.html');
        
    })
    
    test('should have URL Contact.html' , () => {
        render (<Footer />);
        const aboutLink = screen.getByRole('link' , { name: 'Contact Us'});
        expect(aboutLink).toHaveAttribute('href','contact.html');
        
    })
    
    test('should have classname' , () => {
        render (<Footer />);
        const footer = screen.getByRole('contentinfo');
        expect(footer).toHaveClass('footerWrapper');
        
    })
})
