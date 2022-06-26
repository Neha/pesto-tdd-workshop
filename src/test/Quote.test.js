import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Quote from '../Components/Quote/Quote';

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

describe("test with fetch mock", function(){
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
        await act(()=>{ // any function which is changing state in react on user interaction
            btn.click()
        })

        // not everything can't be spy local storage , session storage
        expect(spy).toBeCalledTimes(2);
        let heading = null;
        await waitFor(async ()=>{ heading = await screen.findByRole("heading",{level : 1}); })
        expect( heading.textContent ).toBe(mockdata.content);
    
        spy.mockRestore();
    })
})



