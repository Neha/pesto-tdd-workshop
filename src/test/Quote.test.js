import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Quote from '../Components/Quote/Quote';
import server from '../Mocks/browser';

beforeAll(() => server.listen());
afterAll(() => server.close());

test("should render Quote component", () => {
    render(<Quote />);
})

test("should have h3 tag", () => {
    render(<Quote />);
    const headingTag = screen.getByRole('heading',{ level: 3});
    expect(headingTag).toBeInTheDocument();
})

test("should have h1 tag", () => {
    render(<Quote />);
    const headingTag = screen.getByRole('heading', { level : 1});
    expect(headingTag).toBeInTheDocument();
})

test("should have content", async () => {
    render(<Quote />);
    const quoteText = await screen.findByText('This is lovely day');
    expect(quoteText).toBeInTheDocument();
})

// test("should update content on click", async () => {
//     render(<Quote />);
//     const btn = screen.getByRole('button');
//     btn.click();
//     const quoteText = await screen.findByText('updated quote');
//     expect(quoteText).toBeInTheDocument();
// })


// Example of using spy for the mocking function and API request
describe.skip("test with fetch mock", function(){
function CreateFetchMock(data){
    return function fetchStub() {
        return new Promise((resolve) => {
          resolve({
            json: function json(){
                return Promise.resolve({
                    ...data,
                  })
            }
          })
        })
      }
}

const mockdata= {
    "content" : "Here is a quote",
    "author" : "John"
}
    let spy = null;

    beforeEach(function(){
       spy =  jest.spyOn(global, "fetch").mockImplementation(CreateFetchMock(mockdata))
    })
    afterEach(function(){
        spy.mockRestore();
    })

    test("should update quote on refresh", async () => {
        render(<Quote />);
        const btn = screen.getByRole('button');
        await act(() => { 
            btn.click()
        })
        expect(spy).toBeCalledTimes(2);
        let heading = null;
        await waitFor(async ()=>{ heading = await screen.findByRole("heading",{level : 1}); })
        expect( heading.textContent ).toBe(mockdata.content);
    
       spy.mockRestore();
    })
})



